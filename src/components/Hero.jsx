export default function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1A0A00 0%, #3D1A00 50%, #FF5C28 120%)',
      }}
    >
      {/* Background decorative circles */}
      <div className="absolute inset-0 pointer-events-none">
        <div style={{
          position: 'absolute', width: 500, height: 500, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,92,40,0.15) 0%, transparent 70%)',
          top: -100, right: -100,
        }} />
        <div style={{
          position: 'absolute', width: 300, height: 300, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,179,71,0.1) 0%, transparent 70%)',
          bottom: 50, left: 50,
        }} />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-32 w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div className="fade-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(255,92,40,0.2)', borderRadius: 999,
            padding: '6px 16px', marginBottom: '1.5rem',
          }}>
            <span style={{ color: 'var(--amber)', fontSize: '0.85rem', fontWeight: 600 }}>
              🚀 Novo no mercado
            </span>
          </div>

          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 900,
            color: 'white',
            lineHeight: 1.1,
            marginBottom: '1.5rem',
          }}>
            Comida incrível,<br />
            <span style={{ color: 'var(--orange)' }}>entregue rápido.</span>
          </h1>

          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2.5rem', maxWidth: 440 }}>
            O GourmetOn conecta você aos melhores restaurantes da cidade. Peça, rastreie e receba em minutos — tudo num só lugar.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#contato" className="btn-primary">
              📱 Baixar Grátis
            </a>
            <a href="#cardapio" className="btn-outline">
              Ver Cardápio
            </a>
          </div>

          <div className="flex gap-8 mt-10">
            {[['4.9★', 'Avaliação média'], ['50K+', 'Usuários ativos'], ['200+', 'Restaurantes']].map(([val, label]) => (
              <div key={label}>
                <p style={{ color: 'white', fontWeight: 700, fontSize: '1.3rem' }}>{val}</p>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem' }}>{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Illustration */}
        <div className="hidden md:flex justify-center items-center float-anim">
          <div style={{
            width: 360, height: 360,
            borderRadius: '50%',
            background: 'radial-gradient(circle at 40% 40%, rgba(255,179,71,0.25), rgba(255,92,40,0.1))',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '10rem',
            boxShadow: '0 40px 80px rgba(255,92,40,0.25)',
          }}>
            🍔
          </div>
        </div>
      </div>
    </section>
  );
}
