"use client";

import React, { useEffect } from "react";
import { gsap } from "gsap";
import HorScroll from "../HorScroll";

export default function Hero() {
  useEffect(() => {
    const backgroundImage = document.querySelector(".background-image");

    // Mousemove handler
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      // Calculate movement percentages
      const moveX = (clientX / innerWidth - 0.5) * 20; // Smaller range for subtle effect
      const moveY = (clientY / innerHeight - 0.5) * 20;

      // Animate the image
      gsap.to(backgroundImage, {
        x: moveX,
        y: moveY,
        duration: 0.5, // Smooth transition
        ease: "power2.out",
      });
    };

    // Reset image position when the mouse leaves the screen
    const handleMouseStop = () => {
      gsap.to(backgroundImage, {
        x: 0,
        y: 0,
        duration: 1, // Smooth reset
        ease: "power4.out",
      });
    };

    // Add event listeners
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseStop);

    // Cleanup event listeners on unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseStop);
    };
  }, []);

  return (
    <div className="relative w-full h-screen">
      {/* Background Image Layer */}
      <div
        className="background-image fixed top-[12rem] left-[17rem]"
        style={{
          width: "850px",
          height: "380px",
          backgroundImage: "url('/assest/logo.png')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          filter: "invert(1) brightness(1)",
          opacity: 0.1,
        }}
      ></div>

      {/* Text Content Layer */}
      <HorScroll />
    </div>
  );
}