import { useEffect, useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => setTooltipOpen(true), 1000);
      return () => clearTimeout(timer);
    }
  }, [visible]);

  const href = `https://wa.me/${siteConfig.whatsappNumero}?text=${encodeURIComponent(
    siteConfig.whatsappMensagem
  )}`;

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 transition-all duration-500 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
      }`}
    >
      {/* Tooltip */}
      {tooltipOpen && (
        <div className="relative hidden items-center gap-2 rounded-full bg-white px-4 py-3 shadow-lg sm:flex">
          <button
            onClick={() => setTooltipOpen(false)}
            className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-navy-900 text-white"
            aria-label="Fechar aviso"
          >
            <X className="h-3 w-3" />
          </button>
          <span className="text-sm font-medium text-navy-900">
            Tire suas dúvidas jurídicas
          </span>
        </div>
      )}

      {/* Botão */}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="h-7 w-7" fill="currentColor" stroke="none" />
      </a>
    </div>
  );
}
