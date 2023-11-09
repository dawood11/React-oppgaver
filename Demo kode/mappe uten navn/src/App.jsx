import './App.css';

import GamePlay from './components/Game/GamePlay';
import GameStartScreen from './components/Game/GameStartScreen';
import HighScore from './components/HighScore/HighScore';
import { useState } from 'react';

const App = () => {
  const [userName, setUserName] = useState('')
  const [score, setScore] = useState(0)
  const [gameView, setGameView] = useState({
    startScreen: true,
    gamePlay: false,
    highScore: false,
  });

  const changeGameView = (newUserName) => {
    setGameView({
      startScreen: false,
      gamePlay: true,
      highScore: false,
    });
    setUserName(newUserName);
  };
  
  const gameOverCallback = (score) => {
    setGameView({
      startScreen: false,
      gamePlay: false,
      highScore: true,
    });
    setScore(score);
  };


  return (
    <div className={'App'}>
      {
        gameView.startScreen && <GameStartScreen callbackFunc={changeGameView}/>
      }
      {
        gameView.gamePlay && <GamePlay callbackFunc={gameOverCallback}/>
      }
      {
        gameView.highScore && <HighScore callbackFunc={changeGameView} userName={userName} score={score}/>
      }
    </div>
  );
}

export default App;
