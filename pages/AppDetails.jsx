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
                        <div>
                            <p className="text-xl font-bold">{formatNumber(app.downloads)}</p>
                            <p className="text-sm text-slate">Downloads</p>
                        </div>
                        <div className="border-l border-gray-300 h-10"></div>
                        <div>
                            <p className="text-xl font-bold flex items-center gap-1">
                                {app.ratingAvg} 
                                <span className="text-orange-400">
                                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                </span>
                            </p>
                            <p className="text-sm text-slate">Average Ratings</p>
                        </div>
                        <div className="border-l border-gray-300 h-10"></div>
                        <div>
                            <p className="text-xl font-bold">{formatNumber(app.reviews)}</p>
                            <p className="text-sm text-slate">Total Reviews</p>
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
