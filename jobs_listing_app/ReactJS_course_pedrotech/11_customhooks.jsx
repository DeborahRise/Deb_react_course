// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from 'react';
import './App.css'
import { useToggle } from './Components/useToggle';

function App() {
  const [isvisible, Toggle] = useToggle();
  const [isMarried, setIsMarried] = useToggle();
  return (
    <div className="App">
      <button onClick={Toggle}> {isvisible? "Hide" : "Display"} </button>
      <h1> {isvisible && 'The text'}</h1>
      <button onClick={setIsMarried}> {isMarried? "Married" : "UnMMarried"} </button>
      <h1> {isMarried && 'To Hubby'}</h1>
    </div>
  );
 }

export default App;
