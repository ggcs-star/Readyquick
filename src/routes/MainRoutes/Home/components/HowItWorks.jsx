import React from "react";
import { LuChefHat } from "react-icons/lu";
import { FiSettings } from "react-icons/fi";
import { PiCoffeeLight } from "react-icons/pi";

export default function HowItWorks() {
  const steps = [
    {
      id: 1,
      icon: <LuChefHat size={32} className="text-[#12634a]" />,
      title: "You Cook It",
      desc: "Prepare your favorite home-cooked dish just the way you like it. No need to change your recipe.",
    },
    {
      id: 2,
      icon: <FiSettings size={32} className="text-[#12634a]" />,
      title: "We Process It",
      desc: "Our experts convert your food into travel-friendly packets using advanced dehydration technology.",
    },
    {
      id: 3,
      icon: <PiCoffeeLight size={32} className="text-[#12634a]" />,
      title: "Enjoy Anytime",
      desc: "Just add warm water, wait for a few minutes, and enjoy your comfort meal anywhere in the world.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 text-center">

        {/* Heading */}
        <h2 className="text-4xl font-serif font-bold text-[#111827]">
          How It Works
        </h2>
        <div className="w-20 h-1 bg-[#12634a] mx-auto mt-4"></div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-[#F9FAFB] rounded-3xl p-10 shadow-sm hover:shadow-md transition"
            >
              {/* Icon container */}
              <div className="mx-auto mb-6 w-20 h-20 rounded-full border border-[#12634a] flex items-center justify-center bg-white shadow-sm">
                {step.icon}
              </div>

              <h3 className="text-xl font-semibold text-[#111827] mb-4">
                {step.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
