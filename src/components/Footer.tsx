import { Scale, Linkedin, Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';
import { siteConfig, navLinks, areas } from '@/config/site';

export default function Footer() {
  const redes = [
    { url: siteConfig.redes.linkedin, Icon: Linkedin, label: 'LinkedIn' },
    { url: siteConfig.redes.instagram, Icon: Instagram, label: 'Instagram' },
    { url: siteConfig.redes.facebook, Icon: Facebook, label: 'Facebook' },
  ].filter((r) => r.url);

  return (
    <footer className="bg-navy-950 pt-20 pb-8 text-navy-200">
      <div className="container-lux">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-400/40 text-gold-400">
                <Scale className="h-5 w-5" strokeWidth={1.5} />
              </span>
              <span className="font-serif text-lg font-semibold text-white">{siteConfig.nome}</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-navy-300">
              {siteConfig.slogan}. Soluções jurídicas estratégicas para pessoas e empresas, com
              excelência técnica e atendimento personalizado.
            </p>

            {/* Redes sociais */}
            {redes.length > 0 && (
              <div className="mt-6 flex gap-3">
                {redes.map(({ url, Icon, label }) => (
                  <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-navy-700 text-navy-300 transition-colors hover:border-gold-400 hover:text-gold-400"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Links rápidos */}
          <div>
            <h3 className="font-serif text-sm font-semibold uppercase tracking-wider text-white">
              Links rápidos
            </h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-navy-300 transition-colors hover:text-gold-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Áreas de atuação */}
          <div>
            <h3 className="font-serif text-sm font-semibold uppercase tracking-wider text-white">
              Áreas de Atuação
            </h3>
            <ul className="mt-4 space-y-3">
              {areas.map((area) => (
                <li key={area.id}>
                  <a
                    href="#areas"
                    className="text-sm text-navy-300 transition-colors hover:text-gold-400"
                  >
                    {area.titulo}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-serif text-sm font-semibold uppercase tracking-wider text-white">
              Contato
            </h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start gap-3 text-sm text-navy-300">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                <span>
                  {siteConfig.endereco.logradouro}
                  <br />
                  {siteConfig.endereco.cidade} — {siteConfig.endereco.cep}
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm text-navy-300">
                <Phone className="h-4 w-4 shrink-0 text-gold-500" />
                <a href={`tel:${siteConfig.telefone}`} className="hover:text-gold-400">
                  {siteConfig.telefone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-navy-300">
                <Mail className="h-4 w-4 shrink-0 text-gold-500" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-gold-400">
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="mt-16 border-t border-navy-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-navy-400">
              © {siteConfig.ano} {siteConfig.nome}. Todos os direitos reservados.
            </p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <a href="#privacidade" className="text-xs text-navy-400 transition-colors hover:text-gold-400">
                Política de Privacidade
              </a>
              <a href="#termos" className="text-xs text-navy-400 transition-colors hover:text-gold-400">
                Termos de Uso
              </a>
              <span className="text-xs text-navy-500">
                Conforme provimento da OAB nº 205/2021
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
