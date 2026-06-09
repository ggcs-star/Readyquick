// FoundersDesk.jsx

import React from "react";

const FoundersDesk = () => {
  return (
    <section className="bg-[#f8f5ef] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8">

        {/* Top */}
        <div className="mb-16">

          <p className="text-sm tracking-[3px] uppercase text-[#0E7A53] font-medium mb-5">
            Founder’s Desk
          </p>

          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl leading-[1.1] font-semibold text-[#111827]">
              A Message from the Heart of
              Our Brand.
            </h1>
          </div>
        </div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-[1.4fr_0.8fr] gap-16">

          {/* Left Content */}
          <div>

            <div className="space-y-7 text-[17px] leading-8 text-[#4B5563]">

              <p>
                Every home has a unique feeling connected to food —
                the aroma of fresh meals, the warmth of family dining
                together, and the unforgettable taste of home-cooked
                comfort. These emotions inspired the beginning of{" "}
                <span className="font-semibold text-[#111827]">
                  Ready Quick
                </span>.
              </p>

              <p>
                In today’s world, life moves quickly. People are
                constantly balancing work, responsibilities, and
                personal goals, often leaving very little time to
                prepare meals. Yet, even in the busiest moments, the
                heart still searches for the familiar comfort of
                “ghar ka swad.”
              </p>

              <p>
                That is exactly why Ready Quick was created. Our goal
                has never been just to make ready-to-eat food — we
                wanted to build a brand that delivers trust, warmth,
                and the feeling of home through every product.
              </p>

              <p>
                Every recipe, ingredient, and process is carefully
                chosen to ensure that our customers receive food that
                feels fresh, hygienic, tasty, and comforting.
              </p>

              <p>
                At Ready Quick, quality is not just a promise — it is
                our responsibility. We believe convenience should
                never come at the cost of taste or trust.
              </p>

              <p>
                The love and support of our customers motivate us
                every day to improve and innovate. Your trust is the
                biggest strength behind our journey, and we are truly
                grateful to be part of your daily life.
              </p>

              <p className="text-[#111827] font-medium">
                As we continue to grow, our vision remains simple —
                to make homemade-style comfort food available for
                everyone, anytime and anywhere.
              </p>
            </div>

            {/* Signature */}
            <div className="mt-14 border-t border-[#ddd6c8] pt-8">

              <h4 className="text-2xl font-semibold text-[#111827]">
                Founder
              </h4>

              <p className="text-[#6B7280] mt-1">
                Ready Quick
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div>

            {/* Mission Box */}
            <div className="bg-[#111827] text-white rounded-[28px] p-8 md:p-10">

              <p className="text-sm uppercase tracking-[2px] text-[#9CA3AF] mb-8">
                Why People Trust Ready Quick
              </p>

              <div className="space-y-7">

                {[
                  "Hygienic & quality-focused preparation",
                  "Authentic homemade-style taste",
                  "Convenient ready-to-eat solutions",
                  "Fresh ingredients & reliable quality",
                  "Customer-first approach with a warm experience",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-4"
                  >
                    <div className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center text-xs shrink-0 mt-1">
                      {index + 1}
                    </div>

                    <p className="text-[15px] leading-7 text-[#D1D5DB]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              {/* Quote */}
              <div className="mt-14 pt-8 border-t border-white/10">

                <p className="text-2xl leading-relaxed font-medium text-white">
                  “Quality is not a promise we make once — it’s a
                  standard we hold every single day.”
                </p>
              </div>
            </div>

            {/* Small Detail Block */}
            <div className="mt-6 bg-white rounded-[24px] p-7 border border-[#e7e1d7]">

              <p className="text-sm uppercase tracking-[2px] text-[#0E7A53] mb-4">
                Our Promise
              </p>

              <p className="text-[#4B5563] leading-7 text-[15px]">
                We do not simply deliver food — we deliver comfort,
                convenience, and the emotional connection of
                home-style meals prepared with freshness, care, and
                trust in every pack.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundersDesk;