import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import DetailPage from "./components/pages/DetailPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: "U DONE FUCKED IT UP",
    children: [
      {
        path: "",
        element: <HomePage />,
        index: true,
        loader: async () => {
          return (
            await fetch("https://rickandmortyapi.com/api/character")
          ).json();
        },
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "/detail/:id",
        element: <DetailPage />,
        loader: ({ params }) =>
          fetch(`https://rickandmortyapi.com/api/character/${params.id}`),
      },
    ],
  },
]);

export default router;
