## Uke 2 - Component & Props: Løsning og Forklaring:

### **Education.js**
```javascript
import React from 'react';

const Education = ({ school, degree }) => (
  <div>
    <h2>Utdanning</h2>
    <p>Skole: {school}</p>
    <p>Grad: {degree}</p>
  </div>
);

export default Education;
```
**Forklaring:** 
`Education`-komponenten er en funksjonskomponent som tar inn to props: `school` og `degree`, og returnerer en `div` med skolens navn og graden. 

### **Skills.js**
```javascript
import React from 'react';

const Skills = ({ skills, onSkillClick }) => {
  const handleSkillClick = (skill) => {
    onSkillClick(skill);
  }

  return (
    <div>
      <h2>Ferdigheter</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index} onClick={() => handleSkillClick(skill)}>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
```
**Forklaring:** 
`Skills`-komponenten er modifisert for å ta inn en ekstra prop `onSkillClick`. Dette er en funksjon som blir kalt når en enkelt ferdighet i listen blir klikket. `handleSkillClick` funksjonen kaller `onSkillClick` funksjonen med den klikkede ferdigheten.

### **Footer.js**
```javascript
import React from 'react';

const Footer = ({ year }) => (
  <div>
    © {year} Ditt Navn
  </div>
);

export default Footer;
```
**Forklaring:** 
`Footer`-komponenten er en funksjonskomponent som tar inn en prop `year`, og returnerer en `div` med teksten '© [year] Ditt Navn'.

### **Ekstra utfordringsoppgaver Løsning**

### **Projects.js**
```javascript
import React from 'react';

const Projects = ({ projects }) => (
  <div>
    <h2>Prosjekter</h2>
    <ul>
      {projects.map((project, index) => (
        <li key={index}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.link} target='_blank' rel='noopener noreferrer'>Se Prosjekt</a>
        </li>
      ))}
    </ul>
  </div>
);

export default Projects;
```
**Forklaring:** 
`Projects`-komponenten tar inn en `projects` prop som er en array av prosjektobjekter og returnerer en liste med alle prosjektene med en link til prosjektet.

### **Skills.js (Modified Again)**
```javascript
import React, { useState } from 'react';

const Skills = ({ skills: initialSkills }) => {
  const [skills, setSkills] = useState(initialSkills);

  const handleDelete = (index) => {
    const newSkills = skills.slice();
    newSkills.splice(index, 1);
    setSkills(newSkills);
  }

  return (
    <div>
      <h2>Ferdigheter</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>
            {skill}
            <button onClick={() => handleDelete(index)}>Slett</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
```
**Forklaring:** 
I den modifiserte `Skills`-komponenten har vi lagt til en lokal state `skills` og en `handleDelete` funksjon som fjerner en ferdighet fra listen når 'Slett' knappen blir klikket.

### **App.js**
```javascript
import React from 'react';
import Education from './Education';
import Skills from './Skills';
import Footer from './Footer';
import Projects from './Projects';

const App = () => {
  const education = {
    school: 'Universitetet i Oslo',
    degree: 'Master i Informatikk'
  };

  const skills = ['JavaScript', 'React', 'Node.js'];

  const projects = [
    {
      title: 'Prosjekt 1',
      description: 'Dette er beskrivelsen av prosjekt 1',
      link: 'https://www.example.com'
    },
    {
      title: 'Prosjekt 2',
      description: 'Dette er beskrivelsen av prosjekt 2',
      link: 'https://www.example.com'
    }
  ];

  const handleSkillClick = (skill) => {
    alert(`${skill} er klikket!`);
  };

  return (
    <div>
      <Education school={education.school} degree={education.degree} />
      <Skills skills={skills} onSkillClick={handleSkillClick} />
      <Projects projects={projects} />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
```
**Forklaring:** 
`App`-komponenten importerer alle de andre komponentene og bruker dem til å lage en fullstendig applikasjon. `education`, `skills`, og `projects` er definert som konstanter og sendt som props til de tilsvarende komponentene. `handleSkillClick` funksjonen er definert i `App`-komponenten og sendt som prop til `Skills`-komponenten.
