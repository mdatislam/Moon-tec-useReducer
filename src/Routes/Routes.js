import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About";
import CartList from "../Pages/CartList";
import Home from "../Pages/Home";
import TopRated from "../Pages/TopRated";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "top-rated",
        element: <TopRated />,
      },
      {
        path: "cart-list",
        element: <CartList />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);
export default routes