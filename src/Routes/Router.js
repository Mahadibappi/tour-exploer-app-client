import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home';
import Services from '../Pages/Service/Services';
import Details from '../Pages/Service/Details';

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
        loader: () => fetch('http://localhost:5000/services')
        },
       

        {path: "/service/:id",
        element: <Details></Details> ,
        loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        
        },
    ]


}])

export default router;