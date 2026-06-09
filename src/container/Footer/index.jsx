import React from "react";
import { Link } from "react-router-dom";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import readyquick from "../../assets/navbar/readyquick.png"; // your brand logo

export default function Footer() {

  const menuItems = [
    {
      id: 1, label: "Founders' Desk", slug: "/founders-desk"
    },
    { id: 2, label: "Menu", slug: "/menu" },

    {
      id: 3, label: "Our Services",
      slug: "/services" 
    },
    {
      id: 4, label: "About Us",
      slug: "/about-us"
    },
  ];

  return (
    <footer className="bg-white py-16 border-t border-neutral-300">
      <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 md:grid-cols-[1.4fr_0.9fr_1.6fr_1.2fr] gap-6">
        {/* LEFT SECTION — BRAND */}
        <div>
          <img
            src={readyquick}
            alt="Ready Quick"
            className="h-20 object-contain mb-6"
          />

          <p className="text-gray-600 leading-relaxed max-w-xs">
            Bringing the warmth of home-cooked meals to every corner of the globe.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4 tracking-wide">
            QUICK LINKS
          </h3>

          <ul className="space-y-3 text-gray-600">
            {menuItems.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.slug || "#"}
                  className=" transition"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4 tracking-wide">CONTACT US</h3>

          <ul className="space-y-4 text-gray-600">
            <li className="cursor-pointer flex items-start gap-3">
              <FiMapPin className="text-[#12634a] mt-1" />

              <span>
                A101, Shantiniketan-1, Raspan Cross Road, <br />
                Nr. Pavilion Mall, New India Colony, <br />
                Nikol, Ahmedabad, Gujarat, India
              </span>
            </li>

            <li className="cursor-pointer flex items-center gap-3">
              <FiPhone className="text-[#12634a]" />

              <Link
                to="https://wa.me/919737379159"
                target="_blank"
                rel="noopener noreferrer"
                className=" transition"
              >
                +91 97373 79159
              </Link>
            </li>

            <li className="cursor-pointer flex items-center gap-3">
              <FiMail className="text-[#12634a]" />

              <Link
                to="mailto:mihir@readyquick.in"
                className="transition-colors"
              >
                mihir@readyquick.in
              </Link>
            </li>
          </ul>
        </div>

        {/* SOCIAL LINKS */}
        {/* SOCIAL LINKS */}
        <div>
          <h3
            className="
      text-[#111827]
      text-xl
      font-bold
      tracking-wide
      mb-6
    "
          >
            FOLLOW US
          </h3>

          {/* Social Icons */}
          <div className="flex items-center gap-4">

            <SocialIcon icon={<FaInstagram />} />
            <SocialIcon icon={<FaFacebookF />} />
            <SocialIcon icon={<FaTwitter />} />
            <SocialIcon icon={<FaLinkedinIn />} />
          </div>

          {/* GSTIN CARD */}
          <div
            className="
      mt-8
      bg-[#f8f8f8]
      border 
      rounded-2xl
      px-5 py-4
      border-[#0E7A53]
      transition-all duration-300
    "
          >
            <p
              className="
        text-[11px]
        uppercase
        tracking-[3px]
        text-[#0E7A53]
        font-semibold
        mb-2
      "
            >
              GSTIN
            </p>

            <p
              className="
        text-[#111827]
        text-[18px]
        font-semibold
        tracking-wide
        break-all
      "
            >
              24AZCPD2053K2ZQ
            </p>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-200 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between text-gray-600 px-6 max-w-screen-xl mx-auto">
        <p>© {new Date().getFullYear()} Ready Quick. All rights reserved.</p>
        <div className="flex gap-8 mt-4 md:mt-0">
          <Link className="cursor-pointer">Privacy Policy</Link>
          <Link className="cursor-pointer">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}

/* Small reusable icon component */
const SocialIcon = ({ icon }) => (
  <div className="cursor-pointer w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-gray-200 transition">
    {icon}
  </div>
);
