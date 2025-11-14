# AI Backoffice - Design System

## 🎨 Kleuren

### Primaire kleuren
- **Paars**: `#7B61FF` - Primaire acties, highlights
- **Blauw**: `#4A7FFF` - Secundaire acties, links
- **Lichtgrijs**: `#f7f7f9` - Achtergronden
- **Wit**: `#ffffff` - Main background

### Tailwind classes
- `bg-primary-purple` / `text-primary-purple`
- `bg-primary-blue` / `text-primary-blue`
- `bg-neutral-light`

## 📐 Spacing & Layout

- **Witruimte**: Ruim gebruik van padding/margin
- **Containers**: max-w-7xl voor content, gecentreerd
- **Secties**: py-16 md:py-24 (mobiel vs desktop)
- **Cards**: p-6 md:p-8

## 🔤 Typografie

- **Font**: System fonts (system-ui, Avenir, Helvetica, Arial)
- **Headings**:
  - H1: `text-4xl md:text-6xl font-bold`
  - H2: `text-3xl md:text-5xl font-bold`
  - H3: `text-2xl md:text-3xl font-semibold`
- **Body**: `text-base md:text-lg leading-relaxed`

## 🧩 Componenten

### Button
- **Primair**: Paarse achtergrond, witte tekst, hover effect
- **Secundair**: Transparant, border, hover effect
- **Ghost**: Alleen tekst, subtle hover

### Card
- Witte achtergrond
- Zachte schaduw: `shadow-lg`
- Afgeronde hoeken: `rounded-2xl`
- Hover effect: `hover:shadow-xl transition-shadow`

### Section
- Container met padding
- Optionele achtergrondkleur (lichtgrijs voor afwisseling)
- Titel + subtitel structuur

## 📱 Responsive

- **Mobiel first**: basis layout voor mobiel
- **Breakpoints**:
  - sm: 640px
  - md: 768px
  - lg: 1024px
  - xl: 1280px

## 🏗️ Pagina layouts

### Home
1. Hero (gradient, centered content)
2. Wat wij doen (3 cards, grid)
3. Waarom AI Backoffice (2-kolommen)
4. Hoe werkt het (stappenplan)
5. Voorbeeldresultaten (4 cards, grid)
6. CTA sectie (centered)

### Overige pagina's
- Full-width hero met titel
- Content secties met max-w containers
- Consistent gebruik van spacing

## 🎭 AI-elementen

- Subtiele gradients (paars naar blauw)
- Sferische vormen als decoratie
- Zachte schaduwen
- Smooth transitions
