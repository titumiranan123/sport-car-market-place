import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Singup from "../Pages/Singup/Singup";
import ErrorPage from "../Pages/Error/ErrorPage";
import Sportcar from "../Pages/Home/Shopbycategory/Sport-car/Sportcar";
import Allcategory from "../Pages/Home/Shopbycategory/AllCategory/Allcategory";
import Policecar from "../Pages/Home/Shopbycategory/Policecar/Policecar";
import AllToys from "../Pages/Alltoys/Alltoys";
import Toydetails from "../Pages/SingleToyDetails/Toydetails";
import Review from "../Pages/SingleToyDetails/Review/Review";
import Toyform from "../Pages/Toyform/Toyform";
import Mytoys from "../Pages/MyToys/Mytoys";
import Privateroute from "./Privateroute";
import ToyUpdatepage from "../Pages/ToyUpdate/ToyUpdatepage";
import Blogs from "../Pages/Blogs/Blogs";
import Registration from "../Layout/Registration";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
                children: [
                    {
                        path: '/',
                        element: <Allcategory />,
                        loader: () => fetch(`https://toy-server-market.vercel.app/alltoys`)
                    },
                    {
                        path: '/sport-car',
                        element: <Sportcar />,

                    },
                    {
                        path: '/police-car',
                        element: <Policecar />,
                        loader: () => fetch(`https://toy-server-market.vercel.app/police-car`)
                    },
                    {
                        path: '/regular-car',
                        element: <div>Police car</div>,
                        loader: () => fetch(`https://toy-server-market.vercel.app/regular-car`)
                    },
                ]
            },

            {
                path: '/alltoys',
                element: <AllToys />,
                loader: () => fetch(`https://toy-server-market.vercel.app/alltoys`)
            },
            {
                path: '/toy/:id',
                element: <Toydetails />,
                loader: ({ params }) => fetch(`https://toy-server-market.vercel.app/toy/${params.id}`),
                children: [
                    {
                        path: '/toy/:id',
                        element: <Review />
                    }
                ]

            },
            {
                path: '/addtoy',
                element: <Privateroute><Toyform /></Privateroute>
            }
            ,
            {
                path: '/mytoys',
                element: <Privateroute><Mytoys /></Privateroute>
            }
            ,
            {
                path: '/update/:id',
                element: <ToyUpdatepage />,
                loader: ({ params }) => fetch(`https://toy-server-market.vercel.app/toy/${params.id}`)
            }
            ,
            {
                path: '/blogs',
                element: <Blogs />
            }


        ]
    },
    {
        path: '/',
        element: <Registration />,
        children: [
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/singup',
                element: <Singup />
            },
        ]
    },

])

export default router;