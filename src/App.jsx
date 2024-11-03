import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './pages/Navbar'
import Hero from './pages/Hero'
import Footer from './pages/Footer'
import Contact from './pages/Contact'
import Proyectos from './pages/Proyectos' 
import Cuadritos from './pages/Cuadritos'

function App() {
  

  return (
    <>
<Navbar />
<Hero />
<div>
<Proyectos />
<Cuadritos />
  </div>







     
    </>
  )
}

export default App
