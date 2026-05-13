import { useState, useEffect } from 'react';
import { useLanguage } from '../LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: t.nav.product, href: '#product' },
    { label: t.nav.mission, href: '#mission' },
    { label: t.nav.howItWorks, href: '#how-it-works' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleBetaClick = (e) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector('#beta');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      id="header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream/90 backdrop-blur-md shadow-[0_1px_20px_rgba(61,43,31,0.06)]'
          : 'bg-transparent'
      }`}
    >
      <div className="site-container py-4 flex items-center justify-between md:grid md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] md:items-center md:gap-4">
        <a
          href="#"
          className="flex shrink-0 items-center group md:justify-self-start"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <img
            src="/floze-logo.png"
            alt="Floze"
            className="h-9 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </a>

        <nav className="hidden md:flex items-center justify-center gap-8 md:col-start-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-medium text-brown-muted hover:text-brown transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-orange after:rounded-full after:transition-all after:duration-300 hover:after:w-full whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center justify-end gap-4 md:col-start-3 md:justify-self-end">
          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher />
            <button
              id="header-beta-btn"
              onClick={handleBetaClick}
              className="px-5 py-2 rounded-full bg-orange text-white text-sm font-semibold hover:bg-orange-hover transition-all duration-300 hover:shadow-[0_4px_20px_rgba(255,153,89,0.35)] cursor-pointer whitespace-nowrap"
            >
              {t.nav.betaTest}
            </button>
          </div>

          <button
            className="md:hidden flex flex-col gap-1.5 cursor-pointer p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-brown rounded-full transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-6 h-0.5 bg-brown rounded-full transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-0.5 bg-brown rounded-full transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } bg-cream/95 backdrop-blur-md`}
      >
        <div className="site-container py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-base font-medium text-brown-muted hover:text-brown transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-4 pt-2">
            <LanguageSwitcher />
            <button
              onClick={handleBetaClick}
              className="px-5 py-2 rounded-full bg-orange text-white text-sm font-semibold hover:bg-orange-hover transition-all duration-300 cursor-pointer"
            >
              {t.nav.betaTest}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
