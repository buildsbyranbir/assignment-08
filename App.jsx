import React, { useState, useEffect, createContext, useCallback } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AllApps from './pages/AllApps';
import AppDetails from './pages/AppDetails';
import InstalledApps from './pages/InstalledApps';
import NotFound from './pages/NotFound';
import Loader from './components/Loader';
import Toast from './components/Toast';
import GooglePlay from './pages/GooglePlay';
import AppStore from './pages/AppStore';

export const AppContext = createContext(null);

const AppContent = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
    const location = useLocation();

    useEffect(() => {
        setIsLoading(true);
        const timer = setTimeout(() => setIsLoading(false), 500); // Simulate loading
        return () => clearTimeout(timer);
    }, [location.pathname]);

    const showToast = useCallback((message, type = 'success') => {
        setToast({ show: true, message, type });
        setTimeout(() => setToast({ show: false, message: '', type: 'success' }), 3000);
    }, []);

    const appContextValue = { showToast };

    return (
        <AppContext.Provider value={appContextValue}>
            <div className="bg-white text-slate-800 min-h-screen flex flex-col font-sans">
                <Header />
                <main className="flex-grow">
                    {isLoading ? <Loader /> : (
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/apps" element={<AllApps />} />
                            <Route path="/app/:id" element={<AppDetails />} />
                            <Route path="/installation" element={<InstalledApps />} />
                            <Route path="/google-play" element={<GooglePlay />} />
                            <Route path="/app-store" element={<AppStore />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    )}
                </main>
                <Footer />
                <Toast message={toast.message} show={toast.show} type={toast.type} onHide={() => setToast({ ...toast, show: false })} />
            </div>
        </AppContext.Provider>
    );
};


const App = () => (
    <HashRouter>
        <AppContent />
    </HashRouter>
);

export default App;