
import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client'
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//React Element Object
// const heading = <h1>Namaste React Heading using jSX 🚀 </h1>


// #Lazy Loading/Code splitting..etc
//It creates multiple chunks for every route, means creates multiple js files for every route when needed/demand.
// We can see in network calls by filtering js files


const Home = lazy(() => import('./Home'));
const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./Contact'));



const root = ReactDOM.createRoot(document.getElementById('root'));


// Creating Routes 
const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <div> Error Boundary....</div>,
        children: [
            {
                path: '/home',
                element: <Suspense fallback="loading........"><Home /></Suspense>,
            },
            {
                path: '/about',
                element: <Suspense fallback="loading........"><About /></Suspense>,
            },
            {
                path: '/contact',
                element: <Suspense fallback="loading........"><Contact /></Suspense>,
            }]
    },

])

root.render(<RouterProvider router={routes} />)




