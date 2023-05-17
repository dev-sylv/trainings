import { createBrowserRouter } from "react-router-dom";
import { HomeLayouts } from "../components";
import { HomeScreen } from "../pages";

export const Element = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayouts />,
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
    ],
  },
]);
