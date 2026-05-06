export default function Footer() {
  return (
    <footer style={{ background: '#0D0500', padding: '3rem 1.5rem 2rem' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span style={{ fontSize: '1.5rem' }}>🍽️</span>
              <span style={{ fontFamily: 'Playfair Display', fontWeight: 900, fontSize: '1.3rem', color: 'var(--orange)' }}>
                GourmetOn
              </span>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', lineHeight: 1.6 }}>
              O delivery que respeita seu tempo e o seu paladar.
            </p>
            <div className="flex gap-3 mt-4">
              {['🐦', '📘', '📸', '▶️'].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  style={{
                    width: 36, height: 36, borderRadius: '50%',
                    background: 'rgba(255,255,255,0.07)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1rem', textDecoration: 'none',
                    transition: 'background 0.2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,92,40,0.3)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.07)'}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {[
            { title: 'App', items: ['Download iOS', 'Download Android', 'Versão Web', 'Novidades'] },
            { title: 'Empresa', items: ['Sobre nós', 'Carreiras', 'Blog', 'Imprensa'] },
            { title: 'Ajuda', items: ['FAQ', 'Suporte', 'Política de Privacidade', 'Termos de Uso'] },
          ].map(col => (
            <div key={col.title}>
              <h4 style={{ color: 'white', fontWeight: 600, marginBottom: '1rem', fontSize: '0.9rem' }}>{col.title}</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                {col.items.map(item => (
                  <li key={item}>
                    <a
                      href="#"
                      style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', textDecoration: 'none', transition: 'color 0.2s' }}
                      onMouseEnter={e => e.currentTarget.style.color = 'var(--orange)'}
                      onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1.5rem', textAlign: 'center' }}>
          <p style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.8rem' }}>
            © 2025 GourmetOn. Todos os direitos reservados. Desenvolvido com ❤️ para o Check-Point 05 — Prof. Lucas Sousa.
          </p>
        </div>
      </div>
    </footer>
  );
}
