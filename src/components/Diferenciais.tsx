import {
  HeartHandshake,
  Target,
  MessageSquare,
  Award,
  Lock,
  CheckCircle2,
  type LucideIcon,
} from 'lucide-react';
import { diferenciais } from '@/config/site';
import Reveal from './Reveal';

const iconMap: Record<string, LucideIcon> = {
  HeartHandshake,
  Target,
  MessageSquare,
  Award,
  Lock,
  CheckCircle2,
};

export default function Diferenciais() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container-lux">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="section-label">Diferenciais</span>
            <h2 className="section-title">Por que escolher o nosso escritório</h2>
            <p className="mt-4 text-base leading-relaxed text-graphite-600">
              Nosso compromisso vai além da técnica jurídica: construímos relações de confiança
              duradouras com cada cliente.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {diferenciais.map((d, i) => {
            const Icon = iconMap[d.icone] ?? CheckCircle2;
            return (
              <Reveal key={d.titulo} delay={i * 80}>
                <div className="group flex gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold-300/50 bg-gold-50 text-gold-600 transition-colors duration-300 group-hover:bg-gold-500 group-hover:text-navy-950">
                    <Icon className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-navy-900">{d.titulo}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-graphite-600">{d.descricao}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
