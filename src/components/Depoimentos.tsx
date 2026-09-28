import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { depoimentos } from '@/config/site';
import Reveal from './Reveal';

export default function Depoimentos() {
  const [current, setCurrent] = useState(0);
  const count = depoimentos.length;

  const next = useCallback(() => setCurrent((c) => (c + 1) % count), [count]);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + count) % count), [count]);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="bg-navy-900 py-24 lg:py-32">
      <div className="container-lux">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
              Depoimentos
            </span>
            <h2 className="font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl">
              O que nossos clientes dizem
            </h2>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="relative mx-auto mt-16 max-w-3xl">
            <Quote className="mx-auto mb-8 h-12 w-12 text-gold-500/40" strokeWidth={1} />

            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${current * 100}%)` }}
              >
                {depoimentos.map((d, i) => (
                  <div key={i} className="w-full shrink-0 px-4">
                    <blockquote className="text-center">
                      <p className="font-serif text-xl leading-relaxed text-navy-100 sm:text-2xl">
                        {d.texto}
                      </p>
                      <footer className="mt-8">
                        <p className="font-semibold text-white">{d.autor}</p>
                        <p className="mt-1 text-sm text-gold-400">{d.cargo}</p>
                      </footer>
                    </blockquote>
                  </div>
                ))}
              </div>
            </div>

            {/* Controles */}
            <div className="mt-10 flex items-center justify-center gap-4">
              <button
                onClick={prev}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-gold-400 hover:text-gold-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
                aria-label="Depoimento anterior"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <div className="flex gap-2">
                {depoimentos.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === current ? 'w-8 bg-gold-400' : 'w-2 bg-white/30 hover:bg-white/50'
                    }`}
                    aria-label={`Ir para depoimento ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-gold-400 hover:text-gold-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
                aria-label="Próximo depoimento"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
