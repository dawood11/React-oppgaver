# **10. Innføring i `Redux`**

## Hva er `Redux`?

`Redux` er en populær, åpen kildekode JavaScript-bibliotek for å håndtere tilstanden i applikasjoner. Selv om det ofte brukes sammen med React, kan det brukes med hvilken som helst annen frontend-rammeverk eller bibliotek.

## Kjernekonsepter

### 1. Tilstand (State)
I `Redux` blir hele tilstanden til appen lagret i et enkelt JavaScript-objekt kalt "store".

### 2. Handlinger (Actions)
Handlinger er vanlige JavaScript-objekter som sender data fra appen din til storen. De er den eneste kilden til informasjon for storen.

### 3. Redusere (Reducers)
Redusere er rene funksjoner som tar forrige tilstand og en handling, og returnerer neste tilstand. De beskriver hvordan tilstanden endres i henhold til handlinger.

## Hvordan fungerer `Redux`?

1. **Dispatch en handling**: Brukerinteraksjoner eller andre hendelser i appen kan produsere en handling. Denne handlingen "dispatches" eller sendes til storen.
2. **Redusere behandler handlingen**: Når en handling blir dispatched, bruker Redux en eller flere reducere for å bestemme hvordan tilstanden skal endres.
3. **Oppdatering av Store**: Basert på hvordan reduseren behandler handlingen, blir tilstanden i store oppdatert.
4. **Visningsoppdatering**: Endringer i tilstanden får applikasjonen til å re-rendere, oppdaterer brukergrensesnittet i henhold til den nye tilstanden.

## Fordeler med `Redux`

- **Enkelhet**: `Redux` gir en forutsigbar stat som kan logges, lagres, eller gjenopprettes, noe som gjør debugging enklere.
- **Sentralisert tilstand**: Det gjør det lettere å håndtere global tilstand over store applikasjoner.
- **Felles økosystem**: Det er mange middleware og utvidelser tilgjengelige for Redux, som hjelper med asynkronitet, loggføring, og mer.

**Konklusjon**

`Redux` er et robust verktøy for å håndtere tilstanden i frontend-applikasjoner. Det gir forutsigbarhet, enkelhet, og skalerbarhet, spesielt i større applikasjoner.

**Kilder**:
- [Offisiell Redux Dokumentasjon](https://redux.js.org/)
- [Redux Fundamentals](https://redux.js.org/tutorials/fundamentals/part-1-overview)

# **11. Innføring i `Redux Toolkit`**

## Innledning

`Redux Toolkit` er den offisielle, opinionated, batteri-inkluderte verktøykassen for `Redux`. Den tilbyr et sett med verktøy som forenkler prosessen med å skrive `Redux` kode, og fjerner mye av boilerplaten som kommer med vanlig `Redux`.

## Hvorfor `Redux Toolkit`?

1. **Forenkler Redux-kode**: Mindre boilerplate-kode.
2. **Inkluderer nyttige verktøy**: Som `configureStore`, som setter opp store med godt oppsatte standardmiddelvarer.
3. **Immutability under hetta**: Takket være `immer`, lar `Redux Toolkit` deg skrive 'mutative' logikk i reducere som blir automatisk konvertert til uforanderlig kode.

## Grunnleggende konsepter

### 1. `createSlice`

- Forener reducers, actions og action creators i en funksjon.
- Returnerer en 'slice' av state, derav navnet.
- `reducers` er et objekt der nøklene blir action creators og verdiene blir reducer funksjoner for disse actions.

```javascript
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: state => state + 1,
    decrement: state => state - 1
  }
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
```

### 2. `configureStore`

- Forenkler prosessen med å sette opp en Redux store.
- Innlemmer vanlige funksjoner og middelvarer, slik som Redux Thunk for asynkrone actions.

```javascript
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});

export default store;
```

### 3. `createAsyncThunk`

- Hjelper med å håndtere asynkrone actions.
- Genererer tre action creators: `pending`, `fulfilled`, `rejected`.

```javascript
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchData = createAsyncThunk('data/fetch', async () => {
  const response = await fetch('API_URL_HERE');
  return await response.json();
});
```

## Bruke `Redux Toolkit` i en React-komponent

Med verktøyene fra `Redux Toolkit` kan du nå enkelt koble React-komponenten din til Redux-storen.
**Eksempel:**

```javascript
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from './counterSlice';

const CounterComponent = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter);

  return (
    <div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <p>{count}</p>
    </div>
  );
}
```

**Konklusjon**

`Redux Toolkit` forenkler og forbedrer utvikleropplevelsen for de som bruker Redux. Det anbefales sterkt for nye Redux-prosjekter, og eksisterende prosjekter kan også dra nytte av dets verktøy.

**Kilder**:
- [Offisiell `Redux Toolkit` dokumentasjon](https://redux-toolkit.js.org/)
- [`Redux Toolkit` på GitHub](https://github.com/reduxjs/redux-toolkit)

---

