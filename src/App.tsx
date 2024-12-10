import React, { useEffect } from 'react';
    import { useNavigate, Navigate, Routes, Route } from 'react-router-dom';
    import userManager from './auth.ts';
    import LoginPage from './pages/LoginPage.tsx';
    import ProtectedRoute from './components/ProtectedRoute.tsx';

    const App: React.FC = () => {
      const navigate = useNavigate();

      useEffect(() => {
        const checkAuth = async () => {
          const user = await userManager.getUser();
          if (!user) {
            navigate('/login');
          }
        };

        checkAuth();
      }, [navigate]);

      return (
        <Routes>
          <Route path="/login" element=<LoginPage /> />
          <Route path="/" element=<ProtectedRoute><h1>Welcome to the Test App</h1></ProtectedRoute> />
          {/* Add more protected routes here */}
        </Routes>
      );
    };

    export default App;
