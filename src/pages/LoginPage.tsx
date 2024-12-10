import React from 'react';
    import { Button } from '@mui/material';
    import userManager from '../auth.ts';

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
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <Button variant="contained" color="primary" onClick={login}>
            Login
          </Button>
        </div>
      );
    };

    export default LoginPage;
