"use client";
import { useRef, useEffect, useState } from "react";
import { gsap } from 'gsap';

function HorScroll() {
    const scrollContainerRef = useRef(null);
    const [isHoveringSlider, setIsHoveringSlider] = useState(false);
    const [selectedWords, setSelectedWords] = useState('');
    const [hasScrolled, setHasScrolled] = useState(false);

    // Function to animate the text container
    const animateTextContainer = (reverse = false) => {
        if (reverse) {
            gsap.to(".text-container", {
                opacity: 1,
                x: '0%',
                duration: 1,
            });
        } else {
            gsap.to(".text-container", {
                opacity: 1,
                x: '-100%',
                duration: 1,
                delay: 0.2
            });
        }
    };

    useEffect(() => {
        const handleScroll = (e) => {
            const container = scrollContainerRef.current;

            if (isHoveringSlider && container && container.contains(e.target)) {
                // Prevent vertical scroll and enable horizontal scroll
                e.preventDefault();
                container.scrollLeft += e.deltaY;

                // Trigger animation when scrolling forward
                if (!hasScrolled && container.scrollLeft > 0) {
                    animateTextContainer();
                    setHasScrolled(true);
                }

                // Trigger reverse animation when scrolling back to the start
                if (hasScrolled && container.scrollLeft <= 0) {
                    animateTextContainer(true); // Reverse animation
                    setHasScrolled(false);
                }
            }
        };

        window.addEventListener("wheel", handleScroll, { passive: false });

        return () => {
            window.removeEventListener("wheel", handleScroll);
        };
    }, [isHoveringSlider, hasScrolled]);

    useEffect(() => {
        const randomWords = [
            'lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit', 'sed', 'do', 'eiusmod', 'tempor', 'incididunt', 'ut', 'labore', 'et', 'dolore', 'magna', 'aliqua', 'ut', 'enim', 'ad', 'minim', 'veniam', 'quis', 'nostrud', 'exercitation', 'ullamco', 'laboris', 'nisi', 'ut', 'aliquip'
        ];

        // Select 30 random words
        const selected = randomWords.sort(() => 0.5 - Math.random()).slice(0, 30).join(' ');
        setSelectedWords(selected);
    }, []);

    return (
        <section className="bg-black h-screen pt-20 pl-10 ">
            <div
                ref={scrollContainerRef}
                className="overflow-x-scroll scrollbar-hide flex gap-48 items-center"
                onMouseEnter={() => setIsHoveringSlider(true)}
                onMouseLeave={() => setIsHoveringSlider(false)}
            >
                {/* Text Container with GSAP animation */}
                <div className='text-container w-[90rem] text-white text-[74px] font-bold'>
                    <h1>Porsche:</h1>
                    <h1>Dream Machine</h1>
                    <p className='text-[20px] line-height-10 font-medium'>
                        {selectedWords}
                    </p>
                </div>
                <div className="flex gap-16 whitespace-nowrap w-full">
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
            </div>
        </section>
    );
}

export default HorScroll;


