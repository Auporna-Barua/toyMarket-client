import { createBrowserRouter } from "react-router-dom";
import Error from "../pages/Error/Error";
import LayoutMain from "../layout/LayoutMain";
import Home from "../pages/Home/Home";
import Blog from "../pages/Blog/Blog";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import CarDetails from "../components/CategoryTab/CarDetails/CarDetails";
import PrivateRoute from "./PrivateRouter";
import AllToys from "../pages/AllToys/AllToys";
import Details from "../pages/AllToys/Details/Details";
import AddToy from "../pages/AddToy/AddToy";
import MyToys from "../pages/MyToys/MyToys";
import ToyDetails from "../pages/MyToys/ToyDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutMain></LayoutMain>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/singUp",
        element: <Registration></Registration>,
      },

      {
        path: "/carDetails/:id",
        element: (
          <PrivateRoute>
            <CarDetails></CarDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://car-world-server-henna.vercel.app/allCars/${params.id}`
          ),
      },
      {
        path: "/allToys",
        element: <AllToys></AllToys>,
        loader: () => fetch("https://car-world-server-henna.vercel.app/allToy"),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://car-world-server-henna.vercel.app/allToy/${params.id}`
          ),
      },
      {
        path: "/addToys",
        element: (
          <PrivateRoute>
            <AddToy></AddToy>
          </PrivateRoute>
        ),
      },
      {
        path: "/myToys",
        element: (
          <PrivateRoute>
            <MyToys></MyToys>
          </PrivateRoute>
        ),
      },
      {
        path: "/ToyDetails/:id",
        element: <ToyDetails></ToyDetails>,
        loader: ({ params }) =>
          fetch(
            `https://car-world-server-henna.vercel.app/ToyDetails/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
