import "./App.css";

import Highscore from "./components/Highscore/Highscore";
import { ModeContext } from "./contexts/ModeContext";
import Student from "./components/Person/Student";
import Teacher from "./components/Person/Teacher";
import { useState } from "react";

const App = () => {
  const [mode, setMode] = useState(false);

  const handleSwitchMode = () => {
    setMode((prevState) => !prevState);
  };

  return (
    <ModeContext.Provider value={{ mode, setMode}}>
      {mode ? (
        <Teacher name={"Caroline"} age={80} />
      ) : (
        <Student name={"Dawood"} age={1} />
      )}

      <button onClick={handleSwitchMode}>Switch mode</button>
      <hr />
      <Highscore />
    </ModeContext.Provider>
  );
};

export default App;
