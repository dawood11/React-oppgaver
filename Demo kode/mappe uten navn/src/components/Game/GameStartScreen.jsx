import { useState } from 'react';

const GameStartScreen = ({callbackFunc}) => {
  const [user, setUser] = useState('');

  const handleClick = () => {
    callbackFunc(user);
  };

  return (
    <>
      <h1>Typeracer</h1>
      <p>Lorem ipsum beskrivelse av hva som skal gjøres her....</p>
      <input
        type={'text'}
        placeholder={'Skriv inn navnet ditt'}
        onChange={(e) => setUser(e.target.value)}
      />
      <br />
      <button type={'button'} onClick={handleClick}>Start spillet</button>
    </>
  );
}

export default GameStartScreen;
