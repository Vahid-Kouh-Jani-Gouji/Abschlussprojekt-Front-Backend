import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
//#################################routen
import Root from './routes/root';
import LoginGoogle from './routes/logingoogle';
import AccountErstellung from './routes/newacc';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/newacc",
    element: <AccountErstellung />,
  },
  {
    path: "/login/google",
    element: <LoginGoogle />,
  },
]);

const container = document.getElementById('root');
const root = createRoot(container); // Erstellt Root

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
