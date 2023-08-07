import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import NotFoundPage from "../notFoundPage/NotFoundPage";
import Home from "../home/Home";
import AddCoffee from "../addCoffee/AddCoffee";
import UpdateCoffee from "../updateCoffee/UpdateCoffee";
import AllCoffee from "../allCoffee/AllCoffee";

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
        path: "updateCoffee/:id",
        element: <UpdateCoffee />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/coffee/${params.id}`),
      },
      {
        path: "allCoffee",
        element: <AllCoffee />,
        // loader: () => fetch("http://localhost:3000/coffee"),
      },
    ],
  },
]);

export default router;
