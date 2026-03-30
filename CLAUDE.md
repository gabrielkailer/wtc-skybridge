@AGENTS.md

# WTC Sky Bridge -- Landing Page | Documentacao Tecnica

## Visao Geral do Projeto

Landing page de captacao de leads para campanhas de Google Ads do espaco de eventos corporativos WTC Sky Bridge.

- **Stack**: Next.js 16.2.0 + React 19.2.4 + TypeScript 5 + CSS Global (sem Tailwind, sem CSS Modules)
- **React Compiler**: habilitado em `next.config.ts` (`reactCompiler: true`)
- **Deploy**: GitHub + Vercel
- **Dominio**: skybridgewtc.com.br
- **Idioma**: pt-BR (todo o conteudo em portugues brasileiro)
- **Objetivo**: converter visitantes vindos de Google Ads em leads via formulario do CRM externo

---

## Sobre a Empresa

- **Sky Bridge** = espaco premium de 750 m2 dedicado a eventos corporativos, integrado ao complexo WTC Sao Paulo
- **Localizacao**: Av. das Nacoes Unidas, 12.551 -- 6o andar -- Brooklin Novo, Sao Paulo/SP, 04578-000
- **5 ambientes**:
  - Golden Gate: ate 160 pessoas, 155 m2
  - Brooklyn: ate 95 pessoas, 94 m2 (vista para a Ponte Estaiada)
  - Cambridge: ate 70 pessoas, 120 m2
  - R1: ate 24 pessoas, 28 m2
  - R2: ate 17 pessoas, 23 m2
- **+10.000 eventos realizados**
- **Nota 4.9 no Google** (49 avaliacoes)
- **Publico-alvo**: empresas, agencias de eventos, executivos
- **Exclusivamente corporativo** (sem eventos sociais como casamentos ou aniversarios)
- **WTC Club**: TIM, IBM, Samsung, Motorola, Epson, Mitsui CO frequentam o espaco
- **Instagram**: @wtcskybridge

---

## Arquitetura do Projeto

### Estrutura de arquivos

```
skybridge-lp/
  app/
    layout.tsx          # RootLayout (Server Component) - fontes, metadata, html lang
    page.tsx            # Home (Server Component) - composicao de todas as secoes
    globals.css         # TODOS os estilos do projeto (CSS puro, sem modules)
    favicon.ico
    components/
      Navbar.tsx        # 'use client' - navegacao fixa com menu hamburger mobile
      Hero.tsx          # Server Component - hero com imagem de fundo e stats
      CredibilityBar.tsx # Server Component - logos de empresas (texto)
      Positioning.tsx   # Server Component - sobre o espaco + imagem
      Benefits.tsx      # Server Component - grid de 5 beneficios com icones
      Spaces.tsx        # Server Component - 5 salas com imagens, specs e tags
      EventTypes.tsx    # Server Component - grid de 7 tipos de evento
      NumbersBar.tsx    # Server Component - 4 numeros de destaque
      Differentials.tsx # Server Component - 5 diferenciais numerados
      HowItWorks.tsx    # Server Component - timeline de 5 etapas
      Testimonials.tsx  # Server Component - 3 depoimentos + 3 video cards
      FAQ.tsx           # 'use client' - accordion de 10 perguntas
      CTAFinal.tsx      # Server Component - CTA com link pro CRM
      Footer.tsx        # Server Component - rodape com logo, endereco, redes
      WhatsAppFloat.tsx # Server Component - botao flutuante WhatsApp
  public/
    logos/              # logos e icones de redes sociais
    images/
      hero/             # VAZIO - placeholder para imagem hero dedicada
      eventos/          # 6 fotos de eventos (evento-1.jpg a evento-6.jpg)
      salas/            # fotos organizadas por sala
        golden-gate/    # 8 fotos (auditorio, pessoas, coquetel, etc.)
        brooklyn/       # 7 fotos (auditorio, pessoas, escolar, etc.)
        cambridge/      # 2 fotos (com-pessoas-1.jpg, vazio-1.jpg)
        r1/             # 2 fotos (auditorio-1.jpg, mesa-redonda-1.jpg)
        r2/             # 1 foto (vazio-1.jpg)
  package.json
  tsconfig.json
  next.config.ts
  eslint.config.mjs
  CLAUDE.md             # este arquivo
  AGENTS.md             # regras do agente Next.js
```

### Principios da arquitetura

- **TODOS os estilos ficam em `globals.css`** -- nao ha CSS Modules, Tailwind, nem styled-components
- Componentes sao majoritariamente **Server Components** (renderizados no servidor)
- Apenas `Navbar.tsx` e `FAQ.tsx` sao **Client Components** (`"use client"`) porque usam `useState`
- Fontes sao carregadas via `next/font/google` no `layout.tsx` com CSS variables (`--font-heading`, `--font-body`, `--font-nav`)
- Imagens usam `next/image` com o componente `Image`
- Path alias configurado: `@/*` mapeia para a raiz do projeto

---

## Design System

### Linguagem Visual: DARK GLASSMORPHISM

Inspirado em padroes de UI escura modernos (referencia: https://pro.welucci.com/). Toda a LP segue uma estetica escura com efeitos de vidro (glassmorphism).

### Cores (CSS Variables)

| Variavel               | Valor                              | Uso                              |
|------------------------|------------------------------------|----------------------------------|
| `--color-primary`      | `#2F5375`                          | Cor institucional, backgrounds   |
| `--color-cyan`         | `#00D4FF`                          | Destaques, numeros, labels       |
| `--color-accent`       | `#1890D7`                          | CTAs (botao principal)           |
| `--color-white`        | `#FFFFFF`                          | Textos sobre fundo escuro        |
| `--color-body`         | `rgb(13, 28, 33)`                  | Background do body               |
| `--color-surface`      | `rgba(20, 40, 55, 0.6)`           | Background dos glass cards       |
| `--color-surface-hover`| `rgba(25, 50, 65, 0.75)`          | Hover dos glass cards            |
| `--color-glass`        | `rgba(22, 51, 59, 0.85)`          | Variante de vidro                |
| `--color-glass-border` | `rgba(255, 255, 255, 0.1)`        | Borda dos cards                  |
| `--color-glass-border-hover` | `rgba(255, 255, 255, 0.2)`  | Borda hover                      |
| `--color-text`         | `#FFFFFF`                          | Titulos (headings)               |
| `--color-text-secondary`| `rgba(255, 255, 255, 0.7)`       | Corpo de texto                   |
| `--color-text-muted`   | `rgba(255, 255, 255, 0.5)`        | Labels, captions                 |
| `--color-divider`      | `rgba(255, 255, 255, 0.08)`       | Separadores entre secoes         |

### Tipografia

| Fonte       | CSS Variable     | Peso         | Uso                                |
|-------------|------------------|--------------|------------------------------------|
| Oswald      | `--font-heading` | 600          | Titulos (h1, h2, h3), numeros     |
| Open Sans   | `--font-body`    | 300, 400     | Corpo de texto, descricoes         |
| Montserrat  | `--font-nav`     | 400          | Navegacao, labels, section-label   |

### Hierarquia tipografica no CSS

| Elemento | Fonte   | Tamanho   | Line Height |
|----------|---------|-----------|-------------|
| h1       | Oswald  | 4rem      | 1.2         |
| h2       | Oswald  | 2.25rem   | 1.3         |
| h3       | Oswald  | 1.75rem   | 1.3         |
| h4       | Montserrat | 1.375rem | 1.4      |
| body     | Open Sans | 16px    | 1.5         |

### Glass Card Pattern

```css
background: var(--color-surface);           /* rgba(20, 40, 55, 0.6) */
backdrop-filter: var(--blur-md);            /* blur(12px) */
-webkit-backdrop-filter: var(--blur-md);
border: 0.8px solid var(--color-glass-border); /* rgba(255,255,255,0.1) */
border-radius: var(--radius-lg);            /* 24px */
transition: var(--transition-default);      /* all 0.3s ease */
```

### Botoes

- **Todos os botoes sao pill-shaped**: `border-radius: var(--radius-pill)` = 50px
- `.btn-cta`: fundo `#1890D7`, texto branco, Oswald 600, uppercase, 14px 40px padding
- `.btn-primary` / `.btn-secondary`: fundo semi-transparente, borda glass, Montserrat
- `.btn-secondary--white`: variante para fundo escuro (hero)

### Regras visuais fundamentais

- **SEM box-shadows** nos cards -- profundidade e feita via blur e bordas
- Separadores entre secoes: `border-top: 0.8px solid rgba(255,255,255,0.08)`
- Border-radius dos cards: 24px (`--radius-lg`)
- Border-radius de botoes: 50px (`--radius-pill`)
- Padding vertical das secoes: 100px
- Container max-width: 1200px

### Spacings (CSS Variables)

| Variavel        | Valor |
|-----------------|-------|
| `--spacing-xs`  | 4px   |
| `--spacing-sm`  | 8px   |
| `--spacing-md`  | 16px  |
| `--spacing-lg`  | 24px  |
| `--spacing-xl`  | 32px  |
| `--spacing-2xl` | 48px  |
| `--spacing-3xl` | 64px  |

### Breakpoints responsivos

| Dispositivo | Media query       |
|-------------|-------------------|
| Mobile      | `max-width: 600px` ou `max-width: 700px` |
| Tablet      | `max-width: 900px` |
| Desktop     | acima de 900px    |

---

## Secoes da LP (em ordem)

### 1. Navbar

- **Arquivo**: `app/components/Navbar.tsx`
- **Tipo**: `'use client'` (usa `useState` para menu mobile)
- **Section ID**: nenhum (elemento `<nav>`)
- **Conteudo**: logo Sky Bridge, 4 links de ancoragem (Espacos, Beneficios, Como Funciona, Depoimentos), botao CTA "Solicite seu Orcamento", menu hamburger mobile
- **CSS classes**: `.navbar`, `.navbar-inner`, `.navbar-logo`, `.navbar-links`, `.navbar-link`, `.navbar-cta`, `.navbar-hamburger`, `.navbar-mobile-menu`, `.navbar-mobile-menu.open`
- **Comportamento**: fixo no topo (`position: fixed`, `z-index: 1000`), fundo glass com blur, altura 70px. Abaixo de 900px esconde links desktop e mostra hamburger. Menu mobile abre/fecha com toggle no state `menuOpen`

### 2. Hero

- **Arquivo**: `app/components/Hero.tsx`
- **Tipo**: Server Component
- **Section ID**: nenhum (aria-label "Hero")
- **Conteudo**: imagem de fundo (evento-1.jpg como fallback), badge "Integrado ao complexo WTC Sao Paulo", headline com destaque cyan na "Ponte Estaiada", subtitulo, 2 CTAs (orcamento + espacos), 3 stats (10.000+ eventos, 4.9 avaliacao, 750m2)
- **CSS classes**: `.hero`, `.hero-bg`, `.hero-overlay`, `.hero-content`, `.hero-badge`, `.hero-headline`, `.hero-headline .cyan`, `.hero-subtitle`, `.hero-ctas`, `.hero-stats`, `.hero-stat-number`, `.hero-stat-label`
- **Comportamento**: fullscreen (min-height: 100vh), imagem com overlay gradiente escuro, padding-top de 70px para compensar navbar fixa

### 3. CredibilityBar

- **Arquivo**: `app/components/CredibilityBar.tsx`
- **Tipo**: Server Component
- **Section ID**: nenhum
- **Conteudo**: titulo "Empresas que frequentam o espaco" + nomes das 6 empresas em texto (TIM, IBM, Samsung, Motorola, Epson, Mitsui CO)
- **CSS classes**: `.credibility-bar`, `.credibility-bar-title`, `.credibility-logos`, `.credibility-logo`
- **Comportamento**: logos sao texto estilizado (Oswald uppercase, opacity 0.5, hover 0.8), nao sao imagens

### 4. Positioning

- **Arquivo**: `app/components/Positioning.tsx`
- **Tipo**: Server Component
- **Section ID**: nenhum (usa classe `.section`)
- **Conteudo**: label "Sobre o WTC Sky Bridge", titulo, 2 paragrafos descritivos, lista "Para quem e" (3 itens com bullet cyan), imagem da sala Brooklyn
- **CSS classes**: `.positioning`, `.positioning-grid`, `.positioning-text`, `.positioning-list`, `.positioning-image`, `.section-label`, `.section-title`
- **Comportamento**: grid 2 colunas (texto | imagem), em mobile vira coluna unica com imagem primeiro

### 5. Benefits

- **Arquivo**: `app/components/Benefits.tsx`
- **Tipo**: Server Component
- **Section ID**: `#beneficios`
- **Conteudo**: titulo + grid de 5 benefit cards com emoji icon, titulo e descricao
- **CSS classes**: `.benefits`, `.benefits-grid`, `.benefit-card`, `.benefit-icon`, `.benefit-title`, `.benefit-desc`
- **Comportamento**: grid 3 colunas desktop, 2 tablet, 1 mobile. Cards com glassmorphism, hover eleva 2px

### 6. Spaces

- **Arquivo**: `app/components/Spaces.tsx`
- **Tipo**: Server Component
- **Section ID**: `#espacos`
- **Conteudo**: titulo + subtitulo + 5 blocos de sala (Golden Gate, Brooklyn, Cambridge, R1, R2). Cada bloco tem: imagem, nome, tagline, specs (capacidade + area), descricao, tags de uso ideal, botao CTA
- **CSS classes**: `.spaces`, `.spaces-header`, `.space-item`, `.space-item.reverse`, `.space-image-wrapper`, `.space-info-label`, `.space-info-title`, `.space-info-tagline`, `.space-specs`, `.space-spec`, `.space-spec-icon`, `.space-desc`, `.space-tags`, `.space-tag`
- **Comportamento**: grid 2 colunas alternando (imagem esquerda/direita via classe `.reverse` com `direction: rtl`). Interface `SpaceData` define a tipagem de cada sala. Em mobile vira coluna unica
- **Dados**: array `spaces` com 5 objetos tipados com `SpaceData`

### 7. EventTypes

- **Arquivo**: `app/components/EventTypes.tsx`
- **Tipo**: Server Component
- **Section ID**: nenhum
- **Conteudo**: titulo + grid de 7 cards de tipos de evento (workshops, palestras, confraternizacoes, lancamentos, assembleias, hibridos, locacoes AV)
- **CSS classes**: `.event-types`, `.event-types-header`, `.event-types-grid`, `.event-type-card`, `.event-type-icon`, `.event-type-title`, `.event-type-desc`
- **Comportamento**: grid 4 colunas desktop, 2 tablet, 1 mobile. Cards com glassmorphism

### 8. NumbersBar

- **Arquivo**: `app/components/NumbersBar.tsx`
- **Tipo**: Server Component
- **Section ID**: nenhum
- **Conteudo**: 4 metricas (10.000+ eventos, 750m2, 5 ambientes, 4.9 avaliacao)
- **CSS classes**: `.numbers-bar`, `.numbers-grid`, `.numbers-item-value`, `.numbers-item-label`
- **Comportamento**: flex horizontal com `justify-content: space-around`, bordas top/bottom como separador

### 9. Differentials

- **Arquivo**: `app/components/Differentials.tsx`
- **Tipo**: Server Component
- **Section ID**: nenhum
- **Conteudo**: titulo centralizado + grid de 5 cards numerados (01-05) com titulo e descricao
- **CSS classes**: `.differentials`, `.differentials-grid`, `.differential-card`, `.differential-number`, `.differential-title`, `.differential-desc`
- **Comportamento**: grid 3 colunas desktop, 2 tablet, 1 mobile. Numeros em cyan

### 10. HowItWorks

- **Arquivo**: `app/components/HowItWorks.tsx`
- **Tipo**: Server Component
- **Section ID**: `#como-funciona`
- **Conteudo**: titulo + timeline de 5 etapas (contato, orcamento, visita, preparacao, evento)
- **CSS classes**: `.how-it-works`, `.how-it-works-header`, `.steps-timeline`, `.step-item`, `.step-number`, `.step-connector`, `.step-title`, `.step-desc`
- **Comportamento**: flex horizontal com circulos numerados e conectores (linhas). Em mobile vira vertical com layout flex-start

### 11. Testimonials

- **Arquivo**: `app/components/Testimonials.tsx`
- **Tipo**: Server Component
- **Section ID**: `#depoimentos`
- **Conteudo**: titulo + 3 cards de depoimento (texto, autor, fonte "Google Reviews") + subtitulo "Depoimentos em video" + 3 video cards linkando para reels do Instagram
- **CSS classes**: `.testimonials`, `.testimonials-header`, `.testimonials-grid`, `.testimonial-card`, `.testimonial-stars`, `.testimonial-text`, `.testimonial-author`, `.testimonial-source`, `.video-section-title`, `.video-grid`, `.video-card`, `.video-play-icon`, `.video-card-label`
- **Comportamento**: grid 3 colunas. Video cards tem aspecto 9:16, play icon circular azul, link abre Instagram em nova aba
- **Video reels atuais** (3 de 6 do copy original):
  - https://www.instagram.com/reel/DQJ4GwigXqT/
  - https://www.instagram.com/reel/DQHsNXwiItD/
  - https://www.instagram.com/reel/DP7JhYzkZEh/

### 12. FAQ

- **Arquivo**: `app/components/FAQ.tsx`
- **Tipo**: `'use client'` (usa `useState` para accordion)
- **Section ID**: nenhum
- **Conteudo**: titulo + 10 perguntas/respostas em accordion
- **CSS classes**: `.faq`, `.faq-header`, `.faq-list`, `.faq-item`, `.faq-question`, `.faq-icon`, `.faq-icon.open`, `.faq-answer`, `.faq-answer.open`
- **Comportamento**: accordion com uma pergunta aberta por vez. Icone "+" rotaciona 45 graus quando aberto. Resposta abre via `max-height` transition. State `openIndex` controla qual item esta aberto (null = todos fechados)
- **Dados**: array `faqData` com 10 objetos `{ q, a }`

### 13. CTAFinal

- **Arquivo**: `app/components/CTAFinal.tsx`
- **Tipo**: Server Component
- **Section ID**: `#cta-final`
- **Conteudo**: titulo, subtitulo, 2 botoes (orcamento via CRM + WhatsApp), email de contato
- **CSS classes**: `.cta-final`, `.cta-final-title`, `.cta-final-subtitle`, `.cta-final-buttons`, `.cta-final-contact`
- **Comportamento**: card glass grande centralizado (max-width 900px). Botao principal abre formulario CRM em nova aba. Botao WhatsApp e email estao com href="#" (pendentes)

### 14. Footer

- **Arquivo**: `app/components/Footer.tsx`
- **Tipo**: Server Component
- **Section ID**: nenhum (elemento `<footer>`)
- **Conteudo**: logo, descricao curta, links sociais (Instagram + LinkedIn), endereco completo, copyright dinamico
- **CSS classes**: `.footer`, `.footer-inner`, `.footer-brand`, `.footer-socials`, `.footer-social-link`, `.footer-info`, `.footer-copyright`
- **Comportamento**: flex 2 colunas (brand | info), em mobile centralizado. Copyright com `new Date().getFullYear()`

### 15. WhatsAppFloat

- **Arquivo**: `app/components/WhatsAppFloat.tsx`
- **Tipo**: Server Component
- **Section ID**: nenhum
- **Conteudo**: botao flutuante verde do WhatsApp (SVG icon)
- **CSS classes**: `.whatsapp-float`
- **Comportamento**: fixo no canto inferior direito (`position: fixed`, bottom 24px, right 24px, `z-index: 999`). Circulo verde (#25D366), hover com scale 1.1. **Atualmente com href="#" -- numero pendente**

---

## Imagens e Assets

### Estrutura da pasta `public/`

```
public/
  logos/
    sky-bridge-logo.png          # Logo principal Sky Bridge (usado na Navbar e Footer)
    wtc-club-logo-branco.png     # Logo WTC Club (branco, para fundo escuro)
    wtc-sao-paulo-logo.svg       # Logo WTC Sao Paulo (SVG)
    instagram-icon.png           # Icone Instagram (usado no Footer)
    linkedin-icon.png            # Icone LinkedIn (usado no Footer)
  images/
    hero/                        # VAZIO - nao ha imagem hero dedicada ainda
    eventos/
      evento-1.jpg               # Usado como fallback do Hero
      evento-2.jpg a evento-6.jpg # Fotos de eventos gerais
    salas/
      golden-gate/               # 8 fotos: auditorio, pessoas, coquetel, diplomata, escolar, espinha-de-peixe, mesa-em-u, mesa-redonda
      brooklyn/                  # 7 fotos: auditorio, pessoas, escolar, mesa-redonda, mesa-u, vazio-1, vazio-2
      cambridge/                 # 2 fotos: com-pessoas-1.jpg, vazio-1.jpg
      r1/                        # 2 fotos: auditorio-1.jpg, mesa-redonda-1.jpg
      r2/                        # 1 foto: vazio-1.jpg
```

### Observacoes sobre assets

- A pasta `hero/` esta vazia -- o Hero usa `evento-1.jpg` como fallback
- O arquivo `cambridge/vazio-1.jpg` pode estar em formato .heic (verificar compatibilidade web)
- Ha tambem SVGs padrao do Next.js na raiz de public/ (file.svg, globe.svg, next.svg, vercel.svg, window.svg)

---

## Integracoes

### Formulario CRM

- **URL**: `https://evento.wtcclub.com.br/cadastrar.aspx?5796-0-Interesse(evento)`
- **Comportamento**: abre em nova aba (`target="_blank"`)
- **Usado em**: CTAFinal.tsx (botao principal "Solicite seu Orcamento")

### Redes Sociais

- **Instagram**: https://www.instagram.com/wtcskybridge/ (link no Footer)
- **LinkedIn**: href="#" (link placeholder no Footer)

### Depoimentos em video (Instagram Reels)

Os links abrem diretamente no Instagram:

1. https://www.instagram.com/reel/DQJ4GwigXqT/
2. https://www.instagram.com/reel/DQHsNXwiItD/
3. https://www.instagram.com/reel/DP7JhYzkZEh/

Reels adicionais disponiveis no copy original (nao implementados):
4. https://www.instagram.com/reel/DP1vOB7kcod/
5. https://www.instagram.com/reel/DPT1RpdEaPO/
6. https://www.instagram.com/reel/DNQVKL8xVCf/

### Tracking / Analytics

- **Facebook Pixel**: placeholder (nao configurado -- sem ID)
- **Google Tag**: placeholder (nao configurado -- sem ID)
- Nenhum script de tracking esta implementado no codigo atualmente

---

## SEO

### Tags configuradas (em `layout.tsx`)

- **Title**: "Espaco para Eventos Corporativos em SP | WTC Sky Bridge -- Brooklin"
- **Description**: "Espaco premium de 750 m2 para eventos corporativos no complexo WTC Sao Paulo. Vista para a Ponte Estaiada, equipe dedicada e infraestrutura completa. Solicite seu orcamento."
- **Open Graph**: type "website", locale "pt_BR", siteName "WTC Sky Bridge"
- **Lang**: `pt-BR` (definido na tag html)

### Palavras-chave alvo

**Primarias (alto volume, alta intencao):**
- espaco para eventos corporativos em Sao Paulo
- locacao de espaco para eventos SP
- aluguel de sala para eventos corporativos Sao Paulo
- espaco para treinamento corporativo SP

**Secundarias (localizacao especifica):**
- espaco para eventos Brooklin SP
- sala para eventos corporativos Berrini
- espaco para palestras Berrini Sao Paulo
- aluguel de auditorio Brooklin Novo
- espaco para workshop Itaim Bibi
- sala para treinamento Pinheiros SP
- espaco corporativo Av. Paulista regiao
- espaco para eventos perto da Marginal Pinheiros

**Long tail (alta qualificacao):**
- espaco para evento corporativo com vista para Ponte Estaiada
- locacao de espaco no WTC Sao Paulo
- sala para palestra corporativa Brooklin
- espaco para confraternizacao corporativa Sao Paulo zona sul
- aluguel de sala para reuniao executiva Berrini
- espaco para lancamento de produto Sao Paulo
- espaco para evento hibrido SP
- locacao audiovisual Sao Paulo WTC

### Bairros-alvo

Brooklin, Berrini, Itaim Bibi, Pinheiros, Av. Paulista

---

## Pendencias / TODOs

| Item | Localizacao no codigo | Status |
|------|----------------------|--------|
| Numero WhatsApp | `WhatsAppFloat.tsx` (href="#"), `CTAFinal.tsx` (href="#") -- buscar "CONFIRMAR NUMERO" | Pendente |
| Email de contato | `CTAFinal.tsx` (href="#") -- buscar "CONFIRMAR E-MAIL" | Pendente |
| Imagem hero dedicada | `public/images/hero/` (pasta vazia) -- Hero usa evento-1.jpg | Pendente |
| Facebook Pixel ID | Nao implementado no codigo | Pendente |
| Google Tag ID | Nao implementado no codigo | Pendente |
| Cambridge vazio-1.jpg | `public/images/salas/cambridge/vazio-1.jpg` -- pode ser .heic | Verificar formato |
| LinkedIn da empresa | `Footer.tsx` (href="#") | Pendente |
| 3 video reels extras | Copy original tem 6, LP implementa apenas 3 | Opcional |
| Logos reais das empresas | CredibilityBar usa texto, nao imagens | Opcional (verificar autorizacao) |

---

## Como Fazer Alteracoes Comuns

### Alterar textos (copy)

Edite diretamente o componente correspondente em `app/components/`. Os textos estao hardcoded nos componentes (nao ha CMS).

Exemplo: para mudar o titulo do Hero, edite `Hero.tsx` linha da tag `<h1 className="hero-headline">`.

### Adicionar nova sala/espaco

1. Adicione fotos em `public/images/salas/nova-sala/`
2. Em `Spaces.tsx`, adicione um novo objeto ao array `spaces` seguindo a interface `SpaceData`:
```typescript
{
  name: "Nome da Sala",
  tagline: "Descricao curta",
  capacity: "ate X pessoas",
  area: "XX m2",
  idealFor: ["uso1", "uso2"],
  description: "Texto descritivo...",
  image: "/images/salas/nova-sala/foto.jpg",
  imageAlt: "Descricao da imagem",
}
```

### Alterar cores

Edite as CSS variables no bloco `:root` de `app/globals.css` (linhas 7-48). As variaveis mais importantes:
- `--color-body`: cor de fundo principal
- `--color-surface`: fundo dos glass cards
- `--color-accent`: cor dos botoes CTA
- `--color-cyan`: cor de destaques e numeros

### Adicionar novas perguntas no FAQ

Em `FAQ.tsx`, adicione um novo objeto ao array `faqData`:
```typescript
{ q: "Pergunta aqui?", a: "Resposta aqui." }
```

### Atualizar depoimentos

Em `Testimonials.tsx`:
- Para depoimentos escritos: edite o array `testimonials` (objetos com `text`, `author`, `source`)
- Para video reels: edite o array `videoReels` (URLs do Instagram)

### Trocar imagens

1. Adicione a nova imagem na pasta correspondente em `public/images/`
2. Atualize o `src` do componente `<Image>` no arquivo .tsx correspondente
3. Formatos recomendados: .jpg ou .webp (evitar .heic)

### Adicionar pixels de tracking

Em `app/layout.tsx`, adicione scripts no `<head>` ou antes do fechamento de `</body>`:
- Facebook Pixel: adicionar `<Script>` do Next.js com o snippet do Meta
- Google Tag: adicionar `<Script>` do Next.js com o snippet do GTM/GA4

Exemplo com `next/script`:
```tsx
import Script from 'next/script';
// dentro do return do RootLayout, antes ou depois de {children}:
<Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX" strategy="afterInteractive" />
```

---

## Regras de Estilo para Manutencao

Ao fazer qualquer alteracao visual, respeite estas regras para manter a consistencia:

1. **SEMPRE manter o fundo escuro** (`--color-body: rgb(13, 28, 33)`) -- nunca adicionar secoes com fundo branco ou claro
2. **TODOS os cards devem usar o padrao glassmorphism**: `background: var(--color-surface)`, `backdrop-filter: var(--blur-md)`, `border: 0.8px solid var(--color-glass-border)`, `border-radius: var(--radius-lg)`
3. **TODOS os botoes devem ser pill-shaped**: `border-radius: var(--radius-pill)` (50px)
4. **Nunca usar box-shadow** em cards -- profundidade e criada via blur e bordas semi-transparentes
5. **Hierarquia de texto**: branco puro para headings, opacidade 0.7 para corpo, opacidade 0.5 para labels/captions
6. **Padding vertical de secoes**: 100px (classe `.section`)
7. **Separadores entre secoes**: `border-top: 0.8px solid var(--color-divider)`
8. **Tipografia**: Oswald para titulos, Open Sans para corpo, Montserrat para navegacao/labels
9. **Cores de destaque**: usar `--color-cyan` (#00D4FF) para numeros, labels e bullet points; usar `--color-accent` (#1890D7) somente para botoes CTA
10. **Responsividade**: breakpoints em 600px, 700px e 900px. Grids colapsam para menos colunas ou coluna unica
11. **Todos os links externos** devem ter `target="_blank"` e `rel="noopener noreferrer"`
12. **Referencia completa do design system**: consultar `/c/Users/gabri/Desktop/WTC Sky Bridge/design-system.md`
13. **Referencia de copy**: consultar `/c/Users/gabri/Desktop/WTC Sky Bridge/copy-skybridge-lp.md`

---

## Comandos de Desenvolvimento

```bash
npm run dev     # servidor de desenvolvimento
npm run build   # build de producao
npm run start   # iniciar servidor de producao
npm run lint    # rodar ESLint
```
