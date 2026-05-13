import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Mission from './components/Mission';
import HowItWorks from './components/HowItWorks';
import Beta from './components/Beta';
import Footer from './components/Footer';

export default function App() {
  // Intersection Observer for scroll-reveal animations
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -50px 0px' }
    );

    const observeAll = () => {
      document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
    };

    // Initial + delayed pass to catch late renders
    observeAll();
    const timer = setTimeout(observeAll, 200);

    // Watch for new .reveal elements
    const mo = new MutationObserver(observeAll);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <main>
        <Hero />
        <About />
        <Mission />
        <HowItWorks />
        <Beta />
      </main>
      <Footer />
    </div>
  );
}
