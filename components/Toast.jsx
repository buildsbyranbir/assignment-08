import React, { useEffect } from 'react';

const Toast = ({ message, show, type, onHide }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(onHide, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onHide]);

  if (!show) return null;

  const bgColor = type === 'success' ? 'bg-green-500' : 'bg-red-500';

  return (
    <div className={`fixed bottom-5 right-5 text-white px-6 py-3 rounded-lg shadow-lg transform transition-transform duration-300 ${show ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} ${bgColor}`}>
      {message}
    </div>
  );
};

export default Toast;
