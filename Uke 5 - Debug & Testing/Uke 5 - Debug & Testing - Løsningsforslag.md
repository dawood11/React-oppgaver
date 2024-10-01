## Uke 5 - `Debug & testing`: Løsning og Forklaring:

### **Løsningsforslag Oppgave 1: Basic Logging**

**Løsning:** 
For å introdusere logging, kan du bruke `console.log()` på strategiske steder i koden:

```javascript
const addSkill = (skill) => {
  console.log('Adding skill at:', new Date());
  console.log('Skill:', skill);
  // Resten av koden som legger til ferdigheten
}
```

**Forklaring:** 
Ved å logge tidspunktet og ferdigheten, kan vi bekrefte at ferdigheten blir lagt til som forventet.

### **Løsningsforslag Oppgave 2: Jest Grunnleggende - Testing av Funksjoner**

**Løsning:** 

```javascript
// formatPhone.js
const formatPhone = (phone) => {
  // Formatering logikk
}

// formatPhone.test.js
test('formats phone numbers correctly', () => {
  expect(formatPhone('12345678')).toBe('+47-12345678');
  // ... flere tester
});
```

**Forklaring:** 
Med Jest, kan vi enkelt skrive tester for funksjoner som `formatPhone` for å sikre at de virker som forventet.

### **Løsningsforslag Oppgave 3: Testing av Data Manipulering**

**Løsning:** 

```javascript
// skills.test.js
test('adds a skill to the list', () => {
  const skills = ['JavaScript'];
  addSkill('React');
  expect(skills).toContain('React');
});
```

**Forklaring:** 
Med Jest, kan vi skrive tester for funksjoner som legger til eller fjerner ferdigheter fra en liste for å sikre korrekt funksjonalitet.

### **Løsningsforslag Oppgave 4: Testing av UI-komponenter med Jest**

**Løsning:** 

```javascript
// Using @testing-library/react
import { render, fireEvent } from '@testing-library/react';
import EditButton from './EditButton';

test('opens edit window on click', () => {
  const { getByText } = render(<EditButton />);
  fireEvent.click(getByText('Edit'));
  // Bekreft at redigeringsvinduet åpnes
});
```

**Forklaring:** 
Med kombinasjonen av Jest og `@testing-library/react`, kan vi simulere brukerinteraksjoner og teste UI-komponenter.

### **Løsningsforslag Oppgave 5: Snapshot Testing**

**Løsning:** 

```javascript
import renderer from 'react-test-renderer';
import EducationHistory from './EducationHistory';

test('EducationHistory component renders correctly', () => {
  const tree = renderer.create(<EducationHistory />).toJSON();
  expect(tree).toMatchSnapshot();
});
```

**Forklaring:** 
Med snapshot testing, kan vi sikre at komponentens output ikke endres utilsiktet over tid.

### **Løsningsforslag Oppgave 6: Simulering av Brukerinteraksjon med End-to-End Testing**

**Løsning:** 

```javascript
// Using Cypress
describe('CV Application Interactions', () => {
  it('simulates user adding, editing, and deleting a job experience', () => {
    cy.visit('/cv');
    cy.get('[data-cy=add-experience-button]').click();
    // ... resten av interaksjonene
  });
});
```

**Forklaring:** 
Med Cypress, kan vi simulere en hel brukeropplevelse fra start til slutt.

### **Løsningsforslag Oppgave 7: Integrasjonstesting**

**Løsning:** 

```javascript
// Using Jest
test('skills integration', () => {
  addSkill('React');
  addSkill('JavaScript');
  expect(getSkillsList()).toContain('React');
  expect(getSkillsList()).toContain('JavaScript');
});
```

**Forklaring:** 
Integrasjonstesting hjelper oss med å bekrefte at ulike deler av applikasjonen fungerer sammen som forventet.

### **Løsningsforslag Oppgave 8: Feilsøking ved Bruk av Breakpoints**

**Løsning:** 
Ved bruk av utviklerverktøyene i nettleseren (for eksempel Chrome DevTools), kan man sette breakpoints i koden for å pause utførelsen og inspisere dataene. Dette er mer en manuell prosess enn en kodebit, men det er svært verdifullt for feilsøking.

**Forklaring:** 
Breakpoints lar deg pause koden på et spesifikt punkt og sjekke verdien av variabler, flyten i koden, og mer for å identifisere og løse problemer.

> Husk at disse løsningsforslagene er grunnleggende eksempler. Du kan utvide og tilpasse dem basert på spesifikke krav eller forbedringer du ønsker å implementere i applikasjonen din.

---

