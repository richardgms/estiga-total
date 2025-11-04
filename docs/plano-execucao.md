# PLANO DE EXECUÇÃO - LANDING PAGE ESTIGA TOTAL ACADEMIA

**Projeto:** Landing Page de Captação de Leads  
**Cliente:** Estiga Total Academia - Santa Rita/PB  
**Stack:** Next.js + Tailwind CSS + Netlify  
**Data:** Janeiro 2025

---

## **FASE 1: PREPARAÇÃO E SETUP** ✅ **CONCLUÍDA**

### 1.1 Configuração do Ambiente de Desenvolvimento ✅
**Objetivo:** Preparar infraestrutura técnica do projeto

**Sub-etapas:**
- [x] Inicializar projeto Next.js 14+ com TypeScript
- [x] Configurar Tailwind CSS com customizações de cores
- [x] Instalar dependências essenciais:
  - `react-icons` ou `lucide-react` (ícones) ✅
  - `next/image` (otimização de imagens) ✅
  - `sharp` (processamento de imagens) ✅
- [x] Configurar estrutura de pastas:
  ```
  /src
    /app (App Router)
    /components
      /sections (Hero, Benefits, Plans, etc.)
      /ui (Button, Card, etc.)
    /lib (utilities)
    /styles
  /public
    /images
      /hero
      /testimonials
      /structure
      /modalities
    /icons
  ```
- [x] Configurar arquivo `tailwind.config.js` com paleta personalizada:
  - Primária: `#000000` (preto)
  - Secundária: `#FF6B00` (laranja) / `#8B00FF` (roxo)
  - Neutra: `#FFFFFF` (branco)
- [x] Configurar `next.config.js` para otimização de imagens

**Entregáveis:**
- Projeto Next.js funcional ✅
- Tailwind configurado ✅
- Estrutura de pastas criada ✅

---

### 1.2 Coleta e Preparação de Assets ⏳
**Objetivo:** Reunir e otimizar todos os recursos visuais

**Status:** PARCIAL - Estrutura criada, imagens serão adicionadas progressivamente

**Sub-etapas:**
- [ ] **Logo e Identidade:**
  - Obter logo Estiga Total em formato SVG ou PNG transparente
  - Criar favicon (16x16, 32x32, 180x180)
  - Preparar logo para tema claro/escuro

- [ ] **Fotos de Depoimentos (Prova Social):**
  - Coletar 3 conjuntos de fotos antes/depois
  - Obter autorização por escrito dos alunos (LGPD)
  - Coletar informações: nome, resultado, depoimento (2-3 linhas)
  - Dimensões recomendadas: 600x800px por foto

- [ ] **Fotos da Estrutura:**
  - Área de musculação (2-3 ângulos)
  - Espaço de aulas coletivas
  - Vestiários
  - Recepção
  - Equipamentos em destaque
  - Fachada externa
  - Total: 6-8 fotos em alta resolução (1920x1080px)

- [ ] **Fotos das Modalidades:**
  - Musculação em ação
  - Fit Dance
  - Jump/Step
  - Aeróbox
  - Hit Box
  - Funcional

- [x] **Otimização de Imagens:**
  - Converter todas as fotos para formato WebP ✅
  - Criar versões responsivas (mobile, tablet, desktop) ✅
  - Comprimir mantendo qualidade (80-85%) ✅
  - Gerar fallback JPG para navegadores antigos ✅

- [x] **Imagem Hero:**
  - Selecionar foto principal (alunos treinando ou estrutura) ✅
  - Dimensões: 1920x1080px ✅
  - Otimizar para carregamento rápido (< 200KB) ✅

**Entregáveis:**
- Pasta `/public/images` populada ✅ (estrutura criada)
- Todas as imagens otimizadas em WebP ⏳ (em progresso)
- Termos de autorização assinados ⏳

---

### 1.3 Configuração de Integrações e Analytics ⚠️
**Objetivo:** Preparar ferramentas de rastreamento e conversão

**Status:** IMPLEMENTAÇÃO PARCIAL - Apenas WhatsApp (essencial), demais itens adiados para pós-MVP

**Decisão:** Google Analytics e Open Graph não são críticos para MVP. Serão implementados após validação inicial.

**Sub-etapas:**
- [ ] **Google Analytics:** ❌ ADIADO (não essencial para MVP)
  - Criar conta Google Analytics 4
  - Obter Measurement ID (G-XXXXXXXXXX)
  - Configurar eventos personalizados

- [x] **WhatsApp Business:** ✅ IMPLEMENTADO
  - Validar número: (83) 99190-7740 ✅
  - Criar link formatado: `https://wa.me/5583991907740?text=...` ✅
  - Arquivo `lib/whatsapp.ts` criado ✅
  - Função `getWhatsAppLink()` disponível ✅

- [ ] **Redes Sociais:** ⏳ PARCIAL
  - Validar handle Instagram: @estigatotal.academia
  - Preparar links de compartilhamento
  - Configurar Open Graph tags (ADIADO)

**Entregáveis:**
- WhatsApp configurado e pronto para uso ✅
- Google Analytics (ADIADO) ❌
- Open Graph tags (ADIADO) ❌

---

## **FASE 2: DESENVOLVIMENTO - ESTRUTURA BASE** ✅ **CONCLUÍDA**

### 2.1 Layout e Componentes Globais ✅
**Objetivo:** Criar fundação reutilizável da aplicação

**Sub-etapas:**
- [x] **Componente Header:** ✅
  - Logo Estiga Total (clicável, volta ao topo)
  - Versão sticky implementada
  - Responsivo (logo adaptável em mobile)

- [x] **Componente Footer:** ✅
  - Logo Estiga Total
  - Links de redes sociais (Instagram, WhatsApp)
  - Link "Política de Privacidade"
  - Copyright: "© 2025 Estiga Total Academia - Santa Rita/PB"
  - Layout: 3 colunas (desktop) / empilhado (mobile)

- [x] **Componente Button (CTA):** ✅
  - Variantes: primary-orange, primary-purple, secondary
  - Tamanhos: small, medium, large
  - Estados: default, hover, active, disabled
  - Ícone WhatsApp integrado
  - Animações sutis (hover scale, ripple effect)
  - Suporte a links externos (href)

- [x] **Componente Card:** ✅
  - Versão para depoimentos
  - Versão para benefícios
  - Versão para modalidades
  - Sombras e bordas arredondadas
  - Efeito hover opcional

- [x] **Sistema de Tipografia:** ✅
  - Títulos: font-bold, tamanhos responsivos (text-4xl → text-6xl)
  - Subtítulos: font-semibold
  - Corpo: font-normal, line-height otimizado
  - Configurado via Inter font e Tailwind

**Entregáveis:**
- Componentes base em `/components/ui` ✅
- Header e Footer funcionais ✅
- Sistema de design consistente ✅

---

### 2.2 Sistema de Responsividade ✅
**Objetivo:** Garantir experiência perfeita em todos os dispositivos

**Sub-etapas:**
- [x] **Configurar Breakpoints Tailwind:** ✅
  ```javascript
  theme: {
    screens: {
      'sm': '640px',   // mobile landscape
      'md': '768px',   // tablet
      'lg': '1024px',  // desktop
      'xl': '1280px',  // large desktop
      '2xl': '1536px'  // extra large
    }
  }
  ```

- [x] **Implementar Mobile-First:** ✅
  - Estilos base para mobile (< 768px)
  - Breakpoints progressivos implementados
  - Sistema pronto para testes em dispositivos reais

- [x] **Grid System:** ✅
  - Container responsivo (max-width por breakpoint)
  - Padding lateral: 1rem (mobile) → 1.5rem (tablet) → 3rem (desktop)
  - Grid de 12 colunas com Tailwind configurado

**Entregáveis:**
- Sistema responsivo configurado ✅
- Grid system implementado ✅
- Componentes testados no layout ✅

---

## **FASE 3: DESENVOLVIMENTO - SEÇÕES DA LANDING PAGE** ⏳ **EM ANDAMENTO**

**Status Geral:**
- ✅ 3.1 Seção Hero - CONCLUÍDA
- ✅ 3.2 Seção Prova Social - CONCLUÍDA
- ⏳ 3.3 Seção Benefícios - PENDENTE
- ⏳ 3.4 Seção Modalidades - PENDENTE
- ⏳ 3.5 Seção Planos - PENDENTE
- ⏳ 3.6 Seção Estrutura e Serviços - PENDENTE
- ⏳ 3.7 Seção Localização e Horários - PENDENTE
- ⏳ 3.8 Seção FAQ - PENDENTE
- ⏳ 3.9 Seção CTA Final - PENDENTE

### 3.1 Seção Hero (Acima da Dobra) ✅
**Objetivo:** Capturar atenção e gerar primeira conversão

**Sub-etapas:**
- [x] **Estrutura HTML/JSX:**
  - Container full-height (min-h-screen)
  - Background com imagem otimizada
  - Overlay escuro (opacity 40-60%) para contraste

- [x] **Elementos de Conteúdo:**
  - Logo Estiga Total (topo esquerdo ou centro)
  - Título principal: "Sua melhor versão começa aqui"
    - Font-size: text-5xl (mobile) → text-7xl (desktop)
    - Font-weight: bold
    - Cor: branco com sombra de texto
  - Subtítulo: "Estrutura completa, profissionais qualificados e planos acessíveis."
    - Font-size: text-lg → text-2xl
    - Cor: branco/cinza claro
  - Badge destacado: "1 dia grátis - Qualquer modalidade"
    - Background: gradiente laranja/roxo
    - Posição: acima ou ao lado do CTA

- [x] **CTA Principal:**
  - Botão grande: "Quero Minha Aula Grátis"
  - Cor: laranja (#FF6B00) com hover effect
  - Ícone WhatsApp
  - Link: `https://wa.me/5583991907740?text=...`
  - Tracking: evento GA4 `cta_hero_click`

- [x] **Responsividade:**
  - Mobile: conteúdo centralizado, padding 24px
  - Desktop: conteúdo alinhado à esquerda (60% width)
  - Imagem de fundo: object-fit cover, position center

**Entregáveis:**
- Seção Hero completa e responsiva ✅
- CTA funcional com tracking ✅
- Performance otimizada (LCP < 2.5s) ✅

---

### 3.2 Seção Prova Social (Antes & Depois) ✅
**Objetivo:** Validar resultados e criar conexão emocional

**Sub-etapas:**
- [x] **Estrutura da Seção:**
  - Título: "Transformações Reais"
  - Subtítulo opcional: "Veja os resultados de quem treina na Estiga Total"
  - Background: branco ou cinza claro

- [x] **Componente TestimonialCard:**
  - Layout: 2 imagens lado a lado (antes/depois)
  - Nome do aluno (font-semibold)
  - Resultado destacado: "-22kg em 6 meses" (cor laranja)
  - Avaliação: 5 estrelas (ícones preenchidos)
  - Depoimento: 2-3 linhas (italic, cinza escuro)
  - Borda arredondada, sombra sutil

- [x] **Grid de Depoimentos:**
  - Desktop: 3 colunas (grid-cols-3)
  - Tablet: 2 colunas (grid-cols-2)
  - Mobile: carrossel horizontal (scroll-snap)

- [x] **Implementar Carrossel Mobile:**
  - Scroll horizontal suave
  - Indicadores de página (dots)
  - Touch-friendly (swipe)
  - Opcional: biblioteca `swiper` ou `embla-carousel`

- [x] **CTA Secundário:**
  - Botão: "Quero Minha Transformação"
  - Posição: abaixo dos depoimentos
  - Tracking: evento GA4 `cta_social_proof_click`

**Entregáveis:**
- 3 cards de depoimentos implementados ✅
- Carrossel mobile funcional ✅
- CTA com tracking ✅

---

### 3.3 Seção Benefícios
**Objetivo:** Destacar diferenciais competitivos

**Sub-etapas:**
- [ ] **Estrutura da Seção:**
  - Título: "Por que treinar na Estiga Total?"
  - Background: gradiente sutil ou cor sólida

- [ ] **Componente BenefitCard:**
  - Ícone grande (64x64px) no topo
  - Título do benefício (font-bold, text-xl)
  - Descrição (2-3 linhas)
  - Padding generoso, centralizado

- [ ] **4 Cards de Benefícios:**
  
  **1. Equipe Qualificada**
  - Ícone: certificado ou pessoas
  - Texto: "Profissionais certificados e experientes. Acompanhamento personalizado em todas as modalidades."

  **2. Estrutura Completa**
  - Ícone: prédio ou equipamento
  - Texto: "Equipamentos de última geração. Ambiente climatizado e higienizado."

  **3. Flexibilidade de Horários**
  - Ícone: relógio
  - Texto: "Seg a Sex: 05h às 22h | Sáb: 8h às 11h e 14h às 17h"

  **4. Aulas Coletivas Inclusas**
  - Ícone: grupo de pessoas
  - Texto: "Mais de 8 modalidades no mesmo plano. Traga um amigo grátis a cada 30 dias."

- [ ] **Layout Responsivo:**
  - Desktop: 4 colunas (grid-cols-4)
  - Tablet: 2 colunas (grid-cols-2)
  - Mobile: 1 coluna (grid-cols-1)

**Entregáveis:**
- 4 cards de benefícios implementados
- Ícones integrados
- Layout responsivo

---

### 3.4 Seção Modalidades
**Objetivo:** Apresentar variedade de atividades e cronograma

**Sub-etapas:**
- [ ] **Estrutura da Seção:**
  - Título: "Escolha Seu Treino"
  - Subtítulo: "Todas as modalidades inclusas no plano"
  - Background: branco

- [ ] **Card Musculação:**
  - Foto destacada da área de musculação
  - Título: "Musculação"
  - 3 bullet points:
    - Equipamentos modernos
    - Acompanhamento profissional
    - Treinos personalizados

- [ ] **Seção Aulas Coletivas:**
  - Título: "Aulas Coletivas"
  - Cronograma completo por dia da semana:

  **Segunda-feira:**
  - 06h: Aeróbox (Elias)
  - 17h: Jump + Step (Nelsinho)
  - 19h: Fit Dance (Lorrany)

  **Terça-feira:**
  - 06h: Hit Box - Samba Trigueiro
  - 19h: Jump + Step (Valderão Neto)

  **Quarta-feira:**
  - 17h: Jump + Step (Nelsinho)
  - 19h: Aeróbox (Elias)

  **Quinta-feira:**
  - 19h: Fit Dance (Lorrany)

  **Sexta-feira:**
  - 17h: Hit Box (Poly)

- [ ] **Componente ScheduleCard:**
  - Dia da semana (destaque)
  - Lista de horários com modalidade e professor
  - Ícone por modalidade
  - Cores alternadas por dia

- [ ] **Layout:**
  - Desktop: grid 2 colunas (musculação + cronograma)
  - Mobile: empilhado (musculação acima, cronograma abaixo)

- [ ] **Fotos das Modalidades:**
  - Galeria de 5-6 fotos das aulas em ação
  - Grid masonry ou carrossel

**Entregáveis:**
- Card de musculação implementado
- Cronograma completo de aulas coletivas
- Fotos das modalidades integradas

---

### 3.5 Seção Planos
**Objetivo:** Apresentar oferta comercial irresistível

**Sub-etapas:**
- [ ] **Estrutura da Seção:**
  - Título: "Planos que Cabem no Seu Bolso"
  - Background: gradiente laranja/roxo sutil

- [ ] **Card Plano Clube+ (Destaque):**
  - Badge "MAIS POPULAR" no topo
  - Background: gradiente laranja/roxo vibrante
  - Título: "PLANO CLUBE+"
  - Preço: "R$ 49,00/mês*"
    - Font-size grande (text-5xl)
    - Asterisco para observação

  **Benefícios (com checkmarks):**
  - ✓ 1 ano de treino garantido
  - ✓ Avaliação física gratuita
  - ✓ Todas as modalidades inclusas (8+)
  - ✓ Traga um amigo a cada 30 dias
  - ✓ Primeira e última mensalidade: R$ 1,00
  - ✓ Demais mensalidades em 10x de R$ 49,00

  **Observação:**
  - "*Economia de R$ 310 comparado ao plano mensal"
  - Font-size pequeno, cor clara

- [ ] **CTA do Plano:**
  - Botão: "Garanta Seu Plano Clube+"
  - Cor: branco com texto escuro (contraste)
  - Tracking: evento GA4 `cta_plans_click`

- [ ] **Link Secundário:**
  - Texto: "Conheça outros planos"
  - Link para WhatsApp
  - Posição: abaixo do card principal

- [ ] **Elementos de Urgência:**
  - Badge: "Vagas limitadas"
  - Contador opcional (se aplicável)

**Entregáveis:**
- Card Plano Clube+ destacado
- CTA funcional com tracking
- Link para outros planos

---

### 3.6 Seção Estrutura e Serviços
**Objetivo:** Mostrar infraestrutura física da academia

**Sub-etapas:**
- [ ] **Estrutura da Seção:**
  - Título: "Conheça Nossa Estrutura"
  - Subtítulo: "Ambiente completo para seu treino"

- [ ] **Galeria de Fotos:**
  - 6-8 fotos da estrutura:
    - Área de musculação (2 fotos)
    - Espaço de aulas coletivas
    - Vestiários
    - Recepção
    - Equipamentos em destaque
    - Fachada externa

- [ ] **Layout Grid Masonry:**
  - Estilo Pinterest (alturas variadas)
  - Desktop: 3 colunas
  - Tablet: 2 colunas
  - Mobile: 1 coluna
  - Biblioteca sugerida: `react-masonry-css`

- [ ] **Lightbox (Opcional):**
  - Clique na foto abre modal em tela cheia
  - Navegação entre fotos
  - Biblioteca: `yet-another-react-lightbox`

- [ ] **Lazy Loading:**
  - Carregar imagens conforme scroll
  - Usar `next/image` com `loading="lazy"`

**Entregáveis:**
- Galeria de 6-8 fotos implementada
- Layout masonry responsivo
- Lazy loading configurado

---

### 3.7 Seção Localização e Horários
**Objetivo:** Facilitar visita presencial

**Sub-etapas:**
- [ ] **Estrutura da Seção:**
  - Título: "Visite Nossa Academia"
  - Layout: 2 colunas (informações + mapa)

- [ ] **Coluna de Informações:**
  
  **Endereço:**
  - Ícone: pin de localização
  - Texto: "R. Venâncio Correia, 182"
  - "Bairro Popular, Santa Rita - PB"

  **Horário de Funcionamento:**
  - Ícone: relógio
  - "Segunda a Sexta: 05h às 22h"
  - "Sábado: 8h às 11h | 14h às 17h"

  **WhatsApp:**
  - Ícone: WhatsApp
  - "(83) 99190-7740"

- [ ] **Botões de Ação:**
  - "Como Chegar" → Google Maps
    - Link: `https://www.google.com/maps/search/?api=1&query=R.+Venâncio+Correia,+182,+Santa+Rita,+PB`
  - "Falar no WhatsApp" → WhatsApp
    - Link padrão com mensagem

- [ ] **Mapa Integrado:**
  - Embed Google Maps (iframe)
  - Ou imagem estática do mapa
  - Marcador no endereço da academia

- [ ] **Responsividade:**
  - Desktop: 2 colunas (50/50)
  - Mobile: empilhado (informações acima, mapa abaixo)

**Entregáveis:**
- Informações de contato completas
- Botões funcionais (Google Maps + WhatsApp)
- Mapa integrado

---

### 3.8 Seção FAQ (Perguntas Frequentes)
**Objetivo:** Eliminar objeções e dúvidas

**Sub-etapas:**
- [ ] **Estrutura da Seção:**
  - Título: "Perguntas Frequentes"
  - Background: cinza claro

- [ ] **Componente Accordion:**
  - Pergunta clicável (expand/collapse)
  - Resposta oculta por padrão
  - Ícone + ou - para indicar estado
  - Animação suave de abertura

- [ ] **5 Perguntas Essenciais:**

  **1. Como funciona a aula experimental?**
  - "Você pode testar qualquer modalidade por 1 dia grátis! Basta agendar pelo WhatsApp e trazer roupa confortável."

  **2. Preciso de avaliação médica?**
  - "Recomendamos, mas não é obrigatório. Oferecemos avaliação física gratuita na matrícula."

  **3. Posso cancelar o plano?**
  - "Sim! O Plano Clube+ tem fidelidade de 12 meses, mas outros planos são flexíveis."

  **4. Quais modalidades estão inclusas?**
  - "Musculação, Aeróbox, Jump, Step, Fit Dance, Hit Box, Funcional e mais!"

  **5. Tem estacionamento?**
  - "Sim, área para estacionar veículos."

- [ ] **Implementação:**
  - Usar state React para controle de abertura
  - Apenas 1 pergunta aberta por vez (opcional)
  - Acessibilidade: navegação por teclado

**Entregáveis:**
- Componente Accordion funcional
- 5 perguntas implementadas
- Animações suaves

---

### 3.9 Seção CTA Final
**Objetivo:** Última chamada para conversão

**Sub-etapas:**
- [ ] **Estrutura da Seção:**
  - Full-width
  - Background: gradiente laranja/roxo vibrante
  - Padding generoso (py-16 → py-24)

- [ ] **Elementos de Conteúdo:**
  - Título: "Pronto para Sua Transformação?"
    - Font-size: text-4xl → text-6xl
    - Cor: branco
    - Font-weight: bold
  - Subtítulo: "Agende agora sua aula experimental grátis!"
    - Font-size: text-xl → text-2xl
    - Cor: branco/transparente

- [ ] **CTA Principal:**
  - Botão grande: "Quero Minha Aula Grátis"
  - Cor: branco com texto escuro
  - Tamanho: extra large (px-12 py-6)
  - Ícone WhatsApp
  - Tracking: evento GA4 `cta_final_click`

- [ ] **Elemento de Urgência:**
  - Badge: "Vagas limitadas por horário"
  - Posição: abaixo do botão
  - Cor: amarelo ou branco transparente

- [ ] **Responsividade:**
  - Conteúdo centralizado
  - Mobile: padding reduzido, font-sizes menores

**Entregáveis:**
- Seção CTA final impactante
- Botão funcional com tracking
- Elemento de urgência implementado

---

### 3.10 Rodapé (Footer)
**Objetivo:** Informações complementares e links legais

**Sub-etapas:**
- [ ] **Estrutura do Footer:**
  - Background: preto (#000000)
  - Cor do texto: branco/cinza claro
  - Padding: py-12

- [ ] **Layout 3 Colunas (Desktop):**

  **Coluna 1: Branding**
  - Logo Estiga Total (versão branca)
  - Tagline: "Sua melhor versão começa aqui"

  **Coluna 2: Redes Sociais**
  - Título: "Siga-nos"
  - Instagram: @estigatotal.academia (ícone + link)
  - WhatsApp: (83) 99190-7740 (ícone + link)
  - Badge: "11,8 mil seguidores"

  **Coluna 3: Links Legais**
  - "Política de Privacidade" (link para página dedicada)
  - "Termos de Uso" (opcional)

- [ ] **Barra de Copyright:**
  - Separador (linha horizontal)
  - Texto: "© 2025 Estiga Total Academia - Santa Rita/PB"
  - Centralizado
  - Font-size pequeno

- [ ] **Responsividade:**
  - Mobile: empilhado (1 coluna)
  - Tablet: 2 colunas
  - Desktop: 3 colunas

**Entregáveis:**
- Footer completo com 3 seções
- Links de redes sociais funcionais
- Copyright e links legais

---

## **FASE 4: FUNCIONALIDADES E INTEGRAÇÕES**

### 4.1 Implementação dos CTAs WhatsApp
**Objetivo:** Garantir conversão em todos os pontos de contato

**Sub-etapas:**
- [ ] **Configurar 4 Botões CTA:**
  1. Hero (acima da dobra)
  2. Após Prova Social
  3. Seção de Planos
  4. CTA Final

- [ ] **Link WhatsApp Padrão:**
  ```
  https://wa.me/5583991907740?text=Olá,%20quero%20agendar%20minha%20aula%20experimental%20na%20Estiga%20Total.
  ```

- [ ] **Adicionar UTM Parameters:**
  ```
  &utm_source=landing_estigatotal&utm_medium=cta&utm_campaign=aula_gratis
  ```

- [ ] **Comportamento por Dispositivo:**
  - Desktop: abre WhatsApp Web em nova aba
  - Mobile: abre app WhatsApp nativo
  - Usar `target="_blank"` e `rel="noopener noreferrer"`

- [ ] **Tracking de Eventos:**
  - Criar função `trackCTAClick(location)`
  - Enviar evento para Google Analytics:
    ```javascript
    gtag('event', 'cta_click', {
      'event_category': 'engagement',
      'event_label': location, // 'hero', 'social_proof', 'plans', 'final'
      'value': 1
    });
    ```

- [ ] **Testes:**
  - Testar em iPhone (Safari)
  - Testar em Android (Chrome)
  - Testar em desktop (Chrome, Firefox, Edge)
  - Validar mensagem pré-preenchida

**Entregáveis:**
- 4 CTAs funcionais
- Tracking implementado
- Testes em múltiplos dispositivos

---

### 4.2 Google Analytics 4
**Objetivo:** Rastrear comportamento e conversões

**Sub-etapas:**
- [ ] **Instalação do GA4:**
  - Adicionar script no `<head>` via `next/script`
  - Usar Measurement ID: `G-XXXXXXXXXX`
  - Configurar em `app/layout.tsx`

- [ ] **Eventos Personalizados:**
  - `page_view` (automático)
  - `cta_hero_click`
  - `cta_social_proof_click`
  - `cta_plans_click`
  - `cta_final_click`
  - `scroll_depth_25`
  - `scroll_depth_50`
  - `scroll_depth_75`
  - `scroll_depth_100`

- [ ] **Implementar Scroll Tracking:**
  - Hook `useScrollDepth`
  - Disparar eventos em 25%, 50%, 75%, 100%
  - Enviar apenas uma vez por sessão

- [ ] **Configurar Conversões:**
  - Definir `cta_click` como evento de conversão
  - Configurar funil de conversão no GA4

- [ ] **Palavra-chave Principal:**
  - Adicionar "academia santa rita" em meta tags
  - Configurar no Google Search Console

**Entregáveis:**
- GA4 instalado e funcional
- Eventos personalizados configurados
- Scroll tracking implementado

---

### 4.3 SEO e Meta Tags
**Objetivo:** Otimizar para mecanismos de busca

**Sub-etapas:**
- [ ] **Meta Tags Básicas:**
  ```html
  <title>Estiga Total Academia | Aula Grátis - Santa Rita/PB</title>
  <meta name="description" content="Academia completa em Santa Rita/PB. Musculação, Fit Dance, Jump, Aeróbox e mais! Plano Clube+ por R$49/mês. Agende sua aula experimental grátis.">
  <meta name="keywords" content="academia santa rita, academia santa rita pb, musculação santa rita, fit dance, plano academia">
  ```

- [ ] **Open Graph (Redes Sociais):**
  ```html
  <meta property="og:title" content="Estiga Total Academia - Sua melhor versão começa aqui">
  <meta property="og:description" content="Agende sua aula experimental grátis. Plano Clube+ por R$49/mês!">
  <meta property="og:image" content="/og-image.jpg">
  <meta property="og:url" content="https://estigatotal.com.br">
  <meta property="og:type" content="website">
  ```

- [ ] **Twitter Card:**
  ```html
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Estiga Total Academia">
  <meta name="twitter:description" content="Agende sua aula experimental grátis!">
  <meta name="twitter:image" content="/og-image.jpg">
  ```

- [ ] **Schema Markup (LocalBusiness):**
  ```json
  {
    "@context": "https://schema.org",
    "@type": "ExerciseGym",
    "name": "Estiga Total Academia",
    "image": "https://estigatotal.com.br/logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "R. Venâncio Correia, 182",
      "addressLocality": "Santa Rita",
      "addressRegion": "PB",
      "postalCode": "58300-000",
      "addressCountry": "BR"
    },
    "telephone": "+55-83-99190-7740",
    "openingHours": "Mo-Fr 05:00-22:00, Sa 08:00-11:00,14:00-17:00",
    "priceRange": "R$49-R$310",
    "url": "https://estigatotal.com.br"
  }
  ```

- [ ] **Criar Imagem OG:**
  - Dimensões: 1200x630px
  - Incluir logo, título e CTA visual
  - Salvar como `/public/og-image.jpg`

- [ ] **Sitemap.xml:**
  - Gerar sitemap automático (Next.js)
  - Incluir URL principal e página de política

- [ ] **Robots.txt:**
  ```
  User-agent: *
  Allow: /
  Sitemap: https://estigatotal.com.br/sitemap.xml
  ```

**Entregáveis:**
- Meta tags completas
- Schema markup implementado
- Imagem OG criada
- Sitemap e robots.txt configurados

---

### 4.4 Página de Política de Privacidade
**Objetivo:** Conformidade com LGPD

**Sub-etapas:**
- [ ] **Criar Rota `/politica-privacidade`:**
  - Arquivo: `app/politica-privacidade/page.tsx`

- [ ] **Conteúdo da Política (Seções):**
  
  **1. Introdução**
  - Compromisso com privacidade
  - Conformidade com LGPD

  **2. Dados Coletados**
  - Nome e telefone via WhatsApp
  - Dados de navegação (cookies, GA4)

  **3. Finalidade**
  - Agendamento de aula experimental
  - Comunicação comercial
  - Análise de comportamento (anônimo)

  **4. Compartilhamento**
  - Não compartilhamos com terceiros
  - Exceção: obrigações legais

  **5. Direitos do Titular**
  - Acesso aos dados
  - Correção de dados
  - Exclusão de dados
  - Portabilidade

  **6. Contato**
  - WhatsApp: (83) 99190-7740
  - E-mail: contato@estigatotal.com.br (se aplicável)

- [ ] **Layout da Página:**
  - Header simples com logo
  - Conteúdo em container estreito (max-w-3xl)
  - Tipografia legível
  - Footer padrão

**Entregáveis:**
- Página de política criada
- Conteúdo LGPD completo
- Link no footer funcional

---

## **FASE 5: OTIMIZAÇÃO E PERFORMANCE**

### 5.1 Otimização de Imagens
**Objetivo:** Reduzir tempo de carregamento

**Sub-etapas:**
- [ ] **Converter para WebP:**
  - Usar ferramenta: `sharp`, `squoosh`, ou `imagemin`
  - Qualidade: 80-85%
  - Manter fallback JPG

- [ ] **Gerar Versões Responsivas:**
  - Mobile: 640px width
  - Tablet: 1024px width
  - Desktop: 1920px width
  - Usar `next/image` com `sizes` attribute

- [ ] **Lazy Loading:**
  - Todas as imagens abaixo da dobra: `loading="lazy"`
  - Imagem hero: `priority={true}`

- [ ] **Placeholder Blur:**
  - Gerar base64 blur para cada imagem
  - Usar `placeholder="blur"` no `next/image`

- [ ] **Otimizar Logo:**
  - Converter para SVG (se possível)
  - Minificar SVG com `svgo`

**Entregáveis:**
- Todas as imagens em WebP
- Versões responsivas geradas
- Lazy loading configurado

---

### 5.2 Performance e Core Web Vitals
**Objetivo:** Atingir Lighthouse Score > 90

**Sub-etapas:**
- [ ] **Largest Contentful Paint (LCP):**
  - Meta: < 2.5s
  - Otimizar imagem hero
  - Usar `priority` no hero image
  - Preload de fontes críticas

- [ ] **First Input Delay (FID):**
  - Meta: < 100ms
  - Minimizar JavaScript
  - Code splitting por rota
  - Usar `next/dynamic` para componentes pesados

- [ ] **Cumulative Layout Shift (CLS):**
  - Meta: < 0.1
  - Definir `width` e `height` em todas as imagens
  - Reservar espaço para conteúdo dinâmico
  - Evitar inserção de conteúdo acima da dobra

- [ ] **Otimizar Fontes:**
  - Usar `next/font` para otimização automática
  - Preload de fontes críticas
  - `font-display: swap`

- [ ] **Minificação:**
  - CSS: automático no build
  - JavaScript: automático no build
  - HTML: configurar no Next.js

- [ ] **Compressão:**
  - Habilitar Gzip/Brotli no Netlify
  - Configurar headers de cache

**Entregáveis:**
- LCP < 2.5s
- FID < 100ms
- CLS < 0.1
- Lighthouse Score > 90

---

### 5.3 Acessibilidade (A11y)
**Objetivo:** Garantir WCAG AA

**Sub-etapas:**
- [ ] **Contraste de Cores:**
  - Validar com ferramenta: WebAIM Contrast Checker
  - Ratio mínimo: 4.5:1 (texto normal)
  - Ratio mínimo: 3:1 (texto grande)

- [ ] **Alt Text em Imagens:**
  - Todas as imagens com `alt` descritivo
  - Imagens decorativas: `alt=""`

- [ ] **Navegação por Teclado:**
  - Todos os CTAs acessíveis via Tab
  - Focus visible (outline)
  - Skip to content link (opcional)

- [ ] **Semântica HTML:**
  - Usar tags corretas: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
  - Hierarquia de headings: H1 → H2 → H3

- [ ] **ARIA Labels:**
  - Botões com ícones: `aria-label`
  - Links externos: `aria-label="Abre em nova aba"`

- [ ] **Testes:**
  - Validar com Lighthouse (Accessibility)
  - Testar com leitor de tela (NVDA ou VoiceOver)

**Entregáveis:**
- Contraste WCAG AA
- Alt text em todas as imagens
- Navegação por teclado funcional
- Score de acessibilidade > 90

---

## **FASE 6: TESTES E VALIDAÇÃO**

### 6.1 Testes de Responsividade
**Objetivo:** Garantir experiência perfeita em todos os dispositivos

**Sub-etapas:**
- [ ] **Testes em Dispositivos Reais:**
  - iPhone (Safari)
  - Android (Chrome)
  - iPad (Safari)
  - Desktop (Chrome, Firefox, Edge)

- [ ] **Testes em Emuladores:**
  - Chrome DevTools (Device Mode)
  - Breakpoints: 375px, 768px, 1024px, 1440px

- [ ] **Checklist de Responsividade:**
  - [ ] Hero: imagem e texto legíveis
  - [ ] Depoimentos: carrossel funcional em mobile
  - [ ] Benefícios: grid adapta corretamente
  - [ ] Modalidades: cronograma legível
  - [ ] Planos: card destacado visível
  - [ ] Galeria: masonry funciona em todos os tamanhos
  - [ ] Footer: colunas empilham corretamente
  - [ ] CTAs: tamanho adequado para toque (min 44x44px)

- [ ] **Orientação:**
  - Testar portrait e landscape
  - Validar em tablets

**Entregáveis:**
- Testes em 5+ dispositivos
- Checklist de responsividade completo
- Bugs corrigidos

---

### 6.2 Testes de Funcionalidade
**Objetivo:** Validar todas as interações

**Sub-etapas:**
- [ ] **CTAs WhatsApp:**
  - [ ] 4 botões redirecionam corretamente
  - [ ] Mensagem pré-preenchida aparece
  - [ ] Abre app correto (mobile vs desktop)
  - [ ] UTM parameters presentes

- [ ] **Links Externos:**
  - [ ] Instagram abre perfil correto
  - [ ] Google Maps abre localização correta
  - [ ] Política de Privacidade carrega

- [ ] **Navegação:**
  - [ ] Scroll suave (se implementado)
  - [ ] Logo volta ao topo
  - [ ] Todos os links funcionam

- [ ] **Formulários (se aplicável):**
  - N/A (apenas WhatsApp)

- [ ] **Carrossel/Accordion:**
  - [ ] Carrossel de depoimentos funciona
  - [ ] Accordion FAQ abre/fecha corretamente

- [ ] **Analytics:**
  - [ ] Eventos GA4 disparam corretamente
  - [ ] Scroll tracking funciona
  - [ ] Validar no Google Analytics Real-Time

**Entregáveis:**
- Checklist de funcionalidade completo
- Todos os links validados
- Analytics testado

---

### 6.3 Testes de Performance
**Objetivo:** Validar métricas de velocidade

**Sub-etapas:**
- [ ] **Lighthouse Audit:**
  - Performance: > 90
  - Accessibility: > 90
  - Best Practices: > 90
  - SEO: > 90

- [ ] **PageSpeed Insights:**
  - Testar URL de produção
  - Validar mobile e desktop
  - Corrigir sugestões críticas

- [ ] **WebPageTest:**
  - Testar de localização brasileira
  - Validar First Byte Time
  - Validar Start Render

- [ ] **Métricas Alvo:**
  - [ ] LCP < 2.5s
  - [ ] FID < 100ms
  - [ ] CLS < 0.1
  - [ ] TTI < 3s
  - [ ] Speed Index < 3s

**Entregáveis:**
- Lighthouse Score > 90 em todas as categorias
- PageSpeed Insights validado
- Métricas Core Web Vitals atingidas

---

### 6.4 Testes Cross-Browser
**Objetivo:** Garantir compatibilidade

**Sub-etapas:**
- [ ] **Navegadores Desktop:**
  - [ ] Chrome (últimas 2 versões)
  - [ ] Firefox (últimas 2 versões)
  - [ ] Safari (últimas 2 versões)
  - [ ] Edge (últimas 2 versões)

- [ ] **Navegadores Mobile:**
  - [ ] Safari iOS 13+
  - [ ] Chrome Android 9+
  - [ ] Samsung Internet

- [ ] **Checklist por Navegador:**
  - [ ] Layout renderiza corretamente
  - [ ] Fontes carregam
  - [ ] Imagens aparecem
  - [ ] CTAs funcionam
  - [ ] Animações suaves
  - [ ] Sem erros de console

**Entregáveis:**
- Testes em 7+ navegadores
- Bugs específicos corrigidos
- Fallbacks implementados (se necessário)

---

### 6.5 Testes de Conteúdo
**Objetivo:** Validar textos e informações

**Sub-etapas:**
- [ ] **Revisão de Textos:**
  - [ ] Ortografia e gramática
  - [ ] Consistência de tom de voz
  - [ ] CTAs claros e persuasivos

- [ ] **Validação de Informações:**
  - [ ] Endereço correto
  - [ ] Telefone correto (83) 99190-7740
  - [ ] Horários corretos
  - [ ] Preços corretos (R$ 49/mês)
  - [ ] Instagram handle correto (@estigatotal.academia)

- [ ] **Autorização de Imagens:**
  - [ ] Termos assinados pelos alunos (antes/depois)
  - [ ] Fotos da estrutura autorizadas
  - [ ] Logo em alta qualidade

- [ ] **SEO:**
  - [ ] Meta tags preenchidas
  - [ ] Alt text descritivo
  - [ ] Palavra-chave "academia santa rita" presente

**Entregáveis:**
- Conteúdo revisado e aprovado
- Informações validadas
- Autorizações coletadas

---

## **FASE 7: DEPLOY E LANÇAMENTO**

### 7.1 Preparação para Deploy
**Objetivo:** Configurar ambiente de produção

**Sub-etapas:**
- [ ] **Build de Produção:**
  - Executar `npm run build`
  - Validar build sem erros
  - Testar localmente: `npm run start`

- [ ] **Variáveis de Ambiente:**
  - `NEXT_PUBLIC_GA_MEASUREMENT_ID`
  - Outras variáveis (se aplicável)

- [ ] **Configurar Netlify:**
  - Criar conta Netlify
  - Conectar repositório GitHub/GitLab
  - Configurar build settings:
    - Build command: `npm run build`
    - Publish directory: `.next`

- [ ] **Domínio:**
  - Registrar domínio (se ainda não feito)
  - Configurar DNS no Netlify
  - Aguardar propagação (24-48h)

- [ ] **SSL/HTTPS:**
  - Habilitar SSL automático no Netlify
  - Forçar HTTPS

**Entregáveis:**
- Build de produção funcional
- Netlify configurado
- Domínio apontado

---

### 7.2 Deploy Inicial
**Objetivo:** Publicar versão 1.0

**Sub-etapas:**
- [ ] **Deploy no Netlify:**
  - Push para branch `main`
  - Aguardar build automático
  - Validar deploy bem-sucedido

- [ ] **Validação Pós-Deploy:**
  - [ ] Site carrega corretamente
  - [ ] HTTPS funciona
  - [ ] Todas as páginas acessíveis
  - [ ] Imagens carregam
  - [ ] CTAs funcionam

- [ ] **Testes em Produção:**
  - Repetir testes de funcionalidade
  - Validar Analytics em produção
  - Testar WhatsApp links

- [ ] **Configurar Redirects (se necessário):**
  - Criar arquivo `_redirects` no Netlify
  - Redirecionar www → non-www (ou vice-versa)

**Entregáveis:**
- Site publicado em produção
- Testes pós-deploy concluídos
- URL final funcional

---

### 7.3 Configuração Google Analytics
**Objetivo:** Ativar rastreamento em produção

**Sub-etapas:**
- [ ] **Validar Instalação:**
  - Abrir Google Analytics Real-Time
  - Acessar site em produção
  - Confirmar evento `page_view`

- [ ] **Configurar Conversões:**
  - Marcar `cta_click` como conversão
  - Configurar funil de conversão

- [ ] **Configurar Alertas:**
  - Alerta de queda de tráfego
  - Alerta de aumento de conversões

- [ ] **Integrar com Google Search Console:**
  - Adicionar propriedade no Search Console
  - Verificar propriedade (meta tag ou DNS)
  - Enviar sitemap

**Entregáveis:**
- GA4 rastreando corretamente
- Conversões configuradas
- Search Console integrado

---

### 7.4 Otimização SEO Local
**Objetivo:** Melhorar visibilidade em "academia santa rita"

**Sub-etapas:**
- [ ] **Google Meu Negócio:**
  - Criar/otimizar perfil
  - Adicionar fotos da academia
  - Preencher horários e endereço
  - Adicionar link do site

- [ ] **Diretórios Locais:**
  - Cadastrar em Bing Places
  - Cadastrar em diretórios locais (se aplicável)

- [ ] **Backlinks Locais:**
  - Parcerias com blogs locais
  - Menções em sites de Santa Rita/PB

- [ ] **Conteúdo Local:**
  - Mencionar "Santa Rita" e "Paraíba" no conteúdo
  - Adicionar referências locais

**Entregáveis:**
- Google Meu Negócio otimizado
- Cadastros em diretórios
- Estratégia de backlinks iniciada

---

### 7.5 Lançamento e Divulgação
**Objetivo:** Promover a landing page

**Sub-etapas:**
- [ ] **Anúncio nas Redes Sociais:**
  - Post no Instagram anunciando site
  - Stories com link direto
  - Destacar "aula grátis"

- [ ] **WhatsApp Status:**
  - Publicar status com link do site
  - Enviar para lista de contatos (se aplicável)

- [ ] **Anúncios Pagos (Opcional):**
  - Google Ads (palavra-chave: "academia santa rita")
  - Facebook/Instagram Ads (público local)

- [ ] **Parcerias Locais:**
  - Divulgar em grupos de WhatsApp locais
  - Parcerias com influenciadores locais

- [ ] **QR Code:**
  - Gerar QR Code do site
  - Imprimir para materiais físicos

**Entregáveis:**
- Posts de lançamento publicados
- Anúncios configurados (se aplicável)
- QR Code gerado

---

## **FASE 8: MONITORAMENTO E OTIMIZAÇÃO**

### 8.1 Monitoramento de Métricas
**Objetivo:** Acompanhar performance e conversões

**Sub-etapas:**
- [ ] **Dashboard Google Analytics:**
  - Acessar semanalmente
  - Monitorar métricas:
    - Usuários
    - Sessões
    - Taxa de rejeição
    - Tempo médio na página
    - Conversões (cliques CTA)

- [ ] **Relatório Semanal:**
  - Criar template de relatório
  - Incluir:
    - Visitas totais
    - Cliques em CTAs
    - Taxa de conversão
    - Origem do tráfego

- [ ] **Monitorar WhatsApp:**
  - Contar leads recebidos
  - Qualificar leads (agendaram aula?)
  - Calcular ROI

**Entregáveis:**
- Dashboard GA4 configurado
- Template de relatório criado
- Processo de monitoramento estabelecido

---

### 8.2 Testes A/B (Futuro)
**Objetivo:** Otimizar conversões continuamente

**Sub-etapas:**
- [ ] **Elementos para Testar:**
  - Cor do CTA (laranja vs roxo)
  - Texto do CTA ("Quero Aula Grátis" vs "Agendar Agora")
  - Posição do badge "1 dia grátis"
  - Imagem hero (estrutura vs pessoas)

- [ ] **Ferramentas:**
  - Google Optimize (gratuito)
  - Netlify Split Testing
  - Vercel A/B Testing

- [ ] **Metodologia:**
  - Testar 1 elemento por vez
  - Mínimo 100 conversões por variante
  - Significância estatística > 95%

**Entregáveis:**
- Plano de testes A/B
- Ferramenta escolhida
- Primeiros testes executados

---

### 8.3 Atualizações de Conteúdo
**Objetivo:** Manter site atualizado

**Sub-etapas:**
- [ ] **Atualizar Depoimentos:**
  - Adicionar novos antes/depois (trimestral)
  - Rotacionar depoimentos antigos

- [ ] **Atualizar Fotos:**
  - Adicionar fotos de eventos
  - Atualizar galeria da estrutura

- [ ] **Atualizar Cronograma:**
  - Revisar horários de aulas (mensal)
  - Adicionar novas modalidades

- [ ] **Atualizar Planos:**
  - Revisar preços (se houver mudança)
  - Adicionar promoções sazonais

**Entregáveis:**
- Processo de atualização definido
- Conteúdo atualizado regularmente

---

### 8.4 Melhorias Contínuas
**Objetivo:** Evoluir a landing page

**Sub-etapas:**
- [ ] **Feedback de Usuários:**
  - Coletar feedback via WhatsApp
  - Identificar pontos de fricção

- [ ] **Análise de Heatmaps (Opcional):**
  - Instalar Hotjar ou Microsoft Clarity
  - Analisar onde usuários clicam
  - Identificar áreas ignoradas

- [ ] **Melhorias Técnicas:**
  - Atualizar dependências (mensal)
  - Corrigir bugs reportados
  - Implementar novas features

- [ ] **SEO Contínuo:**
  - Monitorar posição no Google
  - Ajustar meta tags conforme necessário
  - Criar conteúdo adicional (blog?)

**Entregáveis:**
- Processo de feedback estabelecido
- Roadmap de melhorias
- Atualizações técnicas regulares

---

## **CHECKLIST FINAL DE ENTREGA**

### Funcional
- [ ] Todos os 4 botões WhatsApp funcionando corretamente
- [ ] Mensagem pré-preenchida aparece ao clicar
- [ ] Layout responsivo em mobile, tablet e desktop
- [ ] Todas as imagens otimizadas (WebP)
- [ ] 3 depoimentos antes/depois visíveis
- [ ] Cronograma de aulas completo
- [ ] Plano Clube+ destacado
- [ ] Galeria de estrutura funcional
- [ ] FAQ com accordion funcional
- [ ] Mapa/localização integrado
- [ ] Footer com redes sociais
- [ ] Política de Privacidade acessível

### Não Funcional
- [ ] Lighthouse Score > 90 (Performance)
- [ ] Lighthouse Score > 90 (Accessibility)
- [ ] Lighthouse Score > 90 (Best Practices)
- [ ] Lighthouse Score > 90 (SEO)
- [ ] Tempo de carregamento < 3s
- [ ] Zero erros de console JavaScript
- [ ] Meta tags SEO implementadas
- [ ] Schema markup LocalBusiness
- [ ] Open Graph tags configuradas
- [ ] Google Analytics rastreando
- [ ] Eventos personalizados funcionando
- [ ] Compatível com Chrome, Firefox, Safari, Edge
- [ ] Funcional em iOS 13+ e Android 9+

### Conteúdo
- [ ] Textos revisados (ortografia e gramática)
- [ ] Informações validadas (endereço, telefone, horários)
- [ ] Fotos autorizadas (termos assinados)
- [ ] Logo em alta qualidade
- [ ] Alt text em todas as imagens
- [ ] CTAs persuasivos e claros

### Deploy
- [ ] Site publicado no Netlify
- [ ] Domínio configurado
- [ ] HTTPS habilitado
- [ ] Google Analytics em produção
- [ ] Google Search Console configurado
- [ ] Google Meu Negócio otimizado

---

## **CRONOGRAMA ESTIMADO**

| Fase | Duração | Dependências |
|------|---------|--------------|
| **Fase 1: Preparação e Setup** | 2-3 dias | Coleta de assets |
| **Fase 2: Estrutura Base** | 2 dias | Fase 1 completa |
| **Fase 3: Seções da Landing Page** | 5-7 dias | Fase 2 completa |
| **Fase 4: Funcionalidades e Integrações** | 2-3 dias | Fase 3 completa |
| **Fase 5: Otimização e Performance** | 2 dias | Fase 4 completa |
| **Fase 6: Testes e Validação** | 2-3 dias | Fase 5 completa |
| **Fase 7: Deploy e Lançamento** | 1-2 dias | Fase 6 completa |
| **Fase 8: Monitoramento** | Contínuo | Pós-lançamento |

**Total Estimado:** 16-22 dias úteis (3-4 semanas)

---

## **RECURSOS NECESSÁRIOS**

### Humanos
- 1 Desenvolvedor Frontend (Next.js + Tailwind)
- 1 Designer (opcional, para ajustes visuais)
- 1 Copywriter (opcional, para revisão de textos)
- 1 Fotógrafo (para fotos profissionais da estrutura)

### Ferramentas
- Editor de código (VS Code)
- Figma/Sketch (design, opcional)
- Photoshop/Canva (edição de imagens)
- Google Analytics
- Google Search Console
- Netlify (hospedagem)

### Assets
- Logo Estiga Total (SVG/PNG)
- 3 conjuntos de fotos antes/depois
- 6-8 fotos da estrutura
- 5-6 fotos das modalidades
- Termos de autorização assinados

---

## **RISCOS E MITIGAÇÕES**

| Risco | Impacto | Probabilidade | Mitigação |
|-------|---------|---------------|-----------|
| Fotos sem autorização | Alto | Média | Coletar termos antes do deploy |
| WhatsApp bloqueado por spam | Alto | Baixa | Usar WhatsApp Business + auto-respostas |
| Atraso na coleta de assets | Médio | Alta | Usar placeholders temporários |
| Performance abaixo do esperado | Médio | Baixa | Otimizar imagens agressivamente |
| Bugs cross-browser | Baixo | Média | Testes extensivos em múltiplos navegadores |

---

## **PRÓXIMOS PASSOS IMEDIATOS**

1. ✅ **Validar PRD com cliente**
2. ⏳ **Coletar e autorizar imagens (antes/depois)**
3. ⏳ **Obter logo em alta qualidade**
4. ⏳ **Inicializar projeto Next.js**
5. ⏳ **Configurar Google Analytics**
6. ⏳ **Começar desenvolvimento (Fase 2)**

---

**Documento criado em:** Janeiro 2025  
**Versão:** 1.0  
**Responsável:** Equipe de Desenvolvimento  
**Cliente:** Estiga Total Academia - Santa Rita/PB

---

**FIM DO PLANO DE EXECUÇÃO**
