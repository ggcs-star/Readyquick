import React, { useState } from "react";

/* Existing Imports */
import image1 from "../../../../assets/dishes/1-min.png";
import image3 from "../../../../assets/dishes/3-min.png";
import image4 from "../../../../assets/dishes/4-min.png";
import image5 from "../../../../assets/dishes/5-min.png";
import image6 from "../../../../assets/dishes/6-min.png";
import image7 from "../../../../assets/dishes/7-min.png";
import image8 from "../../../../assets/dishes/8-min.png";
import image9 from "../../../../assets/dishes/9-min.png";
import image10 from "../../../../assets/dishes/10-min.png";
import image11 from "../../../../assets/dishes/23-min.png";
import image12 from "../../../../assets/dishes/24-min.png";
import image13 from "../../../../assets/dishes/25-min.png";

/* Gujarati Images - Replace with actual filenames */
import bhindaF from "../../../../assets/dishes/gujarati/Bhinda f.png";
import dahiTikhariVaghareluDahiF from "../../../../assets/dishes/gujarati/Dahi Tikhari vagharelu Dahi f.png";
import dalBhatF from "../../../../assets/dishes/gujarati/Dal Bhat f.png";
import desiChanaF from "../../../../assets/dishes/gujarati/Desi chana f.png";
import dudhiChanaDalF from "../../../../assets/dishes/gujarati/Dudhi Chana Dal F.png";
import grevyBatakaF from "../../../../assets/dishes/gujarati/Grevy Bataka f.png";
import kadhiBhatF from "../../../../assets/dishes/gujarati/Kadhi Bhat f.png";
import kadhiGathyaF from "../../../../assets/dishes/gujarati/Kadhi Gathya F.png";
import kajuGathyaF from "../../../../assets/dishes/gujarati/Kaju Gathya f.png";
import karelaF from "../../../../assets/dishes/gujarati/Karela f.png";
import kobiBatakaF from "../../../../assets/dishes/gujarati/Kobi Baataka f.png";

import masalaKhichdiKadhiF from "../../../../assets/dishes/gujarati/Masala Khichdi Kadhi f.png";
import masalaRinganF from "../../../../assets/dishes/gujarati/Masala Ringan f.png";
import mixVegF from "../../../../assets/dishes/gujarati/Mix veg f.png";
import palakBatataF from "../../../../assets/dishes/gujarati/Palak batata f.png";
import rajmaF from "../../../../assets/dishes/gujarati/Rajma f.png";
import ringanBatakaF from "../../../../assets/dishes/gujarati/Ringan Bataka f.png";
import ringanBharthuF from "../../../../assets/dishes/gujarati/Ringan Bharthu f.png";
import sevTamatarF from "../../../../assets/dishes/gujarati/Sev Tamator f.png";
import tuverTothaF from "../../../../assets/dishes/gujarati/Tuver Totha f.png";
import vatanaBatakaF from "../../../../assets/dishes/gujarati/Vatana Bataka F.png";
import vatanaF from "../../../../assets/dishes/gujarati/Vatana F.png";

import cheeseButterMasalaF from "../../../../assets/dishes/punjabi/Cheese Butter Masala.png";
import dalFryJeeraRiceF from "../../../../assets/dishes/punjabi/Dal fry & jeerarice F.png";
import dalFryF from "../../../../assets/dishes/punjabi/Dal fry f.png";
import dalMakhniF from "../../../../assets/dishes/punjabi/Dal Makhni F.png";
import kajuKhoyaF from "../../../../assets/dishes/punjabi/Kaju Khoya F.png";
import kajuKurryF from "../../../../assets/dishes/punjabi/Kaju Kurry F.png";
import matarPaneerF from "../../../../assets/dishes/punjabi/Matar Paneer F.png";
import palakPaneerF from "../../../../assets/dishes/punjabi/Palak Paneer F.png";
import paneerBhurjiF from "../../../../assets/dishes/punjabi/Paneer Bhurji F.png";

import broccoliAlmondSoupF from "../../../../assets/dishes/soup/Broccoli Almond soup F.png";
import tomatoSoupF from "../../../../assets/dishes/soup/Tomato soup F.png";
import vegHotNSourSoupF from "../../../../assets/dishes/soup/Veg Hot sour Soup F.png";
import vegManchowSoupF from "../../../../assets/dishes/soup/Veg Manchow Soup F.png";

import batakaPohaF from "../../../../assets/dishes/snacks/Bataka poha F.png";
import batakaVadaF from "../../../../assets/dishes/snacks/Bataka Vada F.png";
import dabeliMasalaF from "../../../../assets/dishes/snacks/Dabeli.png";
import pavBhajiF from "../../../../assets/dishes/snacks/Pav Bhaji F.png";
import upmaF from "../../../../assets/dishes/snacks/Upma F.png";
import vegHakkaNoodlesF from "../../../../assets/dishes/snacks/veg Hakka noodles F.png";

import gajarHalwaF from "../../../../assets/dishes/sweets/Gajar halwa.png";
import kesarBasundiF from "../../../../assets/dishes/sweets/Kesar Basundi F.png";
import mangoRasF from "../../../../assets/dishes/sweets/Mango Ras F.png";
import puranPoliMasalaF from "../../../../assets/dishes/sweets/Puran Poli.png";
import sujiHalwaF from "../../../../assets/dishes/sweets/Suji Halwa F.png";

const dishes = [
  // {
  //   image: image1,
  //   title: "Mohan Thal",
  //   category: "Sweets",
  // },
  // {
  //   image: image3,
  //   title: "Tomato Soup",
  //   category: "Soups",
  // },
  // {
  //   image: image4,
  //   title: "Kaju Gathya",
  //   category: "Snacks",
  // },
  {
    image: image5,
    title: "Paneer Butter Masala",
    category: "Main Course",
  },
  {
    image: image6,
    title: "Khichdi",
    category: "Traditional Meals",
  },
  {
    image: image7,
    title: "Khichdi with Kadhi",
    category: "Traditional Meals",
  },
  {
    image: image8,
    title: "Gujarati Kadhi",
    category: "Traditional Meals",
  },
  {
    image: image9,
    title: "Whole Moong Curry",
    category: "Main Course",
  },
  {
    image: image10,
    title: "Dudhi Chana Dal",
    category: "Main Course",
  },
  // {
  //   image: image11,
  //   title: "Rose Basundi",
  //   category: "Sweets",
  // },
  // {
  //   image: image12,
  //   title: "Mango Basundi",
  //   category: "Sweets",
  // },
  // {
  //   image: image13,
  //   title: "Kesar Basundi",
  //   category: "Sweets",
  // },

  /* Gujarati Category */
  {
    image: bhindaF,
    title: "Bhinda Fry",
    category: "Gujarati",
  },
  {
    image: dahiTikhariVaghareluDahiF,
    title: "Dahi Tikhari (Vagharelu Dahi)",
    category: "Gujarati",
  },
  {
    image: dalBhatF,
    title: "Dal Bhat",
    category: "Gujarati",
  },
  {
    image: desiChanaF,
    title: "Desi Chana",
    category: "Gujarati",
  },
  {
    image: dudhiChanaDalF,
    title: "Dudhi Chana Dal",
    category: "Gujarati",
  },
  {
    image: grevyBatakaF,
    title: "Grevy Bataka",
    category: "Gujarati",
  },
  {
    image: kadhiBhatF,
    title: "Kadhi Bhat",
    category: "Gujarati",
  },
  {
    image: kadhiGathyaF,
    title: "Kadhi Gathya",
    category: "Gujarati",
  },
  {
    image: kajuGathyaF,
    title: "Kaju Gathya",
    category: "Gujarati",
  },
  {
    image: karelaF,
    title: "Karela",
    category: "Gujarati",
  },
  {
    image: kobiBatakaF,
    title: "Kobi Bataka",
    category: "Gujarati",
  },
  {
    image: masalaKhichdiKadhiF,
    title: "Masala Khichdi Kadhi",
    category: "Gujarati",
  },
  {
    image: masalaRinganF,
    title: "Masala Ringan",
    category: "Gujarati",
  },
  {
    image: mixVegF,
    title: "Mix Veg",
    category: "Gujarati",
  },
  {
    image: palakBatataF,
    title: "Palak Batata",
    category: "Gujarati",
  },
  {
    image: rajmaF,
    title: "Rajma",
    category: "Gujarati",
  },
  {
    image: ringanBatakaF,
    title: "Ringan Bataka",
    category: "Gujarati",
  },
  {
    image: ringanBharthuF,
    title: "Ringan Bharthu",
    category: "Gujarati",
  },
  {
    image: sevTamatarF,
    title: "Sev Tamatar",
    category: "Gujarati",
  },
  {
    image: tuverTothaF,
    title: "Tuver Totha",
    category: "Gujarati",
  },
  {
    image: vatanaBatakaF,
    title: "Vatana Bataka",
    category: "Gujarati",
  },
  {
    image: vatanaF,
    title: "Vatana",
    category: "Gujarati",
  },

  {
    image: cheeseButterMasalaF,
    title: "Cheese Butter Masala",
    category: "Punjabi",
  },
  {
    image: dalFryJeeraRiceF,
    title: "Dal Fry & Jeera Rice",
    category: "Punjabi",
  },
  {
    image: dalFryF,
    title: "Dal Fry",
    category: "Punjabi",
  },
  {
    image: dalMakhniF,
    title: "Dal Makhni",
    category: "Punjabi",
  },
  {
    image: kajuKhoyaF,
    title: "Kaju Khoya",
    category: "Punjabi",
  },
  {
    image: kajuKurryF,
    title: "Kaju Kurry",
    category: "Punjabi",
  },
  {
    image: matarPaneerF,
    title: "Matar Paneer",
    category: "Punjabi",
  },
  {
    image: palakPaneerF,
    title: "Palak Paneer",
    category: "Punjabi",
  },
  {
    image: paneerBhurjiF,
    title: "Paneer Bhurji",
    category: "Punjabi",
  },

  {
    image: broccoliAlmondSoupF,
    title: "Broccoli Almond Soup",
    category: "Soups",
  },
  {
    image: tomatoSoupF,
    title: "Tomato Soup",
    category: "Soups",
  },
  {
    image: vegHotNSourSoupF,
    title: "Veg Hot N Sour Soup",
    category: "Soups",
  },
  {
    image: vegManchowSoupF,
    title: "Veg Manchow Soup",
    category: "Soups",
  },

  {
    image: batakaPohaF,
    title: "Bataka Poha",
    category: "Snacks",
  },
  {
    image: batakaVadaF,
    title: "Bataka Vada",
    category: "Snacks",
  },
  {
    image: dabeliMasalaF,
    title: "Dabeli (Masala)",
    category: "Snacks",
  },
  {
    image: pavBhajiF,
    title: "Pav Bhaji",
    category: "Snacks",
  },
  {
    image: upmaF,
    title: "Upma",
    category: "Snacks",
  },
  {
    image: vegHakkaNoodlesF,
    title: "Veg Hakka Noodles",
    category: "Snacks",
  },

  {
    image: gajarHalwaF,
    title: "Gajar Halwa",
    category: "Sweets",
  },
  {
    image: kesarBasundiF,
    title: "Kesar Basundi",
    category: "Sweets",
  },
  {
    image: mangoRasF,
    title: "Mango Ras",
    category: "Sweets",
  },
  {
    image: puranPoliMasalaF,
    title: "Puran Poli",
    category: "Sweets",
  },
  {
    image: sujiHalwaF,
    title: "Suji Halwa",
    category: "Sweets",
  },
];

const categories = [
  // "All",
  "Gujarati",
  "Punjabi",
  "Soups",
  // "Traditional Meals",
  // "Main Course",
  "Snacks",
  "Sweets",
];

const Dishes = () => {
  const [activeCategory, setActiveCategory] = useState("Gujarati"); // Changed from "All" to "Gujarati"

  const filteredDishes =
    activeCategory === "All"
      ? dishes
      : dishes.filter((dish) => dish.category === activeCategory);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#111827]">
            Our Dishes
          </h2>

          <div className="w-20 h-1 bg-[#12634a] mx-auto mt-4"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeCategory === category
                ? "bg-[#12634a] text-white shadow-lg"
                : "bg-gray-100 text-gray-700 hover:bg-[#12634a] hover:text-white"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredDishes.map((dish, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500"
            >
              <div className="overflow-hidden bg-[#F9FAFB]">
                <img
                  src={dish.image}
                  alt={dish.title}
                  className="w-full h-[300px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-5 text-center">
                {/* <span className="inline-block px-3 py-1 text-xs font-medium bg-green-100 text-[#12634a] rounded-full mb-3">
                  {dish.category}
                </span> */}

                <h3 className="text-lg font-semibold text-[#111827]">
                  {dish.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dishes;