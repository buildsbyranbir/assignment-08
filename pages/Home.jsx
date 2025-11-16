import React from 'react';
import { Link } from 'react-router-dom';
import AppCard from '../components/AppCard';
import { apps } from '../data/apps';
import { FaGooglePlay, FaAppStoreIos } from "react-icons/fa";


// SVG Icons for the showcase
const TimerIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
);

const PowerIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.636 5.636a9 9 0 1012.728 0M12 3v9" />
    </svg>
);

const BrandIcon = () => ( // 'B' like icon
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8" fill="currentColor" viewBox="0 0 16 16">
        <path d=""/>
        <path d=""/>
    </svg>
);

const XIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const ClockIcon = () => ( // Another clock icon for the right side
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const Home = () => {
    const trendingApps = apps.slice(0, 8);

    const FloatingIcon = ({ icon, positionClasses, colorClasses }) => (
      <div className={`absolute z-0 hidden md:flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16 rounded-full shadow-lg ${positionClasses} ${colorClasses}`}>
        {icon}
      </div>
    );

    return (
        <div className="overflow-x-hidden">
            <div className="bg-gray-50 pb-24 md:pb-32 lg:pb-48">
                {/* Hero Section */}
                <div className="container mx-auto px-4 text-center pt-16 md:pt-24">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-dark-blue">
                        We Build <br/> <span className="text-primary">Productive</span> Apps
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-slate">
                        At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.
                    </p>


                    <div className="mt-8 flex justify-center space-x-4">
                         <Link
                         to="/google-play"
    className="flex items-center gap-2 border border-gray-300 bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-100 transition">
    <FaGooglePlay className="text-green-600 w-5 h-5" />
    <span className="font-medium">Google Play</span>
  </Link>

  <Link
    to="/app-store"
    className="flex items-center gap-2 border border-gray-300 bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-100 transition"
  >
    <FaAppStoreIos className="text-blue-600 w-5 h-5" />
    <span className="font-medium">App Store</span>
  </Link>

</div>



                </div>

                {/* App Showcase Section */}
                <div className="relative container mx-auto mt-12 md:mt-20">
                    <div className="relative h-64 md:h-72 flex justify-center items-center">

            
                    </div>
                    {/* Central Phone Image - positioned absolutely to center and hang off bottom */}
                    <div className="absolute -bottom-24 md:-bottom-32 lg:-bottom-48 left-1/2 -translate-x-1/2 z-10">
                        <img src="../assets/hero.png" alt="App Showcase" className="w-auto h-72 sm:h-80 md:h-96 lg:h-[26rem] drop-shadow-2xl" />
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="bg-primary text-white pt-32 md:pt-40 lg:pt-20 pb-12 md:pb-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-center text-3xl font-bold mb-8">Trusted By Millions, Built For You</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div>
                            <p className="text-5xl font-bold">29.6M</p>
                            <p className="text-lg opacity-80">Total Downloads</p>
                        </div>
                        <div>
                            <p className="text-5xl font-bold">906K</p>
                            <p className="text-lg opacity-80">Total Reviews</p>
                        </div>
                        <div>
                            <p className="text-5xl font-bold">132+</p>
                            <p className="text-lg opacity-80">Active Apps</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Trending Apps Section */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-dark-blue">Trending Apps</h2>
                    <p className="mt-2 text-slate">Explore All Trending Apps on the Market developed by us</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {trendingApps.map(app => (
                        <AppCard key={app.id} app={app} />
                    ))}
                </div>
                <div className="text-center mt-12">
                    <Link to="/apps" className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-light transition-colors">
                        Show All
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
