import React from 'react';
import { Link } from 'react-router-dom';
import AppCard from '../components/AppCard';
import { apps } from '../data/apps';
import { FaGooglePlay, FaAppStoreIos } from "react-icons/fa";

const Home = () => {
    const trendingApps = apps.slice(0, 8);

    return (
        <div className="overflow-x-hidden">
            <div className="bg-gray-50 pb-24 md:pb-32 lg:pb-48">
                
                {/* Hero Section */}
                <div className="container mx-auto px-4 text-center pt-16 md:pt-24">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-dark-blue">
                        We Build <br/> <span className="text-primary">Productive</span> Apps
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-slate">
                        At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter,
                        and more exciting. Our goal is to turn your ideas into digital experiences that truly 
                        make an impact.
                    </p>

                    {/* Buttons */}
                    <div className="mt-8 flex justify-center space-x-4">
                        <Link
                            to="/google-play"
                            className="flex items-center gap-2 border border-gray-300 bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-100 transition"
                        >
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

                {/* Hero Phone Image */}
<div className="relative container mx-auto mt-12 md:mt-20">
    <div className="relative h-64 md:h-72 flex justify-center items-center"></div>

    <div className="absolute -bottom-24 md:-bottom-32 lg:-bottom-48 left-1/2 -translate-x-1/2 z-10">
        <img
            src="/hero.png"
            alt="App Showcase"
            className="w-auto h-72 sm:h-80 md:h-96 lg:h-[26rem] drop-shadow-2xl"
        />
    </div>
</div>

            </div>

            {/* Stats Section */}
            <div className="bg-primary text-white pt-32 md:pt-40 lg:pt-20 pb-12 md:pb-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-center text-3xl font-bold mb-8">Trusted By Millions, Built For You</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div>
                            <p className="opacity-80">Total Downloads</p>
                            <p className="text-5xl font-bold">29.6M</p>
                            <br />
                            <p className="opacity-80">21% More Than Last Month</p>
                        </div>

                        <div>
                            <p className="opacity-80">Total Reviews</p>
                            <p className="text-5xl font-bold">906K</p>
                            <br />
                            <p className="opacity-80">46% More Than Last Month</p>
                        </div>

                        <div>
                            <p className="opacity-80">Active Apps</p>
                            <p className="text-5xl font-bold">132+</p>
                            <br />
                            <p className="opacity-80">31 More Will Launch</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Trending Apps Section */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-dark-blue">Trending Apps</h2>
                    <p className="mt-2 text-slate">Explore All Trending Apps developed by us</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {trendingApps.map(app => (
                        <AppCard key={app.id} app={app} />
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link
                        to="/apps"
                        className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-light transition-colors"
                    >
                        Show All
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
