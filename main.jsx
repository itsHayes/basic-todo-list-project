import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css'; // if you have any styles

createRoot(document.getElementById('root')).render(
<App/>
);
