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
  const [number, setShowText] = useState("0");
  return (
  <div className="App">
    <button onClick={() => {setShowText( number + 1 )}}>Increase</button>
    <button onClick={() => {setShowText( number - 1 )}}>Decrease</button>
    <button onClick={() => { setShowText( 0 )}}>Set To Zero</button>
    {number}
  </div>
  );
};
export default App
