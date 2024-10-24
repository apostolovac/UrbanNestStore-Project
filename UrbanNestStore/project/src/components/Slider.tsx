import { useState } from "react";
import slider from "../assets/slider.png"
import slider1 from "../assets/slider1.jpg";
import slider2 from "../assets/slider2.jpg";
import prev from "../assets/prev.png";
import next from "../assets/next.png"

const ImageSlider = () => {

  const images = [slider, slider1, slider2];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the previous image
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Function to go to the next image
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <>
      <div className="relative w-full md:w-[1120px] h-[300px] md:h-[579px] mx-auto overflow-hidden">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="w-full h-full object-cover"
        />
  
        <button
          className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white text-blue-500 w-8 h-8 md:w-10 md:h-10 rounded-full shadow-lg flex justify-center items-center hover:bg-blue-500 hover:text-white"
          onClick={prevSlide}
        >
          <img src={prev} className="w-4 h-4 md:w-6 md:h-6" />
        </button>
  
        <button
          className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white text-blue-500 w-8 h-8 md:w-10 md:h-10 rounded-full shadow-lg flex justify-center items-center hover:bg-blue-500 hover:text-white"
          onClick={nextSlide}
        >
          <img src={next} className="w-4 h-4 md:w-6 md:h-6" />
        </button>
  
        <div className="absolute bottom-2 md:bottom-4 left-0 right-0 flex justify-center">
          {images.map((_, index) => (
            <div
              key={index}
              className={`mx-1 ${
                index === currentIndex
                  ? "w-6 h-2 md:w-8 md:h-2 bg-white rounded-md"
                  : "w-2 h-2 bg-white rounded-full"
              }`}
            />
          ))}
        </div>
      </div>
  
      <div className="flex flex-col md:flex-row justify-between items-center md:w-[1120px] mx-auto mt-6 px-4">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h1 className="text-3xl md:text-6xl font-medium">
            Purely Distinct <span className="text-color-blue">/</span>
          </h1>
          <h1 className="text-3xl md:text-6xl font-medium">
            Purely Superior<span className="text-color-blue">.</span>
          </h1>
        </div>

        <div className="text-center md:text-left max-w-md">
          <p className="text-color-gray text-base md:text-lg">
            <span className="text-color-blue">Purely Distinct</span> is a gift and
            decorations store based in <span className="text-color-blue">Struga, Macedonia</span>. Established in 2024.
          </p>
        </div>
      </div>
    </>
  );
};

export default ImageSlider;