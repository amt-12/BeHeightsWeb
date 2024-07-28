import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './error-page';
import Home from './pages/OnBoard/Home/Home.jsx'
import Dashboard from './pages/Dashboard/Dashboard.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Dashboard",
    element:<Dashboard/>,
    errorElement: <ErrorPage />,
  },

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  )
