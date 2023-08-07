import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import NotFoundPage from "../notFoundPage/NotFoundPage";
import Home from "../home/Home";
import AddCoffee from "../addCoffee/AddCoffee";
import UpdateCoffee from "../updateCoffee/UpdateCoffee";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "addCoffee",
        element: <AddCoffee />,
      },
      {
        path: "updateCoffee",
        element: <UpdateCoffee />,
      },
    ],
  },
]);

export default router;
