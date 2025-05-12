import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import StockPage from './pages/StockPage';
import CorrelationPage from './pages/CorrelationPage';
import Header from './Components/Header';

function App() {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/stock" />} />
          <Route path="/stock" element={<StockPage />} />
          <Route path="/correlation" element={<CorrelationPage />} />
          <Route path="*" element={<h2>404: Page Not Found</h2>} />
        </Routes>
    </Router>
  );
}

export default App;
