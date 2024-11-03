import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './pages/Navbar'
import Hero from './pages/Hero'
import Footer from './pages/Footer'
import Contact from './pages/Contact'
import Proyectos from './pages/Proyectos' 
import Cuadritos from './pages/Cuadritos'


import Layout from './pages/Layout'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Profile from './pages/Profile'

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
          <Route path = "/" element = { <Layout></Layout> }>
            <Route index element = { <Login></Login> }></Route>
            <Route path = "/signup" element = { <Signup /> } ></Route>
            <Route path = "/profile" element = { <Profile /> }></Route>
          </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
