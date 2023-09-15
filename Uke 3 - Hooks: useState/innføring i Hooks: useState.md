# **3. Innføring i React `Hooks: useState`**

Reacts `useState` er en av de grunnleggende Hooks som introduserer statshåndtering i funksjonskomponenter.

## Hva er `useState`?

`useState` gir funksjonskomponenter evnen til å ha sin egen interne tilstand, akkurat som `this.state` gjør for klassekomponenter. Før Hooks, kunne bare klassekomponenter ha intern tilstand.

## Hvordan fungerer `useState`?

Når du bruker `useState`, deklarerer du en 'state-variabel'. Den returnerer et par: den nåværende staten og en funksjon som oppdaterer den.

```javascript
const [state, setState] = useState(initialState);
```

- `initialState` er den innledende verdien for staten.
- `state` er den nåværende verdien av staten.
- `setState` er en funksjon som brukes til å oppdatere staten.

**Eksempel:**

La oss lage en enkel komponent som lar brukeren telle opp og ned:

```javascript
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
};
```

#### Forklaring av koden:

1. **Importere `useState`**: Først må vi importere `useState`-hooken fra 'react'.
2. **Deklarere en state-variabel**: Vi deklarerer en state-variabel kalt `count` med en initiell verdi av `0` ved hjelp av `useState`.
3. **Bruk state-variabelen**: `count` kan nå brukes akkurat som enhver annen variabel. Her vises den i et `<p>`-element.
4. **Oppdater staten**: `setCount` brukes til å endre verdien av `count`. Når knappene klikkes, øker eller minker verdien av `count` tilsvarende.

## Når bør du bruke `useState`?

`useState` er nyttig når du trenger å spore en enkel verdi (eller objekt) i komponenten din. For mer kompleks statshåndtering (f.eks. global tilstand eller business-logikk), kan du vurdere andre løsninger som `useReducer` eller konteksthooks.

**Kilder:**
- [Offisiell React-dokumentasjon for useState](https://reactjs.org/docs/hooks-state.html)

## `prevState` i React

`prevState` er en referanse til komponentens state umiddelbart før `setState` ble kalt.

### Hva er det?

Når du bruker `setState` i en klassekomponent, kan du enten passere inn et objekt som direkte representerer endringene, eller du kan passere inn en funksjon. Denne funksjonen vil få den forrige staten, ofte referert til som `prevState`, som sitt første argument.

### Hvordan bruker man det?

```javascript
this.setState((prevState) => ({
  count: prevState.count + 1
}));
```

### Hvorfor trenger vi det?

Bruken av `prevState` sikrer at staten oppdateres korrekt spesielt når staten oppdatering avhenger av den forrige verdien av staten. Dette er viktig i tilfeller hvor flere `setState` kall kan batch-prosesseres sammen, noe som kan føre til upresise oppdateringer hvis man ikke bruker `prevState`.

### Når bør man bruke det?

- **Avhengig av tidligere state**: Hvis den nye staten avhenger av den tidligere staten, som i en teller.
- **Asynkrone `setState` kall**: Siden `setState` er asynkron, for å unngå potensielle problemer med rasebetingelser.

### Når trenger man ikke å bruke det?

Hvis den nye staten ikke er avhengig av den forrige staten, er det greit å sette staten direkte.
**Eksempel:**

```javascript
this.setState({ username: 'Alice' });
```

## `useState` med arrays og objekter

### Arrays:

Med `useState`, når du jobber med arrays, kan du bruke array-metoder som `push`, `pop`, `filter`, etc., men husk å alltid returnere en ny array istedenfor å modifisere den eksisterende direkte for å følge immutabilitetsprinsippet i React.

```javascript
const [items, setItems] = useState([]);

// Legger til et nytt element
setItems([...items, newItem]);

// Fjerner et element basert på indeks
const removeItemAtIndex = (index) => {
  setItems(items => items.filter((_, i) => i !== index));
};
```

### Objekter:

Når du jobber med objekter, bruker du spredningsoperatøren (`...`) for å lage en kopi av det eksisterende objektet og deretter oppdatere den spesifikke egenskapen.

```javascript
const [user, setUser] = useState({
  name: 'Alice',
  age: 30
});

// Oppdaterer navnet
setUser(prevUser => ({
  ...prevUser,
  name: 'Bob'
}));
```

**Merk**: Det er viktig å huske at `useState` ikke automatisk fletter objekter som `this.setState` gjør i klassekomponenter, så du må sørge for å manuelt kopiere de eksisterende verdiene som vist ovenfor.

**Kilder:**
- [Offisiell React-dokumentasjon for setState](https://reactjs.org/docs/react-component.html#setstate)
- [Offisiell React-dokumentasjon for useState](https://reactjs.org/docs/hooks-state.html)

## State i React: Klassekomponenter vs Funksjonskomponenter

### Klassekomponenter:

Før Hooks ble introdusert, var klassekomponenter den primære måten å håndtere staten i React. 

**Eksempel:**

```javascript
import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
  }

  decreaseCount = () => {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <div>
        <p>Current Count: {this.state.count}</p>
        <button onClick={this.increaseCount}>Increase</button>
        <button onClick={this.decreaseCount}>Decrease</button>
      </div>
    );
  }
}
```

I klassekomponenter:

1. **Initial State**: Statens innledende verdier er satt i komponentens `constructor`.
2. **setState Metode**: For å oppdatere staten, bruker vi `this.setState()` metoden. Denne metoden tar enten en ny state-objekt eller en funksjon som returnerer et nytt state-objekt, og utløser en re-render av komponenten.

### Funksjonskomponenter med useState:

Med introduksjonen av Hooks kan funksjonskomponenter nå ha sin egen interne tilstand med `useState`.

**Eksempel:**

```javascript
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
};
```

I funksjonskomponenter med `useState`:

1. **Initial State**: Statens innledende verdier er satt direkte innen `useState`-funksjonen.
2. **Setter Funksjon**: `useState` returnerer en setter-funksjon (i dette tilfellet `setCount`) som kan brukes til å oppdatere staten. Enhver oppdatering av staten ved hjelp av setter-funksjonen utløser også en re-render av komponenten.

### Sammenligning:

- **Syntaks**: Klassekomponenter krever en mer verbose syntaks med en `constructor`, `render` metoden osv. Mens funksjonskomponenter med `useState` gir en mye renere og kortere kodebase.
- **`this` Nøkkelord**: I klassekomponenter må vi forholde oss til `this` nøkkelordet for å få tilgang til staten og funksjoner, noe som kan være forvirrende for nybegynnere. Dette problemet eksisterer ikke i funksjonskomponenter.
- **Gjenbruk**: Custom hooks lar deg gjenbruke logikk mellom funksjonskomponenter, mens med klassekomponenter kan gjenbruk av logikk være mer utfordrende.

I det store og hele, mens klassekomponenter fortsatt er fullt støttet og nyttig i enkelte scenarier, har introduksjonen av Hooks (som `useState`) ført til en sterk forskyvning mot bruk av funksjonskomponenter for mange utviklere, grunnet enklere syntaks og økt gjenbruk av komponentlogikk.

**Kilder:**
- [Offisiell React-dokumentasjon for State og livssyklus](https://reactjs.org/docs/state-and-lifecycle.html)
- [Offisiell React-dokumentasjon for useState](https://reactjs.org/docs/hooks-state.html)

---

