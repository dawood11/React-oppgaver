# **7. Innføring i `PropTypes` & `TypeScript`**

## `PropTypes` i React

React gir oss et verktøy for typekontroll av props for våre komponenter: **`PropTypes`** sikrer at komponenten får riktig type data i propsene sine.

### Komme i gang med `PropTypes`

1. For å bruke `PropTypes` i ditt React-prosjekt, må du først installere den:
```bash
npm install prop-types
```

2. Etter installasjon, kan du importere den og begynne å definere `propTypes` for dine komponenter:
```javascript
import PropTypes from 'prop-types';

const Greeting = (props) => <h1>Hello, {props.name}</h1>;

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
};
```

### Fordelen med `PropTypes`
Mens `PropTypes` gir en viss grad av type sikkerhet, dekker den ikke alle scenariene TypeScript kan, og har ingen påvirkning ved kjøretid.

## `TypeScript` i React

TypeScript er et strengt syntaktisk superset av JavaScript, som legger til statisk typekontroll.

### Komme i gang med et nytt React-prosjekt med TypeScript

1. Å opprette et nytt React-prosjekt med TypeScript:
```bash
npx create-react-app my-app --template typescript
```

### Legge til TypeScript i et eksisterende React-prosjekt

1. Installer TypeScript, type definisjoner for React og ReactDOM, og et TypeScript konfigurasjonsfile:
```bash
npm install --save typescript @types/react @types/react-dom
```

2. Opprett en `tsconfig.json` i rotkatalogen for prosjektet ditt:
```bash
npx tsc --init
```

3. Begynn å konvertere dine `.js` eller `.jsx` filer til `.ts` eller `.tsx`.

### TypeScript Basic Types

TypeScript gir en rekke grunnleggende typer, inkludert: `string`, `number`, `boolean`, `array`, `tuple`, `enum`, `any`, `void`, `null`, og `undefined`.

### Custom Type Definitions

I tillegg til de innebygde typene, kan du definere dine egne typer:
```typescript
type UserInfo = {
  name: string;
  age: number;
  address?: string; // '?' indikerer at adressen er valgfri
};
```

### Type vs Interface

Både `type` og `interface` kan brukes til å definere skjemaer i TypeScript, men det er noen forskjeller. 
- Generelt er `interface` ofte brukt for å definere formen på objekter
- `type` kan representere en rekke forskjellige typer. Men over tid har disse to blitt mer utbyttbare.
```typescript
type UserType = {
  id: number;
  name: string;
};

interface UserInterface {
  id: number;
  name: string;
}
```

### Generiske Type Definisjoner

Generics tillater deg å lage gjenbrukbare komponenter som kan arbeide over en rekke typer i stedet for en enkelt type:
```typescript
type Container<T> = {
  value: T;
};

const stringContainer: Container<string> = { value: 'Hello World' };
```

### Bruk av Type Definisjoner i Funksjoner i TypeScript

```typescript
type Product = {
  id: number;
  name: string;
  price: number;
};

const calculateDiscount = (product: Product, discountPercentage: number): number => {
  return product.price * (discountPercentage / 100);
};
```

**Kilder:**

- [React Documentation on PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html)
- [TypeScript in React](https://www.typescriptlang.org/docs/handbook/react.html)

---

