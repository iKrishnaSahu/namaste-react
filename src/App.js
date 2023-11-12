import React, { lazy, Suspense, useEffect, useState } from 'react';
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
import UserContext from './utils/UserContext';
import { Provider } from 'react-redux'
import appStore from './utils/appStore';
import { Cart } from './components/Cart';

const AboutUs = lazy(() => import('./components/AboutUs'));

const AppLayout = (props) => {

    const [userName, setUserName] = useState();

    useEffect(() => {
        const data = {
            name: 'Krishna Sahu'
        };
        setUserName(data.name);
    }, []);

    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
                <div className="app">
                    <Header />
                    <Outlet />
                    {/* // footer */}
                </div>
            </UserContext.Provider>
        </Provider>
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
            },
            {
                path: "/cart",
                element: <Cart />,
            }
        ],
        errorElement: <ErrorPage />,
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);