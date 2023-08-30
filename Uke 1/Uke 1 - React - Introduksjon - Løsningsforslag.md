## Oppgavesett: Interaktiv Online CV Webapplikasjon - Uke 1 - Løsningsforslag og forklaring

### **Header.js**
```javascript
import React from 'react';

const Header = ({ imageUrl, name }) => (
  <div>
    <h1>Mitt Online CV</h1>
    <img src={imageUrl} alt={name} width="200" />
  </div>
);
export default Header;
```
**Forklaring:** 
`Header`-komponenten er en funksjonskomponent som mottar `imageUrl` og `name` som props. Denne komponenten viser en tittel og et bilde. ES6 destrukturering er brukt for å hente ut verdiene fra props, noe som gjør koden mer konsis.

### **PersonalInfo.js**
```javascript
import React from 'react';

const PersonalInfo = ({ name, address, phone, email }) => (
  <div>
    <p>Navn: {name}</p>
    <p>Adresse: {address}</p>
    <p>Telefon: {phone}</p>
    <p>E-post: {email}</p>
  </div>
);
export default PersonalInfo;
```
**Forklaring:** 
`PersonalInfo`-komponenten viser personlig informasjon om brukeren. Ved å benytte destrukturering trekker vi ut de spesifikke detaljene vi trenger fra props.

### **SkillsButton.js**
```javascript
import React from 'react';

const SkillsButton = ({ onClick }) => (
  <button onClick={onClick}>
    Vis detaljer
  </button>
);
export default SkillsButton;
```
**Forklaring:** 
`SkillsButton`-komponenten er en knappkomponent som mottar en `onClick` funksjon gjennom props. Denne funksjonen vil bli utløst når brukeren klikker på knappen.

### **App.js (Modified)**
```javascript
import React from 'react';
import './App.css';
import Header from './Header';
import PersonalInfo from './PersonalInfo';
import SkillsButton from './SkillsButton';

const App = () => {
  const personalDetails = {
    name: "Ola Nordmann",
    imageUrl: "path_to_image.jpg",
    address: "Osloveien 123, 1234 Oslo",
    phone: "12345678",
    email: "ola@nordmann.no"
  };

  const showDetails = () => {
    alert("Ferdigheter:\n- Webutvikling\n- Apputvikling\n- Databaseforvaltning");
  }

  return (
    <div className="App">
      <Header name={personalDetails.name} imageUrl={personalDetails.imageUrl} />
      <PersonalInfo 
        name={personalDetails.name}
        address={personalDetails.address}
        phone={personalDetails.phone}
        email={personalDetails.email}
      />
      <SkillsButton onClick={showDetails} />
    </div>
  );
}
export default App;
```
**Forklaring:** 
`App`-komponenten samler alle de tidligere definerte komponentene. `personalDetails` objektet inneholder dummydata for en bruker. `showDetails` funksjonen er definert for å vise en alert med ferdighetene når "Vis detaljer" knappen blir klikket. Deretter bruker vi `Header`, `PersonalInfo`, og `SkillsButton` komponentene, og passerer de nødvendige props til dem for å vise informasjonen.

---

