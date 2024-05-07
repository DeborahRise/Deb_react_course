// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import { useEffect, useState } from 'react'
import './App.css'
import Axios from "axios"

function App() {
  const [catfact, setCatFact] = useState("");
// Using use effect to prevent an infinite loop
  useEffect(() => {
    Axios.get("https://catfact.ninja/fact").then((resp) => {
    setCatFact(resp.data.fact);
  });
  }, []);

  
  return (
    <div className="App">
      <button> GENERATE CAT FACT </button>
      <p> {catfact} </p>
    </div>
  )
 }; 
export default App
