import { useState, useEffect, useCallback } from 'react';

const INSTALLED_APPS_KEY = 'hero_installed_apps';

export const useInstalledApps = () => {
  const [installedAppIds, setInstalledAppIds] = useState([]);

  useEffect(() => {
    try {
      const storedApps = localStorage.getItem(INSTALLED_APPS_KEY);
      if (storedApps) {
        setInstalledAppIds(JSON.parse(storedApps));
      }
    } catch (error) {
      console.error('Failed to parse installed apps from localStorage', error);
      setInstalledAppIds([]);
    }
  }, []);

  const updateLocalStorage = (ids) => {
    try {
      localStorage.setItem(INSTALLED_APPS_KEY, JSON.stringify(ids));
    } catch (error) {
      console.error('Failed to save installed apps to localStorage', error);
    }
  };

  const installApp = useCallback((appId) => {
    setInstalledAppIds((prevIds) => {
      if (prevIds.includes(appId)) {
        return prevIds;
      }
      const newIds = [...prevIds, appId];
      updateLocalStorage(newIds);
      return newIds;
    });
  }, []);

  const uninstallApp = useCallback((appId) => {
    setInstalledAppIds((prevIds) => {
      const newIds = prevIds.filter((id) => id !== appId);
      updateLocalStorage(newIds);
      return newIds;
    });
  }, []);

  const isInstalled = useCallback((appId) => {
    return installedAppIds.includes(appId);
  }, [installedAppIds]);

  return { installedAppIds, installApp, uninstallApp, isInstalled };
};
