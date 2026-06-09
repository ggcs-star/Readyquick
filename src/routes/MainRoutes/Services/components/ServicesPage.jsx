import React from "react";
import {
  Globe,
  ShoppingBag,
  UtensilsCrossed,
  Truck,
  ShieldCheck,
  Clock3,
  HeartHandshake,
  PackageCheck,
} from "lucide-react";

const ServicesPage = () => {
  const services = [
    {
      icon: <UtensilsCrossed size={34} />,
      title: "Ready-to-Eat Meals",
      desc: "Busy life ke liye quick solution, lekin swad bilkul ghar jaisa. Hum authentic recipes aur quality ingredients ke saath ready-to-eat meals provide karte hain.",
    },
    {
      icon: <ShieldCheck size={34} />,
      title: "Hygienic Food Packaging",
      desc: "Har product ko hygiene aur safety standards ke saath prepare kiya jaata hai taki har bite fresh aur trustworthy lage.",
    },
    {
      icon: <Clock3 size={34} />,
      title: "Quick & Convenient Service",
      desc: "Fast lifestyle ke liye easy-to-cook aur instantly ready food solutions jo aapko comfort aur convenience dono dete hain.",
    },
    {
      icon: <Truck size={34} />,
      title: "Fast Delivery",
      desc: "Aapke favourite meals ko jaldi aur safely deliver karna hamari priority hai — fresh taste ke saath.",
    },
    {
      icon: <HeartHandshake size={34} />,
      title: "Home-Like Taste",
      desc: "Har meal me ghar ke khane ka swad, maa ke haath ka ehsaas aur apnapan dene ki koshish karte hain.",
    },
    {
      icon: <PackageCheck size={34} />,
      title: "Quality Assurance",
      desc: "Quality, freshness aur taste hamare liye sirf promises nahi, balki zimmedari hain.",
    },
    {
      icon: <ShoppingBag size={34} />,
      title: "Easy Meal Solutions",
      desc: "Office, travel ya busy routine — kahin bhi ghar jaisa tasty aur reliable food experience paaiye.",
    },
    {
      icon: <Globe size={34} />,
      title: "Customer Satisfaction",
      desc: "Aapka trust aur pyaar hi hamari sabse badi strength hai. Har product me satisfaction dena hamara goal hai.",
    },
  ];

  return (
    <section className="bg-[#f7f4ee] py-20 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8">

        {/* Heading */}
        <div className="text-center max-w-[820px] mx-auto">

          <p
            className="
              text-[#0E7A53]
              uppercase
              tracking-[3px]
              text-sm
              font-semibold
              mb-4
            "
          >
            Our Services
          </p>

          <h2
            className="
              text-[#111827]
              text-4xl
              md:text-5xl
              font-bold
              leading-tight
            "
          >
            Ghar Ka Swad
            <span className="text-[#0E7A53] block mt-2">
              Har Pal Aapke Sath
            </span>
          </h2>

          <p
            className="
              mt-6
              text-[#6B7280]
              text-[17px]
              leading-8
            "
          >
            Ready Quick ka mission hai har customer tak ghar jaisa swad,
            quality aur convenience pahunchana — fast, fresh aur dil se.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="
                group
                bg-white
                rounded-[26px]
                p-8
                border border-[#ebe4d8]
                hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]
                transition-all duration-300
                hover:-translate-y-1
              "
            >

              {/* Icon */}
              <div
                className="
                  w-16 h-16
                  rounded-2xl
                  bg-[#e9f4ef]
                  text-[#0E7A53]
                  flex items-center justify-center
                  mb-7
                  group-hover:bg-[#0E7A53]
                  group-hover:text-white
                  transition-all duration-300
                "
              >
                {service.icon}
              </div>

              {/* Number */}
              <div
                className="
                  text-[#D1D5DB]
                  text-5xl
                  font-bold
                  mb-4
                "
              >
                0{index + 1}
              </div>

              {/* Title */}
              <h3
                className="
                  text-[#111827]
                  text-2xl
                  font-semibold
                  mb-4
                "
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                className="
                  text-[#6B7280]
                  leading-7
                  text-[15px]
                "
              >
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;