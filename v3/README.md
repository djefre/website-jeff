# v3 — persoonlijke autoriteitspagina

De nieuwe site voor `jeffrey.brocx.io`, die v1 (root) gaat vervangen. Hand-rolled neo-brutalism, **geen frameworks, geen build-stap**. De craft van de pagina ís de skills-showcase.

> Plan, designreview en bevindingen staan in [`advies.md`](advies.md). Repo-brede context in [`../CLAUDE.md`](../CLAUDE.md).

## Positionering

De hele pagina is opgebouwd rond één these: **"een zeldzame combinatie"** — diepe technische expertise + leiderschap + discipline + security-first denken in één persoon. Het is een *persoonlijke autoriteitspagina*, geen salespagina (dat wordt `advies.brocx.io`). Geen CTA-funnel; wel rustig "contact".

## Bestanden

```
v3/
  index.html              structuur + minimale inline JS
  assets/css/style.css    brutalism-framework (tokens + utilities + componenten) — VENDORED
  assets/css/page.css     paginaspecifieke stijlen, bovenop het framework
  assets/img/             portret + logo's (WebP/SVG)
```

### CSS-lagen (belangrijk)

1. **`style.css` = het framework.** Tokens op `:root`, utility-classes, componenten. **Niet bewerken** voor paginadingen — behandel het als een vendored library.
2. **`page.css` = deze pagina.** Alle bespoke secties. 17 genummerde secties met een inhoudsopgave bovenaan.
3. **Inline `style=` is verboden.** Staat er één, dan hoort die als utility/class in `page.css`. (Stand: 0 inline styles.)

> **Tijdelijke bestanden:** tijdens actief itereren kan er een override-bestand bestaan (bijv. `*-temp.css`) dat via een extra `<link>` in `index.html` wordt ingeladen. Dat is per definitie tijdelijk en hoort uiteindelijk in `page.css` gemerged en de link verwijderd te worden.

## Designtokens (uit `style.css`)

- **Kleur:** bg cream `#f4eee4`, surface `#fbf7ef`, primary aubergine `#2a0e3a`, primary-ink `#f5edfb`, accent violet `#9333ea`, ink/rand `#0c0410`.
- **Type:** Space Grotesk (display) · Inter (body) · JetBrains Mono (mono). Fluid schaal `--text-*` met `clamp()`.
- **Vorm:** dikke randen + **harde offset-shadows (geen blur)**. 4pt-spacing-schaal.

## Secties (DOM-volgorde)

Hero → Marquee → 01 Combinatie → 02 Over mij (+ stats + "Gewerkt voor"-logo's) → 03 Werk → 04 Skills → 05 Aanbevelingen → 06 Contact → Footer.

## Patronen & conventies

**Sectienummers — automatisch.** De `01–06` worden via een CSS-counter gegenereerd (`page.css` §3). De markup bevat **alleen het label**: `<p class="section-index">DE COMBINATIE</p>`. Secties herordenen = nummers lopen vanzelf mee. Hero/marquee tellen niet mee (hebben geen `.section-index`).

**Bleed-banden.** `.bleed-primary` (aubergine) en `.bleed-accent` (violet) zetten de tekstkleur en kleuren koppen/eyebrows automatisch licht. Zet dus géén kleur per element; gebruik de band-context.

**Tekst-utilities (`page.css` §1).**
- `.measure` (62ch) / `.measure-lead` (56ch) — leesbare regellengte.
- `.link` — onderstreping + nette offset.
- `.text-soft` (.9) / `.text-softer` (.75) — emphasis dimmen (werkt met geërfde kleur).

**Logo-strip ("Gewerkt voor").** Lichte kaart op de donkere sectie. Scheidingslijnen ontstaan doordat de `gap` de border-gekleurde achtergrond laat doorschemeren (werkt bij elk aantal kolommen). Logo's zijn grijswaarden (kleuren in bij hover) en **optisch gebalanceerd**: niet op hoogte alleen, maar op visueel gewicht — elk logo heeft een eigen hoogte via `.logo--<naam>` (`page.css` §12). Vierkante marks (Centraal Beheer) krijgen meer hoogte, lange dunne wordmarks (Interpolis) minder.

**Stats.** Violet accent-tick boven elk getal, magnitude groot + eenheid klein/gedimd (`<span class="proof__unit">`), dunne verticale scheidingslijntjes, mono-uppercase labels. Responsive 2→4 koloms.

**Werk.** Bewust géén CV: resultaat-uitspraken (sector + statement + context), geen functietitels/stacks/data. Volledige historie → LinkedIn.

**Contact.** E-mail/telefoon/WhatsApp zijn base64-geobfusceerd in `data-reveal` en worden pas bij klik gedecodeerd (anti-scrape). De ~10 regels JS onderaan `index.html` doen dat + het jaartal in de footer. Plain-text contactgegevens nooit hardcoden.

## Recepten

**Nieuw logo toevoegen:** voeg een `<div class="logos__cell"><img class="logo--x" …></div>` toe in de Over-mij-sectie, en een `.logos__cell img.logo--x { height: …px }` in `page.css` §12 (hoogte op het oog balanceren t.o.v. de buren — let op: de bounding-box van een SVG bevat vaak transparante marge, dus stem af op het zíchtbare beeld). Zet correcte `width/height`-attributen (intrinsieke maten) voor CLS.

**Nieuwe sectie toevoegen:** `<section id="…" class="section [bleed-primary|bleed-accent]">` met een `<p class="section-index">LABEL</p>` (nummer komt automatisch) en een `<h2 class="h-section">`. Voeg 'm toe aan de `topbar__nav` als die in het menu hoort.

**Skill toevoegen:** een `<span class="tag">…</span>` in de juiste `.skills__group`.

## Te doen / open

- **Aanbevelingen (§05):** placeholders vervangen door echte quotes (mogen van LinkedIn), of de sectie verbergen tot ze er zijn — niet leeg live zetten.
- **Kwantificeerbare cijfers** in Werk waar zinvol.
- **Subtiele verwijzing** naar `advies.brocx.io` / `dev.brocx.io` in de footer zodra die live zijn (placeholder-comment staat er).
- **`cv.pdf`** verwachten in de root (de contact-link wijst naar `cv.pdf`).
- Optioneel later: dark/light toggle (tokens zijn voorbereid), scroll-driven reveals.

## Lokaal bekijken

Zie [`../CLAUDE.md`](../CLAUDE.md) → Development. Kort: nginx-container op de repo-root, dan `http://localhost:8765/v3/`.
