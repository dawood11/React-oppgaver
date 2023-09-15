# **1. Innføring i introduksjon til `React`**

React er et populært JavaScript-bibliotek for å bygge brukergrensesnitt. Det er kjent for sin komponentbaserte arkitektur og den virtuelle DOM, som gir effektive og raske oppdateringer av brukergrensesnittet.

## Forutsetninger og installasjon

Før du starter med React, trenger du noen forutsetninger:

### 1. Node.js & npm

React krever Node.js, en JavaScript runtime, for å kjøre. Sammen med Node.js kommer npm (Node Package Manager), som lar deg administrere og installere JavaScript-biblioteker og verktøy.

- **Hvorfor trenger vi Node.js?**
  - Selv om React kjører i nettleseren, bruker vi Node.js for verktøy som bygger, tester og kjører utviklingsserveren.
  
- **Hva er npm?**
  - npm er verdens største programvarebibliotek. Det hjelper med å installere ulike biblioteker (som React) og verktøy (som `create-react-app`) som er nødvendige for moderne webutvikling.

- **Hva er npx?**
  - `npx` er et pakkekjøringsverktøy som kommer med npm. Det lar deg kjøre kommandoer fra pakker som ikke globalt er installert på din maskin. Dette er spesielt nyttig for å bruke verktøy som `create-react-app` uten å installere dem globalt.

**Instruksjoner for installasjon:**
1. Last ned og installer [Node.js](https://nodejs.org/).
2. Etter installasjon, åpne terminalen eller kommandolinjen og kjør `node -v` og `npm -v` for å sikre at både Node.js og npm er installert riktig.
3. Nå er du klar til å opprette din første React-applikasjon!

## Opprette ditt første React-prosjekt

Med Node.js og npm installert, kan du enkelt opprette et nytt React-prosjekt ved å bruke `create-react-app`:

```bash
npx create-react-app mitt-react-prosjekt
cd mitt-react-prosjekt
npm start
```

Når du oppretter et nytt prosjekt med `create-react-app`, får du følgende filstruktur:

- `public/`: Dette mappen inneholder statiske filer. Den viktigste er `index.html`, som er hovedHTML-filen din. Alle React-komponenter festes her.
- `src/`: Dette er mappen der all React-kode skal ligge. Den inkluderer komponenter, stiler, og annen JavaScript-kode.
- `node_modules/`: Når du installerer pakker via npm, lagres disse bibliotekene i denne mappen. Her er alle avhengigheter som prosjektet ditt trenger.
- `package.json`: En viktig konfigurasjonsfil som inneholder informasjon om prosjektet ditt, som prosjektets navn, versjon og avhengigheter.

## Innføring i `index.js` og `App.js`

### `index.js`

`index.js` fungerer som inngangspunktet for en React-applikasjon. Den er ansvarlig for å feste (mount) den overordnede appkomponenten til DOM-en. 

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));
```

Her er de viktigste delene av koden:

1. **Imports**:
   - `React` fra `react`: Selve React-biblioteket.
   - `ReactDOM` fra `react-dom`: Lar oss manipulere DOM ved hjelp av React-komponenter.
   - `App` fra `./App`: Dette er hovedkomponenten for applikasjonen.
   - `./index.css`: Globale stiler for applikasjonen.

2. **ReactDOM.render()**:
   - Denne funksjonen tar to argumenter: En React-komponent og en DOM-node.
   - I eksempelet ovenfor, blir `App`-komponenten festet til DOM-elementet med id `root`.

### `App.js`

`App.js` er vanligvis der du finner hovedkomponenten for applikasjonen. I en enkel `create-react-app`-applikasjon, vil den ofte se slik ut:

```javascript
import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Welcome to My React App</h1>
      </header>
    </div>
  );
}

export default App;
```

Noen nøkkelpunkter fra denne filen:

1. **Imports**:
   - `React` fra `react`: Selv om JSX er brukt, trenger vi å importere React.
   - `./App.css`: Stilene spesifikke for denne komponenten.

2. **App-komponenten**:
   - Definert som en arrow funksjon.
   - Returnerer JSX som beskriver hvordan komponenten skal se ut.

3. **Export**:
   - `App`-komponenten blir eksportert for å kunne brukes i andre filer, som `index.js`.

### DOM vs. ReactDOM

**DOM** står for Document Object Model og er en programmeringsgrensesnitt for webdokumenter. Den representerer siden slik at programmer kan endre dokumentstrukturen, stilen og innholdet. Når du ber nettleseren om å vise en nettside, konverterer nettleseren HTML-teksten til DOM.

**ReactDOM** er en bibliotek som lar deg manipulere DOM på en effektiv måte fra React-kode. Den sammenligner komponentens ønskede tilstand med den nåværende, og oppdaterer DOM for deg, kun der det er nødvendig. Dette kalles 'reconciliation', og det er grunnen til at React kan være så rask.

Når du bruker React og ReactDOM sammen, skriver du hva du vil at UI-en skal se ut som til enhver tid, og React sørger for at DOM matcher denne beskrivelsen.

## Struktur av en typisk React-kodefil

En vanlig React-kodefil er ofte bygd opp slik:

```javascript
import React from 'react';

const MinKomponent = (props) => {
    return <div>Hei {props.navn}!</div>;
}

export default MinKomponent;
```

1. **Imports**:
   Her importerer du nødvendige moduler og biblioteker øverst i filen.
   ```javascript
   import React from 'react';
   ```

2. **Komponentdefinisjon**:
   Dette er selve komponenten, som kan defineres som en funksjonskomponent eller en klassekomponent.
   ```javascript
   const MinKomponent = () => {
     return <h1>Hei, verden!</h1>;
   };
   ```

3. **Exports**:
   For å gjøre komponenten tilgjengelig for andre filer, eksporterer du den.
   ```javascript
   export default MinKomponent;
   ```
## `.js` filer vs `.jsx` filer
### `.js` Filer

- **Utvidelse:** `.js` står for JavaScript.
- **Innhold:** Inneholder ren JavaScript-kode eller ES6+ kode.
- **Bruksområder:** Brukt for alle typer JavaScript-oppgaver, enten det er på serveren (som i Node.js) eller på klienten.
- **Støtte:** Alle JavaScript-miljøer, inkludert nettlesere og Node.js, kan kjøre `.js` filer direkte.

```javascript
const add = (a, b) => {
    return a + b;
}
```

### `.jsx` Filer

- **Utvidelse:** `.jsx` står for JavaScript XML.
- **Innhold:** Inneholder JavaScript-kode blandet med en XML-lignende syntaks. Denne syntaksen gjør det mulig å skrive HTML-lignende kode direkte i JavaScript.
- **Bruksområder:** Hovedsakelig brukt med React for å definere komponenter. Komponentene ser ofte ut som vanlig HTML, men er faktisk funksjoner eller klasser som returnerer React-elementer.
- **Støtte:** `.jsx` filer kan ikke kjøres direkte i nettlesere eller Node.js uten en transpiler, som Babel, fordi nettlesere forstår kun ren JavaScript. Babel konverterer `.jsx` kode til vanlig JavaScript som nettlesere kan tolke.

```jsx
const WelcomeMessage = () => {
    return <h1>Hello, world!</h1>;
}
```

## Hovedforskjeller

1. **Syntaks:** Mens `.js` filer inneholder ren JavaScript, kan `.jsx` filer inneholde JavaScript blandet med en XML-lignende syntaks.
2. **Bruksområde:** `.jsx` filer brukes spesielt med React for å definere komponenter, mens `.js` filer brukes i mange JavaScript-sammenhenger.
3. **Transpilering:** `.jsx` filer trenger en transpiler som Babel for å konvertere koden til vanlig JavaScript før den kjøres i en nettleser, mens `.js` filer ikke nødvendigvis trenger det.


Valget mellom `.js` og `.jsx` avhenger av hva du prøver å oppnå. Hvis du arbeider med React og skriver komponenter, vil du sannsynligvis bruke `.jsx`. Men for generelle JavaScript-oppgaver, vil `.js` være det naturlige valget.

## Dypdykk i `package.json`

`package.json` er hjertet av enhver Node.js-applikasjon eller -modul. For en React-app vil den inneholde:

- **metadata** om prosjektet ditt, som navn, versjon og beskrivelse.
- **scripts**: Kommandoer du kan kjøre, som starter utviklingsserveren, bygger appen for produksjon, osv.
- **dependencies**: Dette er biblioteker og verktøy prosjektet ditt trenger for produksjon.
- **devDependencies**: Biblioteker og verktøy som trengs for utvikling, men som ikke vil bli inkludert i produksjonsbyggingen.

Når du kjører en kommando som `npm install react`, legger npm til 'react' i 'dependencies'-delen av `package.json` og laster ned koden for React-biblioteket til `node_modules`-mappen.

## Hvordan npm og npx fungerer

**npm (Node Package Manager)** er en pakkehåndterer for JavaScript. Den lar deg installere, oppdatere og administrere JavaScript-biblioteker og -verktøy i prosjektet ditt. Når du installerer en pakke med `npm install`, legger den pakken til i `node_modules`-mappen og oppdaterer `package.json`-filen.

**npx** er en pakke som fulgte med npm (fra versjon 5.2.0) som gjør det lettere å kjøre kommandoer fra Node.js-moduler. Den mest kjente bruken av npx er å kjøre `create-react-app` uten å installere det globalt på maskinen.

**Konklusjon**

React er et kraftfullt bibliotek for å bygge brukergrensesnitt. Med verktøy som `create-react-app` og npm, er det enkelt å komme i gang og sette opp et nytt prosjekt. Mens denne guiden gir en introduksjon, er det viktig å fortsette læringen og utforske de mange ressursene og dokumentasjonene som er tilgjengelige.

**Kilder:**

- [Offisiell React Dokumentasjon](https://reactjs.org/)
- [Node.js Dokumentasjon](https://nodejs.org/)

---

