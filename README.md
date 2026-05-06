# 🍽️ GourmetOn — Landing Page

Landing Page desenvolvida para o **Check-Point 05** da disciplina de **Web Development with JS** — Prof. Lucas Sousa.

## 📋 Sobre o Projeto

O **GourmetOn** é um app de delivery de comida fictício. Esta landing page apresenta o app de forma chamativa e informativa, utilizando as tecnologias solicitadas no checkpoint.

## 🚀 Tecnologias Utilizadas

- **React** — construção da interface com componentes reutilizáveis
- **Vite** — ferramenta de build rápida para projetos React
- **Tailwind CSS** — estilização responsiva via utilitários
- **Fetch API** — requisições assíncronas para API externa

## 🌐 API Utilizada

**TheMealDB** (https://www.themealdb.com/api/json/v1/1/filter.php?c={categoria})
API gratuita, sem necessidade de chave. Fornece receitas e imagens por categoria.

## 🗂️ Estrutura de Componentes

src/
├── components/
│   ├── Navbar.jsx        # Menu fixo com scroll suave e responsivo
│   ├── Hero.jsx          # Seção principal com CTA
│   ├── Benefits.jsx      # Benefícios do app (6 cards)
│   ├── Menu.jsx          # Cardápio dinâmico com fetch + filtros
│   ├── Testimonials.jsx  # Depoimentos de usuários
│   ├── Contact.jsx       # Formulário de contato
│   └── Footer.jsx        # Rodapé com links e redes sociais
├── App.jsx
└── index.css

## ▶️ Como Rodar Localmente

npm install
npm run dev
npm run build

## 🚢 Deploy (Vercel)

1. Push do repositório para o GitHub
2. Acesse vercel.com e importe o repositório
3. Clique em "Deploy" — detecta Vite automaticamente

## 👥 Integrantes do Grupo

Gustavo Firmino Barbosa RM-566903
Helton Pacheco dos Santos RM-567113
Geovanna Caroline Lima Santos RM-567754

---
© 2025 GourmetOn — Check-Point 05 | Prof. Lucas Sousa
