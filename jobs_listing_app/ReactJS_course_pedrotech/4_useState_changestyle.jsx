// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from 'react';
import './App.css'
import { Planet } from './compPlanet';

// conditional rendering with teneary ops
// exporting from a different component file, while doing a task on
// conditional rendering with listsand objects/dicts and tenary ops

function App() {
  const [show_text, setShowText] = useState("white");

  const Handletext = () => {
    setShowText(show_text === "white" ? "red" : "white");
  }
  return (
  <div className="App">
    <button onClick={Handletext}>change your style</button>
    {show_text === "white" && <h1 style={{ color: show_text }}> Today, I am white</h1>}
    {show_text === "red" && <h1 style={{ color: show_text }}> But I can be RED </h1>}
  </div>
  );
};
export default App
