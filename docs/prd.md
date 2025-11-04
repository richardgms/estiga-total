# PRD - Landing Page Estiga Total Academia
## Product Requirements Document

---

## 1. VISÃO GERAL DO PROJETO

### 1.1 Nome do Projeto
Landing Page de Captação de Leads - Estiga Total Academia

### 1.2 Objetivo
Desenvolver uma landing page para captar novos leads através de aula experimental gratuita, com botões de conversão direcionando para WhatsApp com mensagem personalizada.

### 1.3 Contexto
A Estiga Total Academia é um centro de fitness localizado em Santa Rita/PB que oferece diversas modalidades de treino (musculação e aulas coletivas). A landing page será o principal canal digital de captação de novos alunos, apresentando a estrutura, diferenciais e planos da academia.

---

## 2. OBJETIVOS E MÉTRICAS

### 2.1 Objetivo Principal
Gerar leads qualificados para aula experimental gratuita via WhatsApp

### 2.2 Público-Alvo
Público geral de academia (18-50 anos) interessado em:
- Musculação
- Emagrecimento
- Condicionamento físico
- Aulas coletivas (Fit Dance, Jump, Aeróbox, Hit Box, Funcional)

### 2.3 Métricas de Sucesso
- CTR (Click-Through Rate) do CTA principal
- Conversões para WhatsApp (cliques no botão)
- Leads qualificados (agendamentos confirmados via WhatsApp)

---

## 3. ESPECIFICAÇÕES TÉCNICAS

### 3.1 Stack Tecnológica
- **Frontend:** Next.js + Tailwind CSS
- **Hospedagem:** Netlify
- **Analytics:** Google Analytics (palavra-chave: "academia santa rita")

### 3.2 Responsividade
- Mobile-first
- Breakpoints: mobile (< 768px), tablet (768-1024px), desktop (> 1024px)

### 3.3 Performance
- Lighthouse Score: > 90
- Tempo de carregamento: < 3s
- Imagens otimizadas (WebP)

---

## 4. IDENTIDADE VISUAL

### 4.1 Paleta de Cores
- **Primária:** Preto (#000000)
- **Secundária:** Laranja/Roxo (#FF6B00 / #8B00FF)
- **Neutra:** Branco (#FFFFFF)

### 4.2 Tipografia
- Títulos: Bold, impactante
- Corpo: Legível, clean

### 4.3 Tom e Estilo
- Energético e moderno
- Inspirador e motivacional
- Acessível e inclusivo

---

## 5. ESTRUTURA DA LANDING PAGE

### 5.1 Arquitetura de Informação

#### **SEÇÃO 1: HERO**
**Objetivo:** Capturar atenção e apresentar proposta de valor

**Elementos:**
- Logo Estiga Total Academia
- Título: "Sua melhor versão começa aqui"
- Subtítulo: "Estrutura completa, profissionais qualificados e planos acessíveis."
- CTA Principal: "Quero minha aula grátis"
- Imagem de fundo: Foto do espaço ou alunos treinando
- Badge: "1 dia grátis - Qualquer modalidade"

**Ação do CTA:**
- Redireciona para WhatsApp: 83991907740
- Mensagem pré-preenchida: "Olá, quero agendar minha aula experimental na Estiga Total."

---

#### **SEÇÃO 2: PROVA SOCIAL (Antes & Depois)**
**Objetivo:** Validar resultados e criar conexão emocional

**Elementos:**
- Título: "Transformações Reais"
- 3 cards de depoimentos com:
  - Foto antes/depois
  - Nome do aluno
  - Resultado (ex: "-22kg em 6 meses")
  - Avaliação em estrelas (5★)
  - Depoimento breve (2-3 linhas)
- Layout: Grid 3 colunas (desktop) / Carrossel (mobile)

**Exemplo de estrutura:**
```
[Foto Antes] [Foto Depois]
João Silva
-22kg em 6 meses
★★★★★
"O treino com Joelma foi adaptado ao meu dia corrido..."
```

---

#### **SEÇÃO 3: BENEFÍCIOS DA ESTIGA TOTAL**
**Objetivo:** Destacar diferenciais competitivos

**Elementos:**
- Título: "Por que treinar na Estiga Total?"
- 4 cards de benefícios (ícone + texto):

1. **Equipe Qualificada**
   - Profissionais certificados e experientes
   - Acompanhamento personalizado em todas as modalidades

2. **Estrutura Completa**
   - Equipamentos de última geração
   - Ambiente climatizado e higienizado

3. **Flexibilidade de Horários**
   - Seg a Sex: 05h às 22h
   - Sáb: 8h às 11h e 14h às 17h

4. **Aulas Coletivas Inclusas**
   - Mais de 8 modalidades no mesmo plano
   - Traga um amigo grátis a cada 30 dias

---

#### **SEÇÃO 4: MODALIDADES**
**Objetivo:** Apresentar variedade de atividades

**Elementos:**
- Título: "Escolha Seu Treino"
- Subtítulo: "Todas as modalidades inclusas no plano"

**Lista de modalidades (com cronograma):**

**Musculação**
- Equipamentos modernos
- Acompanhamento profissional
- Treinos personalizados

**Aulas Coletivas:**
- **Segunda-feira**
  - 06h: Aeróbox (Elias)
  - 17h: Jump + Step (Nelsinho)
  - 19h: Fit Dance (Lorrany)

- **Terça-feira**
  - 06h: Hit Box - Samba Trigueiro
  - 19h: Jump + Step (Valderão Neto)

- **Quarta-feira**
  - 17h: Jump + Step (Nelsinho)
  - 19h: Aeróbox (Elias)

- **Quinta-feira**
  - 19h: Fit Dance (Lorrany)

- **Sexta-feira**
  - 17h: Hit Box (Poly)

**Layout:** Cards visuais com fotos das aulas + horários integrados

---

#### **SEÇÃO 5: PLANOS**
**Objetivo:** Apresentar oferta comercial irresistível

**Elementos:**
- Título: "Planos que Cabem no Seu Bolso"
- Destaque visual para o Plano Clube+

**Plano Clube+ (Card destacado em laranja/roxo):**
```
PLANO CLUBE+
R$ 49,00/mês*

✓ 1 ano de treino garantido
✓ Avaliação física gratuita
✓ Todas as modalidades inclusas (8+)
✓ Traga um amigo a cada 30 dias
✓ Primeira e última mensalidade: R$ 1,00
✓ Demais mensalidades em 10x de R$ 49,00

*Economia de R$ 310 comparado ao plano mensal
```

**CTA:** "Garanta Seu Plano Clube+"

**Obs:** Link no rodapé: "Conheça outros planos" → WhatsApp

---

#### **SEÇÃO 6: ESTRUTURA E SERVIÇOS**
**Objetivo:** Mostrar infraestrutura física

**Elementos:**
- Título: "Conheça Nossa Estrutura"
- Galeria de fotos (6-8 imagens):
  - Área de musculação
  - Espaço de aulas coletivas
  - Vestiários
  - Recepção
  - Equipamentos
- Layout: Grid masonry (Pinterest-style)

---

#### **SEÇÃO 7: LOCALIZAÇÃO E HORÁRIOS**
**Objetivo:** Facilitar visita presencial

**Elementos:**
- Título: "Visite Nossa Academia"

**Informações:**
```
📍 Endereço:
R. Venâncio Correia, 182
Bairro Popular, Santa Rita - PB

⏰ Horário de Funcionamento:
Segunda a Sexta: 05h às 22h
Sábado: 8h às 11h | 14h às 17h

📞 WhatsApp:
(83) 99190-7740
```

**Elementos visuais:**
- Ícone de localização
- Botão: "Como Chegar" (link Google Maps)
- Botão: "Falar no WhatsApp"

---

#### **SEÇÃO 8: FAQ**
**Objetivo:** Eliminar objeções

**Perguntas:**

1. **Como funciona a aula experimental?**
   "Você pode testar qualquer modalidade por 1 dia grátis! Basta agendar pelo WhatsApp e trazer roupa confortável."

2. **Preciso de avaliação médica?**
   "Recomendamos, mas não é obrigatório. Oferecemos avaliação física gratuita na matrícula."

3. **Posso cancelar o plano?**
   "Sim! O Plano Clube+ tem fidelidade de 12 meses, mas outros planos são flexíveis."

4. **Quais modalidades estão inclusas?**
   "Musculação, Aeróbox, Jump, Step, Fit Dance, Hit Box, Funcional e mais!"

5. **Tem estacionamento?**
   "Sim, área para estacionar veículos."

---

#### **SEÇÃO 9: CTA FINAL**
**Objetivo:** Última chamada para conversão

**Elementos:**
- Fundo com gradiente laranja/roxo
- Título: "Pronto para Sua Transformação?"
- Subtítulo: "Agende agora sua aula experimental grátis!"
- Botão grande: "Quero Minha Aula Grátis"
- Urgência: "Vagas limitadas por horário"

---

#### **RODAPÉ**
**Elementos:**
- Logo Estiga Total
- Redes sociais:
  - Instagram: @estigatotal.academia
  - WhatsApp: (83) 99190-7740
- Links legais:
  - Política de Privacidade
- Copyright: "© 2025 Estiga Total Academia - Santa Rita/PB"

---

## 6. FUNCIONALIDADES DETALHADAS

### 6.1 Botões de WhatsApp

**Quantidade:** 4 botões CTAs ao longo da página
**Locais:**
1. Hero (acima da dobra)
2. Após Prova Social
3. Seção de Planos
4. CTA Final

**Configuração técnica:**
```
Link: https://wa.me/5583991907740?text=Olá,%20quero%20agendar%20minha%20aula%20experimental%20na%20Estiga%20Total.

UTM Source: ?utm_source=landing_estigatotal
```

**Comportamento:**
- Desktop: Abre WhatsApp Web
- Mobile: Abre app WhatsApp
- Rastreamento: Google Analytics Event (clique_cta_whatsapp)

---

### 6.2 Formulário de Contato
**Status:** NÃO será implementado (apenas WhatsApp)

---

### 6.3 Otimização para Conversão

**Elementos de urgência:**
- "Vagas limitadas por horário"
- "Oferta por tempo limitado" (se aplicável)

**Elementos de confiança:**
- Depoimentos reais com fotos
- Avaliações 5 estrelas
- "11,8 mil seguidores no Instagram"

---

## 7. CONTEÚDO E COPY

### 7.1 Headline (Hero)
"Sua melhor versão começa aqui"

### 7.2 Subheadline
"Estrutura completa, profissionais qualificados e planos acessíveis."

### 7.3 CTAs
- Principal: "Quero Minha Aula Grátis"
- Secundário: "Falar com um Consultor"
- Planos: "Garanta Seu Plano Clube+"

### 7.4 Tom de Voz
- Motivacional
- Direto e objetivo
- Inclusivo (para todos os níveis)
- Amigável e acessível

---

## 8. CONTEÚDO VISUAL

### 8.1 Imagens Necessárias

**Prioridade Alta:**
- 1 imagem hero (alta resolução, landscape)
- 3 fotos antes/depois com depoimentos
- 6-8 fotos da estrutura física
- Logo Estiga Total (SVG ou PNG transparente)

**Prioridade Média:**
- Fotos das modalidades (aulas coletivas)
- Ícones customizados (benefícios)

**Formato:**
- Fotos: WebP (otimizado), fallback JPG
- Logo: SVG vetorial
- Dimensões hero: 1920x1080px

---

### 8.2 Ícones
- Benefícios: Font Awesome ou Lucide Icons
- Redes sociais: Logos oficiais
- Localização: Google Maps embed

---

## 9. INTEGRAÇÕES

### 9.1 WhatsApp Business
- Número: (83) 99190-7740
- Link direto com mensagem pré-preenchida
- Rastreamento de cliques

### 9.2 Google Analytics
- Palavra-chave principal: "academia santa rita"
- Eventos rastreados:
  - Clique no CTA (por seção)
  - Scroll depth
  - Tempo na página

### 9.3 Redes Sociais
- Instagram: @estigatotal.academia (embed feed ou link)
- Meta Pixel: NÃO solicitado

---

## 10. SEO E PERFORMANCE

### 10.1 Meta Tags
```html
<title>Estiga Total Academia | Aula Grátis - Santa Rita/PB</title>
<meta name="description" content="Academia completa em Santa Rita/PB. Musculação, Fit Dance, Jump, Aeróbox e mais! Plano Clube+ por R$49/mês. Agende sua aula experimental grátis.">
<meta name="keywords" content="academia santa rita, academia santa rita pb, musculação santa rita, fit dance, plano academia">
```

### 10.2 Schema Markup (LocalBusiness)
```json
{
  "@context": "https://schema.org",
  "@type": "ExerciseGym",
  "name": "Estiga Total Academia",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "R. Venâncio Correia, 182",
    "addressLocality": "Santa Rita",
    "addressRegion": "PB",
    "addressCountry": "BR"
  },
  "telephone": "+55-83-99190-7740",
  "openingHours": "Mo-Fr 05:00-22:00, Sa 08:00-11:00,14:00-17:00",
  "priceRange": "R$49-R$310"
}
```

### 10.3 Open Graph (compartilhamento social)
```html
<meta property="og:title" content="Estiga Total Academia - Sua melhor versão começa aqui">
<meta property="og:description" content="Agende sua aula experimental grátis. Plano Clube+ por R$49/mês!">
<meta property="og:image" content="/og-image.jpg">
<meta property="og:url" content="https://estigatotal.com.br">
```

---

## 11. POLÍTICA DE PRIVACIDADE E LGPD

### 11.1 Implementação
- Link simples no rodapé: "Política de Privacidade"
- Página dedicada com texto padrão LGPD

### 11.2 Conteúdo da Política (resumo)
- Coleta de dados: nome, telefone via WhatsApp
- Uso: agendamento de aula experimental e comunicação comercial
- Não compartilhamento com terceiros
- Direito de exclusão mediante solicitação

---

## 12. CRONOGRAMA E ENTREGÁVEIS

### Fase 1: Design (Não solicitado no PRD)
### Fase 2: Desenvolvimento (Não solicitado no PRD)
### Fase 3: Testes (Não solicitado no PRD)

**Nota:** Cliente solicitou remoção de cronograma do PRD.

---

## 13. REQUISITOS NÃO FUNCIONAIS

### 13.1 Compatibilidade
- Chrome, Firefox, Safari, Edge (últimas 2 versões)
- iOS 13+ / Android 9+

### 13.2 Acessibilidade
- Contraste WCAG AA
- Alt text em imagens
- Navegação por teclado

### 13.3 Performance
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Lazy loading de imagens

---

## 14. RISCOS E MITIGAÇÕES

### 14.1 Riscos Identificados

**Risco:** Fotos de antes/depois sem autorização
**Mitigação:** Validar termo de uso de imagem antes do deploy

**Risco:** WhatsApp bloqueado por volume de mensagens
**Mitigação:** Usar WhatsApp Business + auto-respostas

**Risco:** Concorrência com anúncios pagos
**Mitigação:** Otimizar SEO local + Google Meu Negócio

---

## 15. CRITÉRIOS DE ACEITE

### 15.1 Funcional
✅ Todos os 4 botões WhatsApp funcionando corretamente  
✅ Mensagem pré-preenchida aparece ao clicar  
✅ Layout responsivo em mobile, tablet e desktop  
✅ Todas as imagens otimizadas (WebP)  
✅ 3 depoimentos antes/depois visíveis  

### 15.2 Não Funcional
✅ Lighthouse Score > 90  
✅ Tempo de carregamento < 3s  
✅ Zero erros de console JavaScript  
✅ Meta tags SEO implementadas  

---

## 16. APROVAÇÕES

### 16.1 Stakeholders
- **Cliente:** Estiga Total Academia
- **Responsável:** [Nome do gestor]
- **Desenvolvedor:** [A definir]

### 16.2 Sign-off
- [ ] Design aprovado
- [ ] Conteúdo revisado
- [ ] Fotos validadas (autorização de uso)
- [ ] Testes realizados
- [ ] Deploy realizado

---

## 17. ANEXOS

### 17.1 Referências Visuais
- Logo Estiga Total: /uploads/Instagram.png
- Cronograma de aulas: /uploads/image.png (cronograma)
- Plano Clube+: /uploads/image.png (oferta R$49)
- Fotos antes/depois: /uploads/image.png (exemplos)

### 17.2 Links Úteis
- Instagram: instagram.com/estigatotal.academia
- WhatsApp: wa.me/5583991907740

---

## 18. CONTROLE DE VERSÃO

| Versão | Data | Autor | Alterações |
|--------|------|-------|------------|
| 1.0 | 04/11/2025 | Claude AI | Criação do PRD baseado em questionário |

---

## 19. GLOSSÁRIO

- **CTA (Call-to-Action):** Botão ou link que incentiva ação do usuário
- **Hero:** Primeira seção visível da página
- **UTM:** Parâmetros de rastreamento de origem de tráfego
- **WebP:** Formato de imagem otimizado para web
- **Schema Markup:** Código estruturado para SEO

---

## 20. CONTATOS DO PROJETO

**Estiga Total Academia**
- WhatsApp: (83) 99190-7740
- Instagram: @estigatotal.academia
- Endereço: R. Venâncio Correia, 182 - Santa Rita/PB

---

**FIM DO DOCUMENTO**

---

## PRÓXIMOS PASSOS

1. ✅ Validação do PRD pelo cliente
2. ⏳ Coleta e autorização de imagens (antes/depois)
3. ⏳ Desenvolvimento frontend (Next.js + Tailwind)
4. ⏳ Testes de responsividade e performance
5. ⏳ Deploy no Netlify
6. ⏳ Configuração Google Analytics
7. ⏳ Lançamento e divulgação

---

*Documento criado em 04/11/2025 para o projeto de Landing Page da Estiga Total Academia.*