const benefits = [
  {
    icon: '⚡',
    title: 'Entrega Rápida',
    desc: 'Receba seu pedido em até 30 minutos. Rastreie em tempo real direto do app.',
  },
  {
    icon: '🍽️',
    title: 'Variedade Incrível',
    desc: 'Mais de 200 restaurantes parceiros, de lanches a pratos gourmet.',
  },
  {
    icon: '💳',
    title: 'Pagamento Fácil',
    desc: 'Cartão, PIX, vale-refeição e carteira digital. Simples e seguro.',
  },
  {
    icon: '🔍',
    title: 'Busca Inteligente',
    desc: 'Filtre por tipo de comida, preço, avaliação e distância.',
  },
  {
    icon: '🎁',
    title: 'Programa de Pontos',
    desc: 'Acumule pontos a cada pedido e troque por descontos exclusivos.',
  },
  {
    icon: '🛡️',
    title: 'Segurança Total',
    desc: 'Seus dados e pagamentos protegidos com criptografia de ponta.',
  },
];

export default function Benefits() {
  return (
    <section id="beneficios" style={{ background: 'var(--cream)', padding: '6rem 1.5rem' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span style={{
            background: 'rgba(255,92,40,0.1)', color: 'var(--orange)',
            borderRadius: 999, padding: '4px 14px', fontSize: '0.85rem', fontWeight: 600,
          }}>
            Por que escolher
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, marginTop: '0.75rem', color: 'var(--dark)' }}>
            Tudo que você precisa,<br />em um só app
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              style={{
                background: 'white',
                borderRadius: '1.25rem',
                padding: '2rem',
                boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
                transition: 'all 0.25s',
                animationDelay: `${i * 0.1}s`,
                cursor: 'default',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(255,92,40,0.12)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 16px rgba(0,0,0,0.06)';
              }}
            >
              <div style={{
                width: 52, height: 52, borderRadius: '50%',
                background: 'rgba(255,92,40,0.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.6rem', marginBottom: '1rem',
              }}>
                {b.icon}
              </div>
              <h3 style={{ fontFamily: 'Playfair Display', fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--dark)' }}>
                {b.title}
              </h3>
              <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: 1.6 }}>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
