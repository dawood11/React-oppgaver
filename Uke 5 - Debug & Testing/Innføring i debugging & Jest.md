# **6. En Innføring i `Jest` og `Debugging` teknikker**

## Del 1: Debugging

Debugging er prosessen med å finne og rette opp feil eller unøyaktigheter i kode. Effektiv debugging er en essensiell ferdighet for alle utviklere.

**1. Console.log**
`console.log` er den enkleste metoden for debugging. Ved å legge inn `console.log(variabel)` i koden din, kan du se verdien av den variable i nettleserens konsoll.

**2. Nettleserens Utviklerverktøy**
Moderne nettlesere kommer med kraftige utviklerverktøy. For eksempel, i Chrome, kan du høyreklikke og velge 'Inspect' for å åpne utviklerverktøy. Her kan du se nettverksforespørsler, sjekke elementer på siden, og mye mer.

**3. Breakpoints i Visual Studio Code**
Breakpoints lar deg pause kodeutførelsen midt i en funksjon eller en prosess. Dette gir deg mulighet til å inspisere aktuelle verdier, se call stacks, og navigere gjennom koden steg for steg.
- Åpne filen du vil debugge i VS Code.
- Klikk på den grå margen til venstre for linjenummeret der du vil legge til et breakpoint. Et rødt punkt vil dukke opp, indikerende en breakpoint.
- Start debugging ved å trykke på 'Run' og velge 'Start Debugging' fra menyen.

## Del 2: Innføring i Jest

Jest er et JavaScript testing framework som er optimalisert for å jobbe med React. Det gir utviklere mulighet til å lage tester for deres applikasjoner for å sikre at de fungerer som forventet.

### Grunnleggende om Jest:
1. **Test Suites & Test Cases**: I Jest grupperer vi tester i 'suites', og hver individuell test kalles en 'test case'.
   
   **Eksempel:**
   ```javascript
   describe('Sample Test Suite', () => {
     it('should be true', () => {
       expect(true).toBe(true);
     });
   });
   ```

2. **Expect & Matchers**: `expect` er en funksjon som lar deg definere hva du forventer at en gitt verdi eller uttrykk skal være. Matcher er metoder som legges til forventninger for å bekrefte resultatet.
   
   **Eksempel:**
   ```javascript
   it('should add two numbers correctly', () => {
     const result = 1 + 2;
     expect(result).toBe(3);
   });
   ```

## Strukturen av `expect()`

- **`expect()`**: Dette er en funksjon som er gitt av Jest og brukes til å definere hva du forventer at en gitt verdi eller uttrykk skal være. Den tar en verdi som argument – det du ønsker å teste – og returnerer et 'expectation' objekt. Dette objektet har en rekke metoder kalt 'matchers' som du kan bruke til å bekrefte eller avkrefte en forventning om den gitte verdien.
  
  I vårt eksempel, bruker vi `expect(result)` fordi vi ønsker å teste verdien av `result`.

- **`.toBe()`**: Dette er en 'matcher' funksjon som er knyttet til 'expectation' objektet. Matcher-funksjonene er metoder som brukes for å sjekke en spesifikk forventning. I dette tilfellet, sjekker `.toBe(3)` at verdien av `result` strengt er lik (===) `3`.

## Hvorfor bruke `expect()`

`expect()` kan brukes med et stort antall matchers. Noen vanlige eksempler inkluderer:

- **`.toBe()`**: Sjekker at en verdi er strengt lik en annen verdi.
- **`.toEqual()`**: Sjekker at en verdi er verdi-lik en annen verdi (nyttig for objekter eller arrays).
- **`.not`**: Fornekter matcher som følger den. For eksempel, `expect(a).not.toBe(b)` vil passere hvis `a` ikke er strengt lik `b`.
- **`.toBeGreaterThan()`, `.toBeLessThan()`**: Brukes for numeriske sammenligninger.
- **`.toContain()`**: Sjekker om en array inneholder en bestemt verdi.
- **`.toBeNull()`**: Sjekker at en verdi er `null`.
- **`.toBeTruthy()`**: Sjekker at en verdi er truthy (f.eks. en verdi som konverterer til `true` i en boolsk kontekst).
- ... og mange flere!

## Hvordan kan man bruke `expect()`

1. **Grunnleggende sjekk**: For en enkel verdi-sjekk kan du bruke `.toBe()`.
   ```javascript
   const name = 'Alice';
   expect(name).toBe('Alice');
   ```

2. **Objekt sammenligning**: Hvis du vil sammenligne to objekter, kan du bruke `.toEqual()`.
   ```javascript
   const user = { name: 'Alice', age: 30 };
   expect(user).toEqual({ name: 'Alice', age: 30 });
   ```

3. **Fornektelse**: Bruk `.not` for å benekte en matcher.
   ```javascript
   expect(1 + 1).not.toBe(1);
   ```

4. **Array innehold**: For å sjekke om en array inneholder en bestemt verdi, bruk `.toContain()`.
   ```javascript
   const fruits = ['apple', 'orange', 'banana'];
   expect(fruits).toContain('apple');
   ```

Ved å kombinere `expect()` med forskjellige matchers, kan du skrive tester som dekker et bredt spekter av bruksområder, fra enkle verdibekreftelser til komplekse objekt- og array-sammenligninger.

1. **Mocking**: Med Jest, kan du lage 'mock' funksjoner eller moduler for å erstatte faktiske implementeringer med kontrollerte funksjoner.

    **Eksempel:** Bruke mock-funksjoner
   ```javascript
   export const saveUser = (user) => {
     // simulerer lagring av bruker i database
   }

   import * as db from './db';
   db.saveUser = jest.fn();

   test('user is saved to database', () => {
     const user = { name: 'Alice' };
     saveUserData(user);
     expect(db.saveUser).toHaveBeenCalledWith(user);
   });
   ```
   **Bakgrunn:** Noen ganger vil vi unngå å kjøre enkelte funksjoner i tester, for eksempel fordi de har bieffekter som å lagre data i en ekte database.

   **Forklaring:**
   * Mock-funksjonen lar oss fange opp kallene til den og sjekke hvordan de ble kalt.
   * Testen bekrefter at funksjonen for å lagre brukerdata faktisk prøver å lagre den gitte brukeren.


4. **Async Testing**: Jest gir støtte for å teste asynkrone koder som promises eller async/await.

   **Eksempel:**
   ```javascript
   it('should fetch data', async () => {
     const data = await fetchData();
     expect(data).toBeDefined();
   });
   ```

5. **Snapshot Testing**: Dette lar deg lage en 'snapshot' av din React komponent og sjekke at det ikke endrer seg uventet.

    **Eksempel:** Snapshot testing
   ```javascript
    import React from 'react';
    const MyComponent = () => <div>Hello World</div>;
    export default MyComponent;

    import React from 'react';
    import renderer from 'react-test-renderer';
    import MyComponent from './MyComponent';

    test('MyComponent renders correctly', () => {
        const tree = renderer.create(<MyComponent />).toJSON();
        expect(tree).toMatchSnapshot();
    });
   ```
   **Bakgrunn:** Ved å ta snapshots av React-komponenter, kan vi sørge for at brukergrensesnittet ikke endres utilsiktet mellom forskjellige kodeendringer.

   **Forklaring:**
   * Når testen kjøres for første gang, genereres et snapshot av hvordan MyComponent-renderingen ser ut.
   * På fremtidige kjøringer, vil Jest sammenligne den nye renderingen med det lagrede snapshot for å identifisere eventuelle endringer.

**Kilder:**

1. [Jest Offisiell Dokumentasjon](https://jestjs.io/docs/getting-started)
2. [React Testing Library Docs](https://testing-library.com/docs/react-testing-library/intro/)
3. [Async/Await in Jest](https://jestjs.io/docs/asynchronous)
4. [Snapshot Testing with Jest](https://jestjs.io/docs/snapshot-testing)
5. [Jest Mock Functions](https://jestjs.io/docs/mock-functions)
6. [Visual Studio Code Debugging Guide](https://code.visualstudio.com/docs/editor/debugging)
7. [Chrome DevTools Overview](https://developers.google.com/web/tools/chrome-devtools)

---

