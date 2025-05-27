import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Noticias from './Noticias';

// dependencia react Router
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="noticias" element={<Noticias />} />
          {/* Otras rutas aquí */}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
