import React from 'react';

export default function Card() {
  return (
    <div className="mt-8 bg-white text-black md:p-4 rounded-xl shadow-lg max-w-xs transition-shadow duration-300 hover:shadow-purple-600 border-2 border-purple-800 mx-auto">
      <img
        src="https://www.jornaldeangola.ao/fotos/frontend_1/noticias/20171118070227bilhetes.jpg"
        alt="Card Image"
        className="rounded-t-xl w-full"
      />
      <div className="p-2 md:p-4">
        <h2 className="text-xl items-start font-semibold">Card title</h2>
        <p className="text-gray-600 mb-2">
          Some quick example text to build on the card title and make.
        </p>
        <button className="bg-purple-600 text-white px-4 w-full py-2 rounded-md hover:bg-purple-800 transition-colors duration-300">
          Button
        </button>
      </div>
    </div>
  );
}
