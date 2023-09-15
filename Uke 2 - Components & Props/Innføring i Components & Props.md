# **2. Innføring i `Components` & `Props` i React**

## Komponenter i React

Komponenter er byggesteinene i en React-applikasjon. De lar deg bygge gjenbrukbare UI-deler som kan administrere sin egen tilstand, rendering og hendelseshåndtering.

### Hva er en komponent?

En React-komponent kan tenkes på som en funksjon som tar inn `props` (egenskaper) og returnerer en React-element. Dette elementet beskriver hva som skal vises på skjermen.

### Typer av komponenter

Det er to hovedtyper av komponenter i React:

#### 1. Funksjonskomponenter

Dette er den enkleste formen for React-komponenter.

```javascript
const Welcome = () => {
  return <h1>Hei, Petter</h1>;
}
```

#### 2. Klassekomponenter

For mer avansert bruk, spesielt når du vil administrere tilstanden:

```javascript
class Welcome extends React.Component {
  render() {
    return <h1>Hei, Petter</h1>;
  }
}
```


### Sammenslåtte komponenter

For å bygge en fullverdig React-applikasjon, vil komponenter ofte bli 'sammenslått' ved å inkludere andre komponenter i deres utdata. Dette gir muligheten til å bygge komplekse UIer fra små, gjenbrukbare deler.

```javascript
const App = () => {
  return (
    <div>
      <Welcome />
      <Welcome />
      <Counter />
    </div>
  );
}
```

**Konklusjon**

Komponenter er kjernen i React. De gir et modulært og gjenbrukbart system for å bygge moderne webapplikasjoner. Ved å kombinere komponenter med `props`, `state`, og livssyklusmetoder, kan React-utviklere bygge kraftige og fleksible brukergrensesnitt.

## Props i React

I React representerer 'props' en måte å sende data fra en foreldrekomponent til en barnekomponent. De lar deg parameterisere komponenter, akkurat som du ville gjort med en ren JavaScript-funksjon.

### Hva er Props?

'Props' er en forkortelse for 'properties'. I essens er de spesielle objekter som holder informasjonen du sender fra en foreldrekomponent til en barnekomponent. De lar barnet 'kjenne' til data som det ellers ikke ville hatt tilgang til.

### Hvordan bruke Props?

For å sende props fra en foreldre til en barnekomponent, angir du dem som attributter på barnekomponenten:

```javascript
const Welcome = (props) => {
  return <h1>Hei, {props.name}</h1>;
};

<Welcome name='Anna' />
```

I eksempelet ovenfor sender vi en prop kalt `name` med verdien 'Anna' til `Welcome`-komponenten.

### Props er Read-Only

Det er viktig å forstå at du aldri bør endre `props` inne i en komponent. De er ment å være read-only. Hvis du trenger å endre data basert på en prop, bør du bruke `state`.

### Bruke Props i Klassekomponenter

I klassekomponenter, blir props tilgjengelig via `this.props`, men her er en versjon med en funksjonell komponent:

```javascript
const Welcome = (props) => {
  return <h1>Hei, {props.name}</h1>;
}
```

### Fordeler med Props

- **Modularitet:** Gjør det enkelt å gjenbruke komponenter i forskjellige kontekster.
- **Lesbarhet:** Klart å se hvilke data en komponent avhenger av.
- **Pålitelighet:** Ved å være eksplisitt med hvilke data som sendes som props, kan man unngå potensielle feil.

**Konklusjon**

Props i React gir en kraftig, fleksibel og pålitelig måte å overføre data mellom komponenter. De er en fundamental del av hvordan React-applikasjoner er strukturert og bygget.


**Kilder:**
- [Offisiell React-dokumentasjon for komponenter og props](https://reactjs.org/docs/components-and-props.html)
- [Offisiell React-dokumentasjon for props](https://reactjs.org/docs/components-and-props.html)

---

