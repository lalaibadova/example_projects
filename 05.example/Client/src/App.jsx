import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES } from "./router/ROUTES";
import useLocalStorage from "./hooks/useLocalStorage";
import { BasketContext } from "./context/BasketContext";
import { useEffect, useState } from "react";
import { FavoriteContext } from "./context/FavoriteContext";
const router = createBrowserRouter(ROUTES);
function App() {
  useEffect(() => {
    setBasket(JSON.parse(localStorage.getItem("basket")));
    setFavorite(JSON.parse(localStorage.getItem("favorite")));
  }, []);

  const [basket, setBasket] = useState([]);
  const [localBasket, setLocalBasket] = useLocalStorage("basket", []);
  const [favorite, setFavorite] = useState([]);
  const [localFavorite, setLocalFavorite] = useLocalStorage("favorite", []);
  return (
    <FavoriteContext.Provider
      value={{ favorite, setFavorite, localFavorite, setLocalFavorite }}
    >
      <BasketContext.Provider
        value={{ basket, setBasket, localBasket, setLocalBasket }}
      >
        <RouterProvider router={router} />;
      </BasketContext.Provider>
    </FavoriteContext.Provider>
  );
}

export default App;
