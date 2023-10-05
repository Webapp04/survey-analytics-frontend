import Analytics from "../containers/Analytics";
import Dashboard from "../containers/Dashboard";

const appRoutes = [
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/analytic",
    element: <Analytics />,
  },
];

export default appRoutes;
