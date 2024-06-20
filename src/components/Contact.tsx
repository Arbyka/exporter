import React from 'react';
import { FiPhone, FiMail, FiTwitter, FiFacebook, FiInstagram, FiLinkedin } from 'react-icons/fi';
import Link from 'next/link';

const Contact: React.FC = () => {
  return (
    <section className="">
    <h2 className="text-4xl font-bold text-center mb-12 text-white pt-20">Contact Us</h2>
      <div className="container mx-auto pl-5 sm:pl-10">
        <div className="flex items-center">
          <div className="w-1/2">
            <h2 className="text-1xl font-bold text-white">THE EXPORTER</h2>
            <h3 className="mb-8 text-white font-thin">
                Use our contact information bellow to get information or directly request
                Feel free to get in touch with us via phone or email
            </h3>
            <div className="flex items-center mb-4">
              <FiPhone className="text-1xl mr-4 text-yellow-500" />
              <p className="text-white font-light">+1 234 567 890</p>
            </div>
            <div className="flex items-center mb-4">
              <FiMail className="text-1xl mr-4 text-yellow-500" />
              <p className="text-white font-light">info@example.com</p>
            </div>
            <div className="flex items-center space-x-4 mt-10">
              <a href="#" className="text-yellow-500 hover:text-yellow-700">
                <FiTwitter className="text-1xl" />
              </a>
              <a href="#" className="text-yellow-500 hover:text-yellow-700">
                <FiFacebook className="text-1xl" />
              </a>
              <a href="#" className="text-yellow-500 hover:text-yellow-700">
                <FiInstagram className="text-1xl" />
              </a>
              <a href="#" className="text-yellow-500 hover:text-yellow-700">
                <FiLinkedin className="text-1xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <h2 className="mt-20 pb-5 text-sm text-center text-gray-50">&copy; the exporter 2024 | all right reserved</h2>
    </section>
  );
};

export default Contact;
