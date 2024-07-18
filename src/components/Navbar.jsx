import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";


const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <img
          src="https://t3.ftcdn.net/jpg/05/09/17/46/360_F_509174694_a8jxmbhzeDgJOu0VYNQwDZC61xjZWCtJ.jpg"
          alt="Logo"
          className="h-8"
        />
        <div className="hidden md:flex ml-10 space-x-4">
          <a href="#" className="text-gray-800 hover:text-purple-600">Home</a>
          <a href="#" className="text-gray-800 hover:text-purple-600">Services</a>
          <a href="#" className="text-gray-800 hover:text-purple-600">Contact us</a>
          <a href="#" className="text-gray-800 hover:text-purple-600">Our projects</a>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <button className="text-gray-800 hover:text-purple-600">
            <i className="far fa-comment-dots"></i>
          </button>
          <button className="text-gray-800 hover:text-purple-600">
            <i className="far fa-bell"></i>
          </button>
          <div className="relative">
            <img
              src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
              alt="Profile"
              className="h-8 w-8 rounded-full"
            />
            <span className="absolute bottom-0 right-0 block h-2 w-2 rounded-full ring-2 ring-white bg-green-400"></span>
          </div>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700">
            Create Story
          </button>
        </div>
        <div className="md:hidden flex items-center space-x-4 w-full">
          <div className='flex items-center justify-center'>
          <input
            type="text"
            placeholder="Procurar..."
            className="w-full ml-2 px-2 py-1 border rounded-full focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <FaSearch className='ml-2' onClick={alert="teste de clique!"} />
          </div>
          <button className="bg-purple-600 text-white px-4 py-1 rounded-full hover:bg-purple-700">
            Criar
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
