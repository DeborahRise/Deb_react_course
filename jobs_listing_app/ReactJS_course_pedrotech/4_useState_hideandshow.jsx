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
  const [show_text, setShowText] = useState(false);

  const Handletext = () => {
    setShowText(!show_text )
  }
  return (
  <div className="App">
    <button onClick={Handletext}>show/hide</button>
    {show_text && <h1>NOW YOU SEE ME</h1>}
  </div>
  );
};
export default App
