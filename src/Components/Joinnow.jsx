import {
  Dumbbell,
  BadgeDollarSign,
  Activity,
  ArrowRight,
} from "lucide-react";

const plans = [
  {
    title: "BASIC",
    icon: <Dumbbell size={55} strokeWidth={1.5} />,
    features: [
      "PERSONAL TRAINER",
      "SERVICE LOCKER ROOMS",
      "FITNESS ASSESSMENT",
      "MORNING SLOT",
    ],
    price: "$ 9.99 / MONTH",
    active: true,
  },
  {
    title: "PREMIUM",
    icon: <BadgeDollarSign size={55} strokeWidth={1.5} />,
    features: [
      "PERSONAL TRAINER",
      "SERVICE LOCKER ROOMS",
      "FITNESS ASSESSMENT / CONSULTATION",
      "MORNING & EVENING SLOT",
    ],
    price: "$ 24.99 / MONTH",
  },
  {
    title: "ADVANCED",
    icon: <Activity size={55} strokeWidth={1.5} />,
    features: [
      "PERSONAL TRAINER",
      "SERVICE LOCKER ROOMS",
      "FITNESS ASSESSMENT",
      "MORNING SLOT",
    ],
    price: "$ 14.99 / MONTH",
  },
];

export default function JoinNow() {
  return (
    <section className="bg-[#f2f2f2] py-16 px-4 overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-16">
        <h1 className="text-[#ff2418] text-4xl md:text-5xl font-extrabold uppercase tracking-wide">
          Join Now
        </h1>

        <p className="mt-5 text-gray-700 uppercase tracking-wide text-sm md:text-base">
          Join & Be One Of Us
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-black">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="relative border-b lg:border-b-0 lg:border-r border-black last:border-r-0 flex flex-col justify-between min-h-[520px]"
          >
            {/* Content */}
            <div className="text-center px-6 pt-12">
              {/* Title */}
              <h2 className="text-[#ff2418] text-4xl font-extrabold uppercase">
                {plan.title}
              </h2>

              {/* Icon */}
              <div className="flex justify-center mt-14 text-black">
                {plan.icon}
              </div>

              {/* Features */}
              <div className="mt-14 space-y-4">
                {plan.features.map((item, idx) => (
                  <p
                    key={idx}
                    className="text-[#2a1d1d] text-lg uppercase tracking-wide"
                  >
                    {item}
                  </p>
                ))}
              </div>

              {/* Price */}
              <h3 className="mt-16 text-[#ff2418] text-4xl font-extrabold uppercase">
                {plan.price}
              </h3>
            </div>

            {/* Button only first card */}
            {plan.active && (
              <button className="w-full bg-[#ff2418] text-white uppercase font-bold tracking-wide py-7 flex items-center justify-center gap-4 text-xl hover:bg-red-600 transition-all">
                Enroll Now
                <ArrowRight size={24} />
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}