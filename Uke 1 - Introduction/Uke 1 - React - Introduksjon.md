
## Oppgavesett: Interaktiv Online CV Webapplikasjon

  

### Oppgave 1: Installasjon

1. Installer Node.js på datamaskinen din hvis du ikke allerede har gjort det.

2. Bekreft at Node.js og npm (Node Package Manager) er korrekt installert ved å kjøre `node -v` og `npm -v` i terminalen eller kommandolinjen.
  
### Oppgave 2: Opprett et nytt React-prosjekt

1. Opprett et nytt React-prosjekt ved å kjøre `npx create-react-app online-cv`.

2. Naviger til prosjektets mappe ved å kjøre `cd online-cv`.

3. Start prosjektet ved å kjøre `npm start` og bekreft at det kjører korrekt i nettleseren.

  

### Oppgave 3: Grunnleggende Struktur

1. Fjern all standardkode i `App.js`.

2. Legg til en overskrift som sier "Mitt Online CV".

3. Under overskriften, legg til et bilde av deg selv eller et plassholderbilde.

4. Legg til grunnleggende informasjon som navn, adresse, telefonnummer og e-post. (Vent med å legge inn ekte informasjon til dere er klare til å deplye web applikasjonen deres)

  

### Oppgave 4: Interaktivitet

1. Legg til en knapp under din informasjon med teksten "Vis detaljer".

2. Når knappen klikkes, skal det poppe opp en `alert`-boks med en liste over dine ferdigheter/tjenester.

 ---

### Utfordringsoppgave 1: Komponenter

1. Splitt din CV applikasjon inn i mindre komponenter. Opprett minst tre separate komponenter: `Header`, `PersonalInfo` og `SkillsButton`.

2.  `Header` skal inneholde tittelen "Mitt Online CV" og bildet ditt.

3.  `PersonalInfo` skal vise din personlige informasjon: navn, adresse, telefonnummer, og e-post.

4.  `SkillsButton` skal være knappen som sier "Vis detaljer" og som viser alert-boksen fra tidligere.

  

### Utfordringsoppgave 2: Props

1. Overfør relevant data til komponentene ved hjelp av props.

2. For eksempel, overfør personlige detaljer til `PersonalInfo` komponenten som props.


---