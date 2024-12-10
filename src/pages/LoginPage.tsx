import React from 'react';
    import { Button } from '@mui/material';
    import userManager from '../auth';

    const LoginPage: React.FC = () => {
      const login = async () => {
        try {
          await userManager.signinRedirect();
        } catch (error) {
          console.error('Login failed:', error);
          // Handle error, e.g., show an alert or update state
        }
      };

      return (
        &lt;div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}&gt;
          &lt;Button variant="contained" color="primary" onClick={login}&gt;
            Login
          &lt;/Button&gt;
        &lt;/div&gt;
      );
    };

    export default LoginPage;
