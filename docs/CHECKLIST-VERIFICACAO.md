# ✅ Checklist de Verificação - Fase 3.2

## 🎯 Antes de Publicar em Produção

### 📸 Imagens
- [ ] Substituir imagens do Unsplash por fotos reais dos alunos
- [ ] Verificar dimensões (600x800px, proporção 3:4)
- [ ] Otimizar em WebP (80-85% qualidade)
- [ ] Adicionar em `public/images/testimonials/`
- [ ] Testar carregamento em diferentes dispositivos

### 📝 Conteúdo
- [ ] Coletar depoimentos reais dos alunos
- [ ] Validar nomes e resultados
- [ ] Revisar textos (ortografia e gramática)
- [ ] Confirmar avaliações (5 estrelas)
- [ ] Atualizar array `testimonials` no código

### ⚖️ Legal (LGPD)
- [ ] Obter autorizações assinadas de todos os alunos
- [ ] Arquivar termos de autorização
- [ ] Confirmar consentimento para uso online
- [ ] Informar alunos sobre direito de revogação
- [ ] Criar processo para remoção de imagens

### 🧪 Testes

#### Desktop (1920px)
- [ ] Verificar layout 3 colunas
- [ ] Testar hover nos cards
- [ ] Verificar zoom nas imagens
- [ ] Testar clique no CTA
- [ ] Validar redirecionamento WhatsApp

#### Tablet (768px)
- [ ] Verificar carrossel 2 cards
- [ ] Testar scroll horizontal
- [ ] Verificar dots de navegação
- [ ] Testar clique nos dots

#### Mobile (375px)
- [ ] Verificar carrossel 1 card
- [ ] Testar swipe/scroll
- [ ] Verificar snap automático
- [ ] Testar dots interativos
- [ ] Validar botão CTA (tamanho adequado)

### 🎨 Design
- [ ] Verificar consistência de cores
- [ ] Validar tipografia (tamanhos e pesos)
- [ ] Conferir espaçamentos
- [ ] Testar animações (suavidade)
- [ ] Verificar contraste (acessibilidade)

### ⚡ Performance
- [ ] Testar tempo de carregamento (LCP < 2.5s)
- [ ] Verificar lazy loading das imagens
- [ ] Validar CLS (< 0.1)
- [ ] Testar em conexão 3G
- [ ] Verificar tamanho das imagens (< 200KB cada)

### 🔗 Funcionalidades
- [ ] Testar link WhatsApp
- [ ] Verificar mensagem pré-preenchida
- [ ] Validar abertura em nova aba
- [ ] Testar em diferentes navegadores
  - [ ] Chrome
  - [ ] Firefox
  - [ ] Safari
  - [ ] Edge
  - [ ] Mobile Safari
  - [ ] Chrome Mobile

### 📊 Analytics (Opcional)
- [ ] Configurar evento GA4 `cta_social_proof_click`
- [ ] Testar tracking de cliques
- [ ] Configurar scroll tracking
- [ ] Validar dados no Google Analytics

### ♿ Acessibilidade
- [ ] Verificar alt text nas imagens
- [ ] Testar navegação por teclado
- [ ] Validar ARIA labels
- [ ] Testar com leitor de tela
- [ ] Verificar contraste de cores (WCAG AA)

### 🔍 SEO
- [ ] Validar alt text descritivo
- [ ] Verificar heading hierarchy (h2)
- [ ] Confirmar texto legível (não em imagens)
- [ ] Testar structured data (opcional)

---

## 🚀 Checklist de Deploy

### Pré-Deploy
- [ ] Executar `npm run build`
- [ ] Verificar erros de build
- [ ] Testar build localmente (`npm start`)
- [ ] Validar todas as imagens carregam
- [ ] Confirmar links funcionam

### Deploy Netlify
- [ ] Fazer commit das alterações
- [ ] Push para repositório
- [ ] Aguardar build automático
- [ ] Verificar preview deploy
- [ ] Testar em preview URL
- [ ] Aprovar para produção

### Pós-Deploy
- [ ] Testar site em produção
- [ ] Verificar todas as funcionalidades
- [ ] Testar em dispositivos reais
- [ ] Validar performance (Lighthouse)
- [ ] Monitorar erros (Sentry/console)

---

## 📱 Dispositivos para Teste

### Mobile
- [ ] iPhone 12/13/14 (Safari)
- [ ] Samsung Galaxy S21/S22 (Chrome)
- [ ] Xiaomi/Redmi (Chrome)
- [ ] Moto G (Chrome)

### Tablet
- [ ] iPad (Safari)
- [ ] Samsung Galaxy Tab (Chrome)

### Desktop
- [ ] Windows (Chrome, Edge, Firefox)
- [ ] macOS (Safari, Chrome)
- [ ] Linux (Chrome, Firefox)

---

## 🐛 Troubleshooting Comum

### Imagens não aparecem
```
✓ Verificar caminho correto
✓ Confirmar extensão (.webp, .jpg)
✓ Validar next.config.mjs (remotePatterns)
✓ Limpar cache (.next/)
✓ Rebuild do projeto
```

### Carrossel não funciona
```
✓ Verificar classe scrollbar-hide
✓ Confirmar tailwind.config.ts atualizado
✓ Testar em navegador diferente
✓ Verificar JavaScript habilitado
✓ Inspecionar console para erros
```

### CTA não redireciona
```
✓ Validar número WhatsApp
✓ Confirmar formato do link
✓ Testar em dispositivo mobile
✓ Verificar WhatsApp instalado
✓ Testar mensagem pré-preenchida
```

### Performance ruim
```
✓ Otimizar imagens (WebP, compressão)
✓ Reduzir tamanho das imagens
✓ Verificar lazy loading
✓ Testar em conexão lenta
✓ Usar Lighthouse para diagnóstico
```

---

## 📞 Suporte

### Documentação
- `docs/secao-prova-social-README.md` - Guia completo
- `docs/FASE-3.2-CONCLUIDA.md` - Detalhes da implementação
- `docs/PREVIEW-VISUAL-SECAO.md` - Preview visual
- `docs/termo-autorizacao-imagem.md` - Termo LGPD

### Comandos Úteis
```bash
# Desenvolvimento
npm run dev

# Build
npm run build

# Produção local
npm start

# Limpar cache
rm -rf .next

# Reinstalar dependências
rm -rf node_modules && npm install
```

### Contatos
- **Desenvolvedor:** [Seu nome/contato]
- **Cliente:** Estiga Total Academia
- **WhatsApp:** (83) 99190-7740

---

## ✅ Aprovação Final

- [ ] Cliente aprovou design
- [ ] Cliente aprovou conteúdo
- [ ] Testes concluídos com sucesso
- [ ] Performance validada
- [ ] Acessibilidade verificada
- [ ] LGPD em conformidade
- [ ] Pronto para produção

**Data de Aprovação:** ____/____/________

**Assinatura Cliente:** _______________________________

**Assinatura Desenvolvedor:** _______________________________

---

**Estiga Total Academia**  
Landing Page - Fase 3.2  
Janeiro 2025
