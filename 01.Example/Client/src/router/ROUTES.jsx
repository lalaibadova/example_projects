import { createBrowserRouter } from "react-router-dom";
import ClientRoot from "../pages/ClientRoot";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Reservation from "../pages/Reservation";
import Detail from "../pages/Detail";
import AddProduct from "../pages/AddProduct";

export const ROUTES = createBrowserRouter([
  {
    path: "/",
    element: <ClientRoot />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "detail/:id",
        element: <Detail />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "reservation",
        element: <Reservation />,
      },
      {
        path: "add-product",
        element: <AddProduct />,
      },
    ],
  },
]);
