import { useEffect } from 'react';
import gsap from 'gsap';

const Preloader = () => {
  useEffect(() => {
    // Código GSAP para a animação de preload
    const tl = gsap.timeline({ defaults: { ease: 'power1.out' } });

    tl.to('.text', { y: '0%', duration: 1, stagger: 0.25 });
    tl.to('.slider', { y: '-100%', duration: 1.5, delay: 0.5 });
    tl.to('.intro', { y: '-100%', duration: 1 }, '-=1');
  }, []);

  return (
    <div className="preloader">
      <h2 className="text">Seu texto de preload aqui</h2>
      {/* Adicione outros elementos conforme necessário */}
    </div>
  );
};

export default Preloader;
