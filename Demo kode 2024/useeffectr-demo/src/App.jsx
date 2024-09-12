import "./App.css";

import { useEffect, useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("Ola");

  useEffect(() => {
    console.log("Ingenting...");
  }, [name, counter]);

  return (
    <>
      <h1>{counter} - {name}</h1>
      <button onClick={() => setCounter(counter + 1)}>test</button>
      <button onClick={() => setName("Roger")}>change name</button>
    </>
  );
};

export default App;
