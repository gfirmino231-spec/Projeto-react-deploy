import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = ['Início', 'Benefícios', 'Cardápio', 'Depoimentos', 'Contato'];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(26,10,0,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.3)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2">
          <span style={{ fontSize: '1.7rem' }}>🍽️</span>
          <span style={{ fontFamily: 'Playfair Display', fontWeight: 900, fontSize: '1.4rem', color: 'var(--orange)' }}>
            GourmetOn
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8">
          {links.map(link => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase().replace('í', 'i').replace('â', 'a')}`}
                className="text-white/80 hover:text-white transition-colors text-sm font-medium"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contato" className="hidden md:block btn-primary text-sm py-2 px-5">
          Baixar App
        </a>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-2xl"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ background: 'rgba(26,10,0,0.97)' }} className="md:hidden px-6 pb-6">
          <ul className="flex flex-col gap-4">
            {links.map(link => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase().replace('í', 'i').replace('â', 'a')}`}
                  onClick={() => setMenuOpen(false)}
                  className="text-white/80 hover:text-white transition-colors text-base font-medium block py-1"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contato" className="btn-primary mt-4 text-sm py-2 px-5 inline-block">
            Baixar App
          </a>
        </div>
      )}
    </nav>
  );
}
