import { appendFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');
const logPath = path.join(rootDir, 'beta-signups.log');

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function isValidEmail(email) {
  const t = String(email).trim();
  return t.length > 3 && t.length < 320 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t);
}

/**
 * Saves every signup to beta-signups.log. If RESEND_API_KEY is set, also emails BETA_NOTIFY_EMAIL.
 * Env: RESEND_API_KEY, BETA_NOTIFY_EMAIL (default hello@floze.ag), RESEND_FROM_EMAIL (verified sender in Resend).
 */
export async function recordBetaSignup(email) {
  const trimmed = String(email).trim().toLowerCase();
  if (!isValidEmail(trimmed)) {
    return { ok: false, error: 'invalid_email' };
  }

  const line = `${new Date().toISOString()}\t${trimmed}\n`;
  await appendFile(logPath, line, { flag: 'a' });

  const apiKey = process.env.RESEND_API_KEY;
  const notifyTo = process.env.BETA_NOTIFY_EMAIL || 'hello@floze.ag';
  const from = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';

  if (!apiKey) {
    console.warn(
      '[beta-signup] Письма на почту не отправляются: задайте RESEND_API_KEY в окружении сервера. Заявки пишутся в beta-signups.log рядом с проектом.'
    );
    return { ok: true, sent: false };
  }

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [notifyTo],
        subject: 'Floze: новая заявка на бета-тест',
        html: `<p>Новый адрес: <strong>${escapeHtml(trimmed)}</strong></p><p>Время: ${escapeHtml(new Date().toISOString())}</p>`,
        text: `Новый адрес: ${trimmed}\nВремя: ${new Date().toISOString()}`,
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error('[beta-signup] Resend HTTP', res.status, errText);
      return { ok: true, sent: false, warn: 'logged_only' };
    }

    return { ok: true, sent: true };
  } catch (e) {
    console.error('[beta-signup]', e);
    return { ok: true, sent: false, warn: 'logged_only' };
  }
}
