import img1 from "../assets/Images/facilities_images(1).png"; // Cardio Zone
import img2 from "../assets/Images/facilities_images(2).png"; // Exercise Studio
import img3 from "../assets/Images/facilities_images(3).png"; // Weight Training
import img4 from "../assets/Images/facilities_images(4).png"; // Functional Zone

const CARDS = [
  { img: img1, label: "CARDIO ZONE"      },
  { img: img2, label: "EXCERCISE STUDIO" },
  { img: img3, label: "WEIGHT TRAINING"  },
  { img: img4, label: "FUNCTIONAL ZONE"  },
];

const BODY = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse laborum.";

export default function Facilities() {
  return (
    <section style={{ width:"100%", background:"white", overflow:"hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;700;800;900&family=Barlow:wght@400;500;600;700&display=swap');
        .fac * { box-sizing:border-box; }
        .bc { font-family:'Barlow Condensed',sans-serif!important; }
        .bs { font-family:'Barlow',sans-serif!important; }

        /* ✅ gap between cards */
        .fac-grid { gap:12px !important; }

        /* ✅ remove zoom — no scale on hover */
        .fac-card img { 
          transition: none;
          transform: none !important;
        }
        .fac-card:hover img { transform: none !important; }
        .fac-card:hover .fac-overlay { background:rgba(0,0,0,0.15)!important; }

        @media(max-width:768px){
          .fac-grid { grid-template-columns:1fr 1fr!important; }
        }
        @media(max-width:420px){
          .fac-grid { grid-template-columns:1fr!important; }
        }
      `}</style>

      <div className="fac" style={{ maxWidth:1440, margin:"0 auto", padding:"clamp(48px,6vw,90px) clamp(16px,4vw,80px)" }}>

        {/* ── Header ── */}
        <div style={{ textAlign:"center", marginBottom:"clamp(28px,4vw,52px)" }}>
          <h2 className="bc" style={{
            color:"#e53935",
            fontSize:"clamp(32px,4.5vw,56px)",
            fontWeight:900,
            textTransform:"uppercase",
            letterSpacing:"0.06em",
            marginBottom:14,
            lineHeight:1,
          }}>FACILITIES</h2>

          <p className="bc" style={{
            color:"#333",
            fontSize:"clamp(11px,1.1vw,13px)",
            fontWeight:700,
            letterSpacing:"0.2em",
            textTransform:"uppercase",
            marginBottom:24,
          }}>HOW IT FEELS TO BE WITH US</p>

          <p className="bs" style={{
            color:"#555",
            fontSize:"clamp(13px,1.1vw,15px)",
            lineHeight:1.72,
            maxWidth:920,
            margin:"0 auto",
          }}>{BODY}</p>
        </div>

        {/* ── 4-card grid ── */}
        <div className="fac-grid" style={{
          display:"grid",
          gridTemplateColumns:"repeat(4,1fr)",
          gap:12,
          marginTop:"clamp(24px,3vw,48px)",
        }}>
          {CARDS.map((c,i) => (
            <div key={i} className="fac-card" style={{
              position:"relative",
              overflow:"hidden",
              cursor:"pointer",
              aspectRatio:"0.85",
              borderRadius:2,
            }}>
              {/* ✅ Image — no zoom, object-contain so full image visible */}
              <img src={c.img} alt={c.label} style={{
                width:"100%",
                height:"100%",
                objectFit:"contain",
                objectPosition:"center",
                display:"block",
              }}/>

              {/* Hover overlay */}
              <div className="fac-overlay" style={{
                position:"absolute", inset:0,
                background:"rgba(0,0,0,0)",
                transition:"background 0.3s",
                zIndex:1,
              }}/>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
