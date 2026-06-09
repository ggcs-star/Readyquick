import React from "react";
import { FiHeart, FiShield, FiZap, FiClock } from "react-icons/fi";
import { PiGraduationCapLight, PiAirplaneTiltLight } from "react-icons/pi";
import image from '../../../../assets/product/10.png'

/* ---------------------------------------------
   IMAGE IMPORT
--------------------------------------------- */

export default function WhyChoose() {
  const features = [
    {
      id: 1,
      icon: <FiHeart size={26} className="text-white" />,
      title: "Authentic Homemade Taste",
      desc: "We retain the original flavor and aroma of your cooking.",
    },
    {
      id: 2,
      icon: <FiShield size={26} className="text-white" />,
      title: "Preservative-Free & Healthy",
      desc: "100% natural process. No chemicals or additives used.",
    },
    {
      id: 3,
      icon: <FiZap size={26} className="text-white" />,
      title: "Instant & Convenient",
      desc: "Ready to eat in minutes. Just add hot water.",
    },
    {
      id: 4,
      icon: <FiClock size={26} className="text-white" />,
      title: "Long Shelf Life",
      desc: "Your food stays fresh for up to 6 months at room temperature.",
    },
    {
      id: 5,
      icon: <PiGraduationCapLight size={26} className="text-white" />,
      title: "Perfect for Students",
      desc: "Ideal for students studying abroad missing home food.",
    },
    {
      id: 6,
      icon: <PiAirplaneTiltLight size={26} className="text-white" />,
      title: "Perfect for NRIs & Travelers",
      desc: "Carry your comfort food on international trips hassle-free.",
    },
  ];

  return (
    <section className="relative bg-[#0F1A30] text-white py-24 overflow-hidden">

      {/* Diagonal lines */}
      <div className="absolute top-1/3 left-0 w-full border-t border-gray-700 opacity-40 rotate-[-6deg]" />
      <div className="absolute bottom-1/3 left-0 w-full border-t border-gray-700 opacity-40 rotate-[6deg]" />

      <div className="relative max-w-screen-xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold">
            Why Choose Ready Quick?
          </h2>
          <p className="text-gray-300 mt-4 max-w-3xl mx-auto text-lg leading-relaxed">
            We combine technology with tradition to ensure you never have to compromise on the
            quality of your food, no matter where you are.
          </p>
        </div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT IMAGE */}
          <div className="relative">
            <img
              src={image}
              alt="Why Choose Ready Quick"
              className="w-full"
            />

            {/* Decorative accent */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 opacity-30 rounded-xl blur-xl" />
          </div>

          {/* RIGHT FEATURES */}
          <div className="grid grid-cols-1 gap-10">
            {features.map((item) => (
              <div key={item.id} className="flex items-start space-x-5">

                {/* Icon */}
                <div className="w-14 h-14 bg-[#12634a] rounded-md flex items-center justify-center shadow-lg shrink-0">
                  {item.icon}
                </div>

                {/* Text */}
                <div>
                  <h3 className="font-semibold text-xl mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
