# 🚀 Deployment-stappenplan — GitHub → Vercel

Volg deze stappen om de site live te zetten. Reken op **10-15 minuten** als je nog geen accounts hebt.

---

## ✅ Wat je nodig hebt

- [Node.js 18+](https://nodejs.org/) geïnstalleerd
- [Git](https://git-scm.com/downloads) geïnstalleerd
- Een **GitHub-account** → [github.com/signup](https://github.com/signup)
- Een **Vercel-account** → [vercel.com/signup](https://vercel.com/signup) (log in met GitHub, is het makkelijkst)

---

## STAP 1 — Lokaal testen (optioneel, maar verstandig)

Open een terminal in de projectmap (`thm-partners`) en draai:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Zie je de site? Dan ben je klaar voor de volgende stap. Stop met `Ctrl+C`.

---

## STAP 2 — Git initialiseren

Nog steeds in de projectmap:

```bash
git init
git add .
git commit -m "Initial commit: THM Partners site"
```

> 💡 Krijg je een melding dat Git om je naam en e-mail vraagt? Dat is een eenmalige setup:
> ```bash
> git config --global user.name "Jouw Naam"
> git config --global user.email "jouw@email.com"
> ```

---

## STAP 3 — Repository aanmaken op GitHub

1. Ga naar [github.com/new](https://github.com/new)
2. **Repository name**: `thm-partners` (of wat je zelf wilt)
3. **Public** of **Private** — beide werken met Vercel
4. **NIET** "Add a README", "Add .gitignore" of "Add license" aanvinken (die hebben we al lokaal)
5. Klik **Create repository**

Op de volgende pagina laat GitHub je twee commando's zien. Gebruik het stuk onder *"…or push an existing repository from the command line"*. Het ziet er zo uit:

```bash
git remote add origin https://github.com/JOUW-USERNAME/thm-partners.git
git branch -M main
git push -u origin main
```

> Bij het pushen vraagt Git om login. Gebruik je GitHub-gebruikersnaam en een [Personal Access Token](https://github.com/settings/tokens) (geen wachtwoord — dat werkt niet meer). Maak er één aan met scope `repo`.
>
> 💡 Makkelijker: installeer [GitHub Desktop](https://desktop.github.com/) of [GitHub CLI](https://cli.github.com/), die regelen authenticatie voor je.

Refresh GitHub — je code staat er nu.

---

## STAP 4 — Vercel koppelen

1. Ga naar [vercel.com/new](https://vercel.com/new)
2. Klik **Import Git Repository**
3. Eerste keer? Klik **"Install"** of **"Add GitHub Account"** en geef Vercel toegang tot je repo (alle, of alleen `thm-partners`)
4. Zoek je repo `thm-partners` in de lijst → klik **Import**

---

## STAP 5 — Project configureren

Vercel detecteert automatisch dat het Next.js is. Je hoeft **niks** aan te passen:

- **Framework Preset**: Next.js ✅
- **Build Command**: `next build` ✅
- **Output Directory**: laat leeg ✅
- **Install Command**: `npm install` ✅

Klik op **Deploy**.

Vercel bouwt nu de site. Duurt ~1-2 minuten. Klaar? 🎉

---

## STAP 6 — Bekijk je live site

Vercel geeft je een URL zoals `https://thm-partners.vercel.app`. Klik erop. Live.

---

## STAP 7 — Eigen domein koppelen (optioneel)

Heb je `thmpartners.nl` (of een ander domein)?

1. In Vercel: ga naar je project → **Settings** → **Domains**
2. Typ je domein in en klik **Add**
3. Vercel laat zien welke DNS-records je moet zetten bij je domeinregistrar (bijv. TransIP, Vimexx, Cloudflare):
   - Voor `thmpartners.nl` (root) → een **A-record** naar het door Vercel gegeven IP
   - Voor `www.thmpartners.nl` → een **CNAME** naar `cname.vercel-dns.com`
4. Zet de records bij je registrar. Binnen 5 min - 24 uur is het actief.
5. Vercel regelt automatisch een gratis SSL-certificaat (https).

---

## 🔄 Updates pushen (workflow)

Zodra alles staat: elke wijziging is een paar commando's.

```bash
# tekst aanpassen in app/page.tsx, save
git add .
git commit -m "Tekst homepage aangepast"
git push
```

Vercel ziet de push, bouwt automatisch een nieuwe versie en zet hem live. Je krijgt voor elke commit ook een **preview-URL** zodat je kunt testen voordat je publiceert.

---

## 🛠️ Veelvoorkomende problemen

**"npm: command not found"**
→ Node.js niet geïnstalleerd. [nodejs.org](https://nodejs.org/) — pak de LTS-versie.

**"Authentication failed" bij git push**
→ Wachtwoord werkt niet meer op GitHub. Gebruik een [Personal Access Token](https://github.com/settings/tokens) of installeer [GitHub Desktop](https://desktop.github.com/).

**Build faalt op Vercel met "Module not found"**
→ Heb je per ongeluk `node_modules` mee-gecommit? Check of `.gitignore` aanwezig is en doe:
```bash
git rm -r --cached node_modules
git commit -m "Remove node_modules"
git push
```

**De pagina is leeg / styling werkt niet**
→ Wis je browser-cache of open in een incognito-tab. Vercel cachet agressief.

---

## 📦 Wat is er met dit project gebeurd?

```
thm-partners/
├── app/
│   ├── globals.css      ← alle styling
│   ├── layout.tsx       ← html-shell + fonts + metadata
│   └── page.tsx         ← de homepage
├── .gitignore
├── next.config.js
├── next-env.d.ts
├── package.json
├── tsconfig.json
├── README.md
└── DEPLOYMENT.md        ← dit bestand
```

Veel succes 🚀
