import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import About from "../Pages/About/About";
import Home from "../Pages/Home/Home";
import Media from "../Pages/Media/Media";
import Login from "../Shared/Login/Login";
import Register from "../Shared/Login/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/media",
        element: <Media></Media>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

export default router;
