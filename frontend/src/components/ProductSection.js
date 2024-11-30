import React from "react";
import samosaImg from "../assets/Smosa_2.png";
import kachoriImg from "../assets/Kichori2.jpeg";
import rollImg from "../assets/Roll.jpg";
import drinksImg from "../assets/Bottles.jpg";
import biryaniImg from "../assets/biryani.jpg";
import barbiQueImg from "../assets/Barbique2.jpg";

const products = [
  {
    name: "SAMOSA", // Capitalized heading
    description: "Crispy and delicious traditional samosas.",
    image: samosaImg,
  },
  {
    name: "KACHORI", // Capitalized heading
    description: "Freshly fried kachoris with savory fillings.",
    image: kachoriImg,
  },
  {
    name: "ROLL", // Capitalized heading
    description: "Chicken and vegetable rolls for a tasty snack.",
    image: rollImg,
  },
  {
    name: "COLD DRINKS", // Capitalized heading
    description: "Pepsi, 7Up, Sprite & Mirinda - Regular and 1.5 Liter sizes.",
    image: drinksImg,
  },
  {
    name: "BIRYANI", // Capitalized heading
    description: "Aromatic, spiced rice with tender meat cooked to perfection. A feast for your senses!",
    image: biryaniImg,
    comingSoon: true,
  },
  {
    name: "BARBECUE", // Capitalized heading
    description: "Delicious smoky grilled meats coming soon. Stay tuned for the perfect BBQ experience!",
    image: barbiQueImg,
    comingSoon: true,
  },
];


const ProductCard = ({ image, title, description, comingSoon }) => {
  return (
    <div className="bg-[#1a1a1a] border border-[#D77647] rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl animate-fadeInUp">
      <img
        src={image}
        alt={title}
        className="w-full h-56 object-cover rounded-t-xl"
      />
      <div className="p-4 relative">
        {comingSoon && (
          <div className="absolute top-0 right-0 bg-[#D77647] text-white text-xs font-semibold px-3 py-1 rounded-bl-xl">
            Coming Soon
          </div>
        )}
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-gray-400 mt-2">{description}</p>
      </div>
    </div>
  );
};

const ProductSection = () => {
  return (
    <div className="bg-gradient-to-b from-[#000000] via-[#1a1a1a] to-[#D77647] py-12">
      <div className="max-w-7xl mx-auto my-16 p-6">
        <div className="text-center mb-12">
          <h2 className="text-6xl font-light text-white mb-4 animate-fadeIn transform transition duration-500 hover:scale-105 hover:text-[#D77647]">
            MENU
          </h2>
          <p className="text-lg text-gray-400 mt-2 opacity-80">
            Explore our mouth-watering offerings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              image={product.image}
              title={product.name}
              description={product.description}
              comingSoon={product.comingSoon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
