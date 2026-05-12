import { useLanguage } from '../LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="max-w-3xl mx-auto px-6 text-center reveal">
        <h2 className="font-heading text-3xl sm:text-4xl text-brown mb-6">
          {t.about.title}
        </h2>
        <p className="text-lg text-brown-muted leading-relaxed">
          {t.about.text}
        </p>
      </div>
    </section>
  );
}
