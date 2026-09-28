import { ArrowRight, Calendar } from 'lucide-react';
import { artigos } from '@/config/site';
import Reveal from './Reveal';

export default function Blog() {
  return (
    <section id="blog" className="py-24 lg:py-32">
      <div className="container-lux">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <span className="section-label">Conteúdos</span>
              <h2 className="section-title">Artigos jurídicos</h2>
              <p className="mt-4 text-base leading-relaxed text-graphite-600">
                Conteúdo informativo para ajudá-lo a compreender questões jurídicas do dia a dia.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {artigos.map((artigo, i) => (
            <Reveal key={artigo.id} delay={i * 100}>
              <article className="card-hover group h-full overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-sm">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={artigo.imagem}
                    alt={artigo.titulo}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-navy-900/90 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                    {artigo.categoria}
                  </span>
                </div>

                <div className="p-6">
                  <p className="flex items-center gap-2 text-xs text-graphite-400">
                    <Calendar className="h-3.5 w-3.5" />
                    {artigo.data}
                  </p>
                  <h3 className="mt-3 font-serif text-lg font-semibold leading-snug text-navy-900">
                    {artigo.titulo}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-graphite-600">{artigo.resumo}</p>
                  <a
                    href="#blog"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-gold-600 transition-colors hover:text-gold-700"
                  >
                    Leia mais
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
