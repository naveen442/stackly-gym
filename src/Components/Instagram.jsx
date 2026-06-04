import BgImage from "../assets/Images/background_images.png";

const INSTA_PHOTOS = [
  "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&q=80",
  "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80",
  "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&q=80",
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&q=80",
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&q=80",
  "https://images.unsplash.com/photo-1605296867424-35fc25c9212a?w=400&q=80",
  "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=400&q=80",
  "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=400&q=80",
];

export default function Instagram() {
  return (
    <section className="relative w-full py-16 px-4 sm:px-8 md:px-12 lg:px-16 overflow-hidden">

      {/* Background image */}
      <img
        src={BgImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">

        {/* ── Header ── */}
        <h2 className="text-center text-3xl sm:text-4xl font-black uppercase tracking-wider text-red-600">
          INSTAGRAM
        </h2>
        <p className="mt-3 text-center text-xs sm:text-sm font-bold tracking-[0.2em] text-white/80 uppercase">
          FOLLOW JOHN SNOW ON INSTAGRAM
        </p>

        {/* ── Photo Grid ── */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {INSTA_PHOTOS.map((src, i) => (
            <div
              key={i}
              className="relative overflow-hidden group cursor-pointer"
              style={{ aspectRatio: "1 / 1" }}
            >
              <img
                src={src}
                alt={`Instagram post ${i + 1}`}
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              {/* Hover overlay with Instagram icon */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="white"
                  className="w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* ── Follow Button ── */}
        <div className="mt-12 flex justify-center">
          <a
            href="#"
            className="flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white text-sm font-black tracking-widest uppercase px-8 py-4 transition-colors duration-300"
          >
            {/* Instagram icon */}
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            FOLLOW
            {/* Arrow */}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
