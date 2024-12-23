import React from 'react';

export default function VerScroll() {
  return (
    <div className="flex flex-col gap-10 p-10 bg-black text-white">
      {Array(5)
        .fill(null)
        .map((_, index) => (
          <div key={index} className="text-[30px] text-white">
            <h1>Vertical Section {index + 1}</h1>
            <p>Content goes here...</p>
          </div>
        ))}
    </div>
  );
}

