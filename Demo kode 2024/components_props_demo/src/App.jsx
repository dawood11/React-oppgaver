import './App.css'

import AgendaList from './components/Agenda/AgendaList';
import { Button } from './components/Button/Button';
import PrimaryButton from './components/Button/PrimaryButton';
import SecondaryButton from './components/Button/SecondaryButton';

const App = () => {
  return (
    <>
      <h1>Velkommen Til forelesning</h1>
      <div>
        <p><strong>Foreleser:</strong> Dawood Ahmad</p>
        <p><strong>Emne:</strong> React - Components & props</p>
      </div>
      <AgendaList />
      
      <Button text={"This is some text!"}/>
      <Button>
        <h1> Im your child!!!!</h1>
      </Button>
      <PrimaryButton text={"This is PB"}/>
      <SecondaryButton text={"I'm second :("}/>
    </>
  )
}

export default App
