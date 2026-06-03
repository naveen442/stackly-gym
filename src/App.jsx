import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Schedule from './Components/Schedule'
import Reviews from './Components/Reviews'
import Coaches from './Components/Coaches'
import Blog from './Components/Blog'
import Header from './Components/Header'
import Aboutus from './Components/Aboutus'
import Facilities from './Components/Facilities'
import Bmi from './Components/Bmi'
import Contactus from './Components/Contactus'
import Footer from './Components/Footer'      
import JoinNow from './Components/Joinnow'

function App() {

  return (
    <div>
     <Header />
     <Aboutus />
     <Facilities />
     <Bmi />
     <Schedule/>
     <Reviews/>
     <JoinNow/>
     <Coaches/>
     <Blog/>
     <Contactus/>
     <Footer /> 
     </div>
  )
}

export default App
