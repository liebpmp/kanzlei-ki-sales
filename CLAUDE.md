# Project: KI-Mitarbeiter Sales Funnel — Web-App Präsentation

## KRITISCH: Du MUSST die LP-Referenzdateien lesen!

**BEVOR du irgendwas baust:** Lies diese Dateien — sie sind deine Design-Quelle:

### Pflicht-Reads (in dieser Reihenfolge):
1. `reference/index.css` — **Vollständiges Tailwind Theme** mit allen Custom Colors, Fonts, Animations. KOPIERE das 1:1 in dein index.css!
2. `reference/lp-App.css` — Zusätzliche Styles
3. `reference/lp-sections/Hero.jsx` — **Animations-Pattern** (ease curve, blur-in, stagger, pill badge)
4. `reference/lp-sections/PainPoints.jsx` — **Card-Grid + stagger pattern** (containerVariants, cardVariants)
5. `reference/lp-sections/KanzleiAudit.jsx` — **Dashboard Mockup** (macOS titlebar, stats row, animated table rows, phase pill)
6. `reference/lp-sections/Foerderung.jsx` — **Dark Section Design** (glassmorphism cards, gradient orbs, border-glow)
7. `reference/lp-sections/Schulung.jsx` — **Stats Cards + Module Table**
8. `reference/lp-ui/DashboardMockup.jsx` — Dashboard Component
9. `reference/lp-ui/AnimatedCounter.jsx` — Counter Component
10. `reference/fp-rechner.html` — Rechner-Logik von foerderperspektive.de

### NICHT raten, KOPIEREN!
- **Tailwind Config:** `reference/index.css` → Kopiere die @theme inline + @layer base Regeln KOMPLETT
- **Animation Ease:** `const ease = [0.16, 1, 0.3, 1]` — ÜBERALL verwenden
- **Entry Animations:** `initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}` + `whileInView`
- **Card Style:** `bg-white border border-border-light rounded-[2px] p-7` + hover translateY
- **Dark Sections:** `bg-dark` + `backdrop-blur-sm bg-white/[0.05] border border-white/[0.1]` glassmorphism
- **Section Headers:** Pill dot + uppercase label + large heading + muted paragraph
- **Phase Pills:** `inline-flex items-center gap-2 rounded-full border border-maroon/20 bg-maroon/5 px-4 py-1.5`

## Was bauen wir?
Eine **Slide-basierte Web-App** (wie ein Perspective-Funnel) für Sales-Präsentationen. Interaktive App mit den EXAKT GLEICHEN Animations und Design wie die Landingpage.

## Tech Stack
- React + Vite + Tailwind CSS (v4) + Framer Motion
- Single-page App mit Slide-Transitions
- Keyboard (← →), Touch-Swipe, Click-Navigation
- Mobile responsive

## Design System — 1:1 AUS reference/index.css KOPIEREN

### Colors:
- `cream: #FCF8F2` / `cream-dark: #F7F6F5` — helle Slides
- `dark: #101010` — dunkle Slides  
- `maroon: #A21E29` / `maroon-hover: #8B1923` — CTAs, Akzente
- `emerald: #10B981` — Förderung, Positiv
- `text-primary: #000000` / `text-secondary: #595B63`
- `text-white: #FFFFFF` / `text-white-muted: rgba(255,255,255,0.5)`
- `border-light: rgba(0,0,0,0.08)` / `border-dark: rgba(255,255,255,0.1)`

### Fonts:
- `font-heading: "Inter Display", "Inter", sans-serif` (weight 500-600)
- `font-sans: "Inter", sans-serif`
- GENAU wie in reference/index.css definiert

### Animation Keyframes (aus reference/index.css):
```css
@keyframes pulse-dot { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.5; transform: scale(1.5); } }
@keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
@keyframes border-glow { 0%, 100% { border-color: rgba(162, 30, 41, 0.2); } 50% { border-color: rgba(162, 30, 41, 0.5); } }
@keyframes pulse-ring { 0% { box-shadow: 0 0 0 0 rgba(162, 30, 41, 0.4); } 70% { box-shadow: 0 0 0 10px rgba(162, 30, 41, 0); } 100% { box-shadow: 0 0 0 0 rgba(162, 30, 41, 0); } }
@keyframes timeline-draw { 0% { height: 0; } 100% { height: 100%; } }
```

### Framer Motion Pattern (ÜBERALL verwenden):
```jsx
const ease = [0.16, 1, 0.3, 1];

// Section header entry:
initial={{ opacity: 0, x: -32, filter: "blur(8px)" }}
whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
viewport={{ once: true, margin: "-80px" }}
transition={{ duration: 0.7, ease }}

// Card stagger:
const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const cardVariants = { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease } } };

// List item stagger:
const listItemVariants = { hidden: { opacity: 0, x: -8 }, visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease } } };
```

## REDESIGN — Lösche den alten Code, baue NEU

**Lösche den kompletten app/ Ordner und baue von Grund auf neu.** Das alte Build hat das LP-Design nicht — es muss komplett neu.

## 11 Slides — Inhalt

### Slide 1: Title/Hero (Cream bg)
**Design-Referenz: `reference/lp-sections/Hero.jsx`**
- Pill badge: animierter grüner Dot + "Staatlich geförderte KI-Implementierung"
- H1: "KI-Mitarbeiter" in maroon, "100% staatlich gefördert" in emerald
- Subtext über QCG + IHK
- 2 Buttons: Maroon CTA + White secondary
- 3 Trust badges (IHK, 100% gefördert, Kein Eigenanteil) in emerald/10 chips
- Stagger slide-up + blur entry wie Hero.jsx

### Slide 2: Problem (cream-dark bg)
**Design-Referenz: `reference/lp-sections/PainPoints.jsx`**
- Section header mit dot + "Kennen Sie das?" + H2 "Der Kanzleialltag frisst Ihre Zeit"
- 3×2 Grid Pain-Point Cards (Telefon-Chaos, DATEV-Zeitfresser, Fristen-Stress, Fachkräftemangel, Mandanten-Pingpong, Digitalisierungsdruck)
- Cards: weißer BG, icon in cream-dark square, title + desc, hover lift
- Stagger animation wie PainPoints.jsx

### Slide 3: Lösung (Cream bg)
**Design analog zu PainPoints, aber als Lösungen:**
- "Ein KI-Mitarbeiter, der nie krank wird"
- 3×2 Grid Lösungs-Cards mit emerald icons statt neutralen
- (Telefon-KI Clara, DATEV-Automation, Fristen-Management, Mandanten-Bot, Vorbereitende BuHa, Individuelle Workflows)

### Slide 4: Live Demo (Dark bg)
**Design-Referenz: `reference/lp-sections/KanzleiAudit.jsx` + `reference/lp-ui/DashboardMockup.jsx`**
- Fake Dashboard im macOS-Fenster (Traffic-light dots, titlebar "steuerclara — agent dashboard")
- Stats row: 4 KPIs mit AnimatedCounter (Anrufe 47, Belege 312, Fristen 89, Effizienz 94%)
- Agent-Status-Table: Clara LIVE, DATEV LIVE, Mandanten-Bot TRAINING, Fristen LIVE
- Status badges wie KanzleiAudit (BOTTLENECK/CONNECTED/AI READY style → LIVE/TRAINING/SETUP)
- Blinkende Status-Dots, animierte Rows

### Slide 5: Förderung (Dark bg)
**Design-Referenz: `reference/lp-sections/Foerderung.jsx`**
- Dark BG + gradient orb background + gradient transition lines
- "Der Staat zahlt — Sie profitieren"
- 3 glassmorphism Cards (Schulung 100%, Lohn 75%, KI-Implementierung 50-250K)
- Cards: `backdrop-blur-sm bg-white/[0.05] border border-white/[0.1]` + animate-border-glow
- Icon + Badge oben, Title + Items mit Check-Icons, Highlight footer
- Urgency note am Ende (amber dot + "Fördertöpfe sind begrenzt")

### Slide 6: INTERAKTIVER RECHNER (Dark bg) ⭐ KERN-FEATURE
**Design-Referenz: `reference/fp-rechner.html` + Foerderung.jsx dark theme**
- Im LP-Design (Dark theme, glassmorphism cards)
- Linke Seite: Input-Controls, Rechte Seite: Live-Ergebnis

**Inputs:**
- Dauer: 6 oder 12 Monate (Toggle-Buttons, maroon active)
- Unternehmensgröße: <50 / 50-500 / >500 (Button-Gruppe)
- Anzahl MA: Slider + Zahl-Input (1-50)
- Durchschnittliches Bruttogehalt: Input (default 4.000€)

**Live-Berechnung:**
1. Schulungswert (100%): MA × 10.000€
2. Lohnkostenerstattung (75%): MA × Gehalt × Monate × 0.75
3. KI-Implementierung: 
   - 1-5 MA: 25.000-50.000€
   - 6-15 MA: 50.000-100.000€  
   - 16-30 MA: 100.000-175.000€
   - 31-50 MA: 175.000-250.000€
4. Gesamt-Fördersumme = Summe aller drei
5. Cash-Vorteil = Lohnkostenerstattung - (minimale Eigenleistung)

**Visualisierung:**
- Große animierte Gesamtzahl in Emerald
- 3 Balken (Schulung, Lohn, KI) mit animierten Fills
- Cash-Vorteil-Box hervorgehoben

### Slide 7: Schulungskonzept (Cream bg)
**Design-Referenz: `reference/lp-sections/Schulung.jsx`**
- Stats Cards Grid (5 Karten: 15h/Wo, IHK-Zertifikat, Top-Dozenten, 6-12 Monate, Kein Ausfall)
- Modul-Tabelle darunter (5 Module mit UE-Angaben)
- Cream Cards mit maroon icons, hover lift

### Slide 8: Vorher/Nachher (Dark bg)
- 2-Spalten: ❌ Ohne KI (links, red accents) vs ✅ Mit KI-Mitarbeiter (rechts, emerald accents)
- 5 Vergleichspunkte je Seite
- Glassmorphism container auf dark bg

### Slide 9: Ablauf (Cream bg)
- 4 Schritte horizontal: Potenzialanalyse → Förderantrag → Schulung & Setup → KI geht live
- Phase pills wie KanzleiAudit (numbered circles, connecting line)
- Stagger entry

### Slide 10: Trust (Dark bg)
- 5 Trust-Badges mit pulse-ring Animation: AfA, AZAV, TÜV, IHK, DSGVO
- Geldfluss-Visual: Staat → Förderperspektive → Kanzlei (animated arrows/lines)

### Slide 11: CTA (Maroon bg)
- "In 30 Minuten wissen, was möglich ist"
- Großer weißer CTA-Button auf maroon BG
- Trust bullets: Unverbindlich, 30 Min, Fördersumme berechnet
- Subtle maroon gradient orb

## Slide-Navigation
- **Progress Dots** unten zentriert (aktiver Dot = maroon, animiert)
- **Keyboard:** ← → Pfeiltasten, Leertaste = nächster
- **Touch:** Swipe links/rechts
- **Click:** Rechte/Linke Hälfte klicken
- **Transition:** Smooth horizontal slide (0.5s, ease curve)
- **Fullscreen:** Jeder Slide = 100vh × 100vw

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
        SlideNav.jsx
        AnimatedCounter.jsx
    App.jsx
    index.css            # KOPIERE von reference/index.css + anpassen
```

## Build + Deploy
- `npm run build` → `dist/`
- Kann auch mit `npx vite build` gebaut werden
