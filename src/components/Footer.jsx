import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white shadow-md py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-auto flex justify-center md:justify-start mb-4 md:mb-0">
            <img
              src="https://t3.ftcdn.net/jpg/05/09/17/46/360_F_509174694_a8jxmbhzeDgJOu0VYNQwDZC61xjZWCtJ.jpg"
              alt="Logo"
              className="h-10"
            />
          </div>
          <div className="w-full md:w-auto flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
            <a href="#" className="text-gray-800 hover:text-purple-600">Principal</a>
            <a href="#" className="text-gray-800 hover:text-purple-600">Encontrado</a>
            <a href="#" className="text-gray-800 hover:text-purple-600">Perdidos</a>
            <a href="#" className="text-gray-800 hover:text-purple-600">Contactos</a>
          </div>
        </div>
        <div className="text-center text-gray-600 mt-4">
          &copy; Desenvolvido em Julho de 2024
        </div>
      </div>
    </footer>
  );
}
