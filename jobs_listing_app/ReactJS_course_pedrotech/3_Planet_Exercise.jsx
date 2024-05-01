// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Planet } from './compPlanet';

// conditional rendering with teneary ops
function App() {
  const planets = [
    { name: "Mars", isGasPlanet: false },
    { name: "Earth", isGasPlanet: false },
    { name: "Jupiter", isGasPlanet: true },
    { name: "Venus", isGasPlanet: false },
    { name: "Neptune", isGasPlanet: true },
    { name: "Uranus", isGasPlanet: true },
  ]
  return (
  <div className="App">
    {planets.map((planet, key) => {
      return (planet.isGasPlanet) && <Planet name={planet.name} />;
    })}
  </div>
  );
};

export default App
