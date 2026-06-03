import { useState } from "react";
import img1 from "../assets/images/sch_images_1.png";
import img2 from "../assets/images/sch_images_2.png";
import img3 from "../assets/images/sch_images_3.png"; 
import img4 from "../assets/images/sch_images_4.png";
import img5 from "../assets/images/sch_images_5.png";
import img6 from "../assets/images/sch_images_6.png";
import img7 from "../assets/images/sch_images_7.png";
import img8 from "../assets/images/sch_images_8.png";
// const img1='../assets/images/sch_images_1.png';
// const img2='../assets/images/sch_images_2.png'
// const img3='../assets/images/sch_images_3.png'; 
// const img4='../assets/images/sch_images_4.png';
// const img5='../assets/images/sch_images_5.png';
// const img6='../assets/images/sch_images_6.png';
// const img7='../assets/images/sch_images_7.png';
// const img8='../assets/images/sch_images_8.png'; 
const scheduleData = [
  //  { id: 1, day: "SUNDAY", date: "25", suffix: "TH", month: "NOV", primary: "CARDIO", secondary: "WEIGHT TRAINING", image: img1 },
  { id: 2,image: img2 },
  { id: 3, image: img3 },
  { id: 4, image: img4 },
  { id: 5,image: img5 },
  { id: 6,image: img6 },
  { id: 7,image: img7 },
  { id: 8,image: img8 },
];

function ScheduleCard({ item }) {
  return (
    <div className="relative overflow-hidden group cursor-pointer" style={{ aspectRatio: "1/1" }}>
      <img
        src={item.image}
        alt={item.day}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute top-3 left-0 right-0 text-center px-2">
        <p className="text-white font-bold text-[11px] sm:text-sm md:text-[13px] tracking-widest uppercase leading-tight drop-shadow-lg">
          {/* {item.day},{" "}
          <span>{item.date}<sup className="text-[8px] font-bold">{item.suffix}</sup></span>{" "}
          {item.month} */}
        </p>
      </div>
      <div className="absolute bottom-3 left-3 right-3">
        <p className="text-white font-bold text-[11px] sm:text-[13px] tracking-wider uppercase drop-shadow-lg">{item.primary}</p>
        <p className="text-white/90 text-[10px] sm:text-[11px] tracking-wider uppercase drop-shadow-lg">{item.secondary}</p>
      </div>
    </div>
  );
}

export default function Schedule() {
  return (
    <div className="bg-white py-10 px-4">
      <div className="text-center mb-8 max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold uppercase mb-2 tracking-[0.18em]" style={{ color: "#e8192c" }}>
          SCHEDULE
        </h1>
        <p className="text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-gray-900 mb-5">
          KEEP UP WITH THE SCHEDULE TO STAY FIT
        </p>
        <p className="text-gray-500 text-sm leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[5px]">

          {/* Red date card */}
          <div className="relative flex flex-col justify-between p-4 sm:p-5" style={{ backgroundColor: "#e8192c", aspectRatio: "1/1" }}>
            <div className="flex-1 flex items-center justify-center">
              <div className="text-white text-center">
                <p className="font-bold text-lg sm:text-2xl tracking-widest leading-snug">
                  24<sup className="text-[10px] sm:text-xs font-bold">TH</sup>
                  <span className="mx-1 sm:mx-2">_</span>
                  30<sup className="text-[10px] sm:text-xs font-bold">TH</sup>
                </p>
                <p className="font-bold text-base sm:text-xl tracking-widest uppercase mt-1">
                  NOVEMBER 2019
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <button className="text-white/80 text-2xl hover:text-white transition-opacity leading-none">&#8249;</button>
              <button className="text-white/80 text-2xl hover:text-white transition-opacity leading-none">&#8250;</button>
            </div>
          </div>

          {scheduleData.slice(0, 3).map((item) => (
            <ScheduleCard key={item.id} item={item} />
          ))}

          {scheduleData.slice(3).map((item) => (
            <ScheduleCard key={item.id} item={item} />
          ))}

        </div>
      </div>
    </div>
  );
}
