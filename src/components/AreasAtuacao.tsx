import {
  Building2,
  Scale,
  Briefcase,
  Users,
  Home,
  ShieldCheck,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react';
import { areas } from '@/config/site';
import Reveal from './Reveal';

const iconMap: Record<string, LucideIcon> = {
  Building2,
  Scale,
  Briefcase,
  Users,
  Home,
  ShieldCheck,
};

export default function AreasAtuacao() {
  return (
    <section id="areas" className="bg-navy-50/40 py-24 lg:py-32">
      <div className="container-lux">
        {/* Cabeçalho */}
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="section-label">Áreas de Atuação</span>
            <h2 className="section-title">
              Soluções jurídicas completas para cada necessidade
            </h2>
            <p className="mt-4 text-base leading-relaxed text-graphite-600">
              Atuamos em diversas áreas do direito, oferecendo assessoria estratégica e personalizada
              para proteger os seus interesses.
            </p>
          </div>
        </Reveal>

        {/* Grid de áreas */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((area, i) => {
            const Icon = iconMap[area.icone] ?? Scale;
            return (
              <Reveal key={area.id} delay={i * 80}>
                <article className="card-hover group h-full rounded-2xl border border-navy-100 bg-white p-8 shadow-sm">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-navy-50 text-navy-800 transition-colors duration-300 group-hover:bg-gold-500 group-hover:text-navy-950">
                    <Icon className="h-7 w-7" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-navy-900">{area.titulo}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-graphite-600">{area.descricao}</p>
                  <a
                    href="#contato"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-gold-600 transition-colors hover:text-gold-700"
                  >
                    Saiba mais
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
