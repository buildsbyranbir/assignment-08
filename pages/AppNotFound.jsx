import React from 'react';
import { Link } from 'react-router-dom';

const AppNotFound = ({ isForSearch = false }) => {
  const title = isForSearch ? "OPPS!! NO APP FOUND" : "OPPS!! APP NOT FOUND";
  const message = isForSearch 
    ? "No application matches your search criteria. Please try different keywords."
    : "The App you are requesting is not found on our system. Please try another app.";

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-dark-blue mt-8">{title}</h1>
      <p className="text-lg text-slate mt-4 max-w-lg">
        {message}
      </p>
      <Link 
        to={isForSearch ? "/apps" : "/"} 
        className="mt-8 bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-light transition-colors"
      >
        {isForSearch ? "Clear Search" : "Go Back!"}
      </Link>
    </div>
  );
};

export default AppNotFound;
