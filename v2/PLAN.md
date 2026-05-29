# v2 Plan — Commercieel funnel-systeem

> Vastgelegd op 2026-05-26 na sparring-sessie. Bevat alle beslissingen tot nu toe over de cold-mail, PDF one-pager, en v2 website. **Nog te beslissen**-items staan onderaan.

---

## 1. Strategie & opzet

- **Cold mail = commerciële motor.** PDF-bijlage + mail-body samen sturen de outreach.
- **V2 website = ondersteunend.** Validatie-instrument voor wie na de mail wil checken of de afzender legitiem is. Geen lead-generation tool.
- **De scan is het ticket-in.** Verkoopt voor zichzelf maar dient ook als opener naar grotere trajecten (modernisering, fractional CTO).
- **Funnel-volgorde**: Cold mail → PDF gelezen → "wie is dit?" → website bekeken → intake-mail/telefoontje.

---

## 2. Doelgroep

- **Geografisch**: Noord-Nederland (Friesland, Groningen, Drenthe).
- **Bedrijfsomvang**: MKB **10-100 medewerkers** met operationele complexiteit. (Oorspronkelijk voorbeeld was 10-mans, maar de werkelijke CRM-lijst loopt tot 110.)
- **IT-maturiteit**: laag — bedrijven die "niet zoveel snappen van IT" en "de shit op orde willen hebben".
- **Pijn**: rommelig core-systeem, handmatig werk in planning/administratie/dossiers, losse Excels, organisch gegroeide integraties, behoefte aan onafhankelijk technisch oordeel.
- **Niet** voor: tech-companies, bedrijven met eigen dev-team, AI-hypevolgers, gratis-brainstorm-zoekers.

---

## 3. 4 verticals (gebaseerd op CRM Map1.xlsx — 61 prospects)

| Cluster | # bedrijven | Gemene pijn |
|---|---|---|
| **A. Maakindustrie & bouwgerelateerd** | 21 | Werkvoorbereiding → engineering → productie → montage; materiaalflow; tekeningen ↔ planning |
| **B. Service & installatie in het veld** | 16 | Planning van mensen-in-veld, werkbonnen, multi-locatie service, urenregistratie ↔ facturatie |
| **C. Administratie-zwaar dienstverlenend** | 18 | Dossiers per huurder/cliënt/dossier, contracten, financiële administratie, klantcommunicatie |
| **D. Multi-locatie zorg & opvang** | 6 | Planning over locaties, cliëntdossiers, regelgeving, ouder/cliënt-communicatie |

Sub-verticals per cluster:
- **A**: staalbouw, machinebouw, interieurbouw, kozijnen, bouw, plaatzetterij
- **B**: installatie, schoonmaak, transport, fulfilment, verhuur
- **C**: vastgoed/VvE, notariaat, administratie/accounting, uitzend/HR
- **D**: kinderopvang, thuiszorg, dietetiek

---

## 4. Product & prijs

- **De scan**: Software, AI & Automation Opportunity Scan
- **Prijs**: vanaf €2.500 — **vaste prijs op basis van scope**, geen open einde
- **Duur**: 1-3 weken doorlooptijd
- **Uurtarief (€100+)**: **NIET publiceren** op one-pager of site — hoort in de offerte. Lage prijspositie ankert verkeerd op koud materiaal.
- **Deliverables**: executive summary, opportunity matrix, risicoanalyse, quick wins, 30/60/90-roadmap, advies over uitvoering.

---

## 5. Tone of voice

- **Nuchter-droog met klein randje**, geen cabaret.
- Tussen propositie-stem en traditioneel zakelijk in — lichte lean naar zakelijk.
- Geen marketing-blabla, geen jargon, geen anglicismen waar het kan.
- Géén "paniek met LinkedIn-account"-niveau van sardonische oneliners — past niet bij Friese/Groningse eigenaren.
- Behouden uit propositie:
  - *"Eerst begrijpen. Dan prioriteren. Dan uitvoeren."* — kern-lijn.
  - *"Geen open einde."* — over de prijs.
- Schrappen of doseren: *"paniek met LinkedIn-account"*, *"ducttape en hoop als design pattern"*, *"Kijk, beschaving"* — bewaar voor LinkedIn-posts.

---

## 6. Cold mail (de hook)

- **Format**: mail = hook, PDF = uitwerking. Mail haakt aan, PDF doet zware werk.
- **Lengte**: 3 alinea's max.
  1. Persoonlijke aanleiding ("ik kwam jullie tegen omdat...")
  2. Korte pitch (1-2 zinnen — de scan, wat 'ie oplost)
  3. Verwijzing naar bijlage + CTA
- **4 vertical-templates** (één per cluster A/B/C/D).
- **Placeholders per template**: `{company_name}`, `{voornaam}`, en één observatie-zin op basis van `notable_findings` / `notes` uit CRM.
- **Subject line**: nog te schrijven, per vertical anders.

---

## 7. PDF one-pager

### 7.1 Format

- **Strict 1 A4** — cold mail = harde lezer, twee pagina's worden niet gelezen.
- **HTML → PDF** generatie zodat hij later eenvoudig een webpagina kan worden.
- **Print-stylesheet** vereist.
- **Brutalism design** met palet uit `v2/assets/css/style.css`:
  - Background: cream (`#f4eee4`)
  - Primary: deep aubergine (`#2a0e3a`)
  - Accent: vibrant purple (`#9333ea`)
  - Border/text: near-black (`#0c0410`)

### 7.2 Blok-volgorde (top → bottom)

1. **Hero-band** (aubergine block, ink-tekst) — naam + tagline *"Software, AI & Automation Scan"*
2. **Hook** (3 regels) — vertical-specifieke pijn-zin, geïnjecteerd uit CRM
3. **Wat de scan oplevert** — 6 deliverables in 2×3 grid + prijs/duur regel
4. **Werkwijze** — 3 mini-stappen: Intake · Analyse · Roadmap
5. **Wie ik ben** — klein zw/w portret + credentials-regels
6. **CTA-band** (accent purple) — *"Antwoord op deze mail of bel direct"* + contact
7. **Footer-regel** (mono) — naam, telefoon, mail

### 7.3 Credentials (blok 5)

Alle drie hefbomen inzetten:
- **Klein zw/w portret** van Jeffrey (hard-cropped, brutalist — geen ronde foto)
- **Klantnamen-regel**: *"Eerder voor Achmea, NOS, Arts en Zorg. Nu Lead Developer bij AB Texel."*
- **Marine-regel** (mono, onderaan blok): *"Achtergrond: Koninklijke Marine — Chef Verbindingsdienst, NATO CTS clearance."*

### 7.4 Personalisatie — 6 plekken op de A4

| # | Plek | Vulling | CRM-bron |
|---|---|---|---|
| 1 | Eyebrow boven hero | `VOOR {COMPANY_NAME} · SOFTWARE & AUTOMATION SCAN` | `company_name` |
| 2 | Aanhef onder hero | `Hoi {voornaam},` | `contact_name` |
| 3 | Hook (blok 2) | observatie-zin op basis van publieke bronnen | `notable_findings` / `notes` |
| 4 | Scan-blok titel | *"Wat de scan voor {company_name} oplevert"* | `company_name` |
| 5 | CTA-regel | *"Antwoord op deze mail, {voornaam}, of bel direct."* | `contact_name` |
| 6 | Bestandsnaam PDF | `Scan_{Company_Name}_Jeffrey_Brocx.pdf` | `company_name` |

**Niet personaliseren**: blok 5 (Wie ik ben). Dat moet over Jeffrey gaan, anders verlies je het anker.

### 7.5 Creep-grens

**WEL gebruiken** (publieke bronnen — fair game):
- Tekst van eigen website
- LinkedIn-pagina van bedrijf
- Vacaturepagina
- Persberichten

**NIET gebruiken** (creep-territorium):
- Naam van werknemers anders dan de geadresseerde
- Speculatie over interne pijn alsof je hun systeem hebt gezien
- Letterlijke citaten uit vacatures plakken (te research-y, voelt als stalker)
- Gokken op medewerkersaantal als dat niet publiek staat
- Persoonlijke details over de geadresseerde (LinkedIn-foto's, vakantie, gezin)

### 7.6 CTA

- **Primair**: mail-reply op de cold mail
- **Secundair**: telefoonnummer zichtbaar — eigenaren 50+ bellen graag
- **NIET**: Calendly of planlinks. Voelt voor MKB-eigenaren als tech-foefje.

---

## 8. CRM-bron

- **Bestand**: `C:\Users\jeffr\Downloads\Map1.xlsx` (61 prospects, sheet 1)
- **Velden voor personalisatie**: `company_name`, `contact_name`, `contact_role`, `industry`, `company_description`, `notable_findings`, `notes`
- **Velden voor intern routeren** (niet zichtbaar voor prospect): `priority`, `fit_score`, `do_not_contact`, `status`, `next_action`, `last_channel`

---

## 9. V2 website — rol & implicaties

### 9.1 Rol

De website is **validatie-instrument**, geen lead-generation tool. Bezoeker komt vanuit de cold mail / PDF en wil weten: *"is deze afzender legitiem en serieus?"*

Wat dat betekent:
- **Korter dan eerder voorgesteld** (was 9 secties — nu waarschijnlijk 5-6).
- **Geen agressieve pijn-sectie** (al gefilterd door cold mail).
- **Geen "voor wie wel/niet"-filter** (al gefilterd).
- **Wel**: substantie over de scan + credentials + één duidelijke vervolgactie.
- **Tone**: rustig, dichtgeschreven, geen verkooppraat.

### 9.2 Tech & hosting

GitHub Pages limits (relevant voor v2):
- Repo size ≤ 1 GB (laag risico)
- Published site ≤ 1 GB (laag risico, mits WebP-only)
- 100 GB bandwidth/maand soft (afhankelijk van traffic)
- 10 builds/uur soft (omzeilbaar via Actions, niet nodig bij static)
- 10 min deploy timeout

Implicaties:
- **Geen build-step** — static HTML/CSS/JS
- **Geen Vue voor v2** — bespaart 75kb per pageload, site is niet reactive
- **WebP-only** voor images
- **Fonts**: subsetten of system-stack
- **Hosting-pad**: vooralsnog open — `jeffrey.brocx.io/v2/` vs separate domain (`brocx.io`, `diensten.brocx.io`)

### 9.3 CSS-fundament

Al gemaakt: [v2/assets/css/style.css](assets/css/style.css) — brutalism utility framework met tokens, type-scale, spacing, layout-utilities, components (btn/card/tag), responsive prefixes. Klaar voor gebruik.

---

## 10. Nog te beslissen

### Voor de cold mail / PDF
- [ ] **Subject line per vertical** (4 variants)
- [ ] **Daadwerkelijke copy** voor mail-body templates (4×) en PDF (1×)
- [ ] **Generatie-pipeline**: hoe genereren we 61 PDFs + mails? Find-replace script? Templating engine (Handlebars/Mustache)? Per hand?
- [ ] **Zw/w portret van Jeffrey** — bestaande foto bewerken of nieuwe?
- [ ] **Verzendkanaal**: vanuit welk mailadres (`jeffrey@brocx.io`?), SPF/DKIM ingeregeld?

### Voor de v2 website
- [ ] **Hosting-pad**: `jeffrey.brocx.io/v2/` (subpad) of nieuw domain
- [ ] **Welke v2 secties** uit de eerder voorgestelde 9 sneuvelen nu de website ondersteunend wordt
- [ ] **Verhouding tot v1**: blijft v1 bestaan op `jeffrey.brocx.io/`, gaat v2 over die plek heen, of zijn het twee parallelle sites?
- [ ] **URL in de cold mail / PDF** — naar welke pagina linken we?

### Strategisch
- [ ] **Status bij AB Texel** — ben je daar nog werknemer als deze mailings uitgaan? Beïnvloedt tekst ("Lead Developer bij AB Texel" vs "Voorheen Lead Developer bij AB Texel").
- [ ] **Capaciteit** — hoeveel intake-gesprekken per week kun je dragen naast je dagelijkse werk? Stuurt verzendvolume.
