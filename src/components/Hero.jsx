import { useLanguage } from '../LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  const handleTryClick = (e) => {
    e.preventDefault();
    const el = document.querySelector('#beta');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="overflow-x-clip pt-28 pb-12 sm:pb-16 sm:pt-32 lg:pb-24">
      <div className="site-container">
        <div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-start">

          {/* Left — text */}
          <div className="min-w-0 flex flex-col">
            <h1 className="font-heading text-[clamp(1.75rem,5.2vw+0.85rem,3.75rem)] sm:text-5xl lg:text-[3.25rem] xl:text-6xl leading-[1.08] tracking-[-0.02em] text-brown animate-fade-in-up whitespace-normal sm:whitespace-pre-line [text-wrap:balance]">
              {t.hero.heading}
            </h1>
            <p className="mt-5 sm:mt-6 max-w-xl text-[0.9375rem] sm:text-lg text-brown-muted leading-relaxed animate-fade-in-up animation-delay-200">
              {t.hero.description}
            </p>
            <button
              id="hero-cta"
              onClick={handleTryClick}
              className="mt-7 sm:mt-8 w-full sm:w-auto self-stretch sm:self-start px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-orange text-white text-base sm:text-lg font-bold hover:bg-orange-hover transition-all duration-300 hover:shadow-[0_6px_30px_rgba(255,153,89,0.4)] hover:-translate-y-0.5 animate-fade-in-up animation-delay-300 cursor-pointer text-center"
            >
              {t.hero.cta}
            </button>
            <p className="mt-4 max-w-xl text-sm text-brown-muted/70 animate-fade-in-up animation-delay-400">
              {t.hero.subtext}
            </p>
          </div>

          {/* Right — монитор */}
          <div className="min-w-0 w-full max-w-[min(100%,28rem)] mx-auto lg:mx-0 lg:max-w-none animate-fade-in-up animation-delay-300">
            <div className="relative w-full">
              <div className="relative bg-white rounded-2xl shadow-[0_8px_60px_rgba(61,43,31,0.12)] border border-cream-dark overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 bg-cream-mid border-b border-cream-dark/50">
                  <div className="w-3 h-3 rounded-full bg-orange/50" />
                  <div className="w-3 h-3 rounded-full bg-cream-dark" />
                  <div className="w-3 h-3 rounded-full bg-cream-dark" />
                  <div className="flex-1 mx-3 h-5 bg-cream-dark/60 rounded-full" />
                </div>
                <div className="aspect-[16/10] bg-gradient-to-br from-cream to-cream-mid flex items-center justify-center p-8">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-orange/10 flex items-center justify-center">
                      <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
                        <path d="M18 2C18 2 22 10 26 14C30 18 34 18 34 18C34 18 30 18 26 22C22 26 18 34 18 34C18 34 14 26 10 22C6 18 2 18 2 18C2 18 6 18 10 14C14 10 18 2 18 2Z" fill="#FF9959" opacity="0.6" />
                      </svg>
                    </div>
                    <p className="text-sm text-brown-muted/50 font-medium">Floze Desktop App</p>
                  </div>
                </div>
              </div>
              <div className="mx-auto mt-0 w-20 h-6 bg-gradient-to-b from-cream-dark to-cream-dark/60 rounded-b-lg" />
              <div className="mx-auto w-32 h-2 bg-cream-dark/50 rounded-full" />
              <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-20 h-20 sm:w-24 sm:h-24 bg-orange/5 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -bottom-3 -left-4 sm:-bottom-4 sm:-left-8 w-24 h-24 sm:w-32 sm:h-32 bg-orange/5 rounded-full blur-3xl pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}