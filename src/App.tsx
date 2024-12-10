import React, { useEffect } from 'react';
    import { useNavigate, Navigate, Routes, Route } from 'react-router-dom';
    import userManager from './auth';
    import LoginPage from './pages/LoginPage';
    import ProtectedRoute from './components/ProtectedRoute';

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
        &lt;Routes&gt;
          &lt;Route path="/login" element=&lt;LoginPage /&gt; /&gt;
          &lt;Route path="/" element=&lt;ProtectedRoute&gt;&lt;h1&gt;Welcome to the Test App&lt;/h1&gt;&lt;/ProtectedRoute&gt; /&gt;
          {/* Add more protected routes here */}
        &lt;/Routes&gt;
      );
    };

    export default App;
