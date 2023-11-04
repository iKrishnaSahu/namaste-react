import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import {
    createBrowserRouter,
    RouterProvider,
    Outlet
} from "react-router-dom";
// import { AboutUs } from './components/AboutUs';
import { ErrorPage } from './components/ErrorPage';
import { ContactUs } from './components/ContactUs';
import RestaurantMenu from './components/RestauranMenu';

const AboutUs = lazy(() => import('./components/AboutUs'));

const AppLayout = (props) => {
    return (
        <div className="app">
            <Header />
            <Outlet />
            {/* // footer */}
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about-us",
                element: <Suspense fallback={<h1>Loading...</h1>}><AboutUs /></Suspense>,
            },
            {
                path: "/contact-us",
                element: <ContactUs />,
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu />,
            }
        ],
        errorElement: <ErrorPage />,
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);