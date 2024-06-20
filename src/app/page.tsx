import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Testimonial from '@/components/Testimonial';
import AboutUs from '@/components/AboutUs';
import Product from '@/components/Product';

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs/>
      <Services/>
      <section id="product">
        <Product/>
      </section>
      <Testimonial/>
      <section id="contact">
        <Contact/>
      </section>
      <main className="container mx-auto mt-4">
      </main>
    </div>
  );
};

export default Home;
