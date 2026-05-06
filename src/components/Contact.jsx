import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setSent(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  const inputStyle = {
    width: '100%',
    background: 'rgba(255,255,255,0.07)',
    border: '1.5px solid rgba(255,255,255,0.12)',
    borderRadius: '0.75rem',
    padding: '0.85rem 1.1rem',
    color: 'white',
    fontSize: '0.95rem',
    outline: 'none',
    transition: 'border 0.2s',
  };

  return (
    <section id="contato" style={{ background: 'linear-gradient(135deg, #1A0A00, #2E1000)', padding: '6rem 1.5rem' }}>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">

        {/* Left */}
        <div>
          <span style={{
            background: 'rgba(255,92,40,0.2)', color: 'var(--orange)',
            borderRadius: 999, padding: '4px 14px', fontSize: '0.85rem', fontWeight: 600,
          }}>
            Fique por dentro
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 900, color: 'white', marginTop: '0.75rem', marginBottom: '1.2rem' }}>
            Receba novidades e<br />ofertas exclusivas
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, fontSize: '1rem', marginBottom: '2rem' }}>
            Cadastre-se e seja o primeiro a saber sobre promoções, novos restaurantes e funcionalidades do GourmetOn.
          </p>

          <div className="flex flex-col gap-4">
            {[
              ['📧', 'suporte@gourme ton.com.br'],
              ['📍', 'São Paulo, SP – Brasil'],
              ['🕐', 'Atendimento: 24h por dia'],
            ].map(([icon, text]) => (
              <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ fontSize: '1.2rem' }}>{icon}</span>
                <span style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.9rem' }}>{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div style={{
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '1.5rem',
          padding: '2.5rem',
        }}>
          {sent ? (
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎉</div>
              <h3 style={{ color: 'white', fontFamily: 'Playfair Display', fontSize: '1.4rem', marginBottom: '0.5rem' }}>
                Mensagem enviada!
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.6)' }}>Entraremos em contato em breve.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <div>
                <label style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', display: 'block', marginBottom: '0.4rem' }}>
                  Seu nome *
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="João Silva"
                  required
                  style={inputStyle}
                  onFocus={e => e.target.style.border = '1.5px solid var(--orange)'}
                  onBlur={e => e.target.style.border = '1.5px solid rgba(255,255,255,0.12)'}
                />
              </div>
              <div>
                <label style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', display: 'block', marginBottom: '0.4rem' }}>
                  E-mail *
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="joao@email.com"
                  required
                  style={inputStyle}
                  onFocus={e => e.target.style.border = '1.5px solid var(--orange)'}
                  onBlur={e => e.target.style.border = '1.5px solid rgba(255,255,255,0.12)'}
                />
              </div>
              <div>
                <label style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', display: 'block', marginBottom: '0.4rem' }}>
                  Mensagem (opcional)
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Diga o que você acha do app..."
                  rows={4}
                  style={{ ...inputStyle, resize: 'vertical' }}
                  onFocus={e => e.target.style.border = '1.5px solid var(--orange)'}
                  onBlur={e => e.target.style.border = '1.5px solid rgba(255,255,255,0.12)'}
                />
              </div>
              <button type="submit" className="btn-primary" style={{ width: '100%', textAlign: 'center' }}>
                Enviar Mensagem 🚀
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
