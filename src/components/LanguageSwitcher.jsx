import { useLanguage } from '../LanguageContext';

export default function LanguageSwitcher() {
  const { lang, toggleLang } = useLanguage();

  return (
    <button
      id="language-switcher"
      onClick={toggleLang}
      className="relative flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cream-dark/60 hover:bg-cream-dark transition-colors duration-300 text-sm font-medium text-brown-muted hover:text-brown cursor-pointer select-none"
      aria-label="Switch language"
    >
      <span className={`transition-opacity duration-200 ${lang === 'ru' ? 'opacity-100 text-brown font-semibold' : 'opacity-50'}`}>
        RU
      </span>
      <span className="text-brown-muted/40">|</span>
      <span className={`transition-opacity duration-200 ${lang === 'en' ? 'opacity-100 text-brown font-semibold' : 'opacity-50'}`}>
        EN
      </span>
    </button>
  );
}
