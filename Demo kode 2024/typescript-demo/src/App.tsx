import './App.css'

import Person from './Person';
import { PersonType } from './Types';
import { useState } from 'react'

const App = () => {
  const [nameObj, setNameObj] = useState<PersonType>({name: "Ingen", age: 10});

  const handleClick = () => {
    setNameObj({...nameObj, name: "23456"});
  };
  
  return (
    <>
      <Person nameProp={{...nameObj, name: nameObj.name}}/>
      <hr />
      <p>{nameObj.name}</p>
      <button onClick={handleClick}>click me!</button>
    </>
  )
}

export default App
