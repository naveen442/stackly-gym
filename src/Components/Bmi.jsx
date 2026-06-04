// import React from 'react'
// import Hero from '../assets/Images/CALCULATE YOUR.png'
// const Bmi = () => {
//   return (
//     <div>
//       <img src={Hero} alt="Hero" width="100%" />
//     </div>
//   )
// }

// export default Bmi

import React, { useState } from 'react'
import Hero from '../assets/Images/CALCULATE YOUR.png'

const Bmi = () => {
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('male')
  const [bmi, setBmi] = useState(null)
  const [category, setCategory] = useState('')

  const calculateBmi = () => {
    const h = parseFloat(height) / 100 // cm to m
    const w = parseFloat(weight)
    if (!h || !w || h <= 0 || w <= 0) return

    const result = (w / (h * h)).toFixed(1)
    setBmi(result)

    if (result < 18.5)       setCategory({ label: 'Underweight', color: 'text-blue-400' })
    else if (result < 25)    setCategory({ label: 'Normal Weight', color: 'text-green-400' })
    else if (result < 30)    setCategory({ label: 'Overweight', color: 'text-yellow-400' })
    else                     setCategory({ label: 'Obese', color: 'text-red-500' })
  }

  const reset = () => {
    setHeight(''); setWeight(''); setAge(''); setBmi(null); setCategory('')
  }

  // BMI needle position (scale 10–40)
  const needlePercent = bmi ? Math.min(Math.max(((bmi - 10) / 30) * 100, 0), 100) : null

  return (
    <div className="relative w-full min-h-[480px] sm:min-h-[560px]">

      {/* ── Background Image ── */}
      <img
        src={Hero}
        alt="BMI Background"
        className="w-full h-full object-cover object-center absolute inset-0"
        style={{ minHeight: '480px' }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-14 flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16 min-h-[480px]">

        {/* ── LEFT: Title ── */}
        <div className="flex-1 flex flex-col justify-center text-white pt-2 lg:pt-8">
          <p className="text-red-500 font-bold tracking-[0.25em] text-xs uppercase mb-3">
            HEALTH TOOL
          </p>
          <h2 className="text-4xl sm:text-5xl xl:text-6xl font-black uppercase leading-tight tracking-wider">
            CALCULATE<br />YOUR <span className="text-red-500">BMI</span>
          </h2>
          <p className="mt-5 text-white/60 text-sm leading-relaxed max-w-sm">
            Use our BMI calculator to find out if you are at a healthy weight.
            Enter your details on the right to get your result instantly.
          </p>

          {/* BMI Scale bar — shows after calculation */}
          {bmi && (
            <div className="mt-8 max-w-xs">
              <p className="text-white/50 text-xs tracking-widest uppercase mb-2">Your BMI Score</p>
              <div className="relative h-3 rounded-full overflow-hidden"
                style={{ background: 'linear-gradient(to right, #60a5fa, #4ade80, #facc15, #ef4444)' }}>
                <div
                  className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full border-2 border-gray-800 shadow-lg transition-all duration-500"
                  style={{ left: `calc(${needlePercent}% - 8px)` }}
                />
              </div>
              <div className="flex justify-between text-[10px] text-white/40 mt-1">
                <span>Underweight</span><span>Normal</span><span>Overweight</span><span>Obese</span>
              </div>
            </div>
          )}
        </div>

        {/* ── RIGHT: Form ── */}
        <div className="w-full lg:w-[420px] bg-black/60 backdrop-blur-sm border border-white/10 p-6 sm:p-8">

          <h3 className="text-white font-black text-lg tracking-widest uppercase mb-6">
            BMI Calculator
          </h3>

          {/* Gender Toggle */}
          <div className="flex mb-5 border border-white/20">
            {['male', 'female'].map((g) => (
              <button
                key={g}
                onClick={() => setGender(g)}
                className={`flex-1 py-2.5 text-xs font-black tracking-widest uppercase transition-colors ${
                  gender === g ? 'bg-red-600 text-white' : 'bg-transparent text-white/50 hover:text-white'
                }`}
              >
                {g === 'male' ? '♂ Male' : '♀ Female'}
              </button>
            ))}
          </div>

          {/* Inputs */}
          <div className="flex flex-col gap-4">
            {/* Age */}
            <div>
              <label className="text-white/50 text-xs font-bold tracking-widest uppercase block mb-1">
                Age (years)
              </label>
              <input
                type="number"
                min="1" max="120"
                placeholder="e.g. 25"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="w-full bg-white/5 border border-white/20 text-white placeholder-white/30 text-sm font-bold px-4 py-3 outline-none focus:border-red-500 transition-colors"
              />
            </div>

            {/* Height */}
            <div>
              <label className="text-white/50 text-xs font-bold tracking-widest uppercase block mb-1">
                Height (cm)
              </label>
              <input
                type="number"
                min="50" max="250"
                placeholder="e.g. 175"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="w-full bg-white/5 border border-white/20 text-white placeholder-white/30 text-sm font-bold px-4 py-3 outline-none focus:border-red-500 transition-colors"
              />
            </div>

            {/* Weight */}
            <div>
              <label className="text-white/50 text-xs font-bold tracking-widest uppercase block mb-1">
                Weight (kg)
              </label>
              <input
                type="number"
                min="1" max="300"
                placeholder="e.g. 70"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="w-full bg-white/5 border border-white/20 text-white placeholder-white/30 text-sm font-bold px-4 py-3 outline-none focus:border-red-500 transition-colors"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 mt-6">
            <button
              onClick={calculateBmi}
              className="flex-1 bg-red-600 hover:bg-red-700 text-white text-xs font-black tracking-widest uppercase py-3 transition-colors"
            >
              CALCULATE
            </button>
            <button
              onClick={reset}
              className="px-5 border border-white/20 hover:border-red-500 text-white/60 hover:text-white text-xs font-black tracking-widest uppercase py-3 transition-colors"
            >
              RESET
            </button>
          </div>

          {/* Result */}
          {bmi && (
            <div className="mt-6 border border-white/10 bg-white/5 p-5 text-center">
              <p className="text-white/50 text-xs tracking-widest uppercase mb-1">Your BMI</p>
              <p className="text-5xl font-black text-white">{bmi}</p>
              <p className={`mt-1 text-sm font-black tracking-widest uppercase ${category.color}`}>
                {category.label}
              </p>
              <p className="mt-3 text-white/40 text-xs leading-relaxed">
                {category.label === 'Normal Weight'
                  ? 'Great! You are at a healthy weight. Keep it up!'
                  : 'Consult a fitness professional for a personalized plan.'}
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}

export default Bmi
