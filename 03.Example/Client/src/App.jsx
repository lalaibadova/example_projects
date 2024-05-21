import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES } from "./router/ROUTES";
import useLocalStorage from "./hooks/useLocaleStorage";
import { useEffect, useState } from "react";
import { BasketContext } from "./context/basketContext";
import { FavsContext } from "./context/favsContext";
const router = createBrowserRouter(ROUTES);

function App() {
  useEffect(() => {
    setBasket(JSON.parse(localStorage.getItem("basket")));
    setFavs(JSON.parse(localStorage.getItem("favs")));
  }, []);
  const [basket, setBasket] = useState([]);
  const [favs, setFavs] = useState([]);
  const [localBasket, setLocalBasket] = useLocalStorage("basket", []);
  const [localFavs, setLocalFavs] = useLocalStorage("favs", []);
  return (
   <FavsContext.Provider value={{setFavs,favs,setLocalFavs,localFavs}}>
     <BasketContext.Provider
      value={{ basket, setBasket, localBasket, setLocalBasket }}
    >
      <RouterProvider router={router} />
    </BasketContext.Provider>
   </FavsContext.Provider>
  );
}

export default App;
