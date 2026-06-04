// import { useState } from "react";
// import IFPASA from "../assets/Images/ifpasa.png";
// import NASM from "../assets/Images/nasm.png";
// import ISSA from "../assets/Images/issa.png";
// import Detail from "../assets/Images/Detail_Logo.png";
// import BgImage from "../assets/Images/background_images.png";
// import CoachPhoto from "../assets/Images/Frontimages.png";

// const NAV_LINKS = ["ABOUT US", "FACILITIES", "BMI", "SCHEDULE", "REVIEWS", "COACHES", "BLOG", "GALLERY"];

// const SocialIcon = ({ label, path }) => (
//   <a
//     href="#"
//     aria-label={label}
//     className="w-10 h-10 border border-white/30 flex items-center justify-center hover:border-red-500 hover:bg-red-500/10 transition-all duration-300 group"
//   >
//     <svg
//       viewBox="0 0 24 24"
//       fill="currentColor"
//       className="w-4 h-4 text-white/70 group-hover:text-white transition-colors"
//     >
//       <path d={path} />
//     </svg>
//   </a>
// );

// const socials = [
//   { label: "Facebook", path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
//   { label: "X / Twitter", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
//   { label: "Instagram", path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" },
//   { label: "LinkedIn", path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z" },
// ];

// export default function Header1() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <div className="min-h-screen bg-[#111] font-sans">

//       {/* ── NAVBAR ── */}
//       <header className="relative z-50 flex items-center justify-between px-6 md:px-10 py-4 bg-black/80 backdrop-blur-sm">
//         <div className="flex items-center shrink-0">
//           <img src={Detail} alt="Beast Logo" className="h-10 w-auto object-contain" />
//         </div>

//         <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
//           {NAV_LINKS.map((link) => (
//             <a
//               key={link}
//               href="#"
//               className={`text-xs font-bold tracking-widest transition-colors ${
//                 link === "COACHES" ? "text-red-500" : "text-white/70 hover:text-white"
//               }`}
//             >
//               {link}
//             </a>
//           ))}
//         </nav>

//         <div className="flex items-center gap-4">
//           <a
//             href="#"
//             className="hidden sm:block bg-red-600 hover:bg-red-700 text-white text-xs font-black tracking-widest px-6 py-3 transition-colors"
//           >
//             JOIN NOW
//           </a>
//           <button
//             className="lg:hidden text-white"
//             onClick={() => setMenuOpen(!menuOpen)}
//             aria-label="Toggle menu"
//           >
//             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
//               {menuOpen ? (
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//               ) : (
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
//               )}
//             </svg>
//           </button>
//         </div>
//       </header>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="lg:hidden bg-black/95 px-6 py-4 flex flex-col gap-3 z-40 relative">
//           {NAV_LINKS.map((link) => (
//             <a
//               key={link}
//               href="#"
//               className={`text-xs font-bold tracking-widest py-1 border-b border-white/10 ${
//                 link === "COACHES" ? "text-red-500" : "text-white/70"
//               }`}
//             >
//               {link}
//             </a>
//           ))}
//           <a href="#" className="mt-2 bg-red-600 text-white text-xs font-black tracking-widest px-6 py-3 text-center">
//             JOIN NOW
//           </a>
//         </div>
//       )}

//       {/* ── HERO SECTION ── */}
//       <section className="relative min-h-[calc(100vh-72px)] flex items-center overflow-hidden">

//         {/* ✅ Background image — fixed size, no zoom */}
//         <img
//           src={BgImage}
//           alt=""
//           aria-hidden="true"
//           className="absolute inset-0 w-full h-full object-cover object-center"
//         />

//         {/* Dark overlays */}
//         <div className="absolute inset-0 bg-black/70" />
//         <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/20" />

//         {/* ── CONTENT ── */}
//         <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10 lg:py-16">
//           <div className="flex flex-col lg:flex-row items-end lg:items-end gap-0 lg:gap-12">

//             {/* ── LEFT: Coach Photo ── */}
//             <div className="shrink-0 w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[420px] xl:max-w-[480px] mx-auto lg:mx-0">
//               {/* Red border wrapper */}
//               <div className="relative border-[3px] border-red-600">
//                 <img
//                   src={CoachPhoto}
//                   alt="John Snow - Body Building Coach"
//                   className="w-full h-auto block object-cover object-top"
//                   style={{
//                     maxHeight: "520px",
//                     objectFit: "cover",
//                     objectPosition: "top center",
//                     display: "block",
//                   }}
//                 />
//                 {/* Subtle bottom fade to blend with section */}
//                 <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
//               </div>
//             </div>

//             {/* ── RIGHT: Info Panel ── */}
//             <div className="flex-1 flex flex-col gap-5 text-white w-full pb-2 lg:pb-6 mt-8 lg:mt-0">

//               <div>
//                 <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black tracking-wider uppercase leading-none">
//                   JOHN SNOW
//                 </h1>
//                 <p className="mt-3 text-red-500 font-bold tracking-[0.2em] text-sm uppercase">
//                   BODY BUILDING COACH
//                 </p>
//               </div>

//               <div className="w-16 h-[2px] bg-red-600" />

//               <div className="flex flex-col gap-4">
//                 {[
//                   { label: "AGE",        value: "29" },
//                   { label: "EXPERIENCE", value: "5 Years" },
//                   { label: "PHONE",      value: "+1 9876543210" },
//                   { label: "EMAIL",      value: "john@Beast.com" },
//                 ].map(({ label, value }) => (
//                   <div key={label} className="flex items-baseline gap-4">
//                     <span className="text-white/50 font-bold tracking-[0.15em] text-sm w-32 shrink-0 uppercase">
//                       {label}:
//                     </span>
//                     <span className="font-bold text-white text-base">{value}</span>
//                   </div>
//                 ))}
//               </div>

//               <div className="flex items-center gap-3 mt-1">
//                 {socials.map((s) => (
//                   <SocialIcon key={s.label} {...s} />
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* ── CERTIFICATION LOGOS ── */}
//           <div className="mt-10 lg:mt-14 flex flex-wrap items-center justify-center lg:justify-start gap-8 lg:gap-12 border-t border-white/10 pt-8">
//             <div className="flex items-center opacity-80 hover:opacity-100 transition-opacity">
//               <img src={IFPASA} alt="IFPASA" className="h-12 lg:h-14 w-auto object-contain" />
//             </div>
//             <div className="flex items-center opacity-80 hover:opacity-100 transition-opacity">
//               <img src={NASM} alt="NASM Master Trainer" className="h-12 lg:h-14 w-auto object-contain" />
//             </div>
//             <div className="flex items-center opacity-80 hover:opacity-100 transition-opacity">
//               <img src={ISSA} alt="ISSA" className="h-12 lg:h-14 w-auto object-contain" />
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }


// -------------------------------------------------//
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import IFPASA from "../assets/Images/ifpasa.png";
import NASM from "../assets/Images/nasm.png";
import ISSA from "../assets/Images/issa.png";
import Detail from "../assets/Images/Detail_Logo.png";
import BgImage from "../assets/Images/background_images.png";
import CoachPhoto from "../assets/Images/Frontimages.png";

const NAV_LINKS = [
  { label: "ABOUT US",   path: "/#about"      },
  { label: "FACILITIES", path: "/#facilities"  },
  { label: "BMI",        path: "/#bmi"         },
  { label: "SCHEDULE",   path: "/#schedule"    },
  { label: "REVIEWS",    path: "/#reviews"     },
  { label: "COACHES",    path: "/coachpage"    },
  { label: "BLOG",       path: "/#blog"        },
  { label: "GALLERY",    path: "/#gallery"     },
];

const SocialIcon = ({ label, path }) => (
  
   <a href="#"
    aria-label={label}
    className="w-10 h-10 border border-white/30 flex items-center justify-center hover:border-red-500 hover:bg-red-500/10 transition-all duration-300 group"
  >
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white/70 group-hover:text-white transition-colors">
      <path d={path} />
    </svg>
  </a>
);

const socials = [
  { label: "Facebook",   path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
  { label: "X / Twitter", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
  { label: "Instagram",  path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" },
  { label: "LinkedIn",   path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z" },
];

export default function Header1() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  // ✅ Header-ல் இருக்க மாதிரி same logic
  const handleNavClick = (e, path) => {
    if (path.startsWith('/#')) {
      e.preventDefault();
      const id = path.replace('/#', '');
      navigate('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      setMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#111] font-sans">

      {/* ── NAVBAR ── */}
      <header className="relative z-50 flex items-center justify-between px-6 md:px-10 py-4 bg-black/80 backdrop-blur-sm">
        
        {/* Logo */}
        <Link to="/" className="flex items-center shrink-0">
          <img src={Detail} alt="Beast Logo" className="h-10 w-auto object-contain" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {NAV_LINKS.map(({ label, path }) => (
            <Link
              key={label}
              to={path}
              onClick={(e) => handleNavClick(e, path)}
              className={`text-xs font-bold tracking-widest transition-colors ${
                label === "COACHES"
                  ? "text-red-500 hover:text-red-400"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* JOIN NOW + Hamburger */}
        <div className="flex items-center gap-4">
          <Link
            to="/#about"
            onClick={(e) => handleNavClick(e, '/#about')}
            className="hidden sm:block bg-red-600 hover:bg-red-700 text-white text-xs font-black tracking-widest px-6 py-3 transition-colors"
          >
            JOIN NOW
          </Link>
          <button
            className="lg:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-black/95 px-6 py-4 flex flex-col gap-3 z-40 relative">
          {NAV_LINKS.map(({ label, path }) => (
            <Link
              key={label}
              to={path}
              onClick={(e) => handleNavClick(e, path)}
              className={`text-xs font-bold tracking-widest py-1 border-b border-white/10 ${
                label === "COACHES" ? "text-red-500" : "text-white/70 hover:text-white"
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            to="/#about"
            onClick={(e) => handleNavClick(e, '/#about')}
            className="mt-2 bg-red-600 text-white text-xs font-black tracking-widest px-6 py-3 text-center"
          >
            JOIN NOW
          </Link>
        </div>
      )}

      {/* ── HERO SECTION ── */}
      <section className="relative min-h-[calc(100vh-72px)] flex items-center overflow-hidden">
        <img src={BgImage} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/20" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10 lg:py-16">
          <div className="flex flex-col lg:flex-row items-end lg:items-end gap-0 lg:gap-12">

            {/* Coach Photo */}
            <div className="shrink-0 w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[420px] xl:max-w-[480px] mx-auto lg:mx-0">
              <div className="relative border-[3px] border-red-600">
                <img
                  src={CoachPhoto}
                  alt="John Snow - Body Building Coach"
                  className="w-full h-auto block object-cover object-top"
                  style={{ maxHeight: "520px", objectFit: "cover", objectPosition: "top center", display: "block" }}
                />
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Info Panel */}
            <div className="flex-1 flex flex-col gap-5 text-white w-full pb-2 lg:pb-6 mt-8 lg:mt-0">
              <div>
                <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black tracking-wider uppercase leading-none">JOHN SNOW</h1>
                <p className="mt-3 text-red-500 font-bold tracking-[0.2em] text-sm uppercase">BODY BUILDING COACH</p>
              </div>
              <div className="w-16 h-[2px] bg-red-600" />
              <div className="flex flex-col gap-4">
                {[
                  { label: "AGE",        value: "29" },
                  { label: "EXPERIENCE", value: "5 Years" },
                  { label: "PHONE",      value: "+1 9876543210" },
                  { label: "EMAIL",      value: "john@Beast.com" },
                ].map(({ label, value }) => (
                  <div key={label} className="flex items-baseline gap-4">
                    <span className="text-white/50 font-bold tracking-[0.15em] text-sm w-32 shrink-0 uppercase">{label}:</span>
                    <span className="font-bold text-white text-base">{value}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-3 mt-1">
                {socials.map((s) => <SocialIcon key={s.label} {...s} />)}
              </div>
            </div>
          </div>

          {/* Certification Logos */}
          <div className="mt-10 lg:mt-14 flex flex-wrap items-center justify-center lg:justify-start gap-8 lg:gap-12 border-t border-white/10 pt-8">
            <div className="flex items-center opacity-80 hover:opacity-100 transition-opacity">
              <img src={IFPASA} alt="IFPASA" className="h-12 lg:h-14 w-auto object-contain" />
            </div>
            <div className="flex items-center opacity-80 hover:opacity-100 transition-opacity">
              <img src={NASM} alt="NASM Master Trainer" className="h-12 lg:h-14 w-auto object-contain" />
            </div>
            <div className="flex items-center opacity-80 hover:opacity-100 transition-opacity">
              <img src={ISSA} alt="ISSA" className="h-12 lg:h-14 w-auto object-contain" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}