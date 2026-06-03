import aboutImg from "../assets/Images/about_images(G).png";

const BODY = "Lorem ipsum dolor sit amet consectetur. Non faucibus ut turpis magnis suscipit. Lorem etiam sem condimentum ultrices mauris lacus. Vel sed eget nulla sit sit. Vitae aliquet fames accumsan magna tempor et adipiscing aliquet arcu. Mauris nisi mauris dignissim morbi. Donec aliquam nisl eu pretium tortor enim nunc risus rhoncus. Urna a eu in nibh mi malesuada. Eget curabitur bibendum semper non eget. Nibh faucibus eget fermentum nibh mauris. Turpis eget in morbi nec. Sit at luctus ultricies tristique magna pulvinar. Semper scelerisque fringilla ut ornare cum nibh scelerisque. Vitae pharetra vitae in proin. Odio id arcu egestas eget imperdiet enim amet massa nulla.";

export default function Aboutus() {
  return (
    <section style={{ width:"100%", background:"white", overflow:"hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;700;800;900&family=Barlow:wght@400;500;600;700&display=swap');
        .au * { box-sizing:border-box; }
        .bc   { font-family:'Barlow Condensed',sans-serif!important; }
        .bs   { font-family:'Barlow',sans-serif!important; }
      `}</style>

      <div className="au" style={{
        maxWidth:1440, margin:"0 auto",
        display:"grid",
        gridTemplateColumns:"1fr 1fr",
        alignItems:"center",
        minHeight:600,
      }}>

        {/* ── LEFT: text content ── */}
        <div className="bs" style={{
          padding:"clamp(40px,6vw,100px) clamp(24px,5vw,80px) clamp(40px,6vw,100px) clamp(24px,6vw,110px)",
        }}>
          {/* ABOUT US red title */}
          <h2 className="bc" style={{
            color:"#e53935",
            fontSize:"clamp(28px,3.5vw,48px)",
            fontWeight:900,
            textTransform:"uppercase",
            letterSpacing:"0.05em",
            marginBottom:16,
            lineHeight:1,
          }}>ABOUT US</h2>

          {/* Subtitle */}
          <p className="bc" style={{
            color:"#222",
            fontSize:"clamp(11px,1.1vw,14px)",
            fontWeight:700,
            letterSpacing:"0.18em",
            textTransform:"uppercase",
            marginBottom:28,
          }}>KNOW MORE TO BE MORE WITH US</p>

          {/* Body text */}
          <p className="bs" style={{
            color:"#333",
            fontSize:"clamp(13px,1.05vw,15px)",
            lineHeight:1.78,
            fontWeight:400,
            maxWidth:580,
          }}>{BODY}</p>
        </div>

        {/* ── RIGHT: image with diagonal red/gray shapes ── */}
        <div style={{
          position:"relative",
          width:"100%",
          height:"100%",
          minHeight:560,
          overflow:"hidden",
          background:"white",
        }}>

          {/* Gray diagonal stripe (left/top, behind red) */}
          <div style={{
            position:"absolute",
            top:"-10%", left:"8%",
            width:"70%", height:"130%",
            background:"#e8e8e8",
            transform:"skewX(-18deg)",
            zIndex:1,
          }}/>

          {/* Red diagonal stripe */}
          <div style={{
            position:"absolute",
            top:"-10%", left:"30%",
            width:"38%", height:"130%",
            background:"#e53935",
            transform:"skewX(-18deg)",
            zIndex:2,
          }}/>

          {/* Athlete image — on top of shapes */}
          <img
            src={aboutImg}
            alt="About us athlete"
            style={{
              position:"absolute",
              bottom:0,
              right:"clamp(-20px,-2vw,0px)",
              height:"100%",
              maxHeight:620,
              width:"auto",
              objectFit:"contain",
              objectPosition:"bottom right",
              zIndex:3,
            }}
          />
        </div>

      </div>

      {/* ── Responsive: stack on mobile ── */}
      <style>{`
        @media (max-width: 768px) {
          .au > div:first-child {
            padding: 40px 24px 24px !important;
          }
          .au {
            grid-template-columns: 1fr !important;
          }
          .au > div:last-child {
            min-height: 320px !important;
          }
        }
      `}</style>
    </section>
  );
}
