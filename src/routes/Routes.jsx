import { createBrowserRouter } from "react-router-dom";
import Error from "../pages/Error/Error";
import LayoutMain from "../layout/LayoutMain";
import Home from "../pages/Home/Home";
import Blog from "../pages/Blog/Blog";

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
    ],
  },
]);

export default router;
