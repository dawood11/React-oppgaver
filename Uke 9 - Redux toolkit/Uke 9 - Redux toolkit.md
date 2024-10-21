## Uke 9 - Oppgavesett: Interaktiv Online CV Webapplikasjon: `Redux Toolkit`

### **Introduksjon:**

Redux Toolkit er den offisielle, opinionated, batteri-inkluderte verktøykassen for Redux. Den lar deg skrive Redux-logikk med færre kodelinjer, og det blir enklere å forholde seg til. I disse oppgavene vil vi videreutvikle vår \'Interaktiv Online CV Webapplikasjon\' ved å inkorporere Redux Toolkit.

### **Oppgave 1: Installer Redux Toolkit**

**Instrukser:**

1. Åpne ditt eksisterende prosjekt i terminalen.
2. Installer Redux Toolkit ved å kjøre kommandoen: 

```bash
npm install @reduxjs/toolkit react-redux
```

### **Oppgave 2: Sett opp Redux Store med `configureStore`**

**Instrukser:**

1. I `store.js`, bruk `configureStore` fra Redux Toolkit for å opprette en Redux store.
2. Definer en `rootReducer` som kombinerer alle dine reducere (du kan bruke `combineReducers` fra `redux` hvis nødvendig).

**Tips:** 
Redux Toolkit inneholder `combineReducers` innebygd i `configureStore`, så du trenger ikke å importere den separat!

**Eksempel:**

```javascript
import { configureStore } from '@reduxjs/toolkit';
// Importer dine reducere her...

const store = configureStore({
  reducer: {
    // Dine reducer oppføringer her...
  }
});

export default store;
```

### **Oppgave 3: Lag en Slice for Erfaringer**

**Instrukser:**

1. Bruk `createSlice` fra Redux Toolkit for å lage en slice for `experiences`.
2. Definer tilstanden, reducerne, og handlingene i samme fil.
3. Eksporter de nødvendige handlingene og reducere.

**Tips:** 
`createSlice` vil generere action creators for deg automatisk!

**Eksempel:**

```javascript
import { createSlice } from '@reduxjs/toolkit';

const experiencesSlice = createSlice({
  name: 'experiences',
  initialState: [],
  reducers: {
    addExperience: (state, action) => {
      state.push(action.payload);
    },
    removeExperience: (state, action) => {
      return state.filter(exp => exp.id !== action.payload.id);
    }
  }
});

export const { addExperience, removeExperience } = experiencesSlice.actions;

export default experiencesSlice.reducer;
```

### **Oppgave 4: Bruk `useDispatch` og `useSelector` fra Redux Toolkit**

**Instrukser:**

1. Oppdater `ExperienceList` komponenten for å bruke `useDispatch` og `useSelector` fra `react-redux`.
2. Erstatt alle `mapStateToProps` og `mapDispatchToProps` logikken med de nevnte hooks.

### **Oppgave 5: Implementer asynkron logikk med `createAsyncThunk`**

**Instrukser:**

1. Bruk `createAsyncThunk` fra Redux Toolkit for å håndtere asynkron logikk (som f.eks. API-kall).
2. Legg til ekstra reducers for de ulike stadiene av asynkrone handlinger: `pending`, `fulfilled`, og `rejected`.

**Tips:** 
`createAsyncThunk` håndterer automatisk de forskjellige fasene av asynkrone handlinger for deg!

**Eksempel:**

```javascript
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchExperiences = createAsyncThunk(
  'experiences/fetchExperiences',
  async () => {
    const response = await fetch('API_URL_HERE');
    const data = await response.json();
    return data;
  }
);

const experiencesSlice = createSlice({
  name: 'experiences',
  initialState: [],
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchExperiences.fulfilled, (state, action) => {
        return action.payload;
      })
  }
});

export default experiencesSlice.reducer;
```

### **Oppgave 6 (Valgfri): Introduksjon til `RTK Query`**

**Instrukser:**

1. Utforsk RTK Query, en kraftig datahentings- og caching-mekanisme innebygd i Redux Toolkit.
2. Implementer en funksjonalitet i CV-appen som henter data fra en API ved hjelp av RTK Query.

**Tips:** 
Det anbefales å lese [offisiell dokumentasjon](https://redux-toolkit.js.org/rtk-query/overview) før du starter.

> Når du er ferdig med oppgavene, kan du prøve å utforske mer av funksjonene som Redux Toolkit tilbyr. Toolkit er designet for å gjøre Redux enklere og mer effektivt, så det er definitivt verdt å dykke dypere inn i det!

---