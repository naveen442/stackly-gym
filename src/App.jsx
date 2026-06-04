// // import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from './assets/vite.svg'
// // import heroImg from './assets/hero.png'
// // import './App.css'
// // import Schedule from './Components/Schedule'
// // import Reviews from './Components/Reviews'
// // import Coaches from './Components/Coaches'
// // import Blog from './Components/Blog'
// // import Header from './Components/Header'
// // import Aboutus from './Components/Aboutus'
// // import Facilities from './Components/Facilities'
// // import Bmi from './Components/Bmi'
// // import Contactus from './Components/Contactus'
// // import Footer from './Components/Footer'      
// // import JoinNow from './Components/Joinnow'

// // function App() {

// //   return (
// //     <div>
// //      <Header />
// //      <Aboutus />
// //      <Facilities />
// //      <Bmi />
// //      <Schedule/>
// //      <Reviews/>
// //      <JoinNow/>
// //      <Coaches/>
// //      <Blog/>
// //      <Contactus/>
// //      <Footer /> 
// //      </div>
// //   )
// // }

// // export default App


// import React from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// // Pages — உங்க actual page components import பண்ணு
// import Header    from './Components/Header'
// import Footer from './Components/Footer'
// import Homepage from './Pages/Homepage'
// import Coachpage from './Pages/Coachpage'
// // import Header from './Components/Header'
// function App() {
//   return (
//     <>
    
//     <Router>
//       {/* Header — every page-லயும் top-ல show ஆகும் */}
//        <Header/>
//       <Routes>
//          <Route path="/" element={<Homepage/>} />
//         <Route path="/coachpage" element={<Coachpage/>} />
//       </Routes>
     
//     </Router>
//      <Footer/>
//      </>
//   )
// }

// export default App


// --------------------------------------------------------//
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Homepage from './Pages/Homepage'
import Coachpage from './Pages/Coachpage'

function App() {
  return (
    <Router>
      <Routes>
        {/* Home — Header + Homepage + Footer */}
        <Route path="/" element={
          <>
            <Header />
            <Homepage />
            <Footer />
          </>
        } />

        {/* Coachpage — Header இல்லாம, தனியா render */}
        <Route path="/coachpage" element={<Coachpage />} />
      </Routes>
    </Router>
  )
}

export default App