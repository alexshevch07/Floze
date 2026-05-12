import { useLanguage } from '../LanguageContext';

function FeatureCard({ icon, title, text, delay }) {
  return (
    <div className={`reveal group flex flex-col items-center text-center p-8 rounded-3xl bg-white/80 border border-cream-dark/30 shadow-[0_2px_20px_rgba(61,43,31,0.04)] hover:shadow-[0_8px_40px_rgba(255,153,89,0.1)] hover:-translate-y-1 transition-all duration-400`}>
      <div className="w-16 h-16 rounded-2xl bg-orange-light flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
        <span className="text-3xl">{icon}</span>
      </div>
      <h3 className="font-heading text-xl font-bold text-brown mb-3">{title}</h3>
      <p className="text-sm text-brown-muted leading-relaxed">{text}</p>
    </div>
  );
}

export default function HowItWorks() {
  const { t } = useLanguage();

  return (
    <section id="how-it-works" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brown mb-4">
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
              delay={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
