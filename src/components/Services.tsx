import React from 'react';
import { GiCardboardBox, GiCargoShip, GiWorld, GiCheckMark } from 'react-icons/gi';

const Services: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto p-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Our Services</h2>
        <div className="flex flex-wrap justify-center">
          <div className="p-4 text-center w-1/2 md:w-1/4 max-w-sm mx-auto bg-cyan-950 rounded-lg">
            <GiCardboardBox className="text-3xl text-yellow-500 mx-auto mb-10" />
            <h3 className="font-semibold text-white">Packaging & Labeling</h3>
            <p className="mt-2 text-white font-thin">
              We provide packaging and labeling solutions tailored to your product needs.
            </p>
          </div>
          <div className="p-4 text-center w-1/2 md:w-1/4 bg-cyan-950 rounded-lg">
            <GiCargoShip className="text-3xl text-yellow-500 mx-auto mb-10" />
            <h3 className="font-semibold text-white">International Shipping</h3>
            <p className="mt-2 text-white font-thin">
              We handle international shipping logistics to ensure your products reach global markets.
            </p>
          </div>
          <div className="p-4 text-center w-1/2 md:w-1/4 bg-cyan-950 rounded-lg">
            <GiWorld className="text-3xl text-yellow-500 mx-auto mb-10" />
            <h3 className="font-semibold text-white">Export Consultation</h3>
            <p className="mt-2 text-white font-thin">
              Consult on export regulations and strategies to expand your great business.
            </p>
          </div>
          <div className="p-4 text-center w-1/2 md:w-1/4 bg-cyan-950 rounded-lg">
            <GiCheckMark className="text-3xl text-yellow-500 mx-auto mb-10" />
            <h3 className="font-semibold text-white">Quality Control</h3>
            <p className="mt-2 text-white font-thin">
              We ensure stringent quality control measures to maintain product excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
