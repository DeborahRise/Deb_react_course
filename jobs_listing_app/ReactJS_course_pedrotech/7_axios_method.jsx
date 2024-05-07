// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import { useEffect, useState } from 'react'
import './App.css'
import Axios from "axios"

function App() {
  const [catfact, setCatFact] = useState("");
// Using use effect to prevent an infinite loop

const fxn_catfact = () => {
  Axios.get("https://catfact.ninja/fact").then((resp) => {
    setCatFact(resp.data.fact);
  });
};
  useEffect(() => {
    fxn_catfact();
  }, []);

  
  return (
    <div className="App">
      <button onClick={fxn_catfact}> FUN FACTs - CATs EDITION </button>
      <p> {catfact} </p>
    </div>
  )
 }; 
export default App
