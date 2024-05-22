import AddProduct from "../pages/AddProduct";
import Basket from "../pages/Basket";
import ClientRoot from "../pages/ClientRoot";
import Details from "../pages/Details";
import Favorite from "../pages/Favorite";
import Home from "../pages/Home";
import Pages from "../pages/Pages";
import Shop from "../pages/Shop";

export const ROUTER = [
  {
    path: "/",
    element: <ClientRoot />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path:"add-product",
        element:<AddProduct/>
      },
      {
        path:"products/:id",
        element:<Details/>
      },
      {
        path:"favorite",
        element:<Favorite/>
      },
      {
        path:"pages",
        element:<Pages/>
      },
      {
        path:"shop",
        element:<Shop/>
      },
      {
        path:"basket",
        element:<Basket/>
      },
    ],
  },
];
