import React from "react";
import { Container } from "../../../../components/Layout";

export default function Herosection() {
  const cuisines = [
    {
      title: "Gujarati",
      icon: "🪔",
      color: "emerald",
      categories: [
        {
          name: "Regular Sabji",
          items: [
            "Dudhi And Chana Dal",
            "Turya",
            "Masala Ringana",
            "Methi Bhaji",
            "Palak Bhaji",
            "Kacha Kela",
            "Palak Batata",
            "Gravy Batata",
            "Kobi Batata",
            "Ringna Batata",
            "Bhinda",
            "Karela",
            "Fulawar Batata",
            "Mix Veg",
            "Batata Suki Bhaji"
          ]
        },
        {
          name: "Kathol Sabji",
          items: [
            "Rajma",
            "Urad Dal",
            "Moong Dal (Dry)",
            "Chole Chana",
            "Regular (Desi) Chana",
            "Moong",
            "Chana Dal",
            "Vatana",
            "Chola"
          ]
        },
        {
          name: "Kathiawadi Sabji",
          items: [
            "Bharel Ringna Batata",
            "Bharek Batata",
            "Dungli Batata",
            "Kadhi Gathya",
            "Kadhi Pakoda",
            "Sev Tameta",
            "Dal Dhokli",
            "Kaju Gathya",
            "Kathiawadi Dhokli",
            "Rajwadi Dhokli",
            "Dahi Bhindi Capsicum Masala",
            "Bharthu",
            "Lasanya Batata",
            "Lili Dungli Gathya",
            "Kathiawadi Lasanya Kaju",
            "Kathiawadi Tuver Dana",
            "Dahi Tikhari(Vagharelu Dahi)",
            "Bharel Ringan",
            "Makai Tameta",
            "Vagharelo Rotlo",
            "Makai Paneer",
            "Vatana Batata Tameta",
            "Kathiawadi Lasanya Gathya"
          ]
        },
        {
          name: "Pulao & Khichdi",
          items: [
            "Pulao Kadhi",
            "Kadhi Bhat",
            "Gujarati Dal Bhat",
            "Gujarati Dal",
            "Gujarati Kadhi",
            "Sadi Khichdi",
            "Moong Khichdi",
            "Mix Veg Khichdi",
            "Masala Khichdi",
            "Palak Khichdi",
            "Masala Kadhi Khichadi",
            "Masala Rice Kadhi",
            "Kathiawadi Kadhi"
          ]
        }
      ]
    },
    {
      title: "Punjabi (North Indian)",
      icon: "🍛",
      color: "orange",
      categories: [
        {
          name: "Paneer & Cheese",
          items: [
            "Paneer Tikka Masala",
            "Paneer Bhurji",
            "Palak Paneer",
            "Mushroom Curry",
            "Malai Matar",
            "Matar Paneer",
            "Paneer Butter Masala",
            "Paneer Makhani",
            "Kadai Paneer",
            "Mutter Paneer Butter Masala",
            "Paneer Tikka Lababdar",
            "Paneer Kadai",
            "Paneer Roasted Masala",
            "Paneer Garlic Masala",
            "Cheese Butter Masala",
            "Cheese Paneer Masala",
            "Hara Lasun Ki Subji",
            "Hara Lasuni Paneer"
          ]
        },
        {
          name: "Kaju & Kofta",
          items: [
            "Kaju Curry",
            "Sweet Khoya Kaju",
            "Kaju Curry Masala",
            "Kaju Masala",
            "Kaju Kadai",
            "Kaju Cheese Masala",
            "Kaju Paneer Masala",
            "Sweet Navratan Korma",
            "Kaju Kofta",
            "Malai Kofta",
            "Cheese Kofta",
            "Paneer Kofta",
            "Sweet Kashmiri Kofta",
            "Veg Kofta"
          ]
        },
        {
          name: "Veg Sabji",
          items: [
            "Aloo Methi",
            "Veg Kolhapuri",
            "Veg Makhanwala",
            "Veg Tawa Masala",
            "Veg Kadai",
            "Veg Hyderabadi",
            "Mixed Veg",
            "Corn Palak",
            "Amritsari Dal",
            "Veg Garlic Masala",
            "Aloo Matar",
            "Aloo Palak",
            "Mushroom Butter Masala",
            "Mushroom Garlic Masala",
            "Chana Masala",
            "Methi Matar Malai"
          ]
        },
        {
          name: "Dal & Rice",
          items: [
            "Dal Fry",
            "Dal Tadka",
            "Dal Palak",
            "Butter Dal Fry",
            "Dal Makhani",
            "Mix Dal",
            "Jeera Rice",
            "Pulao",
            "Curd Rice"
          ]
        }
      ]
    },
    {
      title: "Chinese",
      icon: "🥢",
      color: "red",
      categories: [
        {
          name: "Noodles",
          items: [
            "Veg Hakka Noodles",
            "Veg Schezwan Noodles",
            "Chilli Garlic Noodles"
          ]
        }
      ]
    },
    {
      title: "Sweets",
      icon: "🍰",
      color: "yellow",
      categories: [
        {
          name: "Desserts",
          items: [
            "Gajar Ka Halwa",
            "Dudhi Ka Halwa",
            "Mango Ras",
            "Adadiya",
            "Suji Ka Halwa (sira)",
            "Moong Ka Halwa (sira)",
            "Mohanthal",
            "Basundi",
            "Puran Poli (Masalo)"
          ]
        }
      ]
    },
    {
      title: "Other",
      icon: "🍽️",
      color: "purple",
      categories: [
        {
          name: "Snacks & More",
          items: [
            "Pav Bhaji",
            "Upma",
            "Pasta",
            "Veg Oats",
            "Raita",
            "Chola Fali Ni Chatni",
            "Dabeli Masalo",
            "Bateta Vada Masalo",
            "Vadapav Masalo"
          ]
        }
      ]
    }
  ];

  const colorStyles = {
    emerald: {
      bg: "from-emerald-50 to-teal-50",
      header: "bg-gradient-to-r from-emerald-600 to-teal-600",
      badge: "bg-emerald-100 text-emerald-700",
      dot: "bg-emerald-400"
    },
    orange: {
      bg: "from-orange-50 to-amber-50",
      header: "bg-gradient-to-r from-orange-600 to-amber-600",
      badge: "bg-orange-100 text-orange-700",
      dot: "bg-orange-400"
    },
    red: {
      bg: "from-red-50 to-rose-50",
      header: "bg-gradient-to-r from-red-600 to-rose-600",
      badge: "bg-red-100 text-red-700",
      dot: "bg-red-400"
    },
    yellow: {
      bg: "from-yellow-50 to-amber-50",
      header: "bg-gradient-to-r from-yellow-600 to-amber-600",
      badge: "bg-yellow-100 text-yellow-700",
      dot: "bg-yellow-400"
    },
    purple: {
      bg: "from-purple-50 to-pink-50",
      header: "bg-gradient-to-r from-purple-600 to-pink-600",
      badge: "bg-purple-100 text-purple-700",
      dot: "bg-purple-400"
    }
  };

  return (
    <div className="py-12 bg-gradient-to-br from-gray-50 to-gray-100">
      <Container className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="space-y-12">
          {cuisines.map((cuisine, idx) => {
            const colors = colorStyles[cuisine.color];
            
            return (
              <div key={idx} className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                {/* Header */}
                <div className={`${colors.header} px-6 py-4 flex items-center gap-3`}>
                  {/* <span className="text-3xl">{cuisine.icon}</span> */}
                  <h2 className="text-2xl font-bold text-white tracking-tight">{cuisine.title}</h2>
                  {/* <span className={`ml-auto ${colors.badge} px-3 py-1 rounded-full text-xs font-semibold`}>
                    {cuisine.categories.reduce((acc, cat) => acc + cat.items.length, 0)} dishes
                  </span> */}
                </div>

                {/* Categories Grid */}
                <div className="bg-white p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {cuisine.categories.map((category, catIdx) => (
                      <div key={catIdx} className="flex flex-col">
                        {/* Category Title - without number */}
                        <div className="flex items-center gap-2 mb-3 pb-2 border-b-2 border-gray-200">
                          <div className={`w-2 h-2 rounded-full ${colors.dot}`}></div>
                          <h3 className="font-bold text-gray-800 text-base uppercase tracking-wide">
                            {category.name}
                          </h3>
                        </div>

                        {/* Items List */}
                        <div className="space-y-2">
                          {category.items.map((item, itemIdx) => (
                            <div key={itemIdx} className="flex items-start gap-2 text-sm group">
                              <span className={`${colors.dot} w-1.5 h-1.5 rounded-full mt-1.5 opacity-60 group-hover:opacity-100 transition-opacity`}></span>
                              <span className="text-gray-600 group-hover:text-gray-900 transition-colors">
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Decoration */}
                <div className={`h-1 ${colors.header}`}></div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}