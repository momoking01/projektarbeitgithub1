# 🥙 Projektarbeit: Syrian Restaurant Web App

**Fullstack-Webanwendung für Online-Bestellungen**  
Frontend: **Astro** ✨ | Backend: **Express.js** 🚀 | Datenbank: **Supabase** 🏕️

![Astro](https://img.shields.io/badge/Astro-%F0%9F%92%A1-blueviolet?logo=astro)
![Express](https://img.shields.io/badge/Express.js-%F0%9F%9A%80-black?logo=express)
![Supabase](https://img.shields.io/badge/Supabase-%F0%9F%8F%95-green?logo=supabase)
![Playwright Tests](https://img.shields.io/badge/Tests-Playwright-04AA6D?logo=playwright)

---
### 📝 Projektübersicht

Diese Web-App simuliert ein **Online-Bestellsystem für ein syrisches Restaurant**.  
Sie besteht aus einem öffentlichen Kundenbereich (Frontend) und einem Admin-System im Hintergrund (Backend/API).

---

## 👨‍🍳 Funktionen für Kunden (Frontend)

- 🛒 Speisekarte ansehen (`☰ Menu`) und Produkte in den Warenkorb (`🛒 Cart`) legen  
- 💳 Zahlungsmethode auswählen (Bar oder SEPA)  
- ✅ Bestellung absenden (wird in Supabase gespeichert)  
- 📦 Eigene Bestellungen im Verlauf einsehen (`📜 Order History`)

---

## 🛠️ Funktionen für Admins

### 🧑‍💼 Im **Frontend** (nach Login):

- ➕ Produkte hinzufügen (Speisekarte erweitern)  
- 🔐 Zugriff auf Admin-Ansicht unter `/auth`

### 🔧 Im **Backend (API)**:

- 📋 Alle Bestellungen abrufen (`GET /orders`)  
- ➕ Neue Bestellung über API einfügen (`POST /orders`)  
- 🧹 Alle Bestellungen löschen (`DELETE /orders`)  
- 🗑️ Einzelne Bestellung per ID löschen (`DELETE /orders/:id`)  
- ✏️ Bestehende Bestellung per ID aktualisieren (`PUT /orders/:id`)

---


## 🌐 Live-Versionen

- 🔗 **Frontend (Kundensicht)**:  
  [https://momoking01.github.io/projektarbeitgithub1/](https://momoking01.github.io/projektarbeitgithub1/)

- 👨‍💻 **Admin Login**:  
  [https://momoking01.github.io/projektarbeitgithub1/auth](https://momoking01.github.io/projektarbeitgithub1/auth)

- 📦 **API Endpoint (Render)**:  
  [https://projektarbeitgithub1.onrender.com/orders](https://projektarbeitgithub1.onrender.com/orders)

⚠️ **Hinweis**:  
Render verwendet eine kostenlose Instanz, die sich bei Inaktivität automatisch in den Ruhemodus versetzt.  
Beim **ersten Zugriff nach längerer Pause** kann die Antwortzeit **50 Sekunden oder mehr** betragen.

➡️ **Tipp**: Um die Render-API schnell zu aktivieren, einfach den obigen API-Link aufrufen – die Instanz wird dadurch in wenigen Sekunden aufgeweckt.


---

## 🛠️ Verwendete Technologien

| Bereich         | Technologie                    |
|----------------|--------------------------------|
| **Frontend**    | [Astro](https://astro.build/) (HTML, CSS, JavaScript) |
| **Backend**     | [Express.js](https://expressjs.com/) (Node.js) |
| **API Hosting** | [Render](https://render.com/) |
| **Datenbank**   | [Supabase](https://supabase.com/) (PostgreSQL + REST API) |
| **Testing**     | [Playwright](https://playwright.dev/) |
| **Styling**     | Vanilla CSS, Astro Stylesheets |
| **Linting**     | ESLint, Stylelint |

---


## 🧱 Projektstruktur

Dieses Dokument beschreibt die Verzeichnisstruktur des Projekts und die Funktion der wichtigsten Dateien und Ordner.

Hauptverzeichnisse:

```text
/
├── .astro/
│   ├── settings.json
│
├── .github/workflows/
│   ├── deploy.yml
│
├── .vscode/
│   ├── extensions.json
│   ├── launch.json
│
├── node_modules/
│
├── playwright-report/
│   ├── data/
│   ├── trace/
│   ├── index.html
│
├── public/
│   ├── optimized/
│   │   ├── image.webp
│   ├── favicon.svg
│   ├── image.png
│   ├── index.css
│   ├── menu-bg.png
│   ├── styles.css
│
├── scripts/
│   ├── convertImages.js
│   ├── syncToDropbox.js
│
├── server/
│   ├── server.js
│
├── src/
│   ├── components/
│   │   ├── card.astro
│   │   ├── layout.astro
│   ├── pages/
│   │   ├── admin.astro
│   │   ├── auth.astro
│   │   ├── cart.astro
│   │   ├── checkout.astro
│   │   ├── contact.astro
│   │   ├── impressum.astro
│   │   ├── index.astro
│   │   ├── index.js
│   │   ├── menu.astro
│   │   ├── orders.astro
│   │   ├── privacy.astro
│   ├── env.d.ts
│
├── test-results/
│
├── tests/
│   ├── example.spec.ts
│
├── tests-examples/
│   ├── demo-todo-app.spec.ts
│
├── .gitignore
├── astro.config.mjs
├── eslint.config.js
├── package-lock.json
├── package.json
├── playwright.config.ts
├── README.md
├── stylelint.config.cjs
├── tsconfig.json
```


---

## 🧩 Architekturübersicht

- **Frontend**  
  Astro erzeugt eine statische Single Page App (SPA). Die Seiten wie `index.astro`, `cart.astro`, `checkout.astro`, `orders.astro` usw. sind in `src/pages/` definiert.

- **Backend (API)**  
  Die Datei `server/server.js` enthält eine Express.js REST-API.  
  Diese verarbeitet:
  
    | Methode | Pfad                 | Beschreibung                      |
    |--------:|----------------------|-----------------------------------|
    | GET     | `/orders`            | Alle Bestellungen abrufen         |
    | POST    | `/orders`            | Neue Bestellung speichern         |
    | DELETE  | `/orders`            | Alle Bestellungen löschen         |
    | DELETE  | `/orders/:id`        | Bestellung mit ID löschen         |
    | PUT     | `/orders/:id`        | Bestellung mit ID aktualisieren   |

- **Datenhaltung**  
  Alle Bestellungen werden **nicht mehr lokal**, sondern in **Supabase** (Cloud-PostgreSQL) dauerhaft gespeichert. Zugriff erfolgt via Supabase-REST-API aus dem Server.

---

## 💻 Lokale Installation & Ausführung

### 🧩 Voraussetzungen

- [Node.js](https://nodejs.org/) (empfohlen: Version 18+)
- [npm](https://www.npmjs.com/)
- optional: [Playwright](https://playwright.dev/) für Testing (`npx playwright install --with-deps`)
  
> ⚠️ **Hinweis**: Stelle sicher, dass der Installationspfad von Node.js in den Umgebungsvariablen (`Path`) deines Systems enthalten ist.  
> Andernfalls können Befehle wie `node` im Terminal nicht ausgeführt werden.

---

### 📥 Projekt aus GitHub klonen

#### 🟦 1. Mit GitHub Desktop (empfohlen für Einsteiger)

1. [GitHub Desktop installieren](https://desktop.github.com/)
2. Öffne die App → `File` → `Clone repository`
3. Gib ein oder wähle das Repository: `https://github.com/momoking01/projektarbeitgithub1.git`
4. Zielordner wählen → `Clone` klicken  
5. Öffne das Projekt in deinem Editor (z. B. VS Code)


---

#### 💻 2. Mit Git CLI (für Terminal-Nutzer)
> 📌 Verwende **Git Bash** oder ein beliebiges Terminal, in dem Git verfügbar ist (z. B. VS Code Terminal oder PowerShell mit installiertem Git).

```bash
git clone https://github.com/momoking01/projektarbeitgithub1.git
cd projektarbeitgithub1
```
---

#### 🧠 3. Direkt in VS Code klonen

1. Öffne VS Code → `Strg + Shift + P` → `Git: Clone`
2. Gib die Repo-URL ein: `https://github.com/momoking01/projektarbeitgithub1.git`
3. Zielordner wählen → Projekt wird geöffnet

---

#### 📦 4. ZIP-Download (ohne Git)
1. Gehe zu [GitHub Repo](https://github.com/momoking01/projektarbeitgithub1.git/)
2. Klicke auf `Code` → `Download ZIP`
3. Entpacke die ZIP-Datei
4. Öffne das Projekt z. B. in VS Code
---

### 🔧 Projekt lokal starten (Frontend & Backend)

#### 1️⃣ Abhängigkeiten installieren
Öffne ein Terminal im Projektordner und führe aus:

```bash
npm install
```

#### 2️⃣ Frontend starten (Astro)
```bash
npm run dev
```
📍 Das Frontend ist jetzt erreichbar unter:
👉 `http://localhost:4321`

#### 3️⃣ Backend starten (Express.js Server)
```bash
npm run server
```
📍 Das Backend (API-Server) läuft dann auf:
👉 `http://localhost:5000/orders` (wenn man lokal testet)

---

### 💾 Datenbank (Supabase)
 Die Bestellungen werden in Supabase gespeichert, nicht lokal.
 Die Verbindung erfolgt über den Key in server.js:

```js
const supabaseUrl = "https://swwfjdmfmomzfdktgupq.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...";
```
Diese Werte sind im server.js bereits richtig eingetragen ✅


---

### 🧪 Projekt testen
```bash
npm run lint                 # Linter ausführen
npm run test                 # Playwright Tests starten
npx playwright test --ui     # Test-UI öffnen
npx playwright show-report   # Playwright Test Report
```
---

### 🚀 Powershell-API Befehle

Bestellung senden (POST)
```bash
Invoke-RestMethod -Uri "https://projektarbeitgithub1.onrender.com/orders" -Method Post -Headers @{"Content-Type"="application/json"} -Body '{
  "items": [
    { "name": "Pizza Margherita", "quantity": 2 },
    { "name": "Caesar Salad", "quantity": 1 }
  ],
  "payment": "cash"
}'
```

Alle Bestellungen abrufen (GET)
```bash
Invoke-RestMethod -Uri "https://projektarbeitgithub1.onrender.com/orders"
```


Bestellung ändern (PUT)
```bash
Invoke-RestMethod -Uri "https://projektarbeitgithub1.onrender.com/orders/(ID ERSETZEN)" -Method Put -Headers @{"Content-Type"="application/json"} -Body '{
  "items": [
    { "name": "Pizza Margherita", "quantity": 3 },
    { "name": "Caesar Salad", "quantity": 2 }
  ],
  "payment": "sepa"
}'
```

Alle löschen (DELETE)
```bash
Invoke-RestMethod -Uri "https://projektarbeitgithub1.onrender.com/orders" -Method Delete
```

Einzelne löschen (DELETE)
```bash
Invoke-RestMethod -Uri "https://projektarbeitgithub1.onrender.com/orders/(ID ERSETZEN)" -Method Delete
```
---

### 💪 Hinweise

- Projektart: Hochschulprojekt im Studiengang [praktische Informatik]
- Zeitraum: Frühjahr 2025
- Hinweis: Dieses Projekt wurde zu Demonstrations- und Lernzwecken erstellt.

---

### 🚜 Weiterführend

- Supabase Setup-Doku: `https://supabase.com/docs`

- Astro Deployment: `https://docs.astro.build/en/guides/deploy/github/`

- Render Deployment (Node): `https://render.com/docs/deploy-node-express-app`





