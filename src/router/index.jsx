import { createBrowserRouter } from "react-router-dom";
import Buttons from "../pages/Buttons";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Buttons />,
  },
]);

export default router;
