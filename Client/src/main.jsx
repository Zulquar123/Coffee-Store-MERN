import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from "./App"
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddCoffee from './Components/AddCoffee';
import UpdateCoffee from './Components/UpdateCoffee';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "addCoffee",
     element: <AddCoffee/>
  },
  {
    path: "/updateCoffee",
     element: <UpdateCoffee/>
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
