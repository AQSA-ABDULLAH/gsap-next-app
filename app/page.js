"use client";

import HorScroll from '@/components/HorScroll';
import VerScroll from '@/components/VerScroll';
import React, { useRef } from 'react';

export default function Page() {
  const horScrollRef = useRef(null);
  const verScrollRef = useRef(null);

  const handleScroll = (e) => {
    e.preventDefault();

    const horScroll = horScrollRef.current;
    const verScroll = verScrollRef.current;

    if (horScroll) {
      const maxScrollLeft = horScroll.scrollWidth - horScroll.clientWidth;

      if (horScroll.scrollLeft < maxScrollLeft && e.deltaY > 0) {
        horScroll.scrollLeft += e.deltaY; // Scroll horizontally
      } else if (horScroll.scrollLeft > 0 && e.deltaY < 0) {
        horScroll.scrollLeft += e.deltaY; // Scroll horizontally
      } else if (horScroll.scrollLeft >= maxScrollLeft && e.deltaY > 0) {
        // Transition to vertical scroll
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
        // Transition back to horizontal scroll
        horScroll.scrollIntoView({ behavior: 'smooth' });
      } else {
        verScroll.scrollTop += e.deltaY; // Scroll vertically
      }
    }
  };

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
        className="h-screen w-screen overflow-y-scroll flex-shrink-0"
      >
        <VerScroll />
      </div>
    </div>
  );
}

