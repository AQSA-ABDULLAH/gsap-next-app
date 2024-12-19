"use client"; // Mark this file as a client component

import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function VerticalScrolling() {
    useEffect(() => {
        // Register ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger);
    
        // GSAP animation for #large-box1 #s-box
        gsap.from(".scroll-image1 .image", {
          scale: 0,
          delay: 1,
          duration: 2,
        });
    
        // GSAP animation with ScrollTrigger for #large-box2 #s-box
        gsap.from(".scroll-image2 .image", {
          scale: 0,
          duration: 2,
          scrollTrigger: {
            trigger: ".scroll-image2 .image",
            scroller: ".overflow-container",
            start: "top 80%", 
            end: "bottom top",
            scrub: true,
          },
        });

        gsap.from(".scroll-image3 .image", {
            scale: 0,
            duration: 2,
            scrollTrigger: {
              trigger: ".scroll-image3 .image",
              scroller: ".overflow-container",
              start: "top 80%", 
              end: "bottom top",
              scrub: true,
            },
          });

          
        gsap.from(".scroll-image4 .image", {
            scale: 0,
            duration: 2,
            scrollTrigger: {
              trigger: ".scroll-image4 .image",
              scroller: ".overflow-container",
              start: "top 80%", 
              end: "bottom top",
              scrub: true,
            },
          });
    
      }, []);

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="flex flex-col py-32 px-8 gap-16 h-[80%] w-[58%] overflow-y-scroll scroll-image overflow-container">
            <div className="scroll-image1">
            <img
              src="./assest/1.png"
              alt="image"
              className="image rounded-[12px] w-full h-[30rem] object-cover"
            />
          </div>

          <div className="scroll-image2">
            <img
              src="./assest/1.png"
              alt="image"
              className="image rounded-[12px] w-full h-[30rem] object-cover"
            />
          </div>

          <div className="scroll-image3">
            <img
              src="./assest/1.png"
              alt="image"
              className="image rounded-[12px] w-full h-[30rem] object-cover"
            />
          </div>

          <div className="scroll-image4">
            <img
              src="./assest/1.png"
              alt="image"
              className="image rounded-[12px] w-full h-[30rem] object-cover"
            />
          </div>
            </div>
        </div>
    );
}

export default VerticalScrolling;