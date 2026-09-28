import { Linkedin } from 'lucide-react';
import { equipe } from '@/config/site';
import Reveal from './Reveal';

export default function Equipe() {
  return (
    <section id="equipe" className="bg-navy-50/40 py-24 lg:py-32">
      <div className="container-lux">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="section-label">Nossa Equipe</span>
            <h2 className="section-title">Profissionais comprometidos com o seu caso</h2>
            <p className="mt-4 text-base leading-relaxed text-graphite-600">
              Nossa equipe reúne advogados experientes e especializados, dedicados a oferecer a melhor
              orientação jurídica.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {equipe.map((membro, i) => (
            <Reveal key={membro.id} delay={i * 100}>
              <article className="card-hover group h-full overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-sm">
                {/* Foto */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={membro.foto}
                    alt={`${membro.nome} — ${membro.cargo}`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
                  {membro.linkedin && (
                    <a
                      href={membro.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-navy-800 opacity-0 transition-all duration-300 hover:bg-gold-500 group-hover:opacity-100"
                      aria-label={`LinkedIn de ${membro.nome}`}
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  )}
                </div>

                {/* Informações */}
                <div className="p-6">
                  <h3 className="font-serif text-lg font-semibold text-navy-900">{membro.nome}</h3>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wider text-gold-600">
                    {membro.oab}
                  </p>
                  <p className="mt-2 text-sm text-graphite-500">{membro.cargo}</p>
                  <p className="mt-3 text-sm leading-relaxed text-graphite-600">{membro.descricao}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
