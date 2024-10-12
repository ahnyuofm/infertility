import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  return (
    <div className="relative w-full h-64 bg-blue-500 rounded-lg overflow-hidden">
      <div className="absolute top-2 left-2 w-6 h-6 bg-yellow-400 rounded-full"></div>
      <div className="absolute top-8 right-2 w-6 h-6 bg-yellow-400 rounded-full"></div>
      <div className="absolute inset-0 flex items-center justify-center text-white text-center p-4">
        <div>
          <h2 className="text-xl font-bold">{items[currentIndex].title}</h2>
          <p className="mt-2 text-sm">{items[currentIndex].description}</p>
        </div>
      </div>
      <button onClick={prevSlide} className="absolute left-1 top-1/2 transform -translate-y-1/2 text-white">
        <ChevronLeft size={20} />
      </button>
      <button onClick={nextSlide} className="absolute right-1 top-1/2 transform -translate-y-1/2 text-white">
        <ChevronRight size={20} />
      </button>
      <div className="absolute bottom-2 left-0 right-0 flex justify-center">
        {items.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 mx-1 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;