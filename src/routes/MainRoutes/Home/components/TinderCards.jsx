import React, { useState, useEffect, useMemo } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import image1 from "../../../../assets/product/1.png";
import image2 from "../../../../assets/product/2.png";
import image3 from "../../../../assets/product/3.png";
import image4 from "../../../../assets/product/4.png";
import image5 from "../../../../assets/product/5.png";
import image6 from "../../../../assets/product/6.png";
import image7 from "../../../../assets/product/7.png";
import image8 from "../../../../assets/product/8.png";
import image9 from "../../../../assets/product/9.png";
import image10 from "../../../../assets/product/10.png";
import image11 from "../../../../assets/product/11.png";
import image12 from "../../../../assets/product/12.png";
import image13 from "../../../../assets/product/13.png";
import image14 from "../../../../assets/product/14.png";

export default function FannedCardSlider() {
  const images = useMemo(
    () => [
      image1, image2, image3, image4, image5, image6, image7,
      image8, image9, image10, image11, image12, image13, image14
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const visibleCards = 3;

  /* ---------- CIRCULAR SELECTION ---------- */
  const cards = [
    images[index % images.length],
    images[(index + 1) % images.length],
    images[(index + 2) % images.length],
  ];

  /* ---------- AUTO SLIDE ---------- */
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [images.length]);

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <>
      <style>{`
        * { box-sizing: border-box; }

        .fan-slider-container {
          min-height: 600px;
          width: 100%;
          background: #FAFAF6;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .fan-wrapper {
          position: relative;
          width: 520px;
          height: 420px;
        }

        .fan-card {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 260px;
          height: 490px;
          border-radius: 18px;
          overflow: hidden;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: transform;
        }

        .fan-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* FAN POSITIONS */
        .pos-0 {
          transform: translate(-50%, -50%) translateX(-160px) rotate(-12deg);
          z-index: 1;
        }

        .pos-1 {
          transform: translate(-50%, -50%);
          z-index: 3;
        }

        .pos-2 {
          transform: translate(-50%, -50%) translateX(160px) rotate(12deg);
          z-index: 1;
        }

        .arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: #E5E7EB;
          color: #12634a;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 20;
        }

        .arrow.left { left: -70px; }
        .arrow.right { right: -70px; }

        @media (max-width: 768px) {
          .fan-wrapper { width: 380px; height: 340px; }
          .fan-card { width: 210px; height: 320px; }
        }

        @media (max-width: 480px) {
          .fan-wrapper { width: 300px; height: 300px; }
          .fan-card { width: 180px; height: 260px; }
        }
      `}</style>

      <div className="fan-slider-container">
        <div className="fan-wrapper">
          <div className="arrow left" onClick={prev}>
            <FaChevronLeft />
          </div>

          <div className="arrow right" onClick={next}>
            <FaChevronRight />
          </div>

          {cards.map((img, i) => (
            <div key={`${index}-${i}`} className={`fan-card pos-${i}`}>
              <img
                src={img}
                loading="lazy"
                decoding="async"
                alt={`product-${index + i + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
