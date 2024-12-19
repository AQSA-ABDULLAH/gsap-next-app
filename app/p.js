"use client"; // Necessary for client-side rendering in Next.js
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Home() {
  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Animate h1 headings
    gsap.from("h1", {
      duration: 2,
      delay: 1,
      opacity: 0,
      x: -100,
      stagger: 1,
    });

    // Animate boxes
    gsap.to("#box1", {
      x: 1000,
      duration: 2,
      delay: 1,
    });

    gsap.from("#box2", {
      x: 1000,
      duration: 2,
      delay: 1,
    });

    gsap.to("#box3", {
      x: 1000,
      duration: 2,
      delay: 1,
      rotate: 360,
      backgroundColor: "lightseagreen",
    });

    gsap.to("#circle", {
      x: 1000,
      duration: 2,
      delay: 1,
      rotate: 360,
      repeat: -1, 
      yoyo: true,
    });

    gsap.to("#box4", {
      x: 100,
      y: 100,
      duration: 2,
      delay: 1,
      repeat: -1,
    });

    const tl = gsap.timeline();
    tl.to("#tbox1", {
      x: 1000,
      duration: 2,
      delay: 1,
    });
    tl.to("#tbox2", {
      x: 1000,
      duration: 2,
      ease: "bounce",
    });
    tl.to("#tbox3", {
      x: 1000,
      duration: 2,
      rotate: 360,
      backgroundColor: "lightseagreen",
    });

    const Navtl = gsap.timeline();
    Navtl.from("#header", {
      duration: 1,
      delay: 1,
      opacity: 0,
      x: -100,
    });
    Navtl.from("h4", {
      duration: 1,
      opacity: 0,
      y: -40,
      stagger: 1,
    });

    // ScrollTrigger animations
    gsap.from("#large-box1 #s-box", {
      scale: 0,
      delay: 1,
      duration: 2,
      rotate: 360,
    });

    gsap.from("#large-box2 #s-box", {
      scale: 0,
      delay: 1,
      duration: 2,
      rotate: 360,
      scrollTrigger: {
        trigger: "#large-box2 #s-box",
        scroller: "body",
        markers: true,
        start: "top 60%", 
      },
    });
  }, []);

  return (
    <div>
      <div className="mb-8">
      </div>

      <div className="h-8 w-8 bg-crimson" id="box1"></div>
      <div className="mt-5 h-8 w-8 bg-yellow" id="box2"></div>
      <div className="mt-5 h-8 w-8 bg-blueviolet" id="box3"></div>
      <div className="mt-10 h-16 w-16 rounded-full bg-palevioletred flex justify-center items-center" id="circle">
        <div className="h-2 w-48 bg-brown" id="box"></div>
      </div>
      <div className="mt-5 h-8 w-8 bg-brown" id="box4"></div>

      {/* TIMELINES */}
      <div className="mt-48">
        <h2 className="text-center text-xl font-bold tracking-wider underline mb-12">TIMELINES</h2>
        <div className="h-8 w-8 bg-crimson mb-5" id="tbox1"></div>
        <div className="h-8 w-8 bg-yellow mb-5" id="tbox2"></div>
        <div className="h-8 w-8 bg-blueviolet" id="tbox3"></div>
      </div>

      {/* Navbar */}
      <div className="flex justify-between items-center mt-5 bg-white text-black p-5">
        <h2 className="text-xl font-bold" id="header">Hero</h2>
        <div className="flex gap-12">
          <h4 className="text-lg font-medium">Home</h4>
          <h4 className="text-lg font-medium">Work</h4>
          <h4 className="text-lg font-medium">Service</h4>
          <h4 className="text-lg font-medium">Blogs</h4>
        </div>
      </div>

      {/* Scroll Trigger Animations */}
      <div className="mt-20">
        <h2 className="text-center text-xl font-bold tracking-wider underline mb-12">SCROLL TRIGGER ANIMATIONS</h2>
        <div className="flex justify-center items-center h-160 w-full bg-[rgb(138,65,65)] mb-20" id="large-box1">
          <div className="h-32 w-32 bg-white" id="s-box"></div>
        </div>

        <div className="flex justify-center items-center h-160 w-full bg-[rgb(78,50,104)]" id="large-box2">
          <div className="h-32 w-32 bg-white" id="s-box"></div>
        </div>
      </div>
    </div>
  );
}