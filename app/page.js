"use client";

import React, { useEffect, useRef, useState } from "react";
import HorScroll from "@/components/HorScroll";
import VerScroll from "@/components/VerScroll";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "@/components/HorizontalScroll/HeroSection";

export default function Page() {
  const horScrollRef = useRef(null);
  const verScrollRef = useRef(null);
  const [hasScrolledHorizontal, setHasScrolledHorizontal] = useState(false);

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
        setHasScrolledHorizontal(true); // Update state when scrolling horizontally
      } else if (horScroll.scrollLeft > 0 && e.deltaY < 0) {
        horScroll.scrollLeft += e.deltaY;
        setHasScrolledHorizontal(true); // Update state for horizontal scroll
      } else if (horScroll.scrollLeft >= maxScrollLeft && e.deltaY > 0) {
        verScroll.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleVerScroll = (e) => {
    e.preventDefault();
    const horScroll = horScrollRef.current;
    const verScroll = verScrollRef.current;

    if (verScroll) {
      if (verScroll.scrollTop === 0 && e.deltaY < 0) {
        horScroll.scrollIntoView({ behavior: "smooth" });
      } else {
        verScroll.scrollTop += e.deltaY;
      }
    }
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (hasScrolledHorizontal) {
      // Text container animation
      gsap.to(".text-container", {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".text-container",
          start: "top 80%",
          end: "bottom top",
          scrub: true,
          markers: true, // Enable markers for debugging
        },
      });

      // Animate images on horizontal scroll
      imageSections.forEach((_, idx) => {
        gsap.from(`.scroll${idx + 1} .img`, {
          scale: idx === 0 ? 0.9 : 0.6,
          filter: idx === 0 ? "none" : "blur(6px)",
          duration: 1.5,
          delay: 0.2,
          scrollTrigger: {
            trigger: `.scroll${idx + 1} .img`,
            scroller: horScrollRef.current,
            horizontal: true,
            start: "left center",
            end: "right center",
            scrub: true,
            markers: true, // Enable markers for debugging
          },
        });
      });
    }
  }, [hasScrolledHorizontal, imageSections]);


  

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
  }, imageSections);

  return (
    <div className="h-screen w-screen overflow-hidden bg-black text-white flex flex-col">
      {/* Horizontal Scroll Section */}
      <div
        ref={horScrollRef}
        onWheel={handleScroll}
        className="h-screen w-screen flex overflow-x-scroll scrollbar-hide flex-shrink-0"
      >
        <Hero />
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