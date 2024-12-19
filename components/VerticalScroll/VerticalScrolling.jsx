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
        <div className="flex justify-center items-center h-screen bg-black">
            <div className="flex flex-col p-8 gap-16 overflow-y-scroll h-[80%] w-[58%] scrollbar-hide">
                {images.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`Slide ${index}`}
                        className="rounded-[12px] w-full h-[30rem] object-cover"
                    />
                ))}
            </div>
        </div>
    );
}

export default VerticalScrolling;




