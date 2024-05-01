// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div className="App">
      <Employees name="Deborah" age={32} email="Deb@vcv.com" />
      <JobInfo salary={1000000} position="Communication specialist" company="VCV" />
      <Employees name="Mounssif" age={32} email = "Nuux@vcv.com" />
      <JobInfo salary={1000000} position="Senior Dev" company="VCV" />
    </div>
  );    
}

const Employees = (props) => {
  return(
    <div>
      <h1> {props.name} </h1>
      <h2> {props.age} </h2>
      <h3> {props.email} </h3>
    </div>
  );
  
}

const JobInfo = (employees) => {
  return(
    <div>
      <p> {employees.salary} </p>
      <p> {employees.position} </p>
      <p> {employees.company} </p>
    </div>
  );
};
export default App
