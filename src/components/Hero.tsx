import React from 'react';

const Hero: React.FC = () => {
  return (
    <div
      className="bg-cover bg-center h-screen flex items-center justify-start"
      style={{ backgroundImage: "url('/hero.jpg')" }}
    >
      <div className="text-left text-white ml-20 mb-40">
        <h1 className="text-5xl font-bold mb-4 w-2/3">Trusted Exporter for High Quality Commodities</h1>
        <p className="text-sl font-thin mb-8 w-1/2">We specialize in shipping superior commodities worldwide, ensuring quality and timeliness with every shipment.</p>
        <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Hero;
