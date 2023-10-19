import './App.css';

import { useContext, useState } from 'react';

import PrimaryButton from './components/Button/PrimaryButton';
import { ProductContext } from './context/ProductContext';
import SecondaryButton from './components/Button/SecondaryButton';
import User from './components/User/User';
import { UserContext } from './context/UserContext';

const App = () => {
  const [name, setName] = useState("Ola Nordmann");
  const [counter, setCounter] = useState(0)

  return (
    <div className="App">
      <h1>{counter}</h1>
        <PrimaryButton onClick={() => setCounter((prevSate) => prevSate + 1)}>Increment</PrimaryButton>
        <PrimaryButton onClick={() => setCounter((prevSate) => prevSate - 1)}>Decrement</PrimaryButton>
        <UserContext.Provider value={{name, setName, counter}}>
          <User />
        </UserContext.Provider>
        <SecondaryButton onClick={() => setName("Kari Nordmann")}>Endre navn</SecondaryButton>
        <hr />
      </div>
  );
}
export default App;
