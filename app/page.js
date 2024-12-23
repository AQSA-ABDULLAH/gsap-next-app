"use client";

import React, { useEffect, useRef, useState } from "react";
import VerScroll from "@/components/VerScroll";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "@/components/HorizontalScroll/HeroSection";

export default function Page() {
  const horScrollRef = useRef(null);
  const verScrollRef = useRef(null);
  const [hasScrolledHorizontal, setHasScrolledHorizontal] = useState(false);

  const IMAGES = [
    "./assest/1.png",
    "./assest/2.png",
    "./assest/3.png",
    "./assest/4.png",
    "./assest/1.png",
    "./assest/2.png",
    "./assest/3.png",
    "./assest/4.png",
    "./assest/1.png",
    "./assest/2.png",
    "./assest/3.png",
    "./assest/4.png",
  ];

  const imageSections = [
    { id: 1, image: "./assest/1.png" },
    { id: 2, image: "./assest/2.png" },
    { id: 3, image: "./assest/3.png" },
    { id: 4, image: "./assest/4.png" },
    { id: 5, image: "./assest/1.png" },
    { id: 6, image: "./assest/2.png" },
    { id: 7, image: "./assest/3.png" },
    { id: 8, image: "./assest/4.png" },
  ];

  const handleScroll = (e) => {
    e.preventDefault();

    const horScroll = horScrollRef.current;
    const verScroll = verScrollRef.current;

    if (horScroll) {
      const maxScrollLeft = horScroll.scrollWidth - horScroll.clientWidth;

      if (horScroll.scrollLeft < maxScrollLeft && e.deltaY > 0) {
        horScroll.scrollLeft += e.deltaY;
        animateTextContainer();
        setHasScrolledHorizontal(true); // Update state when scrolling horizontally
      } else if (horScroll.scrollLeft > 0 && e.deltaY < 0) {
        animateTextContainer(true);
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

  // TEXT ANIMATION
  const animateTextContainer = (reverse = false) => {
    gsap.to(".text-container", {
      opacity: 1,
      x: reverse ? "0%" : "-100%",
      duration: 1,
      delay: reverse ? 0 : 0.2,
    });
  };

  // HORIZONTAL SCROLLER IMAGES ANIMATIONS
  const animateImage = (selector, { scale, filter, delay = 0, duration = 1, trigger } = {}) => {
    gsap.from(selector, {
      scale,
      delay,
      filter,
      duration,
      scrollTrigger: trigger
        ? {
          trigger,
          scroller: horScrollRef.current,
          horizontal: true,
          start: "left center",
          end: "right center",
          scrub: true,
        }
        : undefined,
    });
  };

  // VERTICAL SCROLL IMAGE ANIMATIONS
  const animateVerScrollImages = () => {
    imageSections.forEach((section) => {
      gsap.from(`.scroll-image${section.id} .image`, {
        scale: 0.45,
        duration: 0.1,
        scrollTrigger: {
          trigger: `.scroll-image${section.id} .image`,
          scroller: verScrollRef.current,
          start: "top 80%",
          end: "bottom top",
          scrub: true,
        },
      });
    });
  };

  // Initialize GSAP animations
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate each image in the horizontal scroll
    IMAGES.forEach((_, idx) => {
      animateImage(`.scroll${idx + 1} .img`, {
        scale: idx === 0 ? 0.9 : 0.6, // Scale based on index
        filter: idx === 0 ? "none" : "blur(6px)", // Valid filter
        duration: idx === 0 ? 2 : 0.1, // Custom duration for the first image
        delay: idx === 0 ? 1 : 2, // Custom delay for the first image
        trigger: `.scroll${idx + 1} .img`,
      });
    });

    // Add animation for vertical scroll images
    animateVerScrollImages();
  }, []);

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
      <div className="flex justify-center items-center h-screen">
        <div
          ref={verScrollRef}
          onWheel={handleVerScroll}
          className="flex flex-col p-8 pb-20 gap-10 h-[80%] w-[58%] overflow-y-scroll overflow-container scrollbar-hide"
        >
          {imageSections.map((section, idx) => (
            <div key={section.id} className={`scroll-image${section.id}`}>
              <img src={section.image} alt={`scroll image ${section.id}`} className="image" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

