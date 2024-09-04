import "./App.css";

import { useState } from "react";

const App = () => {
  const [name, setName] = useState("Dawood");
  const [name2, setName2] = useState("Oskar");
  const [count, setCount] = useState(0);
  const [textColor, setTextColor] = useState(true);

  const changeName2 = () => {
    setName2("Rakso");
    setName("Doowad");
    setTextColor((prevState) => !prevState);
  };
  const increment = () => {
    setCount((prevState) => prevState + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  const [personArr, setPersonArr] = useState([
    {
      name: "Dawood",
      age: 25,
    },
  ]);
  const [inputName, setInputName] = useState("");
  const [inputAge, setInputAge] = useState(0);

  const leggTil = () => {
    console.log(personArr);
    setPersonArr((prevState) => [...prevState, {name: inputName, age: inputAge}]);
  };
  
  console.log(personArr);
  return (
    <>
      <p>
        Name:
        <input type="text" onChange={(e) => setInputName(e.target.value)} />
      </p>
      <p>
        Age:
        <input type="text" onChange={(e) => setInputAge(e.target.value)} />
      </p>

      <button onClick={leggTil}>Legg til</button>
      <ul>
        {personArr.map((person, index) => (
          <li key={index}>
            Name: {person.name} Age: {person.age}
          </li>
        ))}
      </ul>

      <hr />

      <h1 style={{ color: textColor ? "red" : "green" }}>{name}</h1>
      <h1>{name2}</h1>
      {/* <button onClick={() => setName("Doowad")}>Change Name</button> */}
      <button onClick={changeName2}>Change Name2</button>

      <h6>Counter: {count}</h6>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
};

export default App;
