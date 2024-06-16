import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl">Teste de Navbar</h1>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        <ul className={`md:flex md:space-x-4 ${isOpen ? 'block mt-4' : 'hidden'}`}>
          <li><a href="#" className="block text-white hover:text-gray-400 py-2">Home</a></li>
          <li><a href="#" className="block text-white hover:text-gray-400 py-2">About</a></li>
          <li><a href="#" className="block text-white hover:text-gray-400 py-2">Services</a></li>
          <li><a href="#" className="block text-white hover:text-gray-400 py-2">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
