import React from 'react';
import ReactDOM from 'react-dom/client'; // Use createRoot
import App from './App';
import './index.css'; // Global styles

const root = ReactDOM.createRoot(document.getElementById('root')); // Use createRoot
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);