import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTER } from "./routes/ROUTES";
import { useEffect, useState } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import { BasketContext } from "./context/BasketContext";
const router =createBrowserRouter(ROUTER)
function App() {
  useEffect(() => {
   setBasket(JSON.parse(localStorage.getItem("basket")))
  }, [])
  const [basket, setBasket] = useState([])
  const[localBasket,setLocalBasket]=useLocalStorage("basket",[])
  
  return(
     <BasketContext.Provider value={{basket, setBasket,localBasket,setLocalBasket}}>
       <RouterProvider router={router} />;
    </BasketContext.Provider>
  )
}

export default App;
