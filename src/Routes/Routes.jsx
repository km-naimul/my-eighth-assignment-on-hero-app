import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import AllApps from '../pages/AllApps/AllApps';
import Installation from '../pages/Installation/Installation';
import App from "../App";
import About from '../pages/About/About';
import AppDetails from '../pages/AppDetails/AppDetails';


export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    element: <App />,
    errorElement:<ErrorPage> </ErrorPage>, 
    
    children: [
        {
            index:true,
            path:"/",
            Component: Home,
            loader:()=>fetch('appsData.json'),
        },
        {
            path: '/allApps',
            Component: AllApps,
        },

        {
            path: '/about',
            Component:About,
        },

        {
            path: '/appDetails/:id',
            loader:()=>fetch('./appsDataAll.json'),
            Component: AppDetails,
        },

        {
            path: "/installation", element: <Installation />,
        }
    ]
  },
]);

//