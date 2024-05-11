// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import { useEffect, useState } from 'react'
import './App.css'
import Axios from "axios"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { SignUp } from './project_pages/signup'
import { Login } from './project_pages/login'
import { Home } from './project_pages/home'
import { Profile } from './project_pages/profile'
import { NavBar } from './project_pages/navbar'

// An app that generates an excuse depending on the button clicked

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='*' element={<h2>Page not found dear</h2>} />
        </Routes>
      </Router>
    </div>
  )
 }

export default App
