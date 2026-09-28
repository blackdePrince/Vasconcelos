import { useEffect, useState } from 'react';
import { Menu, X, Scale } from 'lucide-react';
import { siteConfig, navLinks } from '@/config/site';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md shadow-navy-900/5'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-lux flex h-20 items-center justify-between" aria-label="Navegação principal">
        {/* Logo */}
        <a
          href="#inicio"
          onClick={closeMenu}
          className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 rounded-lg"
          aria-label={`${siteConfig.nome} — Início`}
        >
          <span
            className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-300 ${
              scrolled ? 'border-navy-800 text-navy-800' : 'border-white text-white'
            }`}
          >
            <Scale className="h-5 w-5" strokeWidth={1.5} />
          </span>
          <span className="flex flex-col leading-none">
            <span
              className={`font-serif text-lg font-semibold tracking-tight transition-colors duration-300 ${
                scrolled ? 'text-navy-900' : 'text-white'
              }`}
            >
              {siteConfig.nome}
            </span>
            <span
              className={`mt-0.5 text-[0.65rem] font-medium uppercase tracking-[0.2em] transition-colors duration-300 ${
                scrolled ? 'text-gold-600' : 'text-gold-300'
              }`}
            >
              Advocacia & Consultoria
            </span>
          </span>
        </a>

        {/* Menu desktop */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  scrolled
                    ? 'text-graphite-600 hover:text-navy-900 hover:bg-navy-50'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Botão CTA desktop */}
        <a href="#contato" className="btn-gold hidden lg:inline-flex">
          Fale Conosco
        </a>

        {/* Botão hamburguer mobile */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className={`lg:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 rounded-lg p-2 transition-colors ${
            scrolled ? 'text-navy-900' : 'text-white'
          }`}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Menu mobile */}
      <div
        className={`lg:hidden overflow-hidden bg-white transition-all duration-400 ${
          menuOpen ? 'max-h-[32rem] shadow-lg' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 py-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={closeMenu}
                className="block rounded-lg px-4 py-3 text-sm font-medium text-graphite-700 hover:bg-navy-50 hover:text-navy-900"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="mt-3">
            <a href="#contato" onClick={closeMenu} className="btn-gold w-full">
              Fale Conosco
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
