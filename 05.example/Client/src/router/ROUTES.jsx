import About from "../pages/About";
import Add from "../pages/Add";
import Basket from "../pages/Basket";
import ClientRoot from "../pages/ClientRoot";
import Detail from "../pages/Detail";
import Favorite from "../pages/Favorite";
import Home from "../pages/Home";

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
        path:"/about",
        element:<About/>
      },
      {
        path:"/add",
        element:<Add/>
      },
      {
        path:"/basket",
        element:<Basket/>
      },
      {
        path:"/favorite",
        element:<Favorite/>
      },
      {
        path:"/detail/:id",
        element:<Detail/>
      },
    ],
  },
];
