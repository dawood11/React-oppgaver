## Uke 10 - Oppgavesett: Interaktiv Online CV Webapplikasjon: `useReducer` og `useSelector`

### **Oppgave 1: Utvikle en funksjon for å legge til jobberfaring**

**Mål:**  
Lag en funksjon der brukeren kan legge til, redigere eller slette jobberfaringer i sin online CV.

**Instruksjoner:**

- Bruk `useReducer` for å håndtere tilstandsendringer for jobberfaring.
- Definer handlingstyper som `ADD_EXPERIENCE`, `EDIT_EXPERIENCE`, og `DELETE_EXPERIENCE`.
- Lag en form hvor brukeren kan fylle inn detaljer som jobbtittel, selskap, startdato, sluttdato, og beskrivelse av jobben.

### **Oppgave 2: Filtrer jobberfaring basert på år**

**Mål:**  
Lag en funksjon der brukeren kan filtrere jobberfaringer basert på startdato.

**Instruksjoner:**

- Bruk `useSelector` (valgfritt) for å hente ut alle jobberfaringene.
- Lag en dropdown eller slider hvor brukeren kan velge et spesifikt år.
- Vis kun de jobberfaringene som starter innenfor det valgte året.

### **Oppgave 3: Introduser en mørkmodus i CV webapplikasjonen**

**Mål:**  
Tillat brukeren å veksle mellom en lys og mørk tema.

**Instruksjoner:**

- Bruk `useReducer` for å håndtere temaendringer i applikasjonen.
- Definer handlingstyper som `TOGGLE_DARK_MODE`.
- Legg til en knapp eller bryter på siden for å la brukeren bytte mellom modusene.

### **Oppgave 4: (Valgfri) Vise antall jobberfaringer**

**Mål:**  
Vis brukeren et antall av alle jobberfaringer de har lagt til.

**Instruksjoner:**

- Bruk `useSelector` for å hente ut alle jobberfaringene.
- Vis et tall på nettsiden som representerer antall jobberfaringer.

### **Oppgave 5: (Valgfri) Integrere med en backend**

**Mål:**  
Lagre brukerens jobberfaringer på en server.

**Instruksjoner:**

- Bruk `useReducer` for å håndtere tilstandsoppdateringer etter hvert API-kall.
- Implementer handlingstyper som `FETCH_EXPERIENCE_SUCCESS`, `FETCH_EXPERIENCE_ERROR`, osv.
- Bruk `useSelector` for å hente ut jobberfaringene fra global tilstand før du viser dem på nettsiden.

> Når du fullfører disse oppgavene, vil du ha en dypere forståelse av hvordan du kan bruke `useReducer` og `useSelector` for å håndtere tilstandslogikk i en React-applikasjon. Lykke til med prosjektet!

---

