import { useLanguage } from '../LanguageContext';

function FeatureCard({ icon, title, text }) {
  return (
    <div className={`reveal group flex flex-col items-center text-center p-8 rounded-3xl bg-white/80 border border-cream-dark/30 shadow-[0_2px_20px_rgba(61,43,31,0.04)] hover:shadow-[0_8px_40px_rgba(255,153,89,0.1)] hover:-translate-y-1 transition-all duration-400`}>
      <div className="w-16 h-16 rounded-2xl bg-orange-light flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
        <span className="text-3xl">{icon}</span>
      </div>
      <h3 className="font-heading text-xl text-brown mb-3">{title}</h3>
      <p className="text-sm text-brown-muted leading-relaxed">{text}</p>
    </div>
  );
}

export default function HowItWorks() {
  const { t } = useLanguage();

  return (
    <section id="how-it-works" className="py-24 sm:py-32">
      <div className="site-container">
        <div className="text-center mb-16 reveal">
          <h2 className="font-heading text-3xl sm:text-4xl text-brown mb-4">
            {t.howItWorks.title}
          </h2>
          <p className="text-lg text-brown-muted">
            {t.howItWorks.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {t.howItWorks.cards.map((card, i) => (
            <FeatureCard
              key={i}
              icon={card.icon}
              title={card.title}
              text={card.text}
            />
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-20 sm:mt-24">
          <h3 className="font-heading text-2xl sm:text-3xl text-brown text-center mb-10 reveal">
            {t.video.title}
          </h3>
          <div className="reveal">
            <div className="relative aspect-video rounded-3xl overflow-hidden bg-gradient-to-br from-cream-dark to-cream shadow-[0_4px_40px_rgba(61,43,31,0.08)] border border-cream-dark/40 group cursor-pointer hover:shadow-[0_8px_50px_rgba(255,153,89,0.12)] transition-all duration-400">
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <div className="w-20 h-20 rounded-full bg-orange/90 flex items-center justify-center shadow-[0_4px_30px_rgba(255,153,89,0.4)] group-hover:scale-110 transition-transform duration-300">
                  <svg width="28" height="32" viewBox="0 0 28 32" fill="none" className="ml-1">
                    <path d="M2 2L26 16L2 30V2Z" fill="white" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-brown-muted font-medium text-base">
                  {t.video.placeholder}
                </p>
                <p className="text-brown-muted/50 text-sm">
                  {t.video.playText}
                </p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-cream-dark/30 to-transparent flex items-end px-6 pb-3">
                <div className="w-full h-1 rounded-full bg-cream-dark/50 overflow-hidden">
                  <div className="w-1/3 h-full bg-orange/60 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
