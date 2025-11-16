import React, { useMemo, useState, useContext, useCallback } from 'react';
import { useInstalledApps } from '../hooks/useInstalledApps';
import { apps } from '../data/apps';
import { AppContext } from '../App';
import { Link } from 'react-router-dom';
import AppErrorImage from '../assets/App-Error.png';

const InstalledAppCard = ({ app, onUninstall }) => (
  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
    <div className="flex items-center gap-4">
      <img
        src={app.image}
        alt={app.title}
        className="w-16 h-16 object-cover rounded-md bg-gray-200"
        onError={(e) => (e.currentTarget.src = '/placeholder-app.png')}
      />
      <div>
        <h3 className="font-semibold text-md text-gray-800">{app.title}</h3>
        <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
          <span>{app.size} MB</span>
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            {app.ratingAvg}
          </span>
        </div>
      </div>
    </div>

    <button
      onClick={() => onUninstall(app.id)}
      className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-600 transition-colors text-sm"
      aria-label={`Uninstall ${app.title}`}
    >
      Uninstall
    </button>
  </div>
);

const InstalledApps = () => {
  const { installedAppIds, uninstallApp } = useInstalledApps();
  const [sortOrder, setSortOrder] = useState('default');
  const appContext = useContext(AppContext);

  const installedAppsList = useMemo(() => {
    const filtered = apps.filter((app) => installedAppIds.includes(app.id));
    if (sortOrder === 'high-low') {
      return [...filtered].sort((a, b) => b.downloads - a.downloads);
    }
    if (sortOrder === 'low-high') {
      return [...filtered].sort((a, b) => a.downloads - b.downloads);
    }
    return filtered;
  }, [installedAppIds, sortOrder]);

  const handleUninstall = useCallback(
    (appId) => {
      const app = apps.find((a) => a.id === appId);
      uninstallApp(appId);
      if (appContext && app) {
        appContext.showToast(`${app.title} has been uninstalled.`, 'success');
      }
    },
    [uninstallApp, appContext]
  );

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header only when there are installed apps */}
      {installedAppsList.length > 0 && (
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-dark-blue">Your Installed Apps</h1>
          <p className="mt-2 text-slate">Manage all the apps you've installed from HERO.IO</p>
        </div>
      )}

      {installedAppsList.length > 0 ? (
        <>
          <div className="flex justify-between items-center mb-6">
            <p className="font-semibold">{installedAppsList.length} Apps Found</p>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Sort installed apps"
            >
              <option value="default">Sort By</option>
              <option value="high-low">Downloads: High-Low</option>
              <option value="low-high">Downloads: Low-High</option>
            </select>
          </div>

          <div className="space-y-4">
            {installedAppsList.map((app) => (
              <InstalledAppCard key={app.id} app={app} onUninstall={handleUninstall} />
            ))}
          </div>
        </>
      ) : (
        <div className="text-center py-16 border-2 border-dashed border-gray-300 rounded-lg">
          <img
            src={AppErrorImage}
            alt="App Not Found"
            className="mx-auto w-72 h-72 object-contain mb-6"
            onError={(e) => (e.currentTarget.src = 'https://api.dicebear.com/8.x/identicon/svg?seed=app-not-found')}
          />
          <h2 className="text-2xl font-semibold text-gray-700">OPPS!! APP NOT FOUND</h2>
          <p className="text-slate mt-2">
            The App you are requesting is not found on our system. Please try another apps
          </p>
          <Link
            to="/apps"
            className="mt-6 inline-block bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-light transition-colors"
          >
            Go Back!
          </Link>
        </div>
      )}
    </div>
  );
};

export default InstalledApps;
