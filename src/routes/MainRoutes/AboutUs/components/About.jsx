// About.jsx

import React, { useEffect, useRef, useState } from "react";
import aboutImage from "../../../../assets/about/final1.png";
import badgeImage from "../../../../assets/about/dish-image.webp";

const About = () => {
  const features = [
    {
      title: "Quality Ingredients",
      desc: "Carefully selected fresh ingredients that deliver authentic homemade taste and consistent quality in every meal.",
    },
    {
      title: "Hygiene First",
      desc: "Prepared with strict hygiene standards and reliable packaging to ensure freshness, safety, and trust.",
    },
    {
      title: "Homemade Taste",
      desc: "Authentic recipes inspired by traditional Indian flavours that bring real ghar ka swad to every bite.",
    },
    {
      title: "Ready in Minutes",
      desc: "Quick and convenient ready-to-eat meals designed for busy lifestyles without compromising taste.",
    },
  ];

  // Animation state for timeline items
  const [visibleItems, setVisibleItems] = useState([false, false, false, false]);
  const timelineRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.getAttribute("data-index");
            if (index !== null) {
              setVisibleItems((prev) => {
                const newState = [...prev];
                newState[parseInt(index)] = true;
                return newState;
              });
            }
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    timelineRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const timelineItems = [
    {
      title: "Early Morning Rush",
      description: "A wholesome meal before you head out the door",
      position: "left",
    },
    {
      title: "Office Desk Lunch",
      description: "Hot, satisfying food without leaving your workspace",
      position: "right",
    },
    {
      title: "Long Journey",
      description: "Fresh, mess-free packs that travel wherever you go",
      position: "left",
    },
    {
      title: "Late Night Hunger",
      description: "Comfort food ready in minutes, no cooking needed",
      position: "right",
    },
  ];

  return (
    <section className="bg-[#f7f4ee] py-20 lg:py-8 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8">
        {/* TOP GRID */}
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-4 items-center">
          {/* LEFT IMAGE SECTION */}
          <div className="relative w-full max-w-[520px] mx-auto lg:mx-0">
            {/* Soft Background */}
            <div
              className="
                absolute
                left-[-30px]
                top-10
                w-[92%]
                h-[92%]
                bg-[#e8dfcf]
                rounded-[36px]
                -z-10
              "
            />

            {/* Main Image */}
            <div
              className="
                relative
                h-[520px]
                md:h-[580px]
                overflow-hidden
                rounded-tl-[28px]
                rounded-tr-[180px]
                rounded-br-[28px]
                rounded-bl-[28px]
                shadow-[0_25px_60px_rgba(0,0,0,0.12)]
              "
            >
              <img
                src={aboutImage}
                alt="ReadyQuick"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Circle Image */}
            {/* <div
              className="
                absolute
                top-16
                -right-6
                w-28 h-28
                rounded-full
                overflow-hidden
                border-[5px]
                border-white
                shadow-[0_15px_40px_rgba(0,0,0,0.18)]
                bg-white
              "
            >
              <img
                src={badgeImage}
                alt="Ready Quick"
                className="w-full h-full object-cover"
              />
            </div> */}

            {/* Floating Badge */}
            <div
              className="
                absolute
                -left-5
                bottom-6
                w-36 h-36
                rounded-full
                bg-[#0E7A53]
                text-white
                flex
                flex-col
                items-center
                justify-center
                text-center
                shadow-[0_15px_45px_rgba(0,0,0,0.22)]
                p-5
              "
            >
              <h3 className="text-4xl font-bold leading-none">100%</h3>
              <p className="text-sm leading-5 mt-2">
                Fresh &
                <br />
                Homemade
                <br />
                Taste
              </p>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="pt-2">
            {/* Label */}
            <p
              className="
                text-[#0E7A53]
                uppercase
                tracking-[3px]
                text-sm
                font-semibold
                mb-5
              "
            >
              About Us
            </p>

            {/* Heading */}
            <h2
  className="
    text-[#111827]
    text-4xl
    font-bold
    leading-[1.25]
    tracking-[0.2px]
    max-w-[900px]
  "
>
  From the warmth of a home kitchen to your table, {' '}
  <span className="text-[#0E7A53] mt-2">
    Ready Quick <span className="text-black">brings the authentic taste of home wherever you are.</span>
  </span>
</h2>

            {/* Description */}
            <div
              className="
                mt-8
                max-w-[720px]
                space-y-5
                text-[#4B5563]
                text-[17px]
                leading-8
              "
            >
              <p>
                At Ready Quick, we believe food is more than just a meal — it is
                comfort, warmth, trust, and the feeling of home. In today’s
                fast-moving lifestyle, people often struggle to find time for
                fresh and satisfying meals.
              </p>
              <p>
                That is why we created Ready Quick — a brand that delivers
                authentic homemade-style food with the convenience modern life
                demands. Every product is prepared with carefully selected
                ingredients, hygienic processes, and recipes inspired by real
                ghar ka swad.
              </p>
              <p>
                Whether you are at work, travelling, studying late at night, or
                managing a busy routine, Ready Quick ensures that you never
                have to compromise on taste, freshness, or comfort.
              </p>
              <p>
                At Ready Quick, quality is not just a promise — it is a
                responsibility we carry in every meal we serve.
              </p>
            </div>
          </div>
        </div>

        {/* FEATURES SECTION */}
        <div className="mt-24">
          {/* Heading */}
          <div className="mb-12">
            <p className="text-[#0E7A53] uppercase tracking-[3px] text-sm font-semibold mb-4">
              Why Ready Quick
            </p>
            <h3
              className="
                text-[#111827]
                text-3xl
                md:text-4xl
                font-bold
                leading-tight
              "
            >
              Fresh, Hygienic & Homemade —
              <span className="text-[#0E7A53] block mt-2">
                Ready Whenever You Are
              </span>
            </h3>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {features.map((item, index) => (
              <div
                key={index}
                className="
                  bg-white
                  rounded-[24px]
                  p-7
                  border border-[#ebe4d8]
                  hover:shadow-lg
                  transition-all duration-300
                "
              >
                {/* Number */}
                <div
                  className="
                    w-12 h-12
                    rounded-full
                    bg-[#e9f4ef]
                    text-[#0E7A53]
                    flex items-center justify-center
                    font-semibold
                    text-sm
                    mb-6
                  "
                >
                  0{index + 1}
                </div>
                <h4 className="text-[#111827] text-xl font-semibold mb-3">
                  {item.title}
                </h4>
                <p className="text-[#6B7280] leading-7 text-[15px]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* EVERY MOMENT COVERED - ANIMATED SECTION */}
        <div className="mt-28 rounded-[34px] overflow-hidden">
          <div className="py-20">
            {/* Heading */}
            <div className="max-w-6xl">
              <h3
                className="
                  text-[#0E7A53]
                  text-4xl
                  md:text-5xl
                  lg:text-6xl
                  font-light
                  leading-[1.05]
                  tracking-[-2px]
                "
              >
                Every Moment, Covered
              </h3>
              <p
                className="
                  text-[#0E7A53]
                  text-lg
                  md:text-[22px]
                  leading-[1.8]
                  mt-10
                  max-w-6xl
                  font-light
                "
              >
                From early mornings to late nights, Ready Quick fits seamlessly
                into your day — no matter how unpredictable it gets.
              </p>
            </div>

            {/* Timeline */}
            <div className="relative mt-24">
              {/* Animated Center Vertical Line */}
              <div
                className="
                  hidden lg:block
                  absolute
                  left-[51.5%]
                  top-0
                  bottom-0
                  w-[2px]
                  -translate-x-1/2
                "
              >
                {/* Line Fill Animation */}
                <div
                  className="absolute top-0 left-0 w-full bg-[#0E7A53] transition-all duration-1000 ease-out"
                  style={{
                    height: `${
                      (visibleItems.filter(Boolean).length / timelineItems.length) * 100
                    }%`,
                  }}
                />
                {/* Line Background */}
                <div className="absolute top-0 left-0 w-full h-full bg-[#0E7A53]/20" />
              </div>

              <div className="space-y-20">
                {timelineItems.map((item, index) => (
                  <div
                    key={index}
                    ref={(el) => (timelineRefs.current[index] = el)}
                    data-index={index}
                    className={`grid lg:grid-cols-2 gap-10 items-start relative transition-all duration-700 ease-out transform ${
                      visibleItems[index]
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-12"
                    }`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    {item.position === "left" ? (
                      <>
                        {/* LEFT */}
                        <div className="text-left lg:text-right lg:pr-24">
                          <div className="flex items-center justify-start lg:justify-end gap-6">
                            <h4
                              className="
                                text-[#0E7A53]
                                text-[32px]
                                md:text-[38px]
                                font-light
                                leading-[1.1]
                                tracking-[-1px]
                              "
                            >
                              {item.title}
                            </h4>
                            <div
                              className={`hidden lg:block w-16 h-[2px] bg-[#0E7A53] transition-all duration-700 delay-300 ${
                                visibleItems[index] ? "scale-x-100" : "scale-x-0"
                              }`}
                              style={{ transformOrigin: "right" }}
                            />
                          </div>
                          <p
                            className="
                              text-[#0E7A53]
                              text-[20px]
                              leading-[1.8]
                              mt-6
                              font-light
                            "
                          >
                            {item.description}
                          </p>
                        </div>

                        {/* RIGHT */}
                        <div className="relative lg:pl-24">
                          <div
                            className="
                              hidden lg:flex
                              absolute
                              left-0
                              top-0
                              -translate-x-1/2
                              w-14
                              h-14
                              bg-[#0E7A53]
                              rounded-md
                              items-center
                              justify-center
                              text-white
                              text-[34px]
                              font-light
                              z-10
                              transition-all duration-500 delay-300
                            "
                            style={{
                              transform: visibleItems[index]
                                ? "translate(-50%, 0) scale(1)"
                                : "translate(-50%, 20px) scale(0.8)",
                              opacity: visibleItems[index] ? 1 : 0,
                            }}
                          >
                            {index + 1}
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div></div>
                        <div className="relative lg:pl-24">
                          <div
                            className="
                              hidden lg:flex
                              absolute
                              left-0
                              top-0
                              -translate-x-1/2
                              w-14
                              h-14
                              bg-[#0E7A53]
                              rounded-md
                              items-center
                              justify-center
                              text-white
                              text-[34px]
                              font-light
                              z-10
                              transition-all duration-500 delay-300
                            "
                            style={{
                              transform: visibleItems[index]
                                ? "translate(-50%, 0) scale(1)"
                                : "translate(-50%, 20px) scale(0.8)",
                              opacity: visibleItems[index] ? 1 : 0,
                            }}
                          >
                            {index + 1}
                          </div>
                          <div className="flex items-center gap-6">
                            <div
                              className={`hidden lg:block w-16 h-[2px] bg-[#0E7A53] transition-all duration-700 delay-300 ${
                                visibleItems[index] ? "scale-x-100" : "scale-x-0"
                              }`}
                              style={{ transformOrigin: "left" }}
                            />
                            <h4
                              className="
                                text-[#0E7A53]
                                text-[32px]
                                md:text-[38px]
                                font-light
                                leading-[1.1]
                                tracking-[-1px]
                              "
                            >
                              {item.title}
                            </h4>
                          </div>
                          <p
                            className="
                              text-[#0E7A53]
                              text-[20px]
                              leading-[1.8]
                              mt-6
                              font-light
                            "
                          >
                            {item.description}
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* MISSION & VISION */}
        <div
          className="
            mt-24
            pt-16
            border-t border-[#ddd6c8]
            grid md:grid-cols-2 gap-10
          "
        >
          {/* Promise */}
          <div
            className="
              bg-white
              rounded-[28px]
              p-8 md:p-10
              border border-[#ebe4d8]
              shadow-sm
            "
          >
            <p
              className="
                text-[#0E7A53]
                uppercase
                tracking-[3px]
                text-xs
                font-semibold
                mb-5
              "
            >
              Our Promise
            </p>
            <h3
              className="
                text-[#111827]
                text-3xl
                font-semibold
                leading-tight
                mb-5
              "
            >
              Comfort, Quality & Convenience Together
            </h3>
            <p className="text-[#4B5563] leading-8 text-[16px]">
              Every Ready Quick product is crafted with carefully selected
              ingredients, hygienic preparation, and authentic flavours to
              ensure freshness, taste, and reliability in every bite.
            </p>
          </div>

          {/* Vision */}
          <div
            className="
              bg-[#111827]
              text-white
              rounded-[28px]
              p-8 md:p-10
              shadow-[0_15px_40px_rgba(0,0,0,0.12)]
            "
          >
            <p
              className="
                text-[#0E7A53]
                uppercase
                tracking-[3px]
                text-xs
                font-semibold
                mb-5
              "
            >
              Our Vision
            </p>
            <h3
              className="
                text-3xl
                font-semibold
                leading-tight
                mb-5
              "
            >
              Bringing Ghar Ka Swad to Every Lifestyle
            </h3>
            <p className="text-[#D1D5DB] leading-8 text-[16px]">
              Our vision is to make fresh, comforting, homemade-style food
              accessible anytime and anywhere while maintaining the trust,
              warmth, and emotional connection people associate with home.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;