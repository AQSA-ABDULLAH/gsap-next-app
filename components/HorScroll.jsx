import React from 'react';

export default function HorScroll() {
  return (
    <div className="flex gap-20 bg-black px-10">
      {Array(12)
        .fill(null)
        .map((_, index) => (
          <div key={index} className="text-[30px] text-white">
            <h1>Item {index + 1}</h1>
            <h2>Content</h2>
          </div>
        ))}
    </div>
  );
}

