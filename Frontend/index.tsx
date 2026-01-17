
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
     <a 
              href="#waitlist"
              className="neon-hover px-8 py-4 bg-white text-black font-bold rounded-full"
            >
              <span className="relative z-10">Get Notified First – Join the List</span>
              <div className="absolute inset-0 bg-gradient-to-r from-neonBlue to-neonGreen opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </a>