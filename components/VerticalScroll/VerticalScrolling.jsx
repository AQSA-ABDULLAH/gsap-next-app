"use client"; // Mark this file as a client component

import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const imageSections = [
  { id: 1, src: "./assest/1.png", alt: "Image 1" },
  { id: 2, src: "./assest/2.jpeg", alt: "Image 2" },
  { id: 3, src: "./assest/3.png", alt: "Image 3" },
  { id: 4, src: "./assest/4.png", alt: "Image 4" },
  { id: 5, src: "./assest/1.png", alt: "Image 1" },
  { id: 6, src: "./assest/2.jpeg", alt: "Image 2" },
  { id: 7, src: "./assest/3.png", alt: "Image 3" },
  { id: 8, src: "./assest/4.png", alt: "Image 4" },
];

function VerticalScrolling() {
  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Define GSAP animations for all sections
    imageSections.forEach((section) => {
      gsap.from(`.scroll-image${section.id} .image`, {
        scale: 0.45,
        duration: 0.1,
        scrollTrigger: {
          trigger: `.scroll-image${section.id} .image`,
          scroller: ".overflow-container",
          start: "top 80%",
          end: "bottom top",
          scrub: true,
        },
      });
    });
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col p-8 pb-20 gap-10 h-[80%] w-[58%] overflow-y-scroll overflow-container scrollbar-hide">
        {imageSections.map((section) => (
          <div key={section.id} className={`scroll-image${section.id}`}>
            <img
              src={section.src}
              alt={section.alt}
              className="image w-[46rem] h-[28rem] object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default VerticalScrolling;
