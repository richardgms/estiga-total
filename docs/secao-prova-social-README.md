# Seção Prova Social - Instruções de Uso

## 📋 Visão Geral

A seção de Prova Social (Antes & Depois) foi implementada seguindo a Fase 3.2 do plano de execução. Esta seção exibe transformações reais de alunos da Estiga Total Academia.

## ✨ Características Implementadas

### Layout e Design
- ✅ Título: "Transformações Reais"
- ✅ Subtítulo: "Veja os resultados de quem treina na Estiga Total"
- ✅ Background: gradiente sutil branco/cinza com efeitos radiais laranja
- ✅ Identidade visual consistente com a seção Hero

### Componente TestimonialCard
- ✅ Layout: 2 imagens lado a lado (antes/depois)
- ✅ Badges "ANTES" e "DEPOIS" nas imagens
- ✅ Nome do aluno em negrito
- ✅ Resultado destacado com gradiente laranja (ex: "-22kg em 6 meses")
- ✅ Avaliação: 5 estrelas
- ✅ Depoimento em itálico
- ✅ Efeitos hover: sombra e zoom nas imagens
- ✅ Bordas arredondadas e sombras sutis

### Grid Responsivo
- ✅ Desktop: 3 colunas
- ✅ Tablet: 2 colunas (via carrossel)
- ✅ Mobile: carrossel horizontal com scroll suave

### Carrossel Mobile
- ✅ Scroll horizontal suave com snap
- ✅ Indicadores de página (dots) interativos
- ✅ Touch-friendly (swipe)
- ✅ Navegação por clique nos dots

### CTA Secundário
- ✅ Botão: "Quero Minha Transformação"
- ✅ Integração com WhatsApp
- ✅ Estilo consistente com o Hero

## 🖼️ Como Substituir as Imagens Placeholder

Atualmente, a seção usa imagens do Unsplash como placeholder. Para usar imagens reais dos alunos:

### Opção 1: Imagens Locais (Recomendado)

1. **Prepare as imagens:**
   - Formato: WebP (recomendado) ou JPG
   - Dimensões: 600x800px (proporção 3:4)
   - Qualidade: 80-85%
   - Nomeação: `nome-before.webp` e `nome-after.webp`

2. **Adicione as imagens:**
   ```
   public/
     images/
       testimonials/
         maria-before.webp
         maria-after.webp
         joao-before.webp
         joao-after.webp
         ana-before.webp
         ana-after.webp
   ```

3. **Atualize o código em `components/sections/SocialProof.tsx`:**
   ```typescript
   const testimonials: Testimonial[] = [
     {
       id: 1,
       name: 'Maria Silva',
       result: '-22kg em 6 meses',
       rating: 5,
       testimonial: 'Seu depoimento aqui...',
       beforeImage: '/images/testimonials/maria-before.webp',
       afterImage: '/images/testimonials/maria-after.webp',
     },
     // ... outros depoimentos
   ];
   ```

### Opção 2: Imagens Externas

Se preferir usar imagens hospedadas externamente:

1. **Configure o domínio em `next.config.mjs`:**
   ```javascript
   remotePatterns: [
     {
       protocol: 'https',
       hostname: 'seu-dominio.com',
     },
   ],
   ```

2. **Use URLs completas:**
   ```typescript
   beforeImage: 'https://seu-dominio.com/imagens/maria-before.webp',
   afterImage: 'https://seu-dominio.com/imagens/maria-after.webp',
   ```

## 📝 Como Adicionar/Editar Depoimentos

Edite o array `testimonials` em `components/sections/SocialProof.tsx`:

```typescript
const testimonials: Testimonial[] = [
  {
    id: 1,                                    // ID único
    name: 'Nome do Aluno',                    // Nome completo
    result: '-22kg em 6 meses',               // Resultado destacado
    rating: 5,                                // Avaliação (1-5 estrelas)
    testimonial: 'Depoimento do aluno...',    // 2-3 linhas
    beforeImage: '/caminho/antes.webp',       // Imagem antes
    afterImage: '/caminho/depois.webp',       // Imagem depois
  },
  // Adicione mais depoimentos aqui
];
```

## ⚖️ Considerações Legais (LGPD)

**IMPORTANTE:** Antes de publicar fotos de alunos:

1. ✅ Obtenha autorização por escrito de cada aluno
2. ✅ Explique claramente como as imagens serão usadas
3. ✅ Guarde os termos de autorização assinados
4. ✅ Permita que os alunos solicitem remoção a qualquer momento

Modelo de termo de autorização disponível em: `docs/termo-autorizacao-imagem.md`

## 🎨 Customizações Disponíveis

### Alterar Cores
As cores seguem o padrão do Tailwind configurado:
- Laranja principal: `text-secondary-orange` (#FF6B00)
- Preto: `text-primary` (#000000)
- Branco: `text-neutral` (#FFFFFF)

### Ajustar Quantidade de Depoimentos
- Desktop: Ajuste `grid-cols-3` para `grid-cols-2` ou `grid-cols-4`
- Mobile: O carrossel se adapta automaticamente

### Modificar Animações
- Hover nas imagens: `group-hover:scale-105`
- Transições: `transition-all duration-300`

## 🔧 Troubleshooting

### Imagens não aparecem
1. Verifique se o caminho está correto
2. Confirme que as imagens estão em `public/images/testimonials/`
3. Para imagens externas, verifique o `next.config.mjs`

### Carrossel não funciona no mobile
1. Verifique se a classe `scrollbar-hide` está aplicada
2. Confirme que o Tailwind config tem o plugin customizado

### Dots não mudam de cor
1. Verifique o estado `activeSlide`
2. Teste o scroll manual no carrossel

## 📱 Responsividade Testada

- ✅ Desktop (1920px+)
- ✅ Laptop (1024px - 1919px)
- ✅ Tablet (768px - 1023px)
- ✅ Mobile (320px - 767px)

## 🚀 Performance

- Lazy loading automático via Next.js Image
- Imagens otimizadas em WebP/AVIF
- Scroll suave com CSS scroll-snap
- Transições GPU-accelerated

## 📞 Suporte

Para dúvidas ou problemas, consulte:
- Documentação Next.js: https://nextjs.org/docs
- Plano de Execução: `docs/plano-execucao.md`
