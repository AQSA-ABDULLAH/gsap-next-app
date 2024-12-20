"use client";
import { useRef, useEffect, useState } from "react";

function HorScroll() {
    const scrollContainerRef = useRef(null);
    const [isHoveringSlider, setIsHoveringSlider] = useState(false);
    const [selectedWords, setSelectedWords] = useState('');

    useEffect(() => {
        const handleScroll = (e) => {
            const container = scrollContainerRef.current;
            if (isHoveringSlider && container && container.contains(e.target)) {
                // Prevent vertical scroll and enable horizontal scroll
                e.preventDefault();
                container.scrollLeft += e.deltaY;
            }
        };

        window.addEventListener("wheel", handleScroll, { passive: false });

        return () => {
            window.removeEventListener("wheel", handleScroll);
        };
    }, [isHoveringSlider]);


    useEffect(() => {
        const randomWords = [
            'lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit', 'sed', 'do', 'eiusmod', 'tempor', 'incididunt', 'ut', 'labore', 'et', 'dolore', 'magna', 'aliqua', 'ut', 'enim', 'ad', 'minim', 'veniam', 'quis', 'nostrud', 'exercitation', 'ullamco', 'laboris', 'nisi', 'ut', 'aliquip'
        ];

        // Select 30 random words
        const selected = randomWords.sort(() => 0.5 - Math.random()).slice(0, 30).join(' ');
        setSelectedWords(selected);
    }, []);

    

    return (
        <section className="bg-black py-16 pt-28 pl-10 h-screen flex gap-48 items-center">
            {/* Text Container with GSAP animation */}
            <div className='w-[80rem] text-white text-[74px] font-bold text-container'>
                <h1>Porsche:</h1>
                <h1>Dream Machine</h1>
                <p className='text-[20px] line-height-10 font-medium'>
                    {selectedWords}
                </p>
            </div>
            <div
                ref={scrollContainerRef}
                className="flex gap-5 overflow-x-scroll whitespace-nowrap w-full"
                onMouseEnter={() => setIsHoveringSlider(true)} // Enable horizontal scroll
                onMouseLeave={() => setIsHoveringSlider(false)} // Disable horizontal scroll
            >
                {/* Adjusted asset paths */}
                <div className="scroll-image1 flex-shrink-0">
                    <img
                        src="./assest/1.png"
                        alt="image"
                        className="rounded-[12px] w-[40rem] h-[30rem] object-cover"
                    />
                </div>
                <div className="scroll-image1 flex-shrink-0">
                    <img
                        src="./assest/1.png"
                        alt="image"
                        className="rounded-[12px] w-[40rem] h-[30rem] object-cover"
                    />
                </div>
                <div className="scroll-image1 flex-shrink-0">
                    <img
                        src="./assest/1.png"
                        alt="image"
                        className="rounded-[12px] w-[40rem] h-[30rem] object-cover"
                    />
                </div>
                <div className="scroll-image1 flex-shrink-0">
                    <img
                        src="./assest/1.png"
                        alt="image"
                        className="rounded-[12px] w-[40rem] h-[30rem] object-cover"
                    />
                </div>
            </div>
        </section>
    );
}

export default HorScroll;
