import About from "../pages/About";
import AddProduct from "../pages/AddProduct";
import Basket from "../pages/Basket";
import ClientRoot from "../pages/ClientRoot";
import Detail from "../pages/Detail";
import Favorite from "../pages/Favorite";
import Home from "../pages/Home";
import Menu from "../pages/Menu";

export const ROUTES = [
  {
    path: "/",
    element: <ClientRoot />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/add-product",
        element: <AddProduct />,
      },
      {
        path: "/detail/:id",
        element: <Detail />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/basket",
        element: <Basket />,
      },
      {
        path: "/favs",
        element: <Favorite />,
      },
    ],
  },
];
