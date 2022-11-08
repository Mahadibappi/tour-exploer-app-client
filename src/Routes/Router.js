import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home';
import Services from '../Pages/Service/Services';

const router = createBrowserRouter([
    {
    path: "/",
    element: <Main></Main>,
    children: [
        {path: "/",
        element: <Home></Home>
        },
        {path: "/services",
            element: <Services></Services>,
            loader: () => fetch('data.json')
        
        },
    ]


}])

export default router;