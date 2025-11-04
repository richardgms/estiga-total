# 🎨 Preview Visual - Seção Prova Social

## Desktop (1920px)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│                         Transformações Reais                                │
│              Veja os resultados de quem treina na Estiga Total              │
│                                                                             │
│  ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐         │
│  │ ANTES  │ DEPOIS  │  │ ANTES  │ DEPOIS  │  │ ANTES  │ DEPOIS  │         │
│  │  [📷]  │  [📷]   │  │  [📷]  │  [📷]   │  │  [📷]  │  [📷]   │         │
│  │        │         │  │        │         │  │        │         │         │
│  │        │         │  │        │         │  │        │         │         │
│  ├────────┴─────────┤  ├────────┴─────────┤  ├────────┴─────────┤         │
│  │ Maria Silva  ⭐⭐⭐⭐⭐│  │ João Santos ⭐⭐⭐⭐⭐│  │ Ana Paula   ⭐⭐⭐⭐⭐│         │
│  │                  │  │                  │  │                  │         │
│  │ 🔥 -22kg em 6m   │  │ 🔥 +15kg massa   │  │ 🔥 -18kg em 8m   │         │
│  │                  │  │                  │  │                  │         │
│  │ "Nunca imaginei  │  │ "Treino há 1 ano │  │ "Melhor decisão  │         │
│  │  que conseguiria │  │  na Estiga e os  │  │  que tomei! Além │         │
│  │  emagrecer..."   │  │  resultados..."  │  │  de perder..."   │         │
│  └──────────────────┘  └──────────────────┘  └──────────────────┘         │
│                                                                             │
│                  ┌────────────────────────────────────┐                     │
│                  │ 💬 Quero Minha Transformação      │                     │
│                  └────────────────────────────────────┘                     │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

## Mobile (375px)

```
┌─────────────────────────────┐
│                             │
│   Transformações Reais      │
│   Veja os resultados de     │
│   quem treina na Estiga     │
│                             │
│  ┌────────────────────────┐ │
│  │ ANTES     │   DEPOIS   │ │
│  │   [📷]    │    [📷]    │ │
│  │           │            │ │
│  │           │            │ │
│  ├───────────┴────────────┤ │
│  │ Maria Silva      ⭐⭐⭐⭐⭐│ │
│  │                        │ │
│  │ 🔥 -22kg em 6 meses    │ │
│  │                        │ │
│  │ "Nunca imaginei que    │ │
│  │  conseguiria emagrecer │ │
│  │  tanto! A equipe..."   │ │
│  └────────────────────────┘ │
│                             │
│         ● ○ ○               │
│    (indicadores)            │
│                             │
│  ┌────────────────────────┐ │
│  │ 💬 Quero Minha         │ │
│  │    Transformação       │ │
│  └────────────────────────┘ │
│                             │
└─────────────────────────────┘
```

## 🎨 Elementos de Design

### Cores Utilizadas

```css
/* Títulos */
color: #000000 (preto)
accent: #FF6B00 (laranja)

/* Background */
background: linear-gradient(to bottom, #FFFFFF, #F9FAFB, #FFFFFF)
overlay: radial-gradient(circle, rgba(255,107,0,0.05))

/* Cards */
background: #FFFFFF
border: #F3F4F6 → #FF6B00/30 (hover)
shadow: xl → 2xl (hover)

/* Badges Resultado */
background: linear-gradient(to right, #FF6B00, #EA580C)
color: #FFFFFF

/* Badges Antes/Depois */
ANTES: rgba(0,0,0,0.7) + backdrop-blur
DEPOIS: #FF6B00

/* Depoimentos */
color: #4B5563 (gray-600)
font-style: italic

/* Estrelas */
color: #FF6B00
```

### Tipografia

```css
/* Título Principal */
font-size: 3.75rem (60px)
font-weight: 900 (black)
line-height: 1.1
letter-spacing: -0.025em

/* Subtítulo */
font-size: 1.25rem (20px)
color: #6B7280

/* Nome do Aluno */
font-size: 1.25rem (20px)
font-weight: 700 (bold)

/* Resultado */
font-size: 1.125rem (18px)
font-weight: 700 (bold)

/* Depoimento */
font-size: 0.875rem (14px)
font-style: italic
line-height: 1.625
```

### Espaçamentos

```css
/* Seção */
padding-top: 5rem (80px)
padding-bottom: 7rem (112px)

/* Cards */
gap: 2rem (32px)
padding: 1.5rem (24px)
border-radius: 1rem (16px)

/* Elementos Internos */
margin-bottom: 1rem (16px) /* entre elementos */
gap: 0.75rem (12px) /* entre ícones e texto */
```

### Animações

```css
/* Hover Cards */
transition: all 300ms ease
transform: scale(1) → scale(1.02)
box-shadow: xl → 2xl

/* Hover Imagens */
transition: transform 500ms ease
transform: scale(1) → scale(1.05)

/* Dots Carrossel */
transition: all 300ms ease
width: 0.5rem → 2rem
background: #D1D5DB → #FF6B00

/* Botão CTA */
transition: all 300ms ease
transform: scale(1) → scale(1.05)
```

## 📐 Dimensões

### Cards Desktop
```
Largura: ~33% do container (3 colunas)
Altura: auto (aspect-ratio 3:4 nas imagens)
Gap: 32px entre cards
```

### Cards Mobile
```
Largura: 100% do viewport
Altura: auto
Scroll: horizontal com snap
```

### Imagens
```
Proporção: 3:4 (vertical)
Dimensões recomendadas: 600x800px
Formato: WebP (fallback JPG)
Qualidade: 80-85%
```

## 🎯 Hierarquia Visual

```
1. Título "Transformações Reais" (maior destaque)
   ↓
2. Cards de Depoimentos (foco principal)
   ↓
3. Resultados em Laranja (destaque secundário)
   ↓
4. Estrelas e Nome (validação)
   ↓
5. Depoimento (suporte)
   ↓
6. CTA "Quero Minha Transformação" (conversão)
```

## 🔄 Estados Interativos

### Card Normal
```
- Background: branco
- Border: cinza claro
- Shadow: xl
- Imagens: scale(1)
```

### Card Hover
```
- Background: branco
- Border: laranja/30
- Shadow: 2xl
- Imagens: scale(1.05)
- Cursor: pointer
```

### Dot Inativo
```
- Width: 8px
- Height: 8px
- Background: cinza
- Border-radius: full
```

### Dot Ativo
```
- Width: 32px
- Height: 8px
- Background: laranja
- Border-radius: full
```

## 📱 Breakpoints

```css
/* Mobile First */
default: 1 coluna, carrossel

/* Small (640px+) */
sm: 2 cards visíveis no carrossel

/* Large (1024px+) */
lg: 3 colunas grid, sem carrossel
```

## ✨ Efeitos Especiais

### Background Radial
```css
Posição 1: 30% 20% (canto superior esquerdo)
Posição 2: 70% 80% (canto inferior direito)
Cor: rgba(255,107,0,0.05)
Efeito: sutil, não intrusivo
```

### Backdrop Blur
```css
Badge "ANTES": backdrop-blur-sm
Efeito: desfoque sutil no fundo
```

### Scroll Snap
```css
scroll-snap-type: x mandatory
scroll-snap-align: center
scroll-behavior: smooth
```

---

## 🎬 Demonstração de Uso

### Desktop
1. Usuário vê 3 cards simultaneamente
2. Hover em um card → zoom nas imagens + sombra
3. Lê os depoimentos
4. Clica no CTA → WhatsApp

### Mobile
1. Usuário vê 1 card por vez
2. Swipe horizontal para navegar
3. Dots indicam posição atual
4. Clique nos dots para navegação rápida
5. Clica no CTA → WhatsApp

---

**Preview criado para:** Estiga Total Academia  
**Seção:** Prova Social (Fase 3.2)  
**Data:** Janeiro 2025
