import { ArrowRight, Calendar, Scale } from 'lucide-react';
import { siteConfig, imagens } from '@/config/site';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden bg-navy-950">
      {/* Imagem de fundo */}
      <div className="absolute inset-0">
        <img
          src={imagens.hero}
          alt="Escritório de advocacia moderno com balança da justiça"
          className="h-full w-full object-cover opacity-25"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900/90 to-navy-900/70" />
      </div>

      {/* Conteúdo */}
      <div className="container-lux relative flex min-h-screen items-center pt-24 pb-16">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Texto */}
          <div className="animate-fade-up">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-4 py-1.5">
              <Scale className="h-3.5 w-3.5 text-gold-400" />
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-gold-300">
                {siteConfig.nome}
              </span>
            </div>

            <h1 className="font-serif text-4xl font-semibold leading-[1.15] text-white sm:text-5xl lg:text-[3.5rem]">
              Advocacia estratégica para proteger seus direitos e seus negócios.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy-100">
              Atuação jurídica personalizada, ética e estratégica para pessoas e empresas.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#contato" className="btn-gold">
                <Calendar className="h-4 w-4" />
                Agende uma Consulta
              </a>
              <a href="#escritorio" className="btn-outline-light">
                Conheça o Escritório
              </a>
            </div>

            <p className="mt-8 text-sm text-navy-200">
              Atendimento personalizado <span className="text-gold-400">•</span> Estratégia jurídica{' '}
              <span className="text-gold-400">•</span> Compromisso com resultados
            </p>
          </div>

          {/* Imagem lateral */}
          <div className="hidden lg:block animate-slide-in-right">
            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl border border-gold-500/20" />
              <img
                src={imagens.escritorio}
                alt="Interior de escritório jurídico moderno"
                className="relative rounded-2xl shadow-2xl shadow-navy-950/50"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -left-6 rounded-xl bg-white px-6 py-4 shadow-xl">
                <p className="font-serif text-2xl font-semibold text-navy-900">+10 anos</p>
                <p className="text-xs text-graphite-500">de experiência jurídica</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#escritorio"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-navy-200 transition-colors hover:text-gold-400"
        aria-label="Rolar para a próxima seção"
      >
        <ArrowRight className="h-5 w-5 -rotate-90 animate-bounce" />
      </a>
    </section>
  );
}
