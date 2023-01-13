import "./App.css";
import { useRoutes } from "react-router-dom";
import CardComponent from "./components/CardComponent";
import CartComponent from "./components/CartComponent";

function App() {
  let routes = useRoutes([
    { path: "/", element: <CardComponent /> },
    { path: "cart", element: <CartComponent /> },
  ]);
  return routes;
}

export default App;
