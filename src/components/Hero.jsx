import { useLanguage } from '../LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  const handleTryClick = (e) => {
    e.preventDefault();
    const el = document.querySelector('#beta');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="flex items-start pt-32 pb-16 overflow-hidden" style={{ minHeight: '100vh' }}>
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="flex flex-col lg:flex-row gap-8" style={{ alignItems: 'flex-start' }}>

          {/* Left — text */}
          <div style={{ flex: '0 0 50%', maxWidth: '50%' }}>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] text-brown animate-fade-in-up whitespace-pre-line"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 900, letterSpacing: '-0.02em' }}
            >
              {t.hero.heading}
            </h1>
            <p className="mt-6 text-lg text-brown-muted leading-relaxed animate-fade-in-up animation-delay-200" style={{ maxWidth: '400px' }}>
              {t.hero.description}
            </p>
            <button
              id="hero-cta"
              onClick={handleTryClick}
              className="mt-8 px-10 py-4 rounded-full bg-orange text-white text-lg font-bold hover:bg-orange-hover transition-all duration-300 hover:shadow-[0_6px_30px_rgba(255,153,89,0.4)] hover:-translate-y-0.5 animate-fade-in-up animation-delay-300 cursor-pointer"
            >
              {t.hero.cta}
            </button>
            <p className="mt-4 text-sm text-brown-muted/70 animate-fade-in-up animation-delay-400">
              {t.hero.subtext}
            </p>
          </div>

          {/* Right — монитор, прибит к верху */}
          <div
            className="animate-fade-in-up animation-delay-300"
            style={{ flex: '0 0 50%', maxWidth: '50%' }}
          >
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
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-orange/5 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-8 w-32 h-32 bg-orange/5 rounded-full blur-3xl" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}