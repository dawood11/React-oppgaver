## Uke 5 - Oppgavesett: Interaktiv Online CV Webapplikasjon: `Debugging & Testing`

### Oppgave 1: Basic Logging

**Mål:** Introduser logging for å spore hendelser i applikasjonen.

**Beskrivelse:**  
Introduser `console.log()`-utsagn i CV-applikasjonen din for å spore verdien av variabler på viktige tidspunkter, for eksempel når brukeren legger til eller sletter en erfaring eller ferdighet.  
**Eksempel:** Når en bruker prøver å legge til en ny ferdighet i CV-en sin, logger du tidspunktet og selve ferdigheten for å bekrefte at den blir lagt til som forventet.  
[Se et eksempel her](https://developer.mozilla.org/en-US/docs/Web/API/Console/log)

### Oppgave 2: Jest Grunnleggende - Testing av Funksjoner

**Mål:** Test funksjoner som hjelper med å formatere data for CV-appen.

**Beskrivelse:**  
Tenk deg at du har en funksjon som formaterer telefonnummeret for CV-en. Den skal sørge for at alle telefonnumre har en bestemt format, for eksempel +47-12345678.  
Skriv en Jest-test for å bekrefte at funksjonen riktig formaterer ulike varianter av telefonnumre til ønsket format.  
[Link: Telefonnummer formatering med Jest](https://jestjs.io/docs/getting-started)

### Oppgave 3: Testing av Data Manipulering

**Mål:** Test funksjoner som legger til eller fjerner ferdigheter fra CV-en.

**Beskrivelse:**  
I CV-appen kan brukere legge til ferdigheter. Tenk deg at du har en funksjon som tar en ferdighet og legger den til en liste.  
Skriv en Jest-test for å sjekke at når en ferdighet legges til, er den faktisk lagt til i listen. Du bør også teste hva som skjer hvis brukeren prøver å legge til en tom ferdighet eller en ferdighet som allerede er på listen.  
[Link: Teste arrays og iterables med Jest](https://jestjs.io/docs/tutorial-async)

### Oppgave 4: Testing av UI-komponenter med Jest

**Mål:** Bli kjent med hvordan du kan bruke Jest for å teste interaktive aspekter av CV-appen.

**Beskrivelse:**  
Tenk deg at du har en knapp i CV-appen som, når den blir klikket, åpner et vindu eller en modal der brukere kan redigere sin erfaring.  
Skriv en Jest-test som simulerer et klikk på denne knappen og bekrefter at redigeringsvinduet faktisk åpnes.  
[Link: Simuler events med Jest og @testing-library/react](https://testing-library.com/docs/dom-testing-library/api-events/)

### Oppgave 5: Snapshot Testing

**Mål:** Forstå grunnprinsippene for snapshot testing og hvordan det kan brukes for å sikre at UI ikke endres utilsiktet.

**Beskrivelse:**  
I CV-appen, tenk deg at du har en komponent som viser brukerens utdanningshistorikk.  
Skriv en Jest snapshot-test for denne komponenten for å sikre at den ikke endres utilsiktet i fremtidige oppdateringer av koden.  
[Link: Snapshot Testing med Jest](https://jestjs.io/docs/snapshot-testing)

### Oppgave 6: Simulering av Brukerinteraksjon med End-to-End Testing

**Mål:** Simulere brukerinteraksjon fra start til slutt.

**Beskrivelse:**  
Ved hjelp av et verktøy som Cypress, skriv tester som simulerer hvordan en bruker vil interagere med CV-applikasjonen din fra start til slutt. Dette kan inkludere å legge til en ny erfaring, redigere en eksisterende ferdighet, eller slette en del av CV-en.  
**Eksempel:** Simuler en bruker som legger til en ny jobberfaring, deretter redigerer tittelen på den jobben, og til slutt sletter hele jobberfaringen.  
[Se et eksempel her](https://www.cypress.io/)

### Oppgave 7: Integrasjonstesting

**Mål:** Teste hvordan ulike deler av applikasjonen din fungerer sammen.

**Beskrivelse:**  
Utform tester som bekrefter hvordan ulike deler av applikasjonen din fungerer sammen, for eksempel hvordan data flyter fra en brukerinput til en visning på skjermen.  
**Eksempel:** Etter at en bruker har lagt til tre forskjellige ferdigheter, test for å bekrefte at de alle vises riktig på den genererte CV-siden.  
[Se et eksempel her](https://jestjs.io/docs/en/testing-frameworks)

### Oppgave 8: Feilsøking ved Bruk av Breakpoints

**Mål:** Forstå dataflyten og identifisere eventuelle feil.

**Beskrivelse:**  
Identifiser en funksjon i CV-applikasjonen din hvor du er usikker på dataflyten eller resultatet. Bruk breakpoints i din kode for å pause utførelsen på nøkkelpunkter og inspisere dataene. Dette vil hjelpe deg med å forstå hva som skjer i funksjonen og hvor eventuelle feil kan være.  
**Eksempel:** Hvis du merker at når brukeren prøver å legge til en ny utdanning, men graden ikke vises som forventet på den genererte CV-en, kan breakpoints brukes for å sjekke nøyaktig hvor problemet starter.  
[Se et eksempel her](https://developer.chrome.com/docs/devtools/javascript/breakpoints/)
