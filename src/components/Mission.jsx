import { useLanguage } from '../LanguageContext';

export default function Mission() {
  const { t } = useLanguage();

  return (
    <section id="mission" className="py-24 sm:py-32 bg-cream-mid/50">
      <div className="max-w-3xl mx-auto px-6 text-center reveal">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brown mb-6">
          {t.mission.title}
        </h2>
        <p className="text-lg text-brown-muted leading-relaxed">
          {t.mission.text}
        </p>
      </div>
    </section>
  );
}
