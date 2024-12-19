"use client"; // Mark this file as a client component

import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const imageSections = [
  { id: 1, src: "./assest/1.png", alt: "Image 1" },
  { id: 2, src: "./assest/1.png", alt: "Image 2" },
  { id: 3, src: "./assest/1.png", alt: "Image 3" },
  { id: 4, src: "./assest/1.png", alt: "Image 4" },
];

function VerticalScrolling() {
  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Define GSAP animations for all sections
    imageSections.forEach((section) => {
      gsap.from(`.scroll-image${section.id} .image`, {
        scale: 0,
        duration: 2,
        scrollTrigger: {
          trigger: `.scroll-image${section.id} .image`,
          scroller: ".overflow-container",
          start: "top 80%",
          end: "bottom top",
        },
      });
    });
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col p-8 pb-10 gap-16 h-[80%] w-[58%] overflow-y-scroll overflow-container scrollbar-hide">
        {imageSections.map((section) => (
          <div key={section.id} className={`scroll-image${section.id}`}>
            <img
              src={section.src}
              alt={section.alt}
              className="image rounded-[12px] w-full h-[30rem] object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default VerticalScrolling;
