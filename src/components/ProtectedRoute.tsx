import React from 'react';
    import { Navigate } from 'react-router-dom';
    import userManager from '../auth';

    const ProtectedRoute: React.FC&lt;{ children: JSX.Element }&gt; = ({ children }) =&gt; {
      const user = userManager.getUser();

      if (!user) {
        return &lt;Navigate to="/login" replace /&gt;;
      }

      return children;
    };

    export default ProtectedRoute;
