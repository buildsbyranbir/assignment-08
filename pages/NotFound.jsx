import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <img src="https://i.imgur.com/qIufhof.png" alt="404 Not Found" className="w-full max-w-sm" />
      <h1 className="text-4xl md:text-5xl font-bold text-dark-blue mt-8">Oops, page not found!</h1>
      <p className="text-lg text-slate mt-4 max-w-md">
        The page you are looking for is not available. It might have been moved or doesn't exist.
      </p>
      <Link 
        to="/" 
        className="mt-8 bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-light transition-colors"
      >
        Go Back!
      </Link>
    </div>
  );
};

export default NotFound;
