// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import { useEffect, useState } from 'react'
import './App.css'
import Axios from "axios"

// An app that generates an excuse depending on the button clicked

function App() {
  const [excuse, setExcuse] = useState("");

  const getExcuse = (excuseee) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuseee}/`).then((resp) => {
      setExcuse(resp.data[0].excuse)
    })
  };

  return (
    <div className="App">
      <h2> EXCUSE GENERATING APP </h2>
      <button onClick={() => getExcuse("party")}> PARTY EXCUSE</button>
      <button onClick={() => getExcuse("office")}> OFFICE EXCUSE</button>
      <button onClick={() => getExcuse("family")}> FAMILY EXCUSE</button>
      <h3> {excuse} </h3>
      
    </div>
  )
 }; 
export default App
