## Uke 4 - `Hooks: useEffect`: Løsning og Forklaring:

### **Løsningsforslag Oppgave 1: Enkel sideinnlasting**
```javascript
import { useEffect } from 'react';

const CVApp = () => {
  useEffect(() => {
    console.log('CV-appen er lastet!');
  }, []);

  return (
    // Resten av din app-kode
  );
}
```

**Forklaring:** 
For å kjøre en effekt bare én gang når komponenten først monteres (ligner `componentDidMount` i klasser), kan vi gi `useEffect` en tom avhengighetsarray.

### **Løsningsforslag Oppgave 2: Sporing av visninger**

```javascript
useEffect(() => {
  let count = localStorage.getItem('viewCount');
  if (count) {
    count = Number(count) + 1;
  } else {
    count = 1;
  }
  localStorage.setItem('viewCount', count);
  console.log(`Du har besøkt denne CV-appen \${count} ganger.`);
}, []);
```
**Forklaring:** 
Ved å bruke `localStorage`, kan vi lagre en enkel teller som holder styr på antall ganger en bruker har lastet appen.


### **Løsningsforslag Oppgave 3: Overvåkning av endringer**

```javascript
const [skills, setSkills] = useState([]);

useEffect(() => {
  if (skills.length) {
    console.log('Ferdighet lagt til!');
  }
}, [skills]);

// En funksjon for å legge til ferdigheter kan se slik ut:
const addSkill = (skill) => {
  setSkills(prevSkills => [...prevSkills, skill]);
}
```

**Forklaring:** 
Hver gang listen over ferdigheter endres, vil `useEffect` med en avhengighetsarray som inneholder den listen bli kjørt.

### **Løsningsforslag Oppgave 4: Påminnelse om oppdatering av CV**

```javascript
useEffect(() => {
  const lastUpdated = localStorage.getItem('lastUpdated');
  const currentDate = new Date();
  if (lastUpdated) {
    const diffDays = Math.ceil((currentDate - new Date(lastUpdated)) / (1000 * 60 * 60 * 24));
    if (diffDays > 30) {
      console.log('Vennligst oppdater CV-en din. Det har gått mer enn 30 dager siden sist!');
    }
  }
}, []);
```

**Forklaring:** 
For å sjekke hvor lenge det har vært siden siste oppdatering, kan vi lagre dato for siste endring i `localStorage` og sammenligne den med dagens dato når appen lastes.

### **Løsningsforslag Oppgave 5: CV Redigering**

```javascript
const [editMode, setEditMode] = useState(false);
const [data, setData] = useState({
  skills: [],
  jobExperience: [],
  //... annen CV-informasjon
});

const toggleEditMode = () => {
  setEditMode(!editMode);
}

const updateData = (type, value) => {
  setData(prevData => ({
    ...prevData,
    [type]: value
  }));
}

// Og så kan du vise eller skjule redigeringsgrensesnittet basert på `editMode` tilstanden.
```

**Forklaring:** 
Dette er en mer kompleks oppgave som involverer å skifte mellom visningsmodus og redigeringsmodus, samt spore endringer i data. 

Vær oppmerksom på at den ovennevnte koden er skissert og kan kreve ytterligere implementeringsdetaljer for å fungere som forventet.