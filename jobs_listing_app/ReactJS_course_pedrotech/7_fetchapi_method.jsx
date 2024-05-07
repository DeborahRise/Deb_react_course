// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import './App.css'

function App() {
  fetch("https://catfact.ninja/fact")
  .then((resp) => resp.json())
  .then((data) => {
    console.log(data)
  });
  return (
    <div className="App">
      <button> GENERATE CAT FACT </button>
      <p></p>
    </div>
  )
 }; 
export default App
