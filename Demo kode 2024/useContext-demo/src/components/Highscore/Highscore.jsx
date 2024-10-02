import { useContext, useState } from "react";

import { ModeContext } from "../../contexts/ModeContext";

const Highscore = () => {
  const [scores, setScore] = useState([
    { name: "Alon", score: 12345789 },
    { name: "Adam", score: 45 },
  ]);
  const modeContext = useContext(ModeContext);

  const handleDeleteScore = (scoreParam) => {
    const newArray = scores.filter((score) => score.score !== scoreParam.score);
    setScore(newArray);
  };

  return (
    <>
      <ul>
        {scores.map((score, index) => (
          <li key={index}>
            {modeContext.mode ? (
              <input type="text" value={score.name} />
            ) : (
              <p>
                {score.name}: {score.score}
              </p>
            )}
            {modeContext.mode ? (
              <button onClick={() => handleDeleteScore(score)}>Slett</button>
            ) : (
              <></>
            )}
          </li>
        ))}
      </ul>
      <button onClick={() => modeContext.setMode((prevState) => !prevState)}>Switch mode</button>
    </>
  );
};

export default Highscore;
