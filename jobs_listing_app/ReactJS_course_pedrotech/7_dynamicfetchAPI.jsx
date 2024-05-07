// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import { useEffect, useState } from 'react'
import './App.css'
import Axios from "axios"

function App() {

 const [name, setName] = useState("");
  const [Age, setAge] = useState(null);
  const guessage = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((resp) => {
      setAge(resp.data)
    });
  };
  
  return (
    <div className="App">
      <input placeholder='E.g Deb...' onChange={(event) => {
        setName(event.target.value);
        }}/>
      <button onClick={guessage}> GUESS AGE</button>
      <h3>name: {Age?.name}</h3>
      <h3> Age: {Age?.age} </h3>
    </div>
  )
 }; 
export default App
