import { useEffect, useRef, useState } from 'react';

/**
 * Hook para animação de scroll reveal.
 * Observa o elemento e adiciona a classe 'revealed' quando ele entra na viewport.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRevealed(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, revealed };
}
