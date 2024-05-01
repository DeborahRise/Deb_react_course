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
  const [age, setAge] = useState(21)
  const AddAge = () => {
    setAge(age + 1)
  }
  return (
  <div className="App">{age} <button onClick={AddAge}>Add Age</button> </div>
  );
};
export default App
