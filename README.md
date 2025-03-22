# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure 

This document describes the directory structure of the project and the function of the most important files and folders.

Main Directories:

```text
/
├── .astro/
│   ├── settings.json
│   ├── types.d.ts
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
│   ├── Contact.image/
│   │   ├── image2.png
│   ├── optimized/
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
│   ├── orders.json
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


## Description of Key Files and Folders

### `.astro/`
- **settings.json**: Configuration file for Astro.
- **types.d.ts**: Type declaration file for Astro projects.

### `.github/workflows/`
- **deploy.yml**: Contains the GitHub Actions configuration for the deployment process.

### `.vscode/`
- **extensions.json**: Recommended VS Code extensions for the project.
- **launch.json**: Configuration file for debugging in VS Code.

### `public/`
This directory contains static assets such as images and stylesheets.
- **Contact.image/**: Contains `image2.png`.
- **optimized/**: Directory for optimized images.
- **favicon.svg**: The favicon for the website.
- **image.png**: General image for the website.
- **index.css**: CSS file for styling the website.
- **menu-bg.png**: Background image for the menu.
- **styles.css**: Additional styles for the website.

### `scripts/`
- **convertImages.js**: Script for image conversion.
- **syncToDropbox.js**: Script for synchronization with Dropbox.

### `server/`
- **orders.json**: Contains order data.
- **server.js**: Backend server logic.

### `src/`
The main source code of the project is located in this directory.
- **components/**: Contains reusable UI components.
  - `card.astro`: A card component.
  - `layout.astro`: Defines the main layout of the application.
- **pages/**: Contains the application's pages.
  - `admin.astro`: Admin section.
  - `auth.astro`: Authentication page.
  - `cart.astro`: Shopping cart page.
  - `checkout.astro`: Checkout page.
  - `contact.astro`: Contact page.
  - `impressum.astro`: Impressum (legal information) page.
  - `index.astro`: Homepage.
  - `index.js`: JavaScript logic for the main page.
  - `menu.astro`: Menu page.
  - `orders.astro`: Order overview page.
  - `privacy.astro`: Privacy policy page.

### `test-results/`
- Contains test run results.

### `tests/`
- **example.spec.ts**: Example test case.

### `tests-examples/`
- **demo-todo-app.spec.ts**: Another example test case.

## Important Configuration Files
- **.gitignore**: Lists files to be ignored by Git.
- **astro.config.mjs**: Configuration file for Astro.
- **eslint.config.js**: Configuration file for ESLint.
- **package-lock.json**: Contains exact versions of installed packages.
- **package.json**: Contains metadata about the project and its dependencies.
- **playwright.config.ts**: Configuration file for Playwright tests.
- **README.md**: Project documentation.
- **stylelint.config.cjs**: Configuration file for Stylelint.
- **tsconfig.json**: TypeScript configuration file.
- **env.d.ts**: Type declaration file for environment variables.




## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                           | Action                                           |
| :----------------------------     | :----------------------------------------------- |
| npm install                       | Installs dependencies                            |
| npm install -g astro              | Installs dependencies global                     |
| npm run dev                       | Starts local dev server at localhost:4321        |
| npm run build                     | Build your production site to ./dist/            |
| npm run preview                   | Preview your build locally, before deploying     |
| npm run astro ...                 | Run CLI commands like astro add, astro check     |
| npm run astro -- --help           | Get help using the Astro CLI                     |
| npm install --save-dev            |                                                  |
| eslint eslint-plugin-astro        | Installs EsLint                                  |
| npm install --save-dev            |                                                  |
| postcss-html stylelint-config-html| Installs StyleLint                               |
| node scripts/convertImages.js     | optimize images                                  |



| programm lokal testen                                                                | 
| :----------------------------------------------------------------------------------- | 
| npm run lint                                                                         | 
| npx playwright install --with-deps --> (install playwright browser)                  | 
| npm run test                                                                         |
| npx playwright show-trace test-results/example-navigation-to-menu-chromium/trace.zip |
| npx playwright test --ui                                                             |





powershell commands:

post:
Invoke-RestMethod -Uri "http://projektarbeitgithub1.onrender.com/orders" -Method Post -Headers @{"Content-Type"="application/json"} -Body '{
  "date": "2025-03-19T12:00:00Z",
  "items": [
    { "name": "Pizza Margherita", "quantity": 2 },
    { "name": "Caesar Salad", "quantity": 1 }
  ],
  "payment": "cash"
}'



alles Delete:
Invoke-RestMethod -Uri "http://projektarbeitgithub1.onrender.com/orders" -Method Delete



delete nach id:
Invoke-RestMethod -Uri "http://projektarbeitgithub1.onrender.com/orders/1742487468395" -Method Delete



put nach id:
Invoke-RestMethod -Uri "http://projektarbeitgithub1.onrender.com/orders/1742487468395" -Method Put -Headers @{"Content-Type"="application/json"} -Body '{
  "id": "1742487468395",
  "date": "2025-03-20T16:17:48.395Z",
  "items": [
    { "name": "Pizza Margherita", "quantity": 3 },
    { "name": "Caesar Salad", "quantity": 2 }
  ],
  "payment": "sepa"
}'



# 🌐 View the Project Live: (https://momoking01.github.io/projektarbeitgithub1/)
# 🌐 As admin log in (https://momoking01.github.io/projektarbeitgithub1/auth)
# 🌐 orders on server (https://projektarbeitgithub1.onrender.com/orders)

