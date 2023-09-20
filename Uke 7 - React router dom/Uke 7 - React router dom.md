## Uke 7 - Oppgavesett: Interaktiv Online CV Webapplikasjon: `React router dom V6`


### **Oppgave 1: Sette opp react-router-dom v6**
**Mål:** Bli kjent med installasjon og oppsett av `react-router-dom` versjon 6 i din React applikasjon.
**Beskrivelse:**  
Installer og konfigurer `react-router-dom` v6 i din eksisterende CV webapplikasjon. Sett opp grunnleggende ruting for hjemmesiden og en side som viser detaljert CV informasjon.

**Link:** [React Router Getting Started](https://reactrouter.com/docs/en/v6/getting-started/overview)

### **Oppgave 2: Navigasjon mellom sider**
**Mål:** Forstå hvordan man bruker `Link` og `NavLink` for navigasjon.
**Beskrivelse:**  
Lag en enkel navigasjonsmeny som lar brukere veksle mellom hovedsiden og den detaljerte CV-siden. Utforsk forskjellen mellom `Link` og `NavLink`.

**Link:** [React Router Links and Navigation](https://reactrouter.com/docs/en/v6/api#link)

### **Oppgave 3: Nested Routes**
**Mål:** Utforske hvordan man kan lage nestede ruter med `react-router-dom` v6.
**Beskrivelse:**  
På den detaljerte CV-siden, lag nestede ruter som viser forskjellige seksjoner av CV-en, som for eksempel arbeidserfaring, utdanning og ferdigheter.

**Link:** [React Router Nested Routes](https://reactrouter.com/docs/en/v6/examples/nesting)

### **Oppgave 4: Bruk av useParams**
**Mål:** Forstå hvordan man henter rute-parametere ved hjelp av `useParams` hook.
**Beskrivelse:**  
Legg til en funksjon som lar brukere se detaljert informasjon om en bestemt jobberfaring ved å klikke på den. Bruk `useParams` for å hente IDen for jobberfaringen fra URLen og vise den relevante informasjonen.

**Link:** [React Router useParams](https://reactrouter.com/docs/en/v6/api#useparams)

### **Oppgave 5: Redirects og Navigation Guards**
**Mål:** Utforske hvordan man kan håndtere omdirigeringer og sette opp navigasjonsbeskyttelser.
**Beskrivelse:**  
Lag en enkel innloggingsside. Når brukere prøver å få tilgang til den detaljerte CV-siden uten å være logget inn, skal de bli omdirigert til innloggingssiden. Etter vellykket innlogging, omdiriger brukeren tilbake til den detaljerte CV-siden.

**Link:** [React Router Redirects](https://reactrouter.com/docs/en/v6/api#usehistory)

### **Oppgave 6: 404 NotFound Side**
**Mål:** Lære hvordan man håndterer ukjente ruter ved å vise en 404 side.
**Beskrivelse:**  
Legg til en 404 NotFound side i applikasjonen din. Når brukere besøker en rute som ikke finnes, skal de bli tatt til denne siden.

**Link:** [Handling 404 pages with React Router](https://reactrouter.com/docs/en/v6/guides/no-match)

## Ekstra utfordringsoppgaver:
### **Oppgave 7: Bruk av useLocation**
**Mål:** Utforske hvordan man kan få tilgang til den gjeldende lokasjonens informasjon ved hjelp av `useLocation` hook.
**Beskrivelse:**  
Vis en breadcrumb-navigasjon på den detaljerte CV-siden basert på den gjeldende ruten. Bruk `useLocation` for å hente den nødvendige informasjonen om ruten.

**Link:** [React Router useLocation](https://reactrouter.com/docs/en/v6/api#uselocation)
