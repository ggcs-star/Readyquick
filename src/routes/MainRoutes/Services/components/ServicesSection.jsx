// ServicesSection.jsx

import travelfriendly from "../../../../assets/services/travelfriendly.jpg";
import authenticindian from "../../../../assets/services/authenticindian.jpg";
import bulkandcorporate from "../../../../assets/services/bulkandcorporate.jpg";
import readytoeat from "../../../../assets/services/readytoeat.jpg";

const services = [
  {
    image: readytoeat,
    title: "Ready-to-Eat Meals",
    description:
      "Freshly prepared, hygienically packed meals ready in minutes. No compromise on taste or nutrition.",
  },
  {
    image: authenticindian,
    title: "Authentic Indian Flavours",
    description:
      "Recipes rooted in tradition, crafted for the modern palate — real ghar ka swaad, every time.",
  },
  {
    image: travelfriendly,
    title: "Travel-Friendly Packs",
    description:
      "Convenient, mess-free packaging designed for your journeys — fresh food that travels with you.",
  },
  {
    image: bulkandcorporate,
    title: "Bulk & Corporate Orders",
    description:
      "Scalable meal solutions for offices, events, and groups — quality at every quantity.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-16">
          
          {/* Small Tag */}
          <span
            className="
              inline-block
              text-[#12634a]
              uppercase
              tracking-[4px]
              text-sm
              font-semibold
              mb-4
            "
          >
            Our Services
          </span>

          {/* Main Title */}
          <h2
            className="
              text-4xl
              md:text-5xl
              lg:text-6xl
              font-serif
              font-bold
              text-[#111827]
              leading-tight
              max-w-5xl
              mx-auto
            "
          >
            Delicious, Trusted Meals - Anytime, Anywhere
          </h2>

          {/* Divider */}
          <div className="w-24 h-1 bg-[#12634a] mx-auto mt-6"></div>

          {/* Description */}
          <p
            className="
              text-gray-600
              text-lg
              md:text-xl
              leading-9
              max-w-5xl
              mx-auto
              mt-8
            "
          >
            Whether you're managing a packed work schedule, travelling across
            cities, or simply need a quick and wholesome meal at home — we have
            built our product range to serve every moment of your busy life.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <div key={index} className="group">

              {/* Image */}
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={service.image}
                  alt={service.title}
                  className="
                    w-full
                    h-[240px]
                    object-contain
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-105
                  "
                />
              </div>

              {/* Content */}
              <div className="pt-6">

                {/* Title */}
                <h3
                  className="
                    text-[28px]
                    font-semibold
                    text-[#111827]
                    leading-snug
                  "
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    text-gray-600
                    text-lg
                    leading-8
                    mt-4
                  "
                >
                  {service.description}
                </p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;