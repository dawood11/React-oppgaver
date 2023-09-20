## Uke 6 - Oppgavesett: Interaktiv Online CV Webapplikasjon: `TypeScript ( & propTypes)`


### **Oppgave 1: Intro til PropTypes**

**Mål:** Bli kjent med PropTypes for typechecking før vi dykker dypere inn i TypeScript.

**Beskrivelse:**  
Opprett en React-komponent `Profile` som viser grunnleggende brukerinformasjon. Bruk PropTypes for å sikre at `Profile` tar inn følgende props:
- `name`: en streng
- `age`: et nummer
- `experience`: en array av objekter, hvor hvert objekt har en `title` (streng) og `years` (nummer).

**Link:** [PropTypes documentation](https://reactjs.org/docs/typechecking-with-proptypes.html)

### **Oppgave 2: Integrering av TypeScript i et eksisterende React-prosjekt**

**Mål:** Integrer TypeScript i et eksisterende React JS-prosjekt for CV-applikasjonen.

**Beskrivelse:**  
Ta et eksisterende React JS-prosjekt for CV-applikasjonen og integrer TypeScript. Dette innebærer å installere nødvendige avhengigheter, konfigurere tsconfig, og endre noen av de eksisterende React JS-komponentene til TypeScript-komponenter.

**Link:** [Adding TypeScript to an Existing Project](https://www.typescriptlang.org/docs/handbook/migrating-from-javascript.html)

### **Oppgave 3: Utforsking av TypeScript Typer**

**Mål:** Bli kjent med grunnleggende TypeScript typer.

**Beskrivelse:**  
For CV-applikasjonen, endre `Profile` komponenten du lagde i Oppgave 1 for å bruke TypeScript. Definer typer for props `name`, `age`, og `experience`. Forsikre deg om at du bruker riktige typer som `string`, `number`, `array`, etc.

**Link:** [TypeScript Basic Types](https://www.typescriptlang.org/docs/handbook/basic-types.html)

### **Oppgave 4: Grensesnitt (Interfaces) i TypeScript**

**Mål:** Utforske hvordan grensesnitt kan brukes til å strukturere data i TypeScript.

**Beskrivelse:**  
Utvid CV-applikasjonen ved å legge til en ny komponent `WorkExperience` som viser brukerens arbeidserfaring. Bruk TypeScript grensesnitt for å definere typene av data som komponenten tar imot. Dette kan inkludere `jobTitle`, `companyName`, `startYear`, `endYear`, etc.

**Link:** [TypeScript Interfaces](https://www.typescriptlang.org/docs/handbook/interfaces.html)

### **Oppgave 5: Bruk av Type Assertions**

**Mål:** Forstå hvordan og når du skal bruke type assertions i TypeScript.

**Beskrivelse:**  
I CV-applikasjonen, opprett en hjelpefunksjon `parseUserData` som tar en streng (JSON format) og konverterer den til et objekt. Bruk type assertions for å forsikre TypeScript at den returnerte verdien er av en spesifikk type (f.eks. `UserProfile` type).

**Link:** [TypeScript Type Assertions](https://www.typescriptlang.org/docs/handbook/basic-types.html#type-assertions)

### **Oppgave 6: Union Typer og Literal Typer**

**Mål:** Utforske hvordan union typer og literal typer kan være nyttige i CV-applikasjonen.

**Beskrivelse:**  
Lag en komponent `Filter` i CV-applikasjonen som lar brukere filtrere jobberfaring basert på jobbtittel eller årstall. Denne komponenten skal ha en prop som bestemmer hvilken type filter den skal bruke. Bruk union typer for å definere denne propen som enten en streng (jobbtittel) eller et nummer (årstall). Bruk også literal typer for å sikre at den aksepterte strengen er en av forhåndsdefinerte jobbtitler.

**Link:** [TypeScript Union and Literal Types](https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html)

## Ekstra utfordringsoppgaver:

### **Oppgave 7: Generiske Typer**

**Mål:** Utforske dypere bruken av generiske typer i TypeScript.

**Beskrivelse:**  
Lag en generisk funksjon `getDetails` som tar en array av objekter og en nøkkel som en streng. Denne funksjonen skal returnere en ny array med verdiene tilhørende den nøkkelen fra hvert objekt. For eksempel, hvis den mottar en array av jobberfaringer og nøkkelen 'jobTitle', skal den returnere en array av jobbtitlene.

**Link:** [TypeScript Handbook: Generics](https://www.typescriptlang.org/docs/handbook/generics.html)

