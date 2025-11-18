import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { apps } from '../data/apps';
import { useInstalledApps } from '../hooks/useInstalledApps';
import { AppContext } from '../App';
import AppNotFound from './AppNotFound';

const AppDetails = () => {
    const { id } = useParams();
    const appContext = useContext(AppContext);
    const app = apps.find(a => a.id === Number(id));
    const { installApp, isInstalled } = useInstalledApps();
    
    const installed = app ? isInstalled(app.id) : false;

    if (!app) {
        return <AppNotFound />;
    }
    
    const handleInstall = () => {
        if (!installed && appContext) {
            installApp(app.id);
            appContext.showToast(`${app.title} installed successfully!`, 'success');
        }
    };
    
    const formatNumber = (num) => {
        if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
        if (num >= 1000) return `${(num / 1000).toFixed(0)}K`;
        return num;
    };

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex flex-col lg:flex-row gap-12">
                <div className="lg:w-1/4 flex justify-center">
                    <img src={app.image} alt={app.title} className="w-48 h-48 lg:w-64 lg:h-64 object-cover rounded-2xl shadow-lg bg-gray-200" />
                </div>
                <div className="lg:w-3/4">
                    <h1 className="text-3xl md:text-4xl font-bold text-dark-blue">{app.title}</h1>
                    <p className="text-lg text-primary mt-1">{app.companyName}</p>
                    
                    <div className="flex flex-wrap items-center gap-x-8 gap-y-4 my-6 text-center">

    <div className="flex flex-col items-center">
        <img src="/icon-downloads.png" alt="" />
        <p className="text-sm text-slate">Downloads</p>
        <p className="text-xl font-bold">{formatNumber(app.downloads)}</p>
    </div>

    <div className="border-l border-gray-300 h-10"></div>
    
    <div className="flex flex-col items-center">
        <img src="/icon-ratings.png" alt="" />
        <p className="text-sm text-slate">Average Ratings</p>
        <p className="text-xl font-bold flex items-center gap-1">
            {app.ratingAvg}
        </p>
        
    </div>

    <div className="border-l border-gray-300 h-10"></div>

    <div className="flex flex-col items-center">
        <img src="/icon-review.png" alt="" />
        <p className="text-sm text-slate">Total Reviews</p>
        <p className="text-xl font-bold">{formatNumber(app.reviews)}</p>
        
    </div>

</div>
 
                    <button 
                        onClick={handleInstall}
                        disabled={installed}
                        className={`px-8 py-3 rounded-lg font-semibold text-white transition-colors w-full sm:w-auto ${installed ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600'}`}
                    >
                        {installed ? 'Installed' : `Install Now (${app.size} MB)`}
                    </button>
                </div>
            </div>

            <div className="mt-16">
                <h2 className="text-2xl font-bold mb-4">Ratings</h2>
                <div className="w-full h-80 bg-gray-50 p-4 rounded-lg">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={app.ratings} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                            <XAxis type="number" />
                            <YAxis dataKey="name" type="category" width={60} />
                            <Tooltip cursor={{fill: 'rgba(238, 242, 255, 0.6)'}}/>
                            <Bar dataKey="count" fill="#FFA500" barSize={30} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <div className="mt-16">
                <h2 className="text-2xl font-bold mb-4">Description</h2>
                <p className="text-slate leading-relaxed">{app.description}</p>
            </div>
        </div>
    );
};

export default AppDetails;
