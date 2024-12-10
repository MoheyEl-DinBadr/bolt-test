import React from 'react';
    import { Navigate } from 'react-router-dom';
    import userManager from '../auth.ts';

    const ProtectedRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
      const user = userManager.getUser();

      if (!user) {
        return <Navigate to="/login" replace />;
      }

      return children;
    };

    export default ProtectedRoute;
