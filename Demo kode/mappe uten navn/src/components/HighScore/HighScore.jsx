import { useEffect, useState } from "react";

const HighScore = ({ userName, score }) => {
  const [highScoreList, setHighScoreList] = useState([]);

  useEffect(() => {
    setHighScoreList((prevState) => [
      ...prevState,
      { userName: userName, score: score },
    ]);
  }, [userName, score]);

  return (
    <>
      <h1>Highscore</h1>
      {highScoreList.length === 0 ? (
        <p>Ingen poeng registrert enda...</p>
      ) : (
        <ul>
          {highScoreList.map((highScoreElement, index) => (
            <li key={index}>
              {highScoreElement.userName} - {highScoreElement.score}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default HighScore;
