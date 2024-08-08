import React, { useEffect, useReducer } from 'react';
import './App.css';
import NavBar from './Pages/NavBar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Mobile from './Pages/Mobile';
import ErrorPage from './Pages/ErrorPage';
import Products from './Pages/Products';
import AboutUs from './Pages/AboutUs';
import Data from './Pages/Data';
import AppContext from './context/appContext';
import UseReduceHook from './Pages/UseReduceHook';
import { Parent } from './hook/Parent';
import { UseReduceHook1 } from './hook/UseReduceHook1';
import Clock from './hook/Clock';



const router = createBrowserRouter([{
  path: "/",
  element: <NavBar />,
  errorElement: <ErrorPage />,
  children: [
    {
      path: '',
      element: <Home />,
    },
    {
      path: '/products/',
      element: <Products />,
      children: [
        {
          path: 'mobiles',
          element: <Mobile />
        }
      ]
    },
    {
      path: '/contact',
      element: <Contact />,
    },
    {
      path: '/aboutus',
      element: <AboutUs />,
    },
    {
      path: 'data',
      element: <Data />
    },
    {
      path: '/hook',
      element: <Clock />,
    }
  ]
},
])


function App() {



  return (
    <div>
      <AppContext>
        <RouterProvider router={router} />
      </AppContext>
    </div>

  );
}

export default App;
