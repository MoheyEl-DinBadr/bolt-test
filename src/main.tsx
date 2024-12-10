import React from 'react';
    import ReactDOM from 'react-dom/client';
    import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
    import App from './App';
    import LoginPage from './pages/LoginPage';

    ReactDOM.createRoot(document.getElementById('root')!).render(
      &lt;React.StrictMode&gt;
        &lt;Router&gt;
          &lt;Routes&gt;
            &lt;Route path="/login" element=&lt;LoginPage /&gt; /&gt;
            &lt;Route path="/" element=&lt;App /&gt; /&gt;
            {/* Add more routes here */}
          &lt;/Routes&gt;
        &lt;/Router&gt;
      &lt;/React.StrictMode&gt;,
    );
