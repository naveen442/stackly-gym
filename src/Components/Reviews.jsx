import reviewImg from "../assets/Images/Review_images.png";

export default function Review() {
  return (
    <section className="bg-[#f3f3f3] py-14 px-4 overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-14">
        <h1 className="text-[#ff1e1e] text-4xl md:text-5xl font-extrabold uppercase tracking-wide">
          Review
        </h1>

        <p className="mt-4 text-gray-700 uppercase tracking-wide text-sm md:text-base">
          Read What People Says
        </p>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-20">
        
        {/* Left Image */}
        <div className="relative flex justify-center lg:justify-start">
          
          <img
            src={reviewImg}
            alt="review"
            className="w-full max-w-[500px] h-[500px] object-cover"
          />

          {/* Quote */}
          <div className="absolute right-[-20px] md:right-[-40px] top-1/2 -translate-y-1/2">
            <h1 className="text-[#ff1e1e] text-[120px] md:text-[180px] font-extrabold leading-none">
              “
            </h1>
          </div>
        </div>

        {/* Right Content */}
        <div className="text-center lg:text-left">
          <p className="text-gray-500 leading-9 text-base md:text-lg">
            Lorem ipsum dolor sit amet consectetur. Magnis massa fringilla
            purus porta sed varius. Mauris egestas pharetra sed id eget.
            Vulputate malesuada purus amet turpis arcu venenatis cum nisl.
            Lorem tincidunt urna laoreet auctor. Vestibulum sit quam mi dui
            egestas convallis a tellus. Id urna aliquam risus mauris lectus
            lorem convallis elit.
          </p>

          <h2 className="mt-10 text-3xl font-bold text-[#2a1717]">
            Nell Francls
          </h2>

          {/* Arrows */}
          <div className="flex justify-center lg:justify-start items-center gap-6 mt-8">
            <button className="text-4xl text-black hover:text-[#ff1e1e] transition">
              ←
            </button>

            <button className="text-4xl text-gray-300 hover:text-[#ff1e1e] transition">
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}