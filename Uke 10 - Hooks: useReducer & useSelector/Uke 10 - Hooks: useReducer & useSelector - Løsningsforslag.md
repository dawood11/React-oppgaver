## Uke 10 - `useReducer` og `useSelector`: Løsning og Forklaring:

## Løsningsforslag for Oppgave 1: Gr


### **Løsningsforslag for Oppgave 1: Utvikle en funksjon for å legge til jobberfaring**

**Reducer:**

```javascript
const initialState = {
  experiences: []
};

const experienceReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_EXPERIENCE':
      return {
        ...state,
        experiences: [...state.experiences, action.payload]
      };
    default:
      return state;
  }
};

const [state, dispatch] = useReducer(experienceReducer, initialState);
```

**Forklaring:**
Her defineres en enkel `experienceReducer` som håndterer handlingen `ADD_EXPERIENCE`. Den legger til en ny opplevelse til en kopi av eksisterende opplevelser ved hjelp av spread-operatoren (`...state.experiences, action.payload`).

[Les mer om useReducer her.](https://reactjs.org/docs/hooks-reference.html#usereducer)

**Komponent:**

```javascript
const AddExperience = () => {
  const handleSubmit = (experienceData) => {
    dispatch({ type: 'ADD_EXPERIENCE', payload: experienceData });
  };
  
  // Her vil du ha formkode for å samle inn data fra brukeren.
};
```

**Forklaring:**
I `AddExperience` komponenten, er det en `handleSubmit` funksjon som kaller `dispatch` med `ADD_EXPERIENCE` handlingen når en bruker sender inn erfaringen sin.

### **Løsningsforslag for Oppgave 2: Filtrer jobberfaring basert på år**

Ved å bruke `useSelector` (hvis du bruker Redux):

```javascript
const experiences = useSelector(state => state.experiences);
const filteredExperiences = experiences.filter(exp => new Date(exp.startDate).getFullYear() === selectedYear);
```

**Forklaring:**
Her bruker vi `useSelector` for å hente ut alle opplevelser fra state. Deretter bruker vi filterfunksjonen til å filtrere opplevelsene basert på startåret.

[Les mer om useSelector her.](https://react-redux.js.org/api/hooks#useselector)

### **Løsningsforslag for Oppgave 3: Introduser en mørkmodus i CV webapplikasjonen**

```javascript
const themeReducer = (state = 'light', action) => {
  switch (action.type) {
    case 'TOGGLE_DARK_MODE':
      return state === 'light' ? 'dark' : 'light';
    default:
      return state;
  }
};

const [theme, dispatchTheme] = useReducer(themeReducer, 'light');

const toggleTheme = () => {
  dispatchTheme({ type: 'TOGGLE_DARK_MODE' });
};
```

**Forklaring:**
`themeReducer` håndterer overgangen mellom lys og mørk modus. `TOGGLE_DARK_MODE` skifter mellom 'light' og 'dark'. 

### **Løsningsforslag for Oppgave 4: (Valgfri) Vise antall jobberfaringer**

Ved å bruke `useSelector`:

```javascript
const experiences = useSelector(state => state.experiences);
const count = experiences.length;
```

**Forklaring:**
Ved å bruke `useSelector` henter vi alle opplevelsene fra state og lagrer lengden (antall opplevelser) i `count`.

### **Løsningsforslag for Oppgave 5: (Valgfri) Integrere med en backend**

Dette vil involvere mer avanserte konsepter som `async/await` og API-kall. Men grunnlaget vil involvere dispatching av forskjellige handlingstyper basert på responsen fra serveren. For eksempel, etter et vellykket API-kall, vil du kanskje dispatche `FETCH_EXPERIENCE_SUCCESS`.

[Les mer om async handlinger med Redux her.](https://redux.js.org/advanced/async-actions)

**Forslag til en potensiell løsning**
1. **Forutsetninger**:
   - Vi antar at det er en backend-server tilgjengelig som har et endepunkt for å hente jobberfaringer, for eksempel `GET /api/experiences`.
   - Vi bruker `fetch` API for nettverkskall, men du kan også bruke biblioteker som Axios.

2. **Reducer tilstand for asynkrone handlinger**:
   - Normalt, når du jobber med asynkrone handlinger, vil du ha flere tilstander for en handling, som `LOADING`, `SUCCESS`, og `ERROR` for å håndtere ulike faser av nettverkskallet.

3. **Løsning**:
```javascript
// Reducer
const initialState = {
  experiences: [],
  loading: false,
  error: null
};

const experienceReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_EXPERIENCES_START':
      return {
        ...state,
        loading: true,
        error: null
      };
    case 'FETCH_EXPERIENCES_SUCCESS':
      return {
        ...state,
        experiences: action.payload,
        loading: false
      };
    case 'FETCH_EXPERIENCES_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

// Action
const fetchExperiences = async (dispatch) => {
  dispatch({ type: 'FETCH_EXPERIENCES_START' });

  try {
    const response = await fetch('/api/experiences');
    const data = await response.json();

    dispatch({ type: 'FETCH_EXPERIENCES_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'FETCH_EXPERIENCES_ERROR', payload: error.message });
  }
};

// Component
const ExperienceList = () => {
  const experiences = useSelector(state => state.experiences);
  const loading = useSelector(state => state.loading);
  const error = useSelector(state => state.error);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchExperiences(dispatch);
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {experiences.map(exp => (
        <div key={exp.id}>{exp.title}</div>
      ))}
    </div>
  );
};
```

**Forklaring**:
- Først definerer vi en reducer `experienceReducer` som håndterer tre typer handlinger: `FETCH_EXPERIENCES_START`, `FETCH_EXPERIENCES_SUCCESS`, og `FETCH_EXPERIENCES_ERROR`.
- `fetchExperiences` er en asynkron funksjon som først dispatcher en start handling, deretter prøver å utføre et `fetch` kall for å hente opplevelser, og til slutt dispatcher enten en suksess eller en feilhandling basert på resultatet av kallet.
- I `ExperienceList` komponenten, bruker vi `useSelector` for å abonnere på `experiences`, `loading`, og `error` fra staten. `useDispatch` brukes for å dispatche handlinger til reduceren. Vi bruker `useEffect` hook for å kalle `fetchExperiences` når komponenten monteres.
### La oss bryte ned hvordan denne koden fungerer og hvordan alt henger sammen
#### 1. **Reducer & Initial State**:

- `initialState`:
  Dette er objektet vi starter med. Det inneholder en tom liste for `experiences`, en `loading` boolean som er satt til false, og en `error` verdi satt til null.

- `experienceReducer`:
  Dette er funksjonen som tar i mot nåværende tilstand (state) og en handling (action). Basert på handlingstype, returnerer den en ny tilstand.

#### 2. Handlinger (Actions):

Handlinger i Redux gir beskjed om at det har skjedd en hendelse. De sender data fra applikasjonen til `store`.

- `FETCH_EXPERIENCES_START`: Denne handlingen blir dispatchet før vi begynner å hente data. Den setter `loading` til `true` og nullstiller eventuelle feil.
  
- `FETCH_EXPERIENCES_SUCCESS`: Denne handlingen blir dispatchet når vi mottar dataen vi hentet. Den oppdaterer `experiences` i staten og setter `loading` tilbake til `false`.
  
- `FETCH_EXPERIENCES_ERROR`: Dersom noe gikk galt under henting av data, blir denne handlingen dispatchet med en feilmelding.

#### 3. **Asynkron Action (fetchExperiences)**:

Denne funksjonen håndterer asynkron operasjon for å hente opplevelser fra en API:

- Først blir `FETCH_EXPERIENCES_START` dispatchet for å indikere at vi starter en nettverksforespørsel.
  
- Vi bruker `fetch` for å hente data fra en backend server. Hvis alt går bra og vi får dataen, dispatcher vi `FETCH_EXPERIENCES_SUCCESS` handlingen med dataen vi mottok.
  
- Dersom vi støter på en feil, dispatcher vi `FETCH_EXPERIENCES_ERROR` med en feilmelding.

#### 4. **Komponent (ExperienceList)**:

- `useSelector`: Dette er en hook fra `react-redux`. Den lar oss hente spesifikke deler av staten fra Redux store. Vi bruker den her for å hente `experiences`, `loading`, og `error` fra staten.
  
- `useDispatch`: Dette er også en hook fra `react-redux` som gir oss tilgang til `dispatch` funksjonen. Denne funksjonen lar oss sende handlinger til Redux store.
  
- `useEffect`: Dette er en React hook som lar oss utføre sideeffekter i funksjonskomponenter. Vi bruker den her for å kalle `fetchExperiences` når komponenten monteres. Den asynkrone funksjonen vil da hente data og oppdatere Redux state basert på resultatet av denne forespørselen.

**Kjernen i denne logikken er samspillet mellom React og Redux:**

1. React-komponenten ber om data ved å dispatche en handling.
  
2. Handlingen utløser en endring i Redux store via en reducer.
  
3. Redux store oppdateres, og den nye staten blir sendt tilbake til React-komponenten.
  
4. React-komponenten re-rendres med den nye staten.

Med denne flyten kan vi håndtere asynkrone operasjoner, holde logikken atskilt fra brukergrensesnittet, og ha en forutsigbar tilstand for vår applikasjon.

> Dette løsningsforslaget gir en grunnleggende oversikt over hvordan du kan implementere funksjonaliteten som er beskrevet i oppgavene. Videre implementeringsdetaljer, feilhåndtering, og ytterligere funksjonalitet vil avhenge av den spesifikke applikasjonens krav og brukerens behov.

---

