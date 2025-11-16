import React, { useState, useMemo } from 'react';
import { apps } from '../data/apps';
import AppCard from '../components/AppCard';
import AppNotFound from './AppNotFound';

const AppStore = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredApps = useMemo(() => {
        if (!searchQuery) {
            return apps;
        }
        return apps.filter(app =>
            app.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [searchQuery]);

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-dark-blue">App Store Apps</h1>
                <p className="mt-2 text-slate">Explore All Apps on the App Store developed by us.</p>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                <p className="font-semibold text-lg mb-4 md:mb-0">({filteredApps.length}) Apps Found</p>
                <div className="relative w-full md:w-1/3">
                    <input
                        type="text"
                        placeholder="Search Apps"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>
            </div>

            {filteredApps.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {filteredApps.map(app => (
                        <AppCard key={app.id} app={app} />
                    ))}
                </div>
            ) : (
                <AppNotFound isForSearch={true} />
            )}
        </div>
    );
};

export default AppStore;