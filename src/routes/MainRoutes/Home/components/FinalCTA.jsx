import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function FinalCTA() {
  return (
    <section
      className="py-24 bg-[#FFF7C7] bg-[radial-gradient(#E9DF9C_1px,transparent_1px)] [background-size:20px_20px]"
    >
      <div className="max-w-4xl mx-auto text-center px-6">

        <h2 className="text-4xl font-serif font-bold text-[#111827]">
          Experience Homemade Happiness <br />
          The Ready Quick Way!
        </h2>

        <p className="mt-6 text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed">
          Get in touch with us to convert your homemade dishes into travel-ready meals today.
        </p>
        <Link
          to="https://wa.me/919737379159"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 bg-black text-white px-10 py-3 rounded-lg text-lg shadow-lg hover:bg-neutral-800 transition inline-flex items-center gap-2"
        >
          <FaWhatsapp className="text-white text-xl" />
          <span>Contact Us</span>
        </Link>

      </div>
    </section>
  );
}
