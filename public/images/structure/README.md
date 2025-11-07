# Guia de Imagens - Seção "Conheça Nossa Estrutura"

Este guia orienta a nomenclatura e organização das fotos da academia para a seção de estrutura do site.

## 📁 Localização
Todas as imagens devem estar nesta pasta: `public/images/structure/`

---

## 📸 Lista de Imagens Necessárias

**Total: 10 imagens**

### Nomenclatura Simples:
```
estrutura1.jpg
estrutura2.jpg
estrutura3.jpg
estrutura4.jpg
estrutura5.jpg
estrutura6.jpg
estrutura7.jpg
estrutura8.jpg
estrutura9.jpg
estrutura10.jpg
```

---

## 📐 Distribuição no Layout

### Desktop (4 colunas):
- **estrutura1.jpg**: Grande (2 células verticais)
- **estrutura2.jpg**: Médio (1 célula)
- **estrutura3.jpg**: Médio (1 célula)
- **estrutura4.jpg**: Grande (2 células verticais)
- **estrutura5.jpg**: Médio (1 célula)
- **estrutura6.jpg**: Médio (1 célula)
- **estrutura7.jpg**: Médio (1 célula)
- **estrutura8.jpg**: Médio (1 célula)
- **estrutura9.jpg**: Médio (1 célula)
- **estrutura10.jpg**: Médio (1 célula)

### Layout Visual:
```
┌─────────────┬─────────┬─────────┬─────────┐
│             │         │         │         │
│ estrutura1  │estrutura│estrutura│         │
│  (grande)   │    2    │    3    │         │
│             ├─────────┴─────────┤         │
├─────────────┤                   │estrutura│
│             │    estrutura4     │    5    │
│ estrutura6  │     (grande)      │         │
│             │                   ├─────────┤
├─────────────┼─────────┬─────────┤estrutura│
│             │         │         │    7    │
│ estrutura8  │estrutura│estrutura│         │
│             │    9    │   10    ├─────────┘
└─────────────┴─────────┴─────────┘
```

---

## 💡 Dicas Gerais de Fotografia

1. **Variedade**: Tire fotos de diferentes áreas da academia
   - Área de musculação
   - Equipamentos de cardio
   - Espaço de aulas coletivas
   - Área funcional
   - Vestiários
   - Recepção
   - Detalhes de equipamentos
   - Ambiente geral

2. **Qualidade**:
   - Boa iluminação
   - Foco nítido
   - Ambiente limpo e organizado

3. **Horário**: Tire fotos em horários de menos movimento

4. **Ângulos**: Varie entre:
   - Fotos panorâmicas (para estrutura1 e estrutura4 - grandes)
   - Fotos focadas em áreas específicas
   - Detalhes de equipamentos

---

## ⚙️ Especificações Técnicas

### Formatos Aceitos
- **.jpg** ou **.jpeg** (recomendado)
- **.webp** (mais leve)
- **.png** (aceito)

### Dimensões Recomendadas
- **Imagens grandes (estrutura1 e estrutura4)**: 1200x1600px (vertical) ou superior
- **Imagens médias (restantes)**: 800x600px ou superior

### Qualidade
- Resolução mínima: 800px de largura
- Tamanho do arquivo: máximo 500KB por imagem (após otimização)

### Otimização
Após adicionar as imagens, execute o comando para otimizá-las:
```bash
npm run optimize-images
```

---

## ✅ Checklist

- [ ] 10 fotos tiradas da academia
- [ ] Arquivos renomeados: estrutura1.jpg até estrutura10.jpg
- [ ] Imagens colocadas na pasta `public/images/structure/`
- [ ] Executado `npm run optimize-images` (opcional)
- [ ] Testado localmente com `npm run dev`
- [ ] Verificado responsividade (mobile/tablet/desktop)

---

## 🎯 Observações Importantes

- As imagens **não têm legendas ou descrições** - são apenas fotos da estrutura
- Não há hover informativo - as fotos falam por si
- A ordem importa: estrutura1 e estrutura4 são grandes e têm mais destaque visual
- Total de 10 fotos garante que o grid fique balanceado em todas as telas
