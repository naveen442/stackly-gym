import coach1 from "../assets/images/co_1.png";
import coach2 from "../assets/images/co_2.png";
import coach3 from "../assets/images/co_3.png";
import coach4 from "../assets/images/co_4.png";
import { Link } from "react-router-dom";

const coaches = [
  {
    id: 1,
    image: coach1,
  },
  {
    id: 2,
    image: coach2,
  },
  {
    id: 3,
    image: coach3,
  },
  {
    id: 4,
    image: coach4,
  },
];

export default function Coaches() {
  return (
    <section className="bg-[#1f232b] py-16 md:py-24 px-4 overflow-hidden">
      
      {/* Heading */}
      <div className="text-center">
        
        <h1 className="font-oswald text-[#ff2a1b] text-4xl md:text-6xl uppercase font-bold tracking-wide">
          Coaches
        </h1>
{/* <Link
  to="/coaches"
  className="text-white uppercase font-bold border-b-2 border-red-500"
>
  Coaches
</Link> */}
        <p className="mt-4 text-white uppercase tracking-wide text-sm md:text-lg">
          Our Training Force
        </p>
      </div>

      {/* Coaches Grid */}
      <div className="max-w-7xl mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {coaches.map((coach) => (
          <div
            key={coach.id}
            className="overflow-hidden group"
          >
            <img
              src={coach.image}
              alt="coach"
              className="w-full h-[420px] object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
}