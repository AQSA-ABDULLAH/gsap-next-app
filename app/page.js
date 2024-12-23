"use client";

import HorScroll from '@/components/HorScroll';
import VerScroll from '@/components/VerScroll';
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Page() {
  const horScrollRef = useRef(null);
  const verScrollRef = useRef(null);

  const imageSections = [
    { id: 1, src: "./assest/1.png", alt: "Image 1" },
    { id: 2, src: "./assest/2.png", alt: "Image 2" },
    { id: 3, src: "./assest/3.png", alt: "Image 3" },
    { id: 4, src: "./assest/4.png", alt: "Image 4" },
    { id: 5, src: "./assest/1.png", alt: "Image 1" },
    { id: 6, src: "./assest/2.png", alt: "Image 2" },
    { id: 7, src: "./assest/3.png", alt: "Image 3" },
    { id: 8, src: "./assest/4.png", alt: "Image 4" },
  ];

  const handleScroll = (e) => {
    e.preventDefault();

    const horScroll = horScrollRef.current;
    const verScroll = verScrollRef.current;

    if (horScroll) {
      const maxScrollLeft = horScroll.scrollWidth - horScroll.clientWidth;

      if (horScroll.scrollLeft < maxScrollLeft && e.deltaY > 0) {
        horScroll.scrollLeft += e.deltaY;
      } else if (horScroll.scrollLeft > 0 && e.deltaY < 0) {
        horScroll.scrollLeft += e.deltaY;
      } else if (horScroll.scrollLeft >= maxScrollLeft && e.deltaY > 0) {
        verScroll.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleVerScroll = (e) => {
    e.preventDefault();
    const horScroll = horScrollRef.current;
    const verScroll = verScrollRef.current;

    if (verScroll) {
      if (verScroll.scrollTop === 0 && e.deltaY < 0) {
        horScroll.scrollIntoView({ behavior: 'smooth' });
      } else {
        verScroll.scrollTop += e.deltaY;
      }
    }
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    imageSections.forEach((section) => {
      gsap.from(`.scroll-image${section.id} .image`, {
        scale: 0.45,
        duration: 0.1,
        scrollTrigger: {
          trigger: `.scroll-image${section.id} .image`,
          scroller: ".overflow-container",
          start: "top bottom", // Changed to trigger earlier and works for both scroll directions
          end: "bottom top",  // Works for both scroll directions as well
          scrub: true,  // Smooth animation
          markers: false,  // You can enable markers for debugging if needed
        },
      });
    });
  }, [imageSections]);

  return (
    <div className="h-screen w-screen overflow-hidden bg-black text-white flex flex-col">
      {/* Horizontal Scroll Section */}
      <div
        ref={horScrollRef}
        onWheel={handleScroll}
        className="h-screen w-screen flex overflow-x-scroll flex-shrink-0"
      >
        <HorScroll />
      </div>

      {/* Vertical Scroll Section */}
      <div
        ref={verScrollRef}
        onWheel={handleVerScroll}
        className="h-screen w-screen overflow-y-scroll flex-shrink-0 overflow-container"
      >
        <VerScroll />
      </div>
    </div>
  );
}


