import React from 'react';
    import ReactDOM from 'react-dom/client';
    import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
    import App from './App.tsx';
    import LoginPage from './pages/LoginPage.tsx';

    ReactDOM.createRoot(document.getElementById('root')!).render(
      <React.StrictMode>
        <Router>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<App />} />
            {/* Add more routes here */}
          </Routes>
        </Router>
      </React.StrictMode>,
    );
