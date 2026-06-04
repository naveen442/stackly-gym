const skills = [
  { label: "BODY BUILDING", percent: 92 },
  { label: "CARDIO",        percent: 74 },
  { label: "WEIGHT TRAINING", percent: 83 },
];

export default function Skill() {
  return (
    <section className="w-full bg-white py-12 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">

      {/* ── Header ── */}
      <h2 className="text-center text-3xl sm:text-4xl font-black uppercase tracking-wider text-red-600">
        SKILLS
      </h2>
      <p className="mt-3 text-center text-xs sm:text-sm font-bold tracking-[0.2em] text-gray-700 uppercase">
        SKILLSET OF OUR COACH
      </p>

      {/* ── Two Column Body ── */}
      <div className="mt-10 flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

        {/* LEFT — Description */}
        <p className="w-full lg:w-[45%] text-sm sm:text-base text-gray-500 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        </p>

        {/* RIGHT — Skill Bars */}
        <div className="w-full lg:w-[55%] flex flex-col gap-7">
          {skills.map(({ label, percent }) => (
            <div key={label}>
              {/* Label + Percent */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm sm:text-base font-black tracking-widest text-gray-900 uppercase">
                  {label}
                </span>
                <span className="text-sm sm:text-base font-black text-gray-900">
                  {percent}%
                </span>
              </div>
              {/* Progress Bar */}
              <div className="w-full h-[6px] bg-red-200 rounded-none overflow-hidden">
                <div
                  className="h-full bg-red-600 rounded-none"
                  style={{ width: `${percent}%` }}
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
