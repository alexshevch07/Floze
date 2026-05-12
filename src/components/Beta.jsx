import { useState } from 'react';
import { useLanguage } from '../LanguageContext';
import BetaModal from './BetaModal';

export default function Beta() {
  const { t } = useLanguage();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section id="beta" className="py-24 sm:py-32">
        <div className="max-w-3xl mx-auto px-6 text-center reveal">
          <h2 className="font-heading text-3xl sm:text-4xl text-brown mb-6">
            {t.beta.title}
          </h2>
          <p className="text-xl text-brown-muted leading-relaxed mb-10 max-w-lg mx-auto">
            {t.beta.text}
          </p>
          <button
            id="beta-cta"
            onClick={() => setModalOpen(true)}
            className="px-12 py-4 rounded-full bg-orange text-white text-lg font-bold tracking-wide hover:bg-orange-hover transition-all duration-300 hover:shadow-[0_6px_30px_rgba(255,153,89,0.4)] hover:-translate-y-0.5 cursor-pointer"
          >
            {t.beta.cta}
          </button>
        </div>
      </section>
      <BetaModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
