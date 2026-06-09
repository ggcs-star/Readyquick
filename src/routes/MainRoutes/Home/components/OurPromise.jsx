import React from "react";
import promiseImg from "../../../../assets/home/ourpromise/promiseimg.jpg"; 

export default function OurPromise() {
  return (
    <section className="bg-[#FFF9E8] py-24">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT IMAGE */}
        <div className="relative">
          {/* Bottom shadow layer */}
          <div className="absolute -bottom-4 -right-4 w-full h-full bg-[#DFE0F2] rounded-3xl opacity-40"></div>

          {/* Main image */}
          <img
            src={promiseImg}
            alt="Our Promise"
            className="relative h-96 w-full rounded-3xl shadow-xl object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <p className="text-[#12634a] font-semibold uppercase tracking-wider text-sm">
            Our Promise
          </p>

          <h2 className="mt-4 text-4xl font-serif font-bold leading-tight text-[#111827]">
            “We don’t just preserve your food — <br />
            we preserve your emotions.”
          </h2>

          <p className="mt-6 text-xl italic text-gray-700">
            With Ready Quick, the taste of home travels with you.
          </p>

          <p className="mt-6 text-gray-600 leading-relaxed text-lg">
            We understand that food is more than just sustenance; 
            it’s a memory, a feeling of comfort, and a connection to your roots. 
            Our technology ensures that this connection remains unbroken, 
            no matter the distance.
          </p>
        </div>

      </div>
    </section>
  );
}
