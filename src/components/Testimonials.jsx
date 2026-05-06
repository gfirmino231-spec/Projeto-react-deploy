const testimonials = [
  {
    name: 'Ana Paula S.',
    avatar: '👩',
    role: 'Usuária há 1 ano',
    text: 'Simplesmente o melhor app de delivery que já usei! A entrega é sempre pontual e a variedade de restaurantes é incrível.',
    stars: 5,
  },
  {
    name: 'Carlos Mendes',
    avatar: '👨‍💼',
    role: 'Usuário há 8 meses',
    text: 'O GourmetOn mudou minha rotina. Peço o almoço todo dia e nunca decepciona. Atendimento top quando precisei!',
    stars: 5,
  },
  {
    name: 'Juliana R.',
    avatar: '👩‍🎓',
    role: 'Usuária há 6 meses',
    text: 'Interface linda, fácil de usar e o rastreio em tempo real é demais! Recomendo muito pra quem é busy como eu.',
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" style={{ background: 'var(--cream)', padding: '6rem 1.5rem' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span style={{
            background: 'rgba(255,92,40,0.1)', color: 'var(--orange)',
            borderRadius: 999, padding: '4px 14px', fontSize: '0.85rem', fontWeight: 600,
          }}>
            Depoimentos
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, marginTop: '0.75rem', color: 'var(--dark)' }}>
            Quem usa, <span style={{ color: 'var(--orange)' }}>ama</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              style={{
                background: 'white',
                borderRadius: '1.5rem',
                padding: '2rem',
                boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
                position: 'relative',
              }}
            >
              {/* Quote mark */}
              <span style={{
                position: 'absolute', top: 20, right: 24,
                fontSize: '4rem', color: 'rgba(255,92,40,0.1)',
                fontFamily: 'Georgia', lineHeight: 1,
              }}>"</span>

              <div style={{ display: 'flex', gap: 12, marginBottom: '1.2rem', alignItems: 'center' }}>
                <span style={{ fontSize: '2.5rem' }}>{t.avatar}</span>
                <div>
                  <p style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--dark)' }}>{t.name}</p>
                  <p style={{ fontSize: '0.8rem', color: '#888' }}>{t.role}</p>
                </div>
              </div>

              <p style={{ color: '#555', lineHeight: 1.7, fontSize: '0.95rem', marginBottom: '1rem' }}>
                "{t.text}"
              </p>

              <div style={{ color: 'var(--orange)', fontSize: '1rem' }}>
                {'⭐'.repeat(t.stars)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
