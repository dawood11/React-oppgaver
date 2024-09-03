## Uke 3 - `Hooks: useState`: Løsning og Forklaring:

### **Løsning Oppgave 1:**
```javascript
import React, { useState } from 'react';

const CVInfo = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [profession, setProfession] = useState('');

  return (
    <div>
      <input placeholder='Navn' onChange={e => setName(e.target.value)} />
      <input placeholder='Alder' onChange={e => setAge(e.target.value)} />
      <input placeholder='Yrke' onChange={e => setProfession(e.target.value)} />
      <div>
        <strong>Navn:</strong> {name} <br />
        <strong>Alder:</strong> {age} <br />
        <strong>Yrke:</strong> {profession}
      </div>
    </div>
  );
}
```

**Forklaring:**
Vi benytter `useState` hook for å opprette og håndtere tilstander for `Navn`, `Alder` og `Yrke`. Ved å fylle ut input-feltene, blir verdien av hvert felt satt til tilhørende tilstand ved hjelp av `onChange`-eventen.

### **Løsning Oppgave 2:**
```javascript
import React, { useState } from 'react';

const Skills = () => {
  const [skill, setSkill] = useState('');
  const [skillsList, setSkillsList] = useState([]);

  const addSkill = () => {
    setSkillsList([...skillsList, skill]);
    setSkill('');
  }

  return (
    <div>
      <input 
        placeholder='Ferdighet' 
        value={skill} 
        onChange={e => setSkill(e.target.value)} 
      />
      <button onClick={addSkill}>Legg til</button>
      <ul>
        {skillsList.map((skill, index) => <li key={index}>{skill}</li>)}
      </ul>
    </div>
  );
}
```

**Forklaring:**
Vi bruker to `useState`-hooks; en for å holde styr på den nåværende ferdigheten som skrives inn og en for å holde styr på den totale listen over ferdigheter. Når 'Legg til'-knappen klikkes, legges den nåværende ferdigheten til i listen og input-feltet renses.

### **Løsning Oppgave 3:**
```javascript
import { useState } from 'react';

const useCVData = () => {
  const [data, setData] = useState({
    name: '',
    age: '',
    profession: '',
    skills: []
  });

  const updateBasicInfo = (name, age, profession) => {
    setData(prev => ({ ...prev, name, age, profession }));
  }

  const addSkill = skill => {
    setData(prev => ({ ...prev, skills: [...prev.skills, skill] }));
  }

  return { data, updateBasicInfo, addSkill };
}
```

**Forklaring:**
Den egendefinerte `useCVData`-hooken gir en måte å sentralisere og administrere CV-data ved hjelp av `useState`-hook. Den gir også funksjoner for å oppdatere grunnleggende informasjon og legge til ferdigheter.

### **Løsning Oppgave 4:**
```javascript
import React, { useState } from 'react';

const LanguageSelector = () => {
    const [language, setLanguage] = useState('no'); // default språk
    const translations = {
        no: {
            title: 'Min CV',
            skills: 'Ferdigheter',
        },
        en: {
            title: 'My CV',
            skills: 'Skills',
        }
    };

    const currentTranslation = translations[language];

    return (
        <div>
            <select value={language} onChange={(e) => setLanguage(e.target.value)}>
                <option value='no'>Norsk</option>
                <option value='en'>English</option>
            </select>
            <h1>{currentTranslation.title}</h1>
            <h2>{currentTranslation.skills}</h2>
            {/* Resten av CV innhold her */}
        </div>
    );
}
```

**Forklaring:**
I denne løsningen bruker vi `useState` for å holde styr på det valgte språket. Vi setter standard språket til norsk (`'no'`). Deretter oppretter vi et objekt kalt `translations` som inneholder nøkkel-verdi-par for oversettelser på de forskjellige språkene vi støtter (i dette tilfellet norsk og engelsk).

For å vise den riktige oversettelsen basert på det valgte språket, henter vi den aktuelle oversettelsen fra `translations` objektet ved hjelp av den valgte språknøkkelen (enten `'no'` eller `'en'`). Vi bruker deretter denne oversettelsen for å vise den aktuelle teksten i komponenten.

Brukeren kan bytte språk ved å velge et annet språk fra rullegardinlisten (`<select>` elementet). Når brukeren bytter språk, oppdateres `language` tilstandsvariabelen med den nye verdien, og komponenten rendrer på nytt med den aktuelle oversettelsen.

Dette er en grunnleggende tilnærming til lokalisering av en webapplikasjon. I et virkelig prosjekt ville du kanskje ha brukt biblioteker som `react-i18next` for en mer sofistikert løsning.