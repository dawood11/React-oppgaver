import { useEffect, useState } from "react";

import Timer from "../Timer/Timer";

/*
    Nedteller - OK
    poengteller - OK
    hente ord - OK
    space knapp - OK
    Avslutt spill
    feedback??
    */

const listOfWords = ["bil", "trær", "bacon", "stein", "ribbe"];

const GamePlay = ({ callbackFunc }) => {
  const [inputWord, setInputWord] = useState("");
  const [currentGamescore, setCurrentGameScore] = useState(0);
  const [displayWord, setDisplayWord] = useState("");

  useEffect(() => {
    getNewWordFromList();
  }, []);

  const getNewWordFromList = () => {
    const currentWord = listOfWords.pop();
    setDisplayWord(currentWord);
  };

  const gameover = () => {
    callbackFunc(currentGamescore);
  };

  const handleSpace = (e) => {
    if (e.keyCode === 32) {
      e.preventDefault();
      if (displayWord.toLowerCase() === inputWord.toLowerCase()) {
        setCurrentGameScore((prevState) => prevState + displayWord.length);
      }
      getNewWordFromList();
      setInputWord("");
    }
  };

  return (
    <>
      <Timer seconds={15} timeOverFunc={gameover} />
      <p>Poeng: {currentGamescore}</p>
      <h1>{displayWord}</h1>
      <input
        type={"text"}
        onChange={(e) => setInputWord(e.target.value.trim())}
        onKeyDown={handleSpace}
        value={inputWord}
      />
    </>
  );
};

export default GamePlay;
