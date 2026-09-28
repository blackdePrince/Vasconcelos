import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '@/config/site';
import Reveal from './Reveal';

export default function Contato() {
  const [enviado, setEnviado] = useState(false);
  const [consent, setConsent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!consent) return;
    setEnviado(true);
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setEnviado(false), 5000);
  };

  const contatoInfo = [
    { icon: Phone, label: 'Telefone', valor: siteConfig.telefone },
    {
      icon: Phone,
      label: 'WhatsApp',
      valor: `+55 (${siteConfig.whatsappNumero.slice(2, 4)}) ${siteConfig.whatsappNumero.slice(4)}`,
    },
    { icon: Mail, label: 'E-mail', valor: siteConfig.email },
    {
      icon: MapPin,
      label: 'Endereço',
      valor: `${siteConfig.endereco.logradouro}, ${siteConfig.endereco.cidade} — ${siteConfig.endereco.cep}`,
    },
    { icon: Clock, label: 'Horário', valor: siteConfig.horario },
  ];

  return (
    <section id="contato" className="py-24 lg:py-32">
      <div className="container-lux">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="section-label">Contato</span>
            <h2 className="section-title">Entre em contato com nosso escritório</h2>
            <p className="mt-4 text-base leading-relaxed text-graphite-600">
              Preencha o formulário ou utilize um dos nossos canais de atendimento.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          {/* Formulário */}
          <Reveal>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-navy-100 bg-white p-8 shadow-sm"
              aria-label="Formulário de contato"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="nome" className="mb-1.5 block text-sm font-medium text-navy-900">
                    Nome *
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    required
                    autoComplete="name"
                    className="w-full rounded-lg border border-navy-200 bg-navy-50/30 px-4 py-3 text-sm text-graphite-800 transition-colors focus:border-navy-700 focus:bg-white focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-navy-900">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    autoComplete="email"
                    className="w-full rounded-lg border border-navy-200 bg-navy-50/30 px-4 py-3 text-sm text-graphite-800 transition-colors focus:border-navy-700 focus:bg-white focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="telefone" className="mb-1.5 block text-sm font-medium text-navy-900">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    autoComplete="tel"
                    className="w-full rounded-lg border border-navy-200 bg-navy-50/30 px-4 py-3 text-sm text-graphite-800 transition-colors focus:border-navy-700 focus:bg-white focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="assunto" className="mb-1.5 block text-sm font-medium text-navy-900">
                    Assunto *
                  </label>
                  <input
                    type="text"
                    id="assunto"
                    name="assunto"
                    required
                    className="w-full rounded-lg border border-navy-200 bg-navy-50/30 px-4 py-3 text-sm text-graphite-800 transition-colors focus:border-navy-700 focus:bg-white focus:outline-none"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="mensagem" className="mb-1.5 block text-sm font-medium text-navy-900">
                  Mensagem *
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  required
                  rows={5}
                  className="w-full rounded-lg border border-navy-200 bg-navy-50/30 px-4 py-3 text-sm text-graphite-800 transition-colors focus:border-navy-700 focus:bg-white focus:outline-none"
                />
              </div>

              <div className="mt-5">
                <label className="flex items-start gap-3 text-sm text-graphite-600">
                  <input
                    type="checkbox"
                    required
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-0.5 h-4 w-4 rounded border-navy-300 text-navy-800 focus:ring-gold-400"
                  />
                  <span>
                    Concordo com a{' '}
                    <a href="#privacidade" className="font-medium text-navy-700 underline hover:text-gold-600">
                      Política de Privacidade
                    </a>{' '}
                    e autorizo o tratamento dos meus dados para fins de contato.
                  </span>
                </label>
              </div>

              <button type="submit" disabled={!consent} className="btn-navy mt-6 w-full disabled:cursor-not-allowed disabled:opacity-50">
                {enviado ? (
                  <>
                    <CheckCircle2 className="h-4 w-4" />
                    Mensagem enviada!
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Enviar mensagem
                  </>
                )}
              </button>
            </form>
          </Reveal>

          {/* Informações de contato + mapa */}
          <Reveal delay={150}>
            <div className="flex flex-col gap-6">
              <div className="rounded-2xl border border-navy-100 bg-navy-50/40 p-8">
                <h3 className="font-serif text-xl font-semibold text-navy-900">
                  Canais de atendimento
                </h3>
                <ul className="mt-6 space-y-5">
                  {contatoInfo.map((item) => (
                    <li key={item.label} className="flex items-start gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy-900 text-gold-400">
                        <item.icon className="h-5 w-5" strokeWidth={1.5} />
                      </span>
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wider text-graphite-400">
                          {item.label}
                        </p>
                        <p className="mt-0.5 text-sm font-medium text-navy-900">{item.valor}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mapa placeholder */}
              <div className="flex min-h-[220px] items-center justify-center rounded-2xl border border-navy-100 bg-navy-50/40 p-8 text-center">
                {siteConfig.endereco.mapaEmbedUrl ? (
                  <iframe
                    src={siteConfig.endereco.mapaEmbedUrl}
                    title="Mapa — localização do escritório"
                    className="h-full min-h-[220px] w-full rounded-2xl"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                ) : (
                  <div className="text-sm text-graphite-500">
                    <MapPin className="mx-auto mb-3 h-8 w-8 text-navy-300" strokeWidth={1} />
                    Mapa — configure a URL de embed do Google Maps em{' '}
                    <code className="rounded bg-navy-100 px-1.5 py-0.5 text-xs text-navy-700">
                      siteConfig.endereco.mapaEmbedUrl
                    </code>
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
