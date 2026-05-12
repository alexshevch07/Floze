import { useLanguage } from '../LanguageContext';

export default function Video() {
  const { t } = useLanguage();

  return (
    <section id="video" className="py-24 sm:py-32 bg-cream-mid/50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="font-heading text-3xl sm:text-4xl text-brown text-center mb-12 reveal">
          {t.video.title}
        </h2>
        <div className="reveal">
          <div className="relative aspect-video rounded-3xl overflow-hidden bg-gradient-to-br from-cream-dark to-cream shadow-[0_4px_40px_rgba(61,43,31,0.08)] border border-cream-dark/40 group cursor-pointer hover:shadow-[0_8px_50px_rgba(255,153,89,0.12)] transition-all duration-400">
            {/* Play button overlay */}
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

            {/* Decorative video timeline */}
            <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-cream-dark/30 to-transparent flex items-end px-6 pb-3">
              <div className="w-full h-1 rounded-full bg-cream-dark/50 overflow-hidden">
                <div className="w-1/3 h-full bg-orange/60 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
