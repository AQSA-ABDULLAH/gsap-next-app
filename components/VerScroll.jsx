"use client"; // Mark this file as a client component

const imageSections = [
  { id: 1, src: "./assest/1.png", alt: "Image 1" },
  { id: 2, src: "./assest/2.png", alt: "Image 2" },
  { id: 3, src: "./assest/3.png", alt: "Image 3" },
  { id: 4, src: "./assest/4.png", alt: "Image 4" },
  { id: 5, src: "./assest/1.png", alt: "Image 1" },
  { id: 6, src: "./assest/2.png", alt: "Image 2" },
  { id: 7, src: "./assest/3.png", alt: "Image 3" },
  { id: 8, src: "./assest/4.png", alt: "Image 4" },
];

function VerScroll() {

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col p-8 pb-20 gap-10 h-[80%] w-[58%]">
        {imageSections.map((section) => (
          <div key={section.id} className={`scroll-image${section.id}`}>
            <img
              src={section.src}
              alt={section.alt}
              className="image w-[46rem] h-[28rem] object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default VerScroll;

