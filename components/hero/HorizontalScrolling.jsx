import React, { useState, useEffect } from 'react';

function HorizontalScrolling() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedWords, setSelectedWords] = useState('');  // State for random words

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

  // Only generate random words on the client side
  useEffect(() => {
    const randomWords = [
      'lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit', 'sed', 'do', 'eiusmod', 'tempor', 'incididunt', 'ut', 'labore', 'et', 'dolore', 'magna', 'aliqua', 'ut', 'enim', 'ad', 'minim', 'veniam', 'quis', 'nostrud', 'exercitation', 'ullamco', 'laboris', 'nisi', 'ut', 'aliquip'
    ];

    // Select 30 random words
    const selected = randomWords.sort(() => 0.5 - Math.random()).slice(0, 30).join(' ');
    setSelectedWords(selected);
  }, []);  // Run only once when the component is mounted

  return (
    <div className="flex gap-36 items-center relative w-full h-full overflow-hidden">
      <div className='w-[360rem] text-white text-[78px] font-bold ml-10'>
        <h1>Porsche:</h1>
        <h1>Dream Machine</h1>
        <p className='text-[20px] line-height-10 font-medium'>
          {selectedWords}
        </p>
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
            className="rounded-[12px] w-[60rem] h-[30rem] object-cover"
          />
        ))}
      </div>
    </div>
  );
}

export default HorizontalScrolling;






