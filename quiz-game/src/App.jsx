import './App.css';

import Button from './components/Button/Button';
import { useState } from 'react';

const App = () => {
  const [poeng, setPoeng] = useState(0);
  // const [disableGame, setDisableGame] = useState(false);
  // const [quizElementTeller, setQuizElementTeller] = useState(0);
  let quizElementTeller = 0;
  const quizList = [
    {
      spOrsmAl: "Spørsmål 1",
      svarAlternativer: [
        {
        svar: "Svar verdi 1",
        korrekt: false,
        },
        {
          svar: "Svar verdi 2",
          korrekt: false,
        },
        {
          svar: "Svar verdi 3",
          korrekt: true,
        },
        {
          svar: "Svar verdi 4",
          korrekt: false,
        },
      ]
    },
    {
      spOrsmAl: "Spørsmål 2",
      svarAlternativer: [
        {
        svar: "Svar2 verdi 1",
        korrekt: false,
        },
        {
          svar: "Svar2 verdi 2",
          korrekt: false,
        },
        {
          svar: "Svar2 verdi 3",
          korrekt: true,
        },
        {
          svar: "Svar2 verdi 4",
          korrekt: false,
        },
      ]
    },
  ];
  const [quiz, setQuiz] = useState(quizList[quizElementTeller]);

  

  const setPoengFunksjon = (svarAlternativ) => {
    console.log(svarAlternativ)
    if (svarAlternativ.korrekt === true) {
      setPoeng((prevState) => prevState + 1);
    } else {
      setPoeng((prevState) => prevState - 1);
    }

    quizElementTeller = quizElementTeller + 1;
    // setQuizElementTeller((prevState) => prevState + 1);
    // console.log(quizElementTeller, quizElementTeller === quizList.length)
    // if (quizElementTeller === quizList.length) {
    //   setDisableGame(true);
    // }
    setQuiz(quizList[quizElementTeller]);
  };

  return (
    <div className="App">
      {quizElementTeller}
      <p>Poeng: {poeng}</p>
      <h1>{quiz.spOrsmAl}</h1>
        {
          quiz.svarAlternativer.map((svarAlternativ, index) => (
            <Button
              key={index}
              // disable={disableGame}
              setPoengFunksjon={() => setPoengFunksjon(svarAlternativ)}
              svarAlternativ={svarAlternativ}
            />
          ))
        }
    </div>
  );
}

export default App;
