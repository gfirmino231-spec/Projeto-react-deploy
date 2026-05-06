import { useState, useEffect } from 'react';

const CATEGORIES = ['Beef', 'Chicken', 'Seafood', 'Vegetarian', 'Pasta'];

export default function Menu() {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState('Beef');

  useEffect(() => {
    const fetchMeals = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${activeCategory}`
        );
        if (!response.ok) throw new Error('Erro ao buscar dados');
        const data = await response.json();
        setMeals((data.meals || []).slice(0, 6));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMeals();
  }, [activeCategory]);

  const categoryLabel = {
    Beef: 'Carnes',
    Chicken: 'Frango',
    Seafood: 'Frutos do Mar',
    Vegetarian: 'Vegetariano',
    Pasta: 'Massas',
  };

  return (
    <section id="cardapio" style={{ background: '#1A0A00', padding: '6rem 1.5rem' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <span style={{
            background: 'rgba(255,92,40,0.2)', color: 'var(--orange)',
            borderRadius: 999, padding: '4px 14px', fontSize: '0.85rem', fontWeight: 600,
          }}>
            Cardápio
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, marginTop: '0.75rem', color: 'white' }}>
            Escolha o que te dá água<br />na boca
          </h2>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '8px 20px',
                borderRadius: 999,
                fontWeight: 600,
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'all 0.2s',
                border: activeCategory === cat ? 'none' : '1.5px solid rgba(255,255,255,0.2)',
                background: activeCategory === cat ? 'var(--orange)' : 'transparent',
                color: activeCategory === cat ? 'white' : 'rgba(255,255,255,0.6)',
              }}
            >
              {categoryLabel[cat]}
            </button>
          ))}
        </div>

        {/* Loading */}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <div style={{
              width: 48, height: 48, borderRadius: '50%',
              border: '4px solid rgba(255,92,40,0.2)',
              borderTopColor: 'var(--orange)',
              animation: 'spin 0.8s linear infinite',
            }} />
            <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
          </div>
        )}

        {/* Error */}
        {error && (
          <div style={{ textAlign: 'center', color: 'rgba(255,255,255,0.5)', padding: '3rem' }}>
            <p>Ops! {error}. Tente novamente.</p>
          </div>
        )}

        {/* Meals Grid */}
        {!loading && !error && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {meals.map(meal => (
              <div
                key={meal.idMeal}
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  borderRadius: '1.25rem',
                  overflow: 'hidden',
                  border: '1px solid rgba(255,255,255,0.08)',
                  transition: 'all 0.25s',
                  cursor: 'pointer',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.border = '1px solid rgba(255,92,40,0.4)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.border = '1px solid rgba(255,255,255,0.08)';
                }}
              >
                <div style={{ position: 'relative', overflow: 'hidden', height: 200 }}>
                  <img
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.08)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                  />
                </div>
                <div style={{ padding: '1.25rem' }}>
                  <h3 style={{ color: 'white', fontFamily: 'Playfair Display', fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                    {meal.strMeal}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span style={{ color: 'var(--amber)', fontSize: '0.85rem' }}>
                      ⭐ {(4 + Math.random()).toFixed(1)}
                    </span>
                    <button className="btn-primary" style={{ padding: '6px 16px', fontSize: '0.8rem' }}>
                      Pedir
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
