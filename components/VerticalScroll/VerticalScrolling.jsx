import React from 'react';

function VerticalScrolling() {
    // List of images
    const images = [
        "/assest/1.png",
        "/assest/1.png",
        "/assest/1.png",
        "/assest/1.png",
        "/assest/1.png",
        "/assest/1.png",
    ];
    return (
        <div className="flex justify-center items-center bg-black mt-40">
            <div className="flex flex-col gap-16">
                {images.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`Slide ${index}`}
                        className="rounded-[12px] w-[46rem] h-[30rem] object-cover"
                    />
                ))}
            </div>
        </div>
    );
}

export default VerticalScrolling;
