"use client";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function HorizontalScrolling() {
    const scrollContainerRef = useRef(null);
    const [isHoveringSlider, setIsHoveringSlider] = useState(false);
    const [selectedWords, setSelectedWords] = useState("");
    const [hasScrolled, setHasScrolled] = useState(false);

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

    // GSAP Animation Logic
    const animateImage = (selector, { scale, filter, delay = 0, duration = 1, trigger } = {}) => {
        gsap.from(selector, {
            scale,
            delay,
            filter,
            duration,
            scrollTrigger: trigger
                ? {
                      trigger,
                      scroller: scrollContainerRef.current,
                      horizontal: true,
                      start: "left center",
                      end: "right center",
                      scrub: true,
                  }
                : undefined,
        });
    };
    
    // Animate text container
    const animateTextContainer = (reverse = false) => {
        gsap.to(".text-container", {
            opacity: 1,
            x: reverse ? "0%" : "-100%",
            duration: 1,
            delay: reverse ? 0 : 0.2,
        });
    };

    // Scroll handling for horizontal scrolling
    useEffect(() => {
        const handleScroll = (e) => {
            const container = scrollContainerRef.current;
            if (isHoveringSlider && container?.contains(e.target)) {
                e.preventDefault();
                container.scrollLeft += e.deltaY;

                if (!hasScrolled && container.scrollLeft > 0) {
                    animateTextContainer();
                    setHasScrolled(true);
                } else if (hasScrolled && container.scrollLeft <= 0) {
                    animateTextContainer(true);
                    setHasScrolled(false);
                }
            }
        };

        window.addEventListener("wheel", handleScroll, { passive: false });
        return () => window.removeEventListener("wheel", handleScroll);
    }, [isHoveringSlider, hasScrolled]);

    // Randomize words for text
    useEffect(() => {
        setSelectedWords(
            RANDOM_WORDS.sort(() => 0.5 - Math.random())
                .slice(0, 30)
                .join(" ")
        );
    }, []);

// Initialize GSAP animations
useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate each image
    IMAGES.forEach((_, idx) => {
        animateImage(`.scroll${idx + 1} .img`, {
            scale: idx === 0 ? 0.9 : 0.6, // Scale based on index
            filter: idx === 0 ? "none" : "blur(6px)", // Valid filter
            duration: idx === 0 ? 2 : 0.1, // Custom duration for the first image
            delay: idx === 0 ? 1 : 2,     // Custom delay for the first image
            trigger: `.scroll${idx + 1} .img`,
        });
    });
}, []);


    return (
        <section className="bg-black h-screen pt-20 pl-10">
            <div
                ref={scrollContainerRef}
                className="overflow-x-scroll scrollbar-hide flex w-full gap-36 items-center"
                onMouseEnter={() => setIsHoveringSlider(true)}
                onMouseLeave={() => setIsHoveringSlider(false)}
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

export default HorizontalScrolling;

