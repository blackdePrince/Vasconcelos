import { ArrowRight } from 'lucide-react';
import { siteConfig, imagens } from '@/config/site';
import Reveal from './Reveal';

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-24 lg:py-32">
      {/* Imagem de fundo */}
      <div className="absolute inset-0">
        <img
          src={imagens.cta}
          alt="Biblioteca jurídica"
          className="h-full w-full object-cover opacity-15"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-900/70" />
      </div>

      <div className="container-lux relative">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
              Precisa de orientação jurídica?
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-navy-100">
              Conte-nos brevemente sobre sua necessidade e nossa equipe entrará em contato.
            </p>
            <a href="#contato" className="btn-gold mt-8">
              Fale com um Advogado
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
