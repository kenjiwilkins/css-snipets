import { createBrowserRouter } from "react-router-dom";
import Index from "../pages/Index";
import Buttons from "../pages/Buttons";
import Texts from "../pages/Texts";
import Links from "../pages/Links";
import Inputs from "../pages/Inputs";
import Loader from "../pages/Loaders";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/buttons",
    element: <Buttons />,
  },
  {
    path: "/texts",
    element: <Texts />,
  },
  {
    path: "/links",
    element: <Links />,
  },
  {
    path: "/inputs",
    element: <Inputs />,
  },
  {
    path: "/loaders",
    element: <Loader />,
  },
  {
    path: "*",
    element: <h1>404 Not Found</h1>,
  },
]);

export default router;
