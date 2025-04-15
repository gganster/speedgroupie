// components/Loader.js
import React from 'react';

export default function Loader() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center space-y-4">
        <div className='relative'>
          <svg
            className=""
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
            id="Layer_1"
            width="100"
            height="100"
            fill="#ad46ff"
            version="1.1"
            viewBox="0 0 512 512"
          >
            <path d="M503.319 5.939A24.75 24.75 0 0 0 483.361.304L169.555 49.852c-12.04 1.901-20.909 12.28-20.909 24.47v256H99.097C44.455 330.323 0 371.073 0 421.161S44.455 512 99.097 512s99.097-40.75 99.097-90.839V194.588l264.258-41.725v136.169h-49.548c-54.642 0-99.097 40.75-99.097 90.839s44.455 90.839 99.097 90.839S512 429.959 512 379.871V24.774a24.78 24.78 0 0 0-8.681-18.835"></path>
          </svg>
          <svg
            className="animate-ping absolute top-0 left-0"
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
            id="Layer_1"
            width="100"
            height="100"
            fill="#ad46ff"
            version="1.1"
            viewBox="0 0 512 512"
          >
            <path d="M503.319 5.939A24.75 24.75 0 0 0 483.361.304L169.555 49.852c-12.04 1.901-20.909 12.28-20.909 24.47v256H99.097C44.455 330.323 0 371.073 0 421.161S44.455 512 99.097 512s99.097-40.75 99.097-90.839V194.588l264.258-41.725v136.169h-49.548c-54.642 0-99.097 40.75-99.097 90.839s44.455 90.839 99.097 90.839S512 429.959 512 379.871V24.774a24.78 24.78 0 0 0-8.681-18.835"></path>
          </svg>
        </div>

        <p className="text-white text-xl animate-pulse mt-6">Chargement des concerts...</p>
      </div>
    </div>
  );
}
