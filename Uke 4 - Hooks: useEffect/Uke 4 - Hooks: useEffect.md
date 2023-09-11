## Uke 4 - Oppgavesett: Interaktiv Online CV Webapplikasjon: `Hooks: useState`

### **Oppgave 1: Enkel sideinnlasting**
Når CV-webapplikasjonen lastes, vis en melding i konsollen som sier "CV-appen er lastet!". Hint: Bruk `useEffect` uten avhengighetsarray for å utføre effekten ved første render.

### **Oppgave 2: Sporing av visninger**
Ved hjelp av `useEffect`, opprett en funksjon som holder styr på og viser antall ganger brukeren har besøkt CV-webapplikasjonen. Hint: Kombiner `useEffect` med `localStorage`.

### **Oppgave 3: Overvåkning av endringer**
La oss si at det er en seksjon hvor brukerne kan legge til ferdighetene de har. Overvåk denne seksjonen for endringer, og hver gang en ny ferdighet blir lagt til, vis en melding som sier "Ferdighet lagt til!". Hint: Du kan bruke `useEffect` med en tilstandsvariabel som avhengighet.

### **Oppgave 4: Påminnelse om oppdatering av CV**
Hvis brukeren ikke har oppdatert sin CV på mer enn 30 dager, vis en påminnelse på skjermen som anbefaler dem å gjøre det. Hint: Lagre dato for siste endring i `localStorage` og bruk `useEffect` for å sjekke datoforskjellen når appen lastes.

### **Oppgave 5: (Stor utfordring) CV Redigering**
Lag en "Rediger" knapp på CV-webapplikasjonen. Når denne knappen trykkes, skal brukeren kunne:

- Redigere eksisterende informasjon (som ferdigheter, jobberfaring osv.)
- Legge til nye elementer (for eksempel en ny ferdighet eller en ny jobb)
- Slette eksisterende elementer

For å få dette til, vil du sannsynligvis måtte kombinere `useEffect` med andre funksjoner for å spore endringer og oppdateringer på siden. Det kan være lurt å først vise en liste over alle elementer som kan redigeres, og gi brukeren muligheten til å velge spesifikke deler for redigering.

---
