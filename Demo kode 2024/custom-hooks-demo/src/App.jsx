import './App.css'

import useInput from './Hooks/useInput';

const App = () => {
  const nameInput = useInput("");
  const emailInput = useInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", nameInput.value);
    nameInput.reset();
    
    console.log("Email:", emailInput.value);
    emailInput.reset();
  };


  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          placeholder="Enter your name"
          value={nameInput.value}
          onChange={nameInput.onChange}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="text"
          placeholder="Enter your email"
          value={emailInput.value}
          onChange={emailInput.onChange}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default App;