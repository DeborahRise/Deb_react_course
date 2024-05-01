// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

// conditional rendering with teneary ops
function App() {
  const love = true;

  
  return (
    <div className="App">
      {love ? <h1> ("marry him")</h1> : <h1>("End it now")</h1>}
      <h1 style={{color: love ? "greenyellow" : "red"}}> today </h1>
    </div>
  );
};
export default App
