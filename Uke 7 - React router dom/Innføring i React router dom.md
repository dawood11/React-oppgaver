# **8. Innføring i `React Router Dom`**

React Router er en sentral rutingløsning for React som gjør det mulig å bygge enkelt-side applikasjoner med navigasjon. Versjon 6 av React Router Dom introduserer flere nyheter og endringer.

## Installasjon og Setup

For å installere React Router:

```bash
npm install react-router-dom
```

## Grunnleggende ruting

Her er hvordan du setter opp en enkel ruting med React Router v6:

```javascript
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </Router>
  );
}
```

## Link-komponenten

For å navigere mellom sider:

```javascript
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li><Link to='/'>Hjem</Link></li>
        <li><Link to='/about'>Om</Link></li>
      </ul>
    </nav>
  );
}
```

## Forbedringer fra `v5` til `v6`

- **Routes som barn**: I stedet for å bruke Switch og Route som i v5, bruker v6 Routes med barn som Route.
- **Element-prop**: Route tar nå en element prop med det aktuelle React-elementet, i stedet for component eller render props.
- **Nestede ruter**: Det er nå enklere å opprette nestede ruter med den nye Outlet-komponenten.
- **Relative ruter**: Du kan nå definere relative ruter innenfor en nested Route.

### Nestede ruter med Outlet

Med v6, kan du enkelt opprette nestede ruter ved å bruke Outlet komponenten:

```javascript
import { Routes, Route, Outlet } from 'react-router-dom';

const Users = () => {
  return (
    <div>
      <h2>Users</h2>
      <Outlet />
    </div>
  );
}

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='users' element={<Users />}>
          <Route path=':id' element={<UserProfile />} />
        </Route>
      </Routes>
    </Router>
  );
}
```

## `useNavigation` og `useLocation` i React Router v6

I tidligere versjoner av React Router (før v6), var `useHistory` hooket en populær måte å få tilgang til navigasjonshistorikken på. Men med v6, har denne blitt fjernet til fordel for `useNavigation`.

### `useNavigation`

Dette hooket gir deg tilgang til navigasjonsfunksjonene, slik at du kan programmere navigasjon i applikasjonen din:

```javascript
import { useNavigation } from 'react-router-dom';

const NavigateButton = () => {
  let navigate = useNavigation();
  return (
    <button onClick={() => navigate('/about')}>
      Gå til About-side
    </button>
  );
};
```

### `useLocation`

`useLocation` forblir stort sett det samme i v6. Det gir deg tilgang til det nåværende `location`-objektet, som representerer hvor applikasjonen er akkurat nå:

```javascript
import { useLocation } from 'react-router-dom';

const CurrentPage = () => {
  let location = useLocation();
  return <div>Du er nå på {location.pathname}</div>;
};
```

**Kilder:**

- [React Router Documentation](https://reactrouter.com/docs/en/v6/)

---

