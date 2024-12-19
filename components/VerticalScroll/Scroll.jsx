"use client";

import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function Scroll() {
  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // GSAP animation for #large-box1 #s-box
    gsap.from(".scroll-image1 .image", {
      scale: 0,
      delay: 1,
      duration: 2,
      rotate: 360,
    });

    // GSAP animation with ScrollTrigger for #large-box2 #s-box
    gsap.from(".scroll-image2 .image", {
      scale: 0,
      delay: 1,
      duration: 2,
      rotate: 360,
      scrollTrigger: {
        trigger: ".scroll-image2 .image",
        scroller: ".overflow-container", // Use the custom scroll container
        start: "top 80%", // You can adjust this as needed to define when the animation starts
        end: "bottom top", // End the animation when the image reaches the top of the viewport
        scrub: true, // Optional: make the animation follow the scroll
      },
    });

  }, []);

  return (
    <section>
      <div className="text-[80px]">verscroll</div>
      <div className="flex justify-center items-center">
        <div className="overflow-container flex flex-col p-8 gap-16 h- w-[58%] overflow-y-scroll">
          <div className="scroll-image1">
            <img
              src="./assest/1.png"
              alt="image"
              className="image rounded-[12px] w-full h-[20rem] object-cover"
            />
          </div>

          <div className="scroll-image2">
            <img
              src="./assest/1.png"
              alt="image"
              className="image rounded-[12px] w-full h-[30rem] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Scroll;

