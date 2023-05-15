import { routes } from "../../constants";

// Types
import { Route } from "../../types";

// Screens
import Home from "../../../screens/dashboard/home";
import History from "../../../screens/dashboard/history";

// Components
import Redirect from "../../components/redirect";

export const dashboardRoutes: Route[] = [
    {
        key: "0",
        path: "",
        element: <Redirect to={routes.dashboard.children.home.path} />,
    },
    {
        key: "1",
        path: routes.dashboard.children.home.path,
        element: <Home />,
    },
    {
        key: "2",
        path: routes.dashboard.children.history.path,
        element: <History />,
    },
    {
        key: "3",
        path: "*",
        element: <Redirect to={routes.common.children.notFound.path} />,
    },
];
