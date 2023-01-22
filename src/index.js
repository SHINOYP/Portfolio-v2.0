import App from './App';
import './app.css'
import { createRoot } from 'react-dom/client';
const React=require('react');


const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);