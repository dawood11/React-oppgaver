# **12. Innføring i react Hooks: `useReducer` og `useSelector`**

## `useReducer`: En hook for avansert tilstandshåndtering

I React gir `useReducer`-hooken oss mulighet til å håndtere mer kompleks tilstand og logikk i en mer strukturert måte enn hva `useState` tilbyr.

### Hva består `useReducer` av og hvordan fungerer det?

`useReducer` er en hook som tar i mot en reducer funksjon og en initial state som argumenter. Den returnerer en array med to elementer:

1. Den nåværende tilstanden.
2. En dispatch funksjon.

Reducer funksjonen mottar den nåværende tilstanden og en handling, og returnerer den nye tilstanden basert på typen handling den mottar. Dispatch funksjonen brukes for å sende disse handlingene til reduceren.

### Grunnlaget for `useReducer`

`useReducer` er veldig likt `useState`, men i stedet for bare å oppdatere en verdi, bruker du en funksjon (en 'reducer') for å produsere en ny tilstand basert på den gamle tilstanden og en 'handling'.

```javascript
import React, { useReducer } from 'react';

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </>
  );
}
```

## `useSelector`: Å velge data fra Redux Store

`useSelector` er en Hook fra Redux Toolkit som lar deg hente eller 'velge' data fra din Redux store.

### Hva består `useSelector` av og hvordan fungerer det?

`useSelector` er en funksjon som tar en såkalt 'selektor' funksjon som sitt argument. Denne selektoren kjøres med hele Redux store som sitt argument, og returnerer den delen av tilstanden du ønsker å hente ut. Når denne delen av tilstanden oppdateres, vil komponenten automatisk re-renderes.

### Hvordan fungerer det?

`useSelector` tar en selektorfunksjon som argument, hvor denne funksjonen mottar hele Redux store tilstanden som parameter. Den returnerer den delen av tilstanden som komponenten trenger.

```javascript
import { useSelector } from 'react-redux';

const DisplayCounter = () => {
  const count = useSelector(state => state.counter.value);

  return <div>Count: {count}</div>;
}
```

### `useReducer` og `useSelector` i sammenheng

Når du bruker `useReducer` og Redux sammen, kan `useReducer` brukes for komponent-spesifikk logikk og tilstand, mens Redux kan brukes for global tilstand og logikk som påvirker flere komponenter.

En interessant teknikk er å synkronisere `useReducer` med Redux ved å dispatche Redux-handlinger i tillegg til lokale handlinger. Dette kan oppnås ved å bruke både `useReducer` sin `dispatch` og Redux' `useDispatch`.

**Kilder:**

- [Redux Toolkit Docs: useSelector](https://redux-toolkit.js.org/api/useselector)
- [React Docs: useReducer](https://reactjs.org/docs/hooks-reference.html#usereducer)

---

