"use client";
import { useRef, useEffect, useState } from "react";

export default function HorScroll() {
  const [selectedWords, setSelectedWords] = useState("");

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

  const RANDOM_WORDS = [
    "lorem", "ipsum", "dolor", "sit", "amet", "consectetur",
    "adipiscing", "elit", "sed", "do", "eiusmod", "tempor",
    "incididunt", "ut", "labore", "et", "dolore", "magna",
    "aliqua", "ut", "enim", "ad", "minim", "veniam", "quis",
    "nostrud", "exercitation", "ullamco", "laboris", "nisi",
    "ut", "aliquip",
  ];

  return (
    <section className="bg-black pt-20 pl-10">
      <div
        className="flex w-full gap-36 items-center"
      >
        {/* Text Container */}
        <div className="text-container min-w-[40rem] text-white text-[74px] font-bold">
          <h1>Porsche:</h1>
          <h1>Dream Machine</h1>
          <p className="text-[20px] leading-10 font-medium">{selectedWords}</p>
        </div>
        {/* Images */}
        <div className="flex gap-16 whitespace-nowrap">
          {IMAGES.map((src, idx) => (
            <div key={idx} className={`scroll${idx + 1} flex-shrink-0`}>
              <img
                src={src}
                alt={`image-${idx + 1}`}
                className="img rounded-[12px] w-[40rem] h-[30rem] object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

