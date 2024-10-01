# **9. Innføring i React Hooks:`useContext`**

## Hva er `useContext`?

`useContext` er en av de innebygde Hooks i React som tillater deg å bruke kontekst uten å omslutte komponenten din med en Context Consumer. Kontekst gir en måte å dele verdier som disse mellom komponenter uten å måtte eksplisitt sende en prop gjennom hver nivå av treet. Dette er nyttig spesielt når vi har 'global' data som autentisering, tema, eller data cache.

## Hvordan fungerer det?

Teknisk sett, når en komponent (som vi kaller 'Provider') tilbyr en kontekstverdi, alle dens barnekomponenter, og barnas barn, og så videre, kan få tilgang til denne verdien uten at verdien må være passert ned manuelt gjennom props.

Dette fungerer ved at React bruker en spesiell intern mekanisme for å 'bære' kontekstverdien gjennom komponenttreet, og med `useContext`-hooken, kan vi 'hente ut' denne verdien i enhver funksjonskomponent.

## Hvordan bruker vi det?

1. **Opprette kontekst**: Først, oppretter du en kontekst med `createContext`-metoden, som returnerer en kontekstobjekt.

    ```javascript
    const MyContext = React.createContext(defaultValue);
    ```

    `defaultValue` er verdien som blir brukt når en komponent ikke har en matchende Provider ovenfor i treet.

2. **Tilby verdien med Provider**: For å gjøre en kontekstverdi tilgjengelig til en del av komponentene, må du bruke `Provider` komponent som kommer med kontekstobjektet du har opprettet.

    ```javascript
    <MyContext.Provider value={/* some value */}>
        <MyChildComponent />
    </MyContext.Provider>
    ```

3. **Bruk kontekstverdien**: I hvilken som helst barnekomponent (eller dypere ned i treet), kan du nå bruke `useContext`-hooken for å hente ut kontekstverdien.

    ```javascript
    const value = useContext(MyContext);
    ```

## Tips for nybegynnere

- **Ikke overbruk**: Selv om kontekst er kraftig, bør du unngå å bruke det for ofte. Overdreven bruk kan føre til unødvendig kompleksitet i applikasjonen din. Bruk det for global tilstand som tema, autentisering, etc.
- **Kjenne dine alternativer**: Det er også andre metoder for global tilstandshåndtering i React som Redux, MobX, eller Zustand. Du trenger ikke alltid å bruke kontekst, men det er viktig å vite når det er det beste verktøyet for jobben.

Med dette som bakgrunn, la oss nå dykke dypere inn i hvordan vi kan bruke `useContext` for forskjellige scenarier i våre oppgaver.

---

