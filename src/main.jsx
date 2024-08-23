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
import Category from './pages/Category/Category.jsx';
import LandingPage1 from './pages/LandingPage/LandingPage1.jsx';
import LandingPage2 from './pages/LandingPage/LandingPage2.jsx';

const router = createBrowserRouter([
  {
    path: "/home",
    element:<Home/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    element:<Dashboard/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/category",
    element:<Category/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/landingPage1",
    element:<LandingPage1/>,
    errorElement: <ErrorPage />,
  }, {
    path: "/landingPage2",
    element:<LandingPage2/>,
    errorElement: <ErrorPage />,
  },

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  )
