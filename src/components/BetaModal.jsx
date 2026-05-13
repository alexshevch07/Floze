import { useState, useEffect } from 'react';
import { useLanguage } from '../LanguageContext';

export default function BetaModal({ isOpen, onClose }) {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      const timeout = setTimeout(() => {
        setEmail('');
        setSubmitted(false);
        setSending(false);
        setError('');
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    const trimmed = email.trim();
    if (!trimmed) return;

    setSending(true);
    try {
      const res = await fetch('/api/beta-signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: trimmed }),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data.ok) {
        if (data.error === 'invalid_email') {
          setError(t.modal.errorInvalid);
        } else {
          setError(t.modal.errorGeneric);
        }
        return;
      }
      setSubmitted(true);
    } catch {
      setError(t.modal.errorGeneric);
    } finally {
      setSending(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 modal-backdrop bg-brown/30" onClick={onClose}>
      <div className="relative w-full max-w-md bg-cream rounded-3xl shadow-[0_16px_80px_rgba(61,43,31,0.15)] p-8 sm:p-10 animate-fade-in-up" onClick={(e) => e.stopPropagation()}>
        <button id="modal-close" onClick={onClose} className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-cream-dark/50 hover:bg-cream-dark transition-colors duration-200 text-brown-muted hover:text-brown cursor-pointer" aria-label="Close">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
        </button>
        {!submitted ? (
          <div>
            <h3 className="font-heading text-2xl text-brown mb-3">{t.modal.title}</h3>
            <p className="text-sm text-brown-muted mb-8 leading-relaxed">{t.modal.description}</p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                id="beta-email-input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.modal.emailPlaceholder}
                required
                disabled={sending}
                className="w-full px-5 py-3.5 rounded-2xl bg-white border border-cream-dark/40 text-brown placeholder:text-brown-muted/40 focus:outline-none focus:border-orange/50 focus:shadow-[0_0_0_3px_rgba(255,153,89,0.1)] transition-all duration-300 text-base disabled:opacity-60"
              />
              {error ? <p className="text-sm text-orange-hover">{error}</p> : null}
              <button
                id="beta-submit"
                type="submit"
                disabled={sending}
                className="w-full px-5 py-3.5 rounded-2xl bg-orange text-white font-bold text-base hover:bg-orange-hover transition-all duration-300 hover:shadow-[0_4px_20px_rgba(255,153,89,0.35)] cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {sending ? t.modal.sending : t.modal.submit}
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-orange/10 flex items-center justify-center animate-fade-in-up">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="18" stroke="#FF9959" strokeWidth="2.5" fill="none"/><path d="M12 20L18 26L28 14" stroke="#FF9959" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <h3 className="font-heading text-2xl text-brown mb-2 animate-fade-in-up animation-delay-100">{t.modal.successTitle}</h3>
            <p className="text-brown-muted animate-fade-in-up animation-delay-200">{t.modal.successText}</p>
          </div>
        )}
      </div>
    </div>
  );
}
