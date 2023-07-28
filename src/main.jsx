import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import Register from './pages/Register/Register.jsx';


import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Connexion from './pages/Connexion/Connexion.jsx';
import Sidebar from "./pages/Dashboard/Sidebar Section/Sidebar.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },

  {
    path: "/Register",
    element: <Register/>,
  },

  {
    path: "/Connexion",
    element: <Connexion/>,
  },
  {
    path: "/Sidebar",
    element: <Sidebar/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
