import { routes } from "../../constants";

// Types
import { Route } from "../../types";

// Screens
import Login from "../../../screens/auth/login";

// Components
import Redirect from "../../components/redirect";

export const authRoutes: Route[] = [
    {
        key: "0",
        path: "",
        element: <Redirect to={routes.auth.children.login.path} />,
    },
    {
        key: "1",
        path: routes.auth.children.login.path,
        element: <Login />,
    },
    {
        key: "2",
        path: "*",
        element: <Redirect to={routes.common.children.notFound.path} />,
    },
];
