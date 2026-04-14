# Project: KI-Mitarbeiter Sales Funnel — Web-App Präsentation

## Was bauen wir?
Eine **Slide-basierte Web-App** (wie ein Perspective-Funnel) für Sales-Präsentationen. NICHT eine statische Slide-Deck — eine interaktive App mit Animations und einem dynamischen Förder-Rechner.

## Tech Stack
- React + Vite + Tailwind CSS (v4) + Framer Motion
- Single-page App mit horizontalen/vertikalen Slide-Transitions
- Keyboard (← →), Touch-Swipe, und Click-Navigation zwischen Slides
- Mobile responsive

## Design System — EXAKT wie die Landing Page
Orientiere dich an der bestehenden LP in `../kanzlei-ki-lp/app/`:

### Colors (aus der LP's index.css):
- `--color-cream: #FCF8F2` (Helle Slides)
- `--color-cream-dark: #F7F6F5`
- `--color-dark: #101010` (Dunkle Slides)
- `--color-maroon: #A21E29` (Akzent, CTAs)
- `--color-maroon-hover: #8B1923`
- `--color-emerald: #10B981` (Förderung, Positiv)
- `--color-emerald-light: #D1FAE5`
- `--color-fp-blue: #1B2E47`
- `--color-text-primary: #000000`
- `--color-text-secondary: #595B63`

### Fonts:
- Heading: "Inter Display", "Inter", sans-serif
- Body: "Inter", sans-serif
- Lade die gleichen Google Fonts wie die LP

### Animations — KOPIERE aus der LP:
Schau dir die LP-Components in `../kanzlei-ki-lp/app/src/components/sections/` an:
- `Hero.jsx` — Slide-up + blur entry animations
- `PainPoints.jsx` — Stagger-animations für Cards
- `KanzleiAudit.jsx` — Scanning/stats animations
- `AgentDeploy.jsx` — Live/Training status cards
- `Vorteile.jsx` — Activity feed animation
- `StaatlicheFinanzierung.jsx` — Geldfluss animation

Verwende die GLEICHEN Framer Motion patterns (ease curves, delays, stagger).

### Card-Stil:
- Weißer Background, 1px border `rgba(0,0,0,0.08)`, minimal radius (2px)
- Subtle shadow: `0 1px 2px rgba(8,8,8,0.05), 0 3px 3px rgba(8,8,8,0.04)`
- Hover: translateY(-4px) + stärkerer Shadow

### Slide-Wechsel:
- Smooth horizontal oder fade transition (0.5-0.7s, cubic-bezier(0.16, 1, 0.3, 1))
- Progress-Dots unten (wie die LP-Nav, nicht wie klassische Powerpoint)
- Pfeiltasten + Leertaste + Touch-Swipe + Click-Navigation

## 11 Slides — Inhalt

### Slide 1: Title/Hero
- Pill: "Staatlich geförderte KI-Implementierung"
- H1: "KI-Mitarbeiter für Ihre Steuerkanzlei — 100% staatlich gefördert"
- "KI-Mitarbeiter" in Maroon, "100% staatlich gefördert" in Emerald
- Trust badges: IHK-zertifiziert, 100% gefördert, Kein Eigenanteil
- Subtext + CTA Button
- Animation: Stagger slide-up wie LP Hero

### Slide 2: Problem (Dark)
- "Der Kanzleialltag frisst Ihre Zeit"
- 6 Pain-Point Cards (Telefon-Chaos, DATEV-Zeitfresser, Fristen-Stress, Fachkräftemangel, Endlos-Kommunikation, Digitalisierungsdruck)
- Stagger-Animation wie LP PainPoints

### Slide 3: Lösung (Cream)
- "Ein KI-Mitarbeiter, der nie krank wird und nie kündigt"
- 6 Solution Cards (Telefon-KI Clara, DATEV-Automatisierung, Fristen-Management, Mandanten-Kommunikation, Vorbereitende Buchhaltung, Individuelle Automations)
- Grüne Icons statt roter

### Slide 4: Live Demo (Dark)
- Fake Dashboard-Mockup (wie LP's DashboardMockup component)
- macOS Titlebar mit Traffic-Light Dots
- 3 KPI-Cards: Anrufe (47), Belege (312), Fristen (89)
- 4 Agent-Status-Rows (Clara=LIVE, DATEV=LIVE, Mandanten-Bot=TRAINING, Fristen=LIVE)
- Animierte Counter + blinkende Status-Dots

### Slide 5: Förderung (Cream)
- "Der Staat zahlt — Sie profitieren"
- 3-Spalten: 100% Schulung / 75% Lohn / 50-100K Implementierung
- Animierte Progress-Bars die sich füllen
- Große Zahlen mit Count-Up Animation

### Slide 6: INTERAKTIVER RECHNER (Dark) ⭐ KERN-FEATURE
Basierend auf dem Rechner von foerderperspektive.de (Referenz: `reference/fp-rechner.html`), ABER:
- Im LP-Design (Dark theme, Maroon/Emerald Akzente)
- **ERWEITERT** um KI-Implementierung:
  
**Inputs:**
- Dauer: 6 oder 12 Monate (Toggle-Buttons)
- Unternehmensgröße: <50 / 50-500 / >500 (Button-Gruppe)
- Anzahl zu fördernde MA: Slider + Input (1-50)
- Durchschnittliches Bruttogehalt: Input (default 4.000€)

**Live-Berechnung (Updates sofort bei Input-Änderung):**
1. Lohnkostenerstattung (75%): MA × Gehalt × Monate × 0.75
2. Schulungswert (100%): MA × 10.000€
3. **NEU: KI-Implementierung im Wert von:** Dynamisch basierend auf MA-Anzahl
   - 1-5 MA: 25.000-50.000€
   - 6-15 MA: 50.000-100.000€  
   - 16-30 MA: 100.000-175.000€
   - 31-50 MA: 175.000-250.000€
4. **Gesamt-Fördersumme** = Lohn + Schulung + Implementierung
5. **Realer Cash-Vorteil** = Lohnkostenerstattung - (laufende Kosten während Training)
   → "So viel MEHR Geld hat Ihre Kanzlei am Ende"

**Visualisierung:**
- Große animierte Zahl für Gesamtförderung (wie FP-Rechner, aber in Emerald statt Gelb)
- Grüner "Cash-Vorteil" Block (wie FP's cash-advantage-block)
- Balken-Diagramm das die 3 Komponenten zeigt

### Slide 7: Schulungskonzept (Cream)
- Timeline: Mo Einführung → Di-Do Praxis → Fr Review → IHK-Zertifikat
- Sidebar-Box mit Kennzahlen (15h/Wo, 2 Calls, 6-12 Mo, IHK, 0€)

### Slide 8: Vorher/Nachher (Dark)
- 2-Spalten Vergleich: ❌ Ohne KI vs ✅ Mit KI-Mitarbeiter
- 5 Vergleichspunkte je Seite
- Rote vs Grüne Akzente

### Slide 9: Ablauf (Cream)
- 4 Schritte horizontal: Potenzialanalyse → Förderantrag → Schulung+Setup → KI live
- Animierte Connecting Lines zwischen Steps
- Numbered Circles

### Slide 10: Trust (Dark)
- 5 Trust-Badges: Agentur für Arbeit, AZAV, TÜV, IHK, DSGVO
- Geldfluss-Animation: Staat → Förderperspektive → Kanzlei

### Slide 11: CTA (Maroon Background)
- "In 30 Minuten wissen, was möglich ist"
- Großer weißer CTA-Button
- Trust-Bullets: Unverbindlich, 30 Min, Fördersumme berechnet

## Wichtige Regeln
1. **LESE die LP-Components** in `../kanzlei-ki-lp/app/src/components/` für exakte Animation Patterns + Design
2. **Der Rechner (Slide 6) ist das Kern-Feature** — muss smooth und sofort-reaktiv sein
3. **Jeder Slide hat Entry-Animations** — Elemente faden/sliden rein wenn der Slide aktiv wird
4. **Navigation:** Progress-Dots + Keyboard + Touch + optional Scroll
5. **Performance:** Framer Motion lazy animations, nur aktiver Slide animiert
6. **Fullscreen-Slides:** Jeder Slide = 100vh × 100vw, kein Scroll innerhalb eines Slides
7. **Screenshot-Referenz:** `reference/lp-current.png` und `reference/lp-viewport.png` zeigen das LP-Design

## Projekt-Setup
```bash
npm create vite@latest app -- --template react
cd app
npm install framer-motion lucide-react
npm install -D tailwindcss @tailwindcss/vite
```

## Dateistruktur
```
app/
  src/
    components/
      slides/          # Jeder Slide als eigener Component
        TitleSlide.jsx
        ProblemSlide.jsx
        SolutionSlide.jsx
        DemoSlide.jsx
        FoerderungSlide.jsx
        RechnerSlide.jsx  ← KERN-FEATURE
        SchulungSlide.jsx
        VergleichSlide.jsx
        AblaufSlide.jsx
        TrustSlide.jsx
        CTASlide.jsx
      ui/
        SlideNav.jsx      # Progress dots + arrows
        AnimatedCounter.jsx
        Calculator.jsx    # Rechner-Logik
    App.jsx              # Slide-Container mit Navigation
    index.css            # Tailwind + Design Tokens
```

## Build + Deploy
- `npm run build` → `dist/`
- Kopiere `dist/` nach `../docs/` für GitHub Pages (wie LP)
