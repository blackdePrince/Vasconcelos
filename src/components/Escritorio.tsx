import { siteConfig, numeros, imagens } from '@/config/site';
import Reveal from './Reveal';

export default function Escritorio() {
  return (
    <section id="escritorio" className="py-24 lg:py-32">
      <div className="container-lux">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Imagem */}
          <Reveal>
            <div className="relative">
              <img
                src={imagens.escritorio}
                alt="Escritório de advocacia Vasconcelos & Mendes"
                className="rounded-2xl shadow-xl shadow-navy-900/10"
                loading="lazy"
              />
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-2xl border-2 border-gold-300/40" />
            </div>
          </Reveal>

          {/* Texto */}
          <Reveal delay={150}>
            <div>
              <span className="section-label">O Escritório</span>
              <h2 className="section-title">
                Experiência, estratégia e atendimento personalizado.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-graphite-600">
                Somos um escritório de advocacia comprometido com a excelência técnica e com a
                construção de soluções jurídicas personalizadas. Nossa atuação combina conhecimento
                jurídico, visão estratégica e atendimento próximo para compreender cada caso em sua
                particularidade.
              </p>

              {/* Números / destaques */}
              <div className="mt-10 grid grid-cols-2 gap-6">
                {numeros.map((n) => (
                  <div
                    key={n.rotulo}
                    className="rounded-xl border border-navy-100 bg-navy-50/50 px-5 py-4"
                  >
                    <p className="font-serif text-3xl font-semibold text-navy-900">{n.valor}</p>
                    <p className="mt-1 text-sm text-graphite-500">{n.rotulo}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
