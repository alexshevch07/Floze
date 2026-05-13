import { useLanguage } from '../LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  const handleNav = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const contactClass =
    'flex min-h-[3.25rem] flex-1 items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-footer-text/90 transition-colors duration-200 hover:border-white/25 hover:bg-white/10 hover:text-white sm:flex-1 sm:basis-0';

  return (
    <footer id="footer" className="bg-footer-bg text-footer-text pt-16 pb-8">
      <div className="site-container">
        <div className="mb-14 flex w-full flex-col gap-10 sm:grid sm:grid-cols-2 sm:gap-x-10 sm:gap-y-10 lg:flex lg:flex-row lg:items-start lg:justify-between lg:gap-x-0 lg:gap-y-0">
          <div className="min-w-0">
            <div className="flex items-center gap-2 mb-4">
              <img src="/floze-logo.png" alt="Floze logo" className="h-9 w-auto object-contain" />
              <span className="font-heading text-lg text-white">Floze</span>
            </div>
            <p className="text-sm text-footer-text/70 leading-relaxed">AI productivity assistant for Windows desktop.</p>
          </div>

          <div className="min-w-0">
            <h4 className="font-heading text-sm text-white mb-4 uppercase tracking-wider">Navigation</h4>
            <ul className="flex flex-col gap-2.5">
              <li><a href="#product" onClick={(e) => handleNav(e, '#product')} className="text-sm text-footer-text/70 hover:text-white transition-colors duration-200">{t.footer.product}</a></li>
              <li><a href="#mission" onClick={(e) => handleNav(e, '#mission')} className="text-sm text-footer-text/70 hover:text-white transition-colors duration-200">{t.footer.mission}</a></li>
              <li><a href="#how-it-works" onClick={(e) => handleNav(e, '#how-it-works')} className="text-sm text-footer-text/70 hover:text-white transition-colors duration-200">{t.footer.howItWorks}</a></li>
            </ul>
          </div>

          <div className="min-w-0">
            <h4 className="font-heading text-sm text-white mb-4 uppercase tracking-wider">Legal</h4>
            <ul className="flex flex-col gap-2.5">
              <li><a href="#" className="text-sm text-footer-text/70 hover:text-white transition-colors duration-200">{t.footer.privacy}</a></li>
              <li><a href="#" className="text-sm text-footer-text/70 hover:text-white transition-colors duration-200">{t.footer.faq}</a></li>
            </ul>
          </div>

          <div className="min-w-0 lg:max-w-xs lg:justify-self-end">
            <h4 className="font-heading text-sm text-white mb-4 uppercase tracking-wider text-center sm:text-left lg:text-right">Contacts</h4>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch">
              <a href="#" className={`${contactClass} lg:w-full`}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="shrink-0" aria-hidden>
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.54 3.66-.52.36-1 .53-1.42.52-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.24.37-.49 1.02-.75 3.98-1.73 6.64-2.87 7.97-3.44 3.8-1.58 4.59-1.86 5.1-1.87.11 0 .37.03.54.17.14.12.18.28.2.45-.01.06.01.24 0 .37z"/>
                </svg>
                Telegram
              </a>
              <a href="mailto:hello@floze.ag" className={`${contactClass} lg:w-full`}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="shrink-0" aria-hidden>
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                Email
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-xs text-footer-text/50">{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
