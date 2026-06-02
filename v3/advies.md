# v3 — Advies & blueprint persoonlijke site

> Status: advies / nog niet gebouwd. Doel van dit document: vastleggen wat v3 wordt, waarom, en in welke volgorde we het bouwen. Beslissingen hieronder zijn met Jeffrey afgestemd (juni 2026).

---

## 0. Context: het drie-domein-plan

| Domein | Rol | Hosting |
|---|---|---|
| **jeffrey.brocx.io** | Persoonlijke site — wie ik ben, ervaring, zwaargewicht-positionering. **Dit is v3.** | GitHub Pages (geen commercieel gebruik → binnen TOS) |
| **advies.brocx.io** (of `scan.`) | Commercieel — de Software/AI/Automation Scan + aanbod | Apart gehost (Cloudflare Pages/Netlify) i.v.m. GH Pages-TOS |
| **dev.brocx.io** | Ontwikkel-/meerwerk | Apart |

**v3 = puur persoonlijk.** Geen prijzen, geen "huur mij in"-funnel, geen Scan-product. Wel: alles wat getuigt van extensieve ervaring, professionalisme en dat Jeffrey een zwaargewicht is. Het commerciële verhaal verhuist naar advies.brocx.io en wordt daar subtiel naartoe gelinkt.

### Afgestemde uitgangspunten

1. **Showcase-type:** *de site zélf is het bewijs.* Craft-led — impeccabel hand-rolled, geen aparte interactieve demo's. De kwaliteit van de pagina ís de skill-showcase.
2. **Visueel:** de paarse v2-identiteit doortrekken en verfijnen (cream + aubergine + violet).
3. **Opdrachtgevers:** namen + logo's expliciet (Achmea, NOS, ABN AMRO, Elfsquad, Arrix), gekoppeld aan de functies.
4. **Taal:** alleen Nederlands.
5. **Bewijsmateriaal:** bestaande v1/v2-content als basis, met expliciete *slots* voor (a) kwantificeerbare resultaten en (b) quotes/aanbevelingen die Jeffrey later aanvult.
6. **Geen frameworks.** Alles hand-rolled, hoogste kwaliteit.

---

## 1. Visuele review v1 (huidige live site)

v1 is gebouwd op een gekocht thema: **jQuery + Bootstrap + jquery.pagepiling + owl.carousel + LineIcons + typed.js**.

**Wat werkt (en mee moet naar v3):**
- De inhoud is sterk: het Marine-verhaal, vier echte functies met tech-stack, de skill-categorieën, de logo-strip "gewerkt voor o.a.".
- De persoonlijke, informele toon ("Dingen die ik bouw als niemand kijkt").

**Wat niet werkt:**
- **Het oogt als een template, niet als een zwaargewicht-engineer.** De Bali-kustfoto als hero-achtergrond is generieke stocksfeer en heeft niets met het vak te maken. Ronde portretfoto + typende tekst = portfolio-cliché.
- **Framework-stack is precies wat je niet meer wilt.** Niet hand-rolled, zwaar (jQuery + Bootstrap + 3 plugins), en pagePiling veroorzaakt in headless rendering een resize-loop (`Can not detect viewport width` in een lus).
- **pagePiling-UX verbergt content.** Eén sectie per scherm, JS-afhankelijk; slecht scanbaar en zwak voor SEO. Alles wat je net wilt laten zien (ervaring!) zit achter een swipe.
- **Placeholder/nepdata staat nog in de markup:** `sjaak@sjakiestrekkerij.inc` en `+31 6 12 24 56 78` in het overlay-menu. Pijnlijk als dit live staat — sowieso opruimen.

**Conclusie:** v1 levert de *inhoud* en de *toon*, niets van de *techniek of vormgeving*.

---

## 2. Visuele review v2 (de bouwstijl voor v3)

v2 is al hand-rolled neo-brutalism en de juiste richting. Echte tokens uit [`v2/assets/css/style.css`](../v2/assets/css/style.css):

```
--color-background  #f4eee4   (cream)
--color-surface     #fbf7ef
--color-text/border #0c0410   (bijna-zwart, paarse zweem)
--color-text-muted  #3a2c44
--color-primary     #2a0e3a   (diep aubergine — hero/bleed)
--color-primary-ink #f5edfb
--color-accent       #9333ea  (felviolet)
fonts: Space Grotesk (display) · Inter (body) · JetBrains Mono (mono)
shadows: harde offset, geen blur · dikke randen
```

**Wat sterk is (behouden):**
- De **hero**: diepe aubergine met subtiel grid, enorme Space Grotesk-kop, violet `mark`-highlight. Onderscheidend en zelfverzekerd.
- Heldere **typografische hiërarchie** en stevige kleurblokken (de aanpak-kaarten aubergine/violet/zwart).
- De **marquee** als ritme-element, met `prefers-reduced-motion` netjes afgevangen.
- Contact-sectie (violet bleed) en de base64-geobfusceerde contactgegevens.

**Visuele zwaktes (te fixen in v3) — waargenomen in de screenshots:**
1. **De logo-strip in de donkere "Waarom mij"-sectie rendert als een felle witte balk** met nauwelijks zichtbare grijze logo's. Oogt leeg/kapot en breekt de donkere sectie. → In v3 logo's behandelen passend bij donkere achtergrond (witte/inverted logo-varianten of een eigen omkaderd surface dat ín het ontwerp past).
2. **Te veel kleine, laag-contrast (muted) bodytekst** (signalen, principes) tegenover de enorme display-koppen. De energie zakt halverwege de pagina in. → Bodytekst groter/contrastrijker, of brutalistischer kaderen.
3. **Portret is klein** (max 280px) en grijswaarden — voor een persoonlijke zwaargewicht-site mag dit groter en bewuster.
4. **"Vijf principes" is het minst brutalistische deel** — dunne lijntjes, kleine tekst. Visueel het zwakste blok.
5. **Lege witruimte** rond stats- en logoband in de donkere sectie.

**Conclusie:** v2's *systeem* (kleur, type, randen, shadows) is uitstekend; de *uitvoering* heeft een paar duidelijke gaten die v3 oplost.

> Screenshots gemaakt op 1440px (desktop) en 390px (mobiel) via Playwright. v1 desktop-home idem. Bewaard in de Playwright-output van deze sessie.

---

## 3. v3 — verfijnd design system

Neem het v2-token-systeem 1-op-1 over en breid uit. Concrete verfijningen:

- **Behoud** het palet, de fonts, de dikke randen en harde offset-shadows.
- **Contrast bodytekst omhoog:** `--color-text-muted` spaarzaam; lange leesteksten in `--color-text` op `--color-surface`.
- **Logo's op donker:** maak/forceer lichte logo-varianten (CSS `filter` of aparte assets) zodat de logoband ín de donkere sectie past i.p.v. een witte breuk.
- **Portret groter en met intentie** — grijswaarden mag, maar prominenter, eventueel met brutalistisch kader + offset-shadow.
- **Eén extra "wow" zonder demo's:** scroll-driven reveals (CSS `animation-timeline: view()`), een subtiele grid/noise-textuur, en een kop-animatie. Allemaal pure CSS, degradeert netjes bij reduced-motion. Dít is de "craft = showcase".
- **Donker/licht is optioneel** — niet nodig voor v3, maar tokens lenen zich ervoor.

---

## 4. Content & sectie-blueprint (NL, één scrollbare pagina)

1. **Hero** — naam + positionering ("Lead Developer & technisch zwaargewicht"), zelfverzekerd, geen stockfoto. Subtiel grid zoals v2.
2. **Over mij** — het Marine-verhaal (zes jaar verbindelaar/Chef Verbindingsdienst → offshore → IT → 10+ jaar software). Persoonlijk en informeel. Groter portret.
3. **Ervaring (timeline)** — de vier functies uit v1, nu **met opdrachtgever bij naam** gekoppeld (zorg=chatplatform, verzekeringen, media=NOS, transport/cloud), tech-stack per rol, en impact.
   - *Slot:* per rol een **kwantificeerbaar resultaat** (bv. "X gebruikers", "deploytijd −Y%", "team van N", schaalgetallen). → aan te vullen door Jeffrey.
4. **Bewijs / cijfers** — statband zoals v2 (10+ jaar · 100K+ gebruikers · 6 jr Marine · NATO-clearance), uitgebreid met echte cijfers uit punt 3.
5. **Gewerkt voor** — logo-strip Achmea, NOS, ABN AMRO, Elfsquad, Arrix — nu visueel goed geïntegreerd (zie §3).
6. **Quotes / aanbevelingen** — *nieuw slot*: 1–3 testimonials (mag van LinkedIn-aanbevelingen). Brutalistisch kader. → aan te vullen door Jeffrey.
7. **Skills** — de skill-categorieën uit v1 (Talen / Frameworks / Cloud & Infra / Architectuur / Overig), als brutalistische tag-grid.
8. **Links / elders** — stuff.brocx.io, LinkedIn, GitHub, CV (PDF). Subtiele, nette verwijzing naar **advies.brocx.io** ("Zakelijk: ik help organisaties met …") en evt. **dev.brocx.io** — als doorverwijzing, niet als sales.
9. **Contact** — base64-reveal-patroon van v2 (mail/telefoon/WhatsApp), violet bleed.
10. **Footer.**

---

## 5. Technische aanpak — "de craft is de showcase"

- **Geen frameworks, geen build.** Eén `index.html`, één hand-rolled `style.css`, minimale vanilla JS (alleen contact-reveal + evt. progressieve enhancement).
- **Semantische, toegankelijke HTML** — correcte landmarks, skip-link (v2 heeft die al), WCAG AA-contrast, focus-states, `prefers-reduced-motion`.
- **Performance-budget:** doel Lighthouse 100/100/100/100. Async fonts (v2-patroon), `content-visibility`, WebP, geen render-blocking JS.
- **Moderne hand-rolled effecten** als bewijs van vakmanschap: CSS scroll-driven animations (`animation-timeline`), `@property`-animaties, container queries, `:has()`, view transitions — alles met nette fallbacks.
- **SEO + sharing:** JSON-LD Person (v2 heeft basis), OG-tags, canonical, sitemap.
- **Eén pagina, volledig scanbaar** — géén pagePiling. Scroll-snap mag, maar inhoud altijd bereikbaar/crawlbaar.

---

## 6. Direct op te ruimen / aandachtspunten

- **Nepdata uit v1** (`sjaak@sjakiestrekkerij.inc`, `+31 6 12 24 56 78`) niet meenemen — echte, geobfusceerde gegevens uit v2 gebruiken.
- Beslis de definitieve subdomeinnaam voor het commerciële deel (`advies.` vs `scan.`) zodat de doorverwijzing klopt.
- `arrix-logo.png` en `logo.png` hebben geen WebP-variant; logo-integratie op donker vereist mogelijk lichte varianten.

---

## 7. Wat ik van jou nodig heb (om "zwaargewicht" hard te maken)

1. **Kwantificeerbare resultaten** per functie — desnoods grove ordes van grootte.
2. **1–3 quotes/aanbevelingen** (naam + functie + relatie), mag van LinkedIn.
3. Bevestiging subdomeinnaam commercieel deel.
4. Welke logo's mogen 100% expliciet bij naam (alles uit v1/v2 = ja, tenzij je iets wilt weglaten).

Zonder 1 en 2 bouw ik de slots met nette placeholders die jij later invult — de site is dan al af en overtuigend, en wordt met jouw input alleen maar sterker.

---

## 8. Voorgestelde uitvoeringsvolgorde

1. **Stap 0 — baseline:** Lighthouse + screenshots van v2 vastleggen als nulmeting (deels gedaan deze sessie).
2. **Stap 1 — skelet:** `v3/index.html` + `v3/assets/css/style.css` met het v2-token-systeem; alle secties als statische HTML (echte content, slots als placeholder).
3. **Stap 2 — verfijning:** de vijf v2-zwaktes oplossen (logo's op donker, contrast, portret, principes-blok, witruimte).
4. **Stap 3 — craft-laag:** scroll-driven animaties, micro-interacties, view transitions — met fallbacks.
5. **Stap 4 — QA:** Lighthouse 100/100/100/100, a11y-audit, responsive 360→1440px, reduced-motion.
6. **Stap 5 — content-afronding:** metrics + quotes invullen, doorverwijzing naar advies./dev.
7. **Stap 6 — go-live:** v3 → root, oude v1 archiveren.
