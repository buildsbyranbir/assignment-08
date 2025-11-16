import React from 'react';
import { Link } from 'react-router-dom';

const StarIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className || "h-4 w-4"} viewBox="0 0 20 20" fill="currentColor">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);

const DownloadIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className || "h-4 w-4"} viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 9.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 7.414V13a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
    </svg>
);


const formatDownloads = (downloads) => {
    if (downloads >= 1000000) {
        return `${(downloads / 1000000).toFixed(1)}M`;
    }
    if (downloads >= 1000) {
        return `${(downloads / 1000).toFixed(0)}K`;
    }
    return downloads.toString();
};

const AppCard = ({ app }) => {
    return (
        <Link to={`/app/${app.id}`} className="block group">
            <div className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <img src={app.image} alt={app.title} className="w-full h-40 object-cover rounded-md mb-4 bg-gray-200" />
                <h3 className="text-md font-semibold text-gray-800 truncate group-hover:text-primary">{app.title}</h3>
                <div className="flex items-center justify-between text-sm text-gray-500 mt-2">
                    <div className="flex items-center space-x-1">
                        <DownloadIcon className="h-4 w-4 text-green-500" />
                        <span>{formatDownloads(app.downloads)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                         <StarIcon className="h-4 w-4 text-orange-400" />
                        <span>{app.ratingAvg}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default AppCard;
