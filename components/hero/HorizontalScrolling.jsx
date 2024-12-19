import React, { useState, useEffect } from 'react';

function HorizontalScrolling() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // List of images
  const images = [
    "/assest/1.png",
    "/assest/1.png",
    "/assest/1.png",
    "/assest/1.png",
    "/assest/1.png",
    "/assest/1.png",
  ];

  // Handle next and previous slides
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Handle mouse scroll event
  const handleWheel = (e) => {
    if (e.deltaY > 0) {
      // Scroll down, move to next slide
      nextSlide();
    } else {
      // Scroll up, move to previous slide
      prevSlide();
    }
  };

  useEffect(() => {
    // Attach the wheel event listener when the component mounts
    window.addEventListener('wheel', handleWheel, { passive: true });

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div className="flex gap-8 items-center relative w-full h-full overflow-hidden">
      <div className='w-[200rem] text-white text-[80px]'>
            <h1>Porsche:</h1>
            <h1>Dream Machine</h1>
            <p>hedfjhS</p>
          </div>
      {/* Image Slider Container */}
        <div
          className="flex gap-9 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Slide ${index}`}
              className="rounded-[12px] w-full h-full object-cover"
            />
          ))}
     
      </div>
      
    </div>
  );
}

export default HorizontalScrolling;





