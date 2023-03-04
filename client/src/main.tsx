import '@hover-design/react/dist/style.css';
import ImagesContext from '@store/ImagesContext';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ImagesContext>
            <App />
        </ImagesContext>
    </React.StrictMode>
);
