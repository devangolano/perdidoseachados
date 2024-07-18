import React from 'react';

export default function Card() {
  return (
    <div className="mt-8 bg-white text-black md:p-4 rounded-xl shadow-lg max-w-xs transition-shadow duration-300 hover:shadow-purple-600 border-2 border-purple-800 mx-auto">
      <img
        src="https://via.placeholder.com/400x200"
        alt="Card Image"
        className="rounded-t-xl w-full"
      />
      <div className="p-2 md:p-4">
        <h2 className="text-xl font-semibold">Card title</h2>
        <p className="text-gray-600 mb-2">
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </p>
        <button className="bg-purple-600 text-white px-4 rounded-full hover:bg-purple-700 transition-colors duration-300">
          Button
        </button>
      </div>
    </div>
  );
}
