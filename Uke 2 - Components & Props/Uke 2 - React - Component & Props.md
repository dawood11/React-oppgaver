## Oppgavesett: Interaktiv Online CV Webapplikasjon: Component & Props

1. **Komponenter og Props:** Opprett en ny komponent `Education` i en separat fil `Education.js`. Denne komponenten skal ta inn to props: `school` og `degree`, og den skal returnere en `div` med skolens navn og graden.

2. **Hendelser og Håndtering:** Legg til en ny komponent `Skills` i en separat fil `Skills.js`. Denne komponenten skal ta inn en prop `skills` som er en array med ferdigheter. Komponenten skal vise en knapp som sier 'Vis ferdigheter'. Når denne knappen trykkes, skal en alert boks vise alle ferdighetene i arrayet.

3. **Komponent Sammensetning:** Opprett en `Footer` komponent i en egen fil `Footer.js`. Denne komponenten skal ta inn en prop `year`, og skal returnere en `div` som sier '© [year] Ditt Navn'. 

4. **Props og Hendelser:** Modifiser `Skills` komponenten for å ta inn en ekstra prop `onSkillClick`. Dette skal være en funksjon som blir kalt når en enkelt ferdighet i listen blir klikket. Funksjonen skal vise en alert med teksten '[skill] er klikket!'.


## Ekstra utfordringsoppgaver:

1. Opprett en `Projects` komponent i en egen fil `Projects.js`. Denne komponenten skal ta inn en prop `projects` som er en array av prosjektobjekter. Hvert prosjektobjekt skal ha `title`, `description`, og `link`. Komponenten skal vise en liste over alle prosjektene med en link til prosjektet. Når linken klikkes, skal siden åpnes i en ny fane.

2. Endre `Skills` komponenten slik at den viser en liste over ferdigheter med en 'Slett' knapp ved siden av hver ferdighet. Når 'Slett' knappen klikkes, skal den tilhørende ferdigheten fjernes fra listen.

---

