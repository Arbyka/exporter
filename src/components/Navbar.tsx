import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-black top-0 sticky p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Image src="/logo.png" alt="Logo" width={70} height={70} />
          <div className="text-white text-2xl font-bold">THE EXPORTER</div>
        </div>
        <div className="space-x-4 flex sm:hidden">
          <Link href="/" className="text-gray-300 hover:text-yellow-500">
            Home
          </Link>
          <Link href="/indexAbout" className="text-gray-300 hover:text-yellow-500">
            About
          </Link>
          <Link href="/#product" className="text-gray-300 hover:text-yellow-500">
            Product
          </Link>
          <Link href="/#contact" className="text-gray-300 hover:text-yellow-500">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
