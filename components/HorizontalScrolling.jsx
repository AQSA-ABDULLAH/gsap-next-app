import React from 'react';

export default function HorizontalScrolling() {
  return (
    <div className="relative w-full h-screen">
      {/* Background Layer */}
      <div 
        className="absolute inset-0 bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: "url('/assest/logo.png')", 
          backgroundSize: '60% 40%',
          filter: 'invert(1) brightness(1)', 
          opacity: 0.2 
        }}
      ></div>

      {/* Text Content Layer */}
      <div className="relative z-10 text-white p-8">
        <h1 className="text-4xl font-bold">Heading</h1>
        <p className="mt-4">Random</p>
      </div>
    </div>
  );
}

    

