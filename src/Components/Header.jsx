// // import React from 'react'
// // import Hero from '../assets/Images/Hero.png'
// // const Header = () => {
// //   return (
// //     <div>
// //       <img src={Hero} alt="Hero" width="100%" />
// //     </div>
// //   )
// // }

// // export default Header

// import React, { useState } from 'react'
// import Hero from '../assets/Images/Hero.png'
// import Detail from '../assets/Images/Logo.png'

// const NAV_LINKS = ["ABOUT US", "FACILITIES", "BMI", "SCHEDULE", "REVIEWS", "COACHES", "BLOG", "GALLERY"]

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false)

//   return (
//     <div className="relative w-full">

//       {/* ── Hero Image as Background ── */}
//       <img
//         src={Hero}
//         alt="Hero"
//         className="w-full h-auto block object-cover"
//       />

//       {/* ── Overlay so navbar is readable ── */}
//       <div className="absolute inset-0 bg-black/50" />

//       {/* ── NAVBAR on top of image ── */}
//       <div className="absolute top-0 left-0 right-0 z-50">

//         {/* Main nav bar */}
//         <div className="flex items-center justify-between px-4 sm:px-8 md:px-10 py-4 bg-black/40 backdrop-blur-sm">

//           {/* Logo */}
//           <div className="flex items-center shrink-0">
//             <img src={Detail} alt="Beast Logo" className="h-9 sm:h-10 w-auto object-contain" />
//           </div>

//           {/* Desktop Nav Links */}
//           <nav className="hidden lg:flex items-center gap-5 xl:gap-8">
//             {NAV_LINKS.map((link) => (
//               <a
//                 key={link}
//                 href="#"
//                 className={`text-xs font-bold tracking-widest transition-colors ${
//                   link === "COACHES" ? "text-red-500" : "text-white/80 hover:text-white"
//                 }`}
//               >
//                 {link}
//               </a>
//             ))}
//           </nav>

//           {/* Right side: JOIN NOW + Hamburger */}
//           <div className="flex items-center gap-3">
//             <a
//               href="#"
//               className="hidden sm:block bg-red-600 hover:bg-red-700 text-white text-xs font-black tracking-widest px-5 py-2.5 transition-colors"
//             >
//               JOIN NOW
//             </a>

//             {/* Hamburger — mobile only */}
//             <button
//               className="lg:hidden text-white p-1"
//               onClick={() => setMenuOpen(!menuOpen)}
//               aria-label="Toggle menu"
//             >
//               <svg
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 className="w-7 h-7"
//               >
//                 {menuOpen ? (
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//                 ) : (
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
//                 )}
//               </svg>
//             </button>
//           </div>
//         </div>

//         {/* ── Mobile Dropdown Menu ── */}
//         <div
//           className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
//             menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
//           }`}
//         >
//           <div className="bg-black/90 backdrop-blur-md px-6 py-4 flex flex-col gap-0">
//             {NAV_LINKS.map((link, i) => (
//               <a
//                 key={link}
//                 href="#"
//                 className={`text-xs font-bold tracking-widest py-3 border-b transition-colors ${
//                   link === "COACHES"
//                     ? "text-red-500 border-white/10"
//                     : "text-white/70 hover:text-white border-white/10"
//                 }`}
//                 onClick={() => setMenuOpen(false)}
//               >
//                 {link}
//               </a>
//             ))}
//             {/* JOIN NOW in mobile menu */}
//             <a
//               href="#"
//               className="mt-4 bg-red-600 hover:bg-red-700 text-white text-xs font-black tracking-widest px-6 py-3 text-center transition-colors"
//               onClick={() => setMenuOpen(false)}
//             >
//               JOIN NOW
//             </a>
//           </div>
//         </div>

//       </div>
//     </div>
//   )
// }

// export default Header









// // import React, { useState } from 'react'
// // import { Link } from 'react-router-dom'
// // import Hero from '../assets/Images/Hero.png'
// // import Detail from '../assets/Images/Logo.png'

// // const NAV_LINKS = [
// //   { label: "ABOUT US",   path: "/about"    },
// //   { label: "FACILITIES", path: "/facilities" },
// //   { label: "BMI",        path: "/bmi"       },
// //   { label: "SCHEDULE",   path: "/schedule"  },
// //   { label: "REVIEWS",    path: "/reviews"   },
// //   { label: "COACHES",    path: "/coaches"   },
// //   { label: "BLOG",       path: "/blog"      },
// //   { label: "GALLERY",    path: "/gallery"   },
// // ]

// // const Header = () => {
// //   const [menuOpen, setMenuOpen] = useState(false)

// //   return (
// //     <div className="relative w-full">

// //       {/* ── Hero Image as Background ── */}
// //       <img
// //         src={Hero}
// //         alt="Hero"
// //         className="w-full h-auto block object-cover"
// //       />

// //       {/* ── Overlay ── */}
// //       <div className="absolute inset-0 bg-black/50" />

// //       {/* ── NAVBAR ── */}
// //       <div className="absolute top-0 left-0 right-0 z-50">

// //         {/* Main nav bar */}
// //         <div className="flex items-center justify-between px-4 sm:px-8 md:px-10 py-4 bg-black/40 backdrop-blur-sm">

// //           {/* Logo — click panna home page */}
// //           <Link to="/" className="flex items-center shrink-0">
// //             <img src={Detail} alt="Beast Logo" className="h-9 sm:h-10 w-auto object-contain" />
// //           </Link>

// //           {/* Desktop Nav Links */}
// //           <nav className="hidden lg:flex items-center gap-5 xl:gap-8">
// //             {NAV_LINKS.map(({ label, path }) => (
// //               <Link
// //                 key={label}
// //                 to={path}
// //                 className={`text-xs font-bold tracking-widest transition-colors ${
// //                   label === "COACHES"
// //                     ? "text-red-500 hover:text-red-400"
// //                     : "text-white/80 hover:text-white"
// //                 }`}
// //               >
// //                 {label}
// //               </Link>
// //             ))}
// //           </nav>

// //           {/* Right: JOIN NOW + Hamburger */}
// //           <div className="flex items-center gap-3">
// //             <Link
// //               to="/join"
// //               className="hidden sm:block bg-red-600 hover:bg-red-700 text-white text-xs font-black tracking-widest px-5 py-2.5 transition-colors"
// //             >
// //               JOIN NOW
// //             </Link>

// //             {/* Hamburger — mobile only */}
// //             <button
// //               className="lg:hidden text-white p-1"
// //               onClick={() => setMenuOpen(!menuOpen)}
// //               aria-label="Toggle menu"
// //             >
// //               <svg
// //                 viewBox="0 0 24 24"
// //                 fill="none"
// //                 stroke="currentColor"
// //                 strokeWidth="2"
// //                 className="w-7 h-7"
// //               >
// //                 {menuOpen ? (
// //                   <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
// //                 ) : (
// //                   <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
// //                 )}
// //               </svg>
// //             </button>
// //           </div>
// //         </div>

// //         {/* ── Mobile Dropdown Menu ── */}
// //         <div
// //           className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
// //             menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
// //           }`}
// //         >
// //           <div className="bg-black/90 backdrop-blur-md px-6 py-4 flex flex-col gap-0">
// //             {NAV_LINKS.map(({ label, path }) => (
// //               <Link
// //                 key={label}
// //                 to={path}
// //                 className={`text-xs font-bold tracking-widest py-3 border-b transition-colors ${
// //                   label === "COACHES"
// //                     ? "text-red-500 border-white/10"
// //                     : "text-white/70 hover:text-white border-white/10"
// //                 }`}
// //                 onClick={() => setMenuOpen(false)}
// //               >
// //                 {label}
// //               </Link>
// //             ))}
// //             <Link
// //               to="/join"
// //               className="mt-4 bg-red-600 hover:bg-red-700 text-white text-xs font-black tracking-widest px-6 py-3 text-center transition-colors"
// //               onClick={() => setMenuOpen(false)}
// //             >
// //               JOIN NOW
// //             </Link>
// //           </div>
// //         </div>

// //       </div>
// //     </div>
// //   )
// // }

// // export default Header











// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
// import Hero from '../assets/Images/Hero.png'
// import Detail from '../assets/Images/Logo.png'

// const NAV_LINKS = [
//   { label: "ABOUT US",   path: "/#about"      },
//   { label: "FACILITIES", path: "/#facilities"  },
//   { label: "BMI",        path: "/#bmi"         },
//   { label: "SCHEDULE",   path: "/#schedule"    },
//   { label: "REVIEWS",    path: "/#reviews"     },
//   { label: "COACHES",    path: "/coachpage"    },  // ✅ separate page
//   { label: "BLOG",       path: "/#blog"        },
//   { label: "GALLERY",    path: "/#gallery"     },
// ]

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false)

//   return (
//     <div className="relative w-full">
//       <img src={Hero} alt="Hero" className="w-full h-auto block object-cover" />
//       <div className="absolute inset-0 bg-black/50" />

//       <div className="absolute top-0 left-0 right-0 z-50">

//         {/* Main nav bar */}
//         <div className="flex items-center justify-between px-4 sm:px-8 md:px-10 py-4 bg-black/40 backdrop-blur-sm">

//           {/* Logo */}
//           <Link to="/" className="flex items-center shrink-0">
//             <img src={Detail} alt="Beast Logo" className="h-9 sm:h-10 w-auto object-contain" />
//           </Link>

//           {/* Desktop Nav Links */}
//           <nav className="hidden lg:flex items-center gap-5 xl:gap-8">
//             {NAV_LINKS.map(({ label, path }) => (
//               <Link
//                 key={label}
//                 to={path}
//                 className={`text-xs font-bold tracking-widest transition-colors ${
//                   label === "COACHES"
//                     ? "text-red-500 hover:text-red-400"
//                     : "text-white/80 hover:text-white"
//                 }`}
//               >
//                 {label}
//               </Link>
//             ))}
//           </nav>

//           {/* JOIN NOW + Hamburger */}
//           <div className="flex items-center gap-3">
//             <Link
//               to="/#join"
//               className="hidden sm:block bg-red-600 hover:bg-red-700 text-white text-xs font-black tracking-widest px-5 py-2.5 transition-colors"
//             >
//               JOIN NOW
//             </Link>

//             <button
//               className="lg:hidden text-white p-1"
//               onClick={() => setMenuOpen(!menuOpen)}
//               aria-label="Toggle menu"
//             >
//               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7">
//                 {menuOpen ? (
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//                 ) : (
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
//                 )}
//               </svg>
//             </button>
//           </div>
//         </div>

//         {/* Mobile Dropdown */}
//         <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
//           menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
//         }`}>
//           <div className="bg-black/90 backdrop-blur-md px-6 py-4 flex flex-col gap-0">
//             {NAV_LINKS.map(({ label, path }) => (
//               <Link
//                 key={label}
//                 to={path}
//                 className={`text-xs font-bold tracking-widest py-3 border-b transition-colors ${
//                   label === "COACHES"
//                     ? "text-red-500 border-white/10"
//                     : "text-white/70 hover:text-white border-white/10"
//                 }`}
//                 onClick={() => setMenuOpen(false)}
//               >
//                 {label}
//               </Link>
//             ))}
//             <Link
//               to="/#join"
//               className="mt-4 bg-red-600 hover:bg-red-700 text-white text-xs font-black tracking-widest px-6 py-3 text-center transition-colors"
//               onClick={() => setMenuOpen(false)}
//             >
//               JOIN NOW
//             </Link>
//           </div>
//         </div>

//       </div>
//     </div>
//   )
// }

// export default Header








// -------------------------------------------------------------
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Hero from '../assets/Images/Hero.png'
import Detail from '../assets/Images/Logo.png'

const NAV_LINKS = [
  { label: "ABOUT US",   path: "/#about"      },
  { label: "FACILITIES", path: "/#facilities"  },
  { label: "BMI",        path: "/#bmi"         },
  { label: "SCHEDULE",   path: "/#schedule"    },
  { label: "REVIEWS",    path: "/#reviews"     },
  { label: "COACHES",    path: "/coachpage"    },
  { label: "BLOG",       path: "/#blog"        },
  { label: "GALLERY",    path: "/#gallery"     },
]

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  // Hash links க்கு smooth scroll handle பண்றோம்
  const handleNavClick = (e, path) => {
    if (path.startsWith('/#')) {
      e.preventDefault()
      const id = path.replace('/#', '')
      
      // Already home page-ல் இருந்தா directly scroll
      if (window.location.pathname === '/') {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      } else {
        // வேற page-ல் இருந்தா home-க்கு navigate பண்ணி scroll
        navigate('/')
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }
      setMenuOpen(false)
    }
  }

  return (
    <div className="relative w-full">
      <img src={Hero} alt="Hero" className="w-full h-auto block object-cover" />
      <div className="absolute inset-0 bg-black/50" />

      <div className="absolute top-0 left-0 right-0 z-50">

        <div className="flex items-center justify-between px-4 sm:px-8 md:px-10 py-4 bg-black/40 backdrop-blur-sm">

          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0">
            <img src={Detail} alt="Beast Logo" className="h-9 sm:h-10 w-auto object-contain" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-8">
            {NAV_LINKS.map(({ label, path }) => (
              <Link
                key={label}
                to={path}
                onClick={(e) => handleNavClick(e, path)}
                className={`text-xs font-bold tracking-widest transition-colors ${
                  label === "COACHES"
                    ? "text-red-500 hover:text-red-400"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* JOIN NOW + Hamburger */}
          <div className="flex items-center gap-3">
            <Link
              to="/#about"
              onClick={(e) => handleNavClick(e, '/#about')}
              className="hidden sm:block bg-red-600 hover:bg-red-700 text-white text-xs font-black tracking-widest px-5 py-2.5 transition-colors"
            >
              JOIN NOW
            </Link>

            <button
              className="lg:hidden text-white p-1"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}>
          <div className="bg-black/90 backdrop-blur-md px-6 py-4 flex flex-col gap-0">
            {NAV_LINKS.map(({ label, path }) => (
              <Link
                key={label}
                to={path}
                onClick={(e) => handleNavClick(e, path)}
                className={`text-xs font-bold tracking-widest py-3 border-b transition-colors ${
                  label === "COACHES"
                    ? "text-red-500 border-white/10"
                    : "text-white/70 hover:text-white border-white/10"
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              to="/#about"
              onClick={(e) => handleNavClick(e, '/#about')}
              className="mt-4 bg-red-600 hover:bg-red-700 text-white text-xs font-black tracking-widest px-6 py-3 text-center transition-colors"
            >
              JOIN NOW
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Header