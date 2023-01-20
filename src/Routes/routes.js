import Achivement from "../pages/Dashboard/Achivement";
import Dashboard from "../pages/Dashboard/Dashboard";
import ErrorPage from "../pages/Dashboard/ErrorPage";
import Presence from "../pages/Dashboard/Presence";
import Services from "../pages/Dashboard/Services";
import Projects from "../pages/Dashboard/Projects";
import Clients from "../pages/Dashboard/Clients";
import Blog from "../pages/Dashboard/Blog";
import Teammates from "../pages/Dashboard/Teammates";
import Login from "../pages/login/Login";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/achivement",
        element: <Achivement />,
      },
      {
        path: "Presence",
        element: <Presence />,
      },
      {
        path: "Services",
        element: <Services />,
      },
      {
        path: "Projects",
        element: <Projects />,
      },
      {
        path: "Clients",
        element: <Clients />,
      },
      {
        path: "Blog",
        element: <Blog />,
      },
      {
        path: "Teammates",
        element: <Teammates />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
