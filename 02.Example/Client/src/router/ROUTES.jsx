import Home from "../pages/Home";
import ClientRoot from "../pages/ClientRoot";
import Products from "../pages/Products";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import AboutUs from "../pages/AboutUs/inde";
import AddProduct from "../pages/AddProduct";
import Detail from "../pages/Detail";
export const ROUTES = [{
  path: "/",
  element: <ClientRoot />,
  children: [
    {
      index: true,
      element: <Home />,
    },
    {
        path:"/products",
        element:<Products/>
    },
    {
        path:"/blog",
        element:<Blog/>
    },
    {
        path:"/contact",
        element:<Contact/>
    },
    {
        path:"/about-us",
        element:<AboutUs/>
    },
    {
        path:"/add-product",
        element:<AddProduct/>
    },
    {
        path:"/detail/:id",
        element:<Detail/>
    }
  ],
}];
