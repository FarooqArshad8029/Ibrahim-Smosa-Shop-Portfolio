import React, { useState } from "react";
import samosaImg from "../assets/Smosa_2.png";
import kachoriImg from "../assets/Kichori2.jpeg";
import rollImg from "../assets/Roll.jpg";
import drinksImg from "../assets/Bottles.jpg";

const products = [
  {
    name: "Samosa",
    description: "Crispy and delicious traditional samosas.",
    image: samosaImg,
  },
  {
    name: "Kachori",
    description: "Freshly fried kachoris with savory fillings.",
    image: kachoriImg,
  },
  {
    name: "Roll",
    description: "Chicken and vegetable rolls for a tasty snack.",
    image: rollImg,
  },
  {
    name: "Cold Drinks",
    description: "Pepsi, 7Up, Sprite, and Mirinda - Regular and 1.5 Liter sizes.",
    image: drinksImg,
  },
];

const ProductSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-gray-100 py-12">  
  <div className="max-w-5xl mx-auto my-16 p-6 bg-white shadow-2xl rounded-3xl">
    <div className="py-6 px-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-600 rounded-t-3xl">
      <h2 className="text-4xl font-bold text-center text-white mb-2">
        Our Products
      </h2>
      <p className="text-lg text-center text-white/90">
        Discover our delicious and freshly prepared offerings.
      </p>
    </div>

    <div className="relative mt-8 overflow-hidden">
      <div
        className="flex transition-transform duration-700"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {products.map((product, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full flex justify-center items-center overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[300px] sm:h-[500px] object-cover rounded-2xl shadow-md"
            />
          </div>
        ))}
      </div>

      <div className="text-center mt-4">
        <h3 className="text-2xl font-bold text-gray-800">
          {products[currentIndex].name}
        </h3>
        <p className="text-base text-gray-600 mt-2">
          {products[currentIndex].description}
        </p>
      </div>

      <div className="flex justify-center mt-6 space-x-3">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-4 h-4 rounded-full ${
              currentIndex === index
                ? "bg-gray-900"
                : "bg-gray-400 hover:bg-gray-500"
            }`}
          ></button>
        ))}
      </div>

      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 p-3 rounded-full shadow-md hover:shadow-lg transition duration-200"
        aria-label="Previous"
      >
        <span className="text-white text-xl font-bold">&lt;</span>
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 p-3 rounded-full shadow-md hover:shadow-lg transition duration-200"
        aria-label="Next"
      >
        <span className="text-white text-xl font-bold">&gt;</span>
      </button>
    </div>
  </div>
</div>

  );
};

export default ProductSection;
