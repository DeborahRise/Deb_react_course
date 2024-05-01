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
  const [text_display, setText_Display] = useState("")

  const DisplayEngine = (event) => {
    setText_Display(event.target.value)
  }
  return (
  <div className="App"> <input type='text' onChange={DisplayEngine}/> {text_display} </div>
  );
};
export default App
