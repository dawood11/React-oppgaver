## Uke 7 - `React router dom V6`: Løsning og Forklaring:

### **Løsningsforslag Oppgave 1: Sette opp react-router-dom v6**

**Løsning:** 

For å starte, installer `react-router-dom` via npm:

```bash
npm install react-router-dom@6
```

Opprett en grunnleggende ruting:

```javascript
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/cv' element={<CvPage />} />
      </Routes>
    </Router>
  );
}
```

**Forklaring:**  
Vi har installert `react-router-dom` v6 og satt opp ruter for både hjemmesiden og CV-siden ved hjelp av `<Router>`, `<Routes>` og `<Route>` komponentene.

### **Løsningsforslag Oppgave 2: Navigasjon mellom sider**

**Løsning:** 

Bruk `Link` og `NavLink` for å lage en enkel navigasjon:

```javascript
import { Link, NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <NavLink to='/cv' activeClassName='active'>Detailed CV</NavLink>
    </nav>
  );
}
```

**Forklaring:**  
`Link` og `NavLink` blir brukt for navigasjon. Forskjellen er at `NavLink` gir mulighet for å style den aktive lenken ved hjelp av `activeClassName` eller `activeStyle`.

### **Løsningsforslag Oppgave 3: Nested Routes**

**Løsning:** 

```javascript
const CvPage = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Overview />} />
        <Route path='experience' element={<Experience />} />
        <Route path='education' element={<Education />} />
        <Route path='skills' element={<Skills />} />
      </Routes>
    </div>
  );
}
```

**Forklaring:**  
Ved hjelp av nested ruting, kan vi vise forskjellige deler av CV-en basert på den valgte stien.

### **Løsningsforslag Oppgave 4: Bruk av useParams**

**Løsning:** 

```javascript
import { useParams } from 'react-router-dom';

const JobDetail = () => {
  let { id } = useParams();
  // Finn jobberfaringen basert på ID og vis detaljene.
}
```

**Forklaring:**  
Med `useParams`, kan vi hente ut parametre fra URLen, som for eksempel IDen til en jobberfaring.

### **Løsningsforslag Oppgave 5: Redirects og Navigation Guards**

**Løsning:** 

Bruk `useNavigate` for omdirigering:

```javascript
import { Routes, Route, Outlet, useNavigate } from 'react-router-dom';

const CvPage = () => {
  let navigate = useNavigate();
  let loggedIn = // sjekk om brukeren er logget inn
  
  if (!loggedIn) {
    navigate('/login');
  }

  return <Outlet />;
}
```

**Forklaring:**  
Hvis brukeren ikke er logget inn, vil de bli omdirigert til innloggingssiden ved hjelp av `useNavigate`.

### **Løsningsforslag Oppgave 6: 404 NotFound Side**

**Løsning:** 

```javascript
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/cv' element={<CvPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}
```

**Forklaring:**  
Ved hjelp av en sti på `*`, vil hvilken som helst rute som ikke allerede er definert, matche `NotFound` komponenten.

## Ekstra utfordringsoppgaver:

### **Løsningsforslag Oppgave 7: Bruk av useLocation**

**Løsning:** 

```javascript
import { useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
  let location = useLocation();
  // Kode for å vise breadcrumbs basert på den gjeldende plasseringen.
}
```

**Forklaring:**  
Med `useLocation`, kan vi få informasjon om den gjeldende plasseringen og bygge en breadcrumb-navigasjon basert på dette.

Husk at disse løsningsforslagene er grunnleggende eksempler. Du kan utvide og tilpasse dem basert på spesifikke krav eller forbedringer du ønsker å implementere i applikasjonen din.