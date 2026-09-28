import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { faq } from '@/config/site';
import Reveal from './Reveal';

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-navy-50/40 py-24 lg:py-32">
      <div className="container-lux">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="section-label">Perguntas Frequentes</span>
            <h2 className="section-title">Dúvidas comuns</h2>
            <p className="mt-4 text-base leading-relaxed text-graphite-600">
              Reunimos as perguntas mais frequentes para ajudar você a entender como funciona o nosso
              atendimento.
            </p>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="mx-auto mt-12 max-w-3xl space-y-4">
            {faq.map((item, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={i}
                  className="overflow-hidden rounded-xl border border-navy-100 bg-white shadow-sm"
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif text-base font-semibold text-navy-900 sm:text-lg">
                      {item.pergunta}
                    </span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                        isOpen ? 'bg-gold-500 text-navy-950' : 'bg-navy-50 text-navy-700'
                      }`}
                    >
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-400 ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-sm leading-relaxed text-graphite-600">
                        {item.resposta}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
