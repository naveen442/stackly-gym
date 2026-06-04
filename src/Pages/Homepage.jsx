// import React from 'react'
// import Header from '../Components/Header'
// import Aboutus from '../Components/Aboutus'
// import Facilities from '../Components/Facilities'
// import Bmi from '../Components/Bmi'
// import Schedule from '../Components/Schedule'
// import Review from '../Components/Reviews'
// import JoinNow from '../Components/Joinnow'
// import Coaches from '../Components/Coaches'
// import Blog from '../Components/Blog'
// import Contactus from '../Components/Contactus'
// const Homepage = () => {
//   return (
//     <div>
//     <Header />
//     <Aboutus/>
//     <Facilities/>
//     <Bmi/>
//     <Schedule/>
//     <Review/>
//     <JoinNow/>
//     <Coaches/>
//     <Blog/>
//     <Contactus/>
//     </div>
//   )
// }

// export default Homepage


// --------------------------------------------------------
import React from 'react'
import Aboutus from '../Components/Aboutus'
import Facilities from '../Components/Facilities'
import Bmi from '../Components/Bmi'
import Schedule from '../Components/Schedule'
import Reviews from '../Components/Reviews'
import JoinNow from '../Components/Joinnow'
import Coaches from '../Components/Coaches'
import Blog from '../Components/Blog'
import Contactus from '../Components/Contactus'

const Homepage = () => {
  return (
    <div>
      <section id="about">     <Aboutus />     </section>
      <section id="facilities"><Facilities />   </section>
      <section id="bmi">       <Bmi />          </section>
      <section id="schedule">  <Schedule />     </section>
      <section id="reviews">   <Reviews />      </section>
      <section id="coaches">   <Coaches />      </section>
      <section id="blog">      <Blog />         </section>
      <section id="gallery">   <Contactus />    </section>
    </div>
  )
}

export default Homepage