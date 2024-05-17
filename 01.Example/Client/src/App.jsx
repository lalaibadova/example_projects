import "./App.css";
import { RouterProvider } from "react-router-dom";
import { ROUTES } from "./router/ROUTES";
function App() {
  return <RouterProvider router={ROUTES} />;
}

export default App;
