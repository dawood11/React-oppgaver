# **4. Innføring i React Hooks: `useEffect` & custom hooks**

## Introduksjon til `useEffect`

I React gir `useEffect`-hooken oss mulighet til å utføre sideeffekter i funksjonskomponenter. En sideeffekt kan være alt fra datahenting, abonnering på en hendelse, manuell DOM-manipulasjon, oppsett av abonnementer eller timer, osv. Før introduksjonen av Hooks i React, ble disse sideeffektene håndtert i livssyklusmetodene i klassekomponenter, slik som `componentDidMount`, `componentDidUpdate`, og `componentWillUnmount`.

Tenk på `useEffect` i React som en måte å gjøre ting automatisk i appen din, etter at noe har endret seg eller rett etter at en side vises. Dette kan være sånt som å hente informasjon fra nettet, lytte etter klikk på en knapp, eller sette i gang en tidtaker. Så i stedet for at du manuelt må fortelle appen når den skal gjøre disse tingene, sørger `useEffect` for at det skjer på riktig tidspunkt

### Struktur av `useEffect`

`useEffect` tar to argumenter:
1. En funksjon som inneholder koden du vil kjøre. Dette er koden for sideeffekten.
2. En valgfri avhengighetsliste - et array med variabler. `useEffect` vil kjøre hver gang en variabel i denne listen endrer seg. Hvis du utelater denne listen, vil `useEffect` kjøre etter hver render. Hvis du gir en tom liste `[]`, vil `useEffect` kjøre bare én gang etter at komponenten er montert (tilsvarende `componentDidMount`).


Det er hovedsakelig fire måter man bør kjenne til når det kommer til bruken av `useEffect`:

**1. Kjøres etter hver render**

Dette er standardoppførselen til `useEffect`. Den kjøres etter hver render.
```javascript
useEffect(() => {
   console.log('Dette kjøres etter hver render!');
});
```

**2. Kjøres kun én gang**

Ved å gi en tom avhengighetsliste, sørger vi for at effekten kun kjører en gang, rett etter komponenten har blitt vist for første gang.
```javascript
useEffect(() => {
   console.log('Dette kjøres kun én gang, rett etter komponenten har blitt vist første gang!');
}, []);
```

**3. Kjøres når bestemte verdier endrer seg**

Du kan også spesifisere hvilke verdier `useEffect` skal 'se' etter, og bare kjøre når disse verdiene endres.
```javascript
const [count, setCount] = useState(0);

useEffect(() => {
   console.log('count-verdien har endret seg!');
}, [count]);
```

**4. Clean-up**

I noen tilfeller kan det være at du har satt opp noe i `useEffect` som trenger å fjernes eller ryddes opp når komponenten avmonteres eller før `useEffect` kjøres på nytt. Dette er kjent som clean-up.

For eksempel, hvis du har en event listener:

```javascript
const [count, setCount] = useState(0);

useEffect(() => {
   console.log('count-verdien har endret seg!');

   return () => {
       console.log('Dette kjøres rett før komponenten fjernes, eller før en ny render hvis avhengighetene har endret seg.');
   };
}, [count]);
```

**Eksempel:**

Her er et enkelt eksempel hvor `useEffect` brukes til å hente data fra en API når komponenten er montert:

```javascript
import React, { useState, useEffect } from 'react';

const  DataFetcher = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Antar at dette er en funksjon som returnerer et Promise med data fra en API.
    fetchDataFromAPI().then(responseData => {
      setData(responseData);
    });
  }, []); // Tom avhengighetsliste betyr at denne effekten bare kjører én gang, etter komponenten er montert.

  return (
    <div>
      {data ? `Data: ${data}` : 'Laster data...'}
    </div>
  );
}

export default DataFetcher;
```
**Forklaring:**

I eksemplet over setter vi dataen vi henter fra API-en i komponentens state ved hjelp av **`useState`**. **`useEffect`** sørger for at vi bare henter dataen én gang, rett etter at komponenten er montert.

## Livssyklus i React
Når vi snakker om 'livssyklus' i konteksten av React, refererer vi til de forskjellige fasene en komponent går gjennom i løpet av sin levetid. Dette kan være når en komponent blir lagt til (montert) i DOMen, når den oppdaterer som svar på endringer i props eller state, eller når den fjernes (avmontert) fra DOMen.

Klassekomponenter i React har spesifikke metoder, kjent som livssyklusmetoder, som lar deg 'hooke inn' i disse fasene, for eksempel `componentDidMount`, `componentDidUpdate`, og `componentWillUnmount`.

## Hva er sideeffekter (side effects)?
Med 'sideeffekt' mener vi operasjoner som ikke direkte påvirker render-prosessen av en komponent, slik som nettverkskall, timers, og abonnering på eksterne hendelser. De kan betraktes som 'bivirkninger' av en render. Mens render bør være en ren funksjon av props og state, kan sideeffekter innebære interaksjoner med verden utenfor komponenten.

## Avhengighetsliste
Avhengighetslisten i `useEffect` er et array av verdier som effekten 'overvåker'. Dersom en av disse verdiene endrer seg mellom renderinger, vil effekten kjøre på nytt. Dette gir oss finjustert kontroll over når effekter kjører, noe som kan hjelpe med ytelse og unngå unødvendige operasjoner.

## Sammenligning med Klassekomponenter

### `componentDidMount`

I klassekomponenter brukes `componentDidMount` til å utføre sideeffekter etter at komponenten har blitt lagt til i DOM.

```javascript
class ExampleComponent extends React.Component {
  componentDidMount() {
    // Sideeffekt her
  }
}
```

I funksjonskomponenter med Hooks:

```javascript
const ExampleComponent = () => {
  useEffect(() => {
    // Sideeffekt her
  }, []); // Merk den tomme avhengighetslisten
}
```

### `componentDidUpdate`

Dette blir kalt hver gang komponenten oppdateres.

```javascript
class ExampleComponent extends React.Component {
  componentDidUpdate() {
    // Sideeffekt her
  }
}
```

Med `useEffect`:

```javascript
const ExampleComponent = () => {
  useEffect(() => {
    // Sideeffekt her
  }); // Uten avhengighetsliste
}
```

### `componentWillUnmount`

Dette blir kalt før komponenten fjernes fra DOM.

```javascript
class ExampleComponent extends React.Component {
  componentWillUnmount() {
    // Rydd opp her
  }
}
```

Med `useEffect`:

```javascript
const ExampleComponent = () => {
  useEffect(() => {
    return () => {
      // Rydd opp her
    }
  }, []);
}
```

For mer avanserte livssyklusmetoder som `shouldComponentUpdate` og `getSnapshotBeforeUpdate`, vil oversettelsen til funksjonskomponenter med Hooks være mer involvert og kan kreve andre hooks som `useState` eller `useRef` i kombinasjon med `useEffect`.

## Rensing (Clean-up) i `useEffect`
**Eksempel 1:**

Noen ganger trenger sideeffekter en opprydding. For eksempel, hvis du starter en timer eller abonnerer på en hendelse, vil du stoppe timeren eller avslutte abonnementet når komponenten avmonteres. Oppryddingen gjøres ved å returnere en funksjon fra `useEffect`.

```javascript
useEffect(() => {
    const timer = setTimeout(() => {
        console.log('Timer kjørte!');
    }, 1000);
    
    return () => {
        clearTimeout(timer);
    };
}, []);
```
**Eksempel 2:**

Noen ganger, som ved event-lyttere eller abonnementer, trenger vi å rydde opp for å forhindre minnelekkasjer. Dette kan gjøres ved å returnere en funksjon fra `useEffect`. Denne funksjonen vil bli kjørt når komponenten fjernes eller før kjøring av neste effekt.

```javascript
useEffect(() => {
  const handleResize = () => {
    // Handle vindustørrelseendring
  }

  window.addEventListener('resize', handleResize);

  // Oppryddingsfunksjonen
  return () => {
    window.removeEventListener('resize', handleResize);
  }
}, []);
```

For ytterligere lesing og detaljer, les den offisielle [React dokumentasjonen om useEffect](https://react.dev/reference/react/useEffect#useeffect).

---

# **5. Custom Hooks**

I React gir 'custom hooks' oss muligheten til å gjenbruke logikk mellom forskjellige komponenter. De fungerer som vanlige funksjoner, men kan bruke andre hooks som `useState` og `useEffect`.

## Hvordan lager man en Custom Hook?

For å lage en custom hook, begynn funksjonens navn med `use`. Den kan deretter bruke andre hooks internt.

**Eksempel:**

La oss lage en custom hook som lar oss veksle en boolsk verdi:

```javascript
import { useState } from 'react';

const useToggle = (initialValue = false) => {
    const [value, setValue] = useState(initialValue);

    const toggleValue = () => {
        setValue(!value);
    };

    return [value, toggleValue];
};
```

## Hvordan bruke denne Custom Hook?

Du kan nå bruke `useToggle` i en hvilken som helst komponent:

```javascript
const ToggleComponent = () => {
    const [isToggled, toggle] = useToggle();

    return (
        <div>
            {isToggled ? 'On' : 'Off'}
            <button onClick={toggle}>Toggle</button>
        </div>
    );
};
```

**Forklaring:**

1. **Definering av Custom Hook**: Vi har definert en custom hook ved navn `useToggle`. Navnet på alle custom hooks bør starte med `use` for å opprettholde konvensjon og lesbarhet.
2. **Bruk av useState**: Inne i `useToggle`-funksjonen har vi brukt `useState` for å opprette en state-variabel, `value`, og dens oppdateringsfunksjon, `setValue`.
3. **Funksjon for å veksle verdi**: Vi har også definert en funksjon `toggleValue` som veksler verdien av `value`.
4. **Retur fra Custom Hook**: Til slutt returnerer custom hook både den nåværende verdien av `value` og `toggleValue`-funksjonen, slik at de kan brukes i den komponenten som bruker denne custom hook.

I `ToggleComponent`-komponenten bruker vi `useToggle`-hooken til å få `isToggled`-verdien og `toggle`-funksjonen. Komponenten viser en tekst basert på verdien av `isToggled` og har en knapp som, når den klikkes, vil veksle verdien av `isToggled`.

---

