import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

const rootElement = document.getElementById('root');

// Use ReactDOM.createRoot instead of ReactDOM.render
ReactDOM.createRoot(rootElement).render(
  <Router>
    <App />
  </Router>
);
