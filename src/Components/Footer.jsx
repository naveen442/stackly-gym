import Detail from "../assets/Images/Logo.png";

const socials = [
  {
    label: "Facebook",
    path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
  },
  {
    label: "X / Twitter",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
  {
    label: "Instagram",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
  },
  {
    label: "LinkedIn",
    path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z",
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#111] font-sans">

      {/* ── TOP ROW: Logo + Newsletter ── */}
      <div className="flex flex-col sm:flex-row items-center sm:items-stretch gap-6 sm:gap-0 px-6 md:px-10 lg:px-16 py-6 border-b border-white/10">

        {/* Logo */}
        <div className="flex items-center shrink-0 sm:w-1/4">
          <img src={Detail} alt="Beast Logo" className="h-10 w-auto object-contain" />
        </div>

        {/* Newsletter label + input — right aligned */}
        <div className="flex flex-col sm:flex-row items-center justify-end gap-0 flex-1 w-full">
          {/* Label */}
          <span className="text-white text-xs sm:text-sm font-bold tracking-[0.15em] uppercase whitespace-nowrap px-4 sm:px-6 py-4 sm:py-0">
            SUBSCRIBE TO OUR NEWSLETTER
          </span>

          {/* Input + Arrow */}
          <div className="flex items-stretch w-full sm:w-auto sm:min-w-[340px] lg:min-w-[420px]">
            <input
              type="email"
              placeholder="YOUR EMAIL"
              className="flex-1 bg-[#1e1e1e] text-white/50 placeholder-white/40 text-sm font-bold tracking-widest uppercase px-5 py-4 outline-none border-none focus:ring-0"
            />
            <button
              aria-label="Subscribe"
              className="bg-[#1e1e1e] hover:bg-red-600 text-white px-5 py-4 transition-colors duration-300 border-l border-white/10"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="w-5 h-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* ── BOTTOM ROW: Copyright + Links + Socials ── */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0 px-6 md:px-10 lg:px-16 py-5">

        {/* Copyright */}
        <p className="text-white/50 text-xs sm:text-sm tracking-wide order-3 sm:order-1">
          © Beast 2019 All Rights reserved.
        </p>

        {/* Terms + Privacy */}
        <div className="flex items-center gap-4 order-1 sm:order-2">
          <a href="#" className="text-white/70 hover:text-white text-xs font-bold tracking-widest uppercase transition-colors">
            TERMS & CONDITIONS
          </a>
          <span className="text-white/30 text-xs">|</span>
          <a href="#" className="text-white/70 hover:text-white text-xs font-bold tracking-widest uppercase transition-colors">
            PRIVACY POLICY
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-2 order-2 sm:order-3">
          {socials.map(({ label, path }) => (
            <a
              key={label}
              href="#"
              aria-label={label}
              className="w-9 h-9 border border-white/20 flex items-center justify-center hover:border-red-500 hover:bg-red-500/10 transition-all duration-300 group"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 text-white/60 group-hover:text-white transition-colors"
              >
                <path d={path} />
              </svg>
            </a>
          ))}
        </div>
      </div>

    </footer>
  );
}
