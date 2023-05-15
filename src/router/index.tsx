import { Route, Routes } from "react-router-dom";

// Constants
import { routes } from "./constants";

// Routes
import AuthRoutes from "./routes/authRoutes";
import DashboardRoutes from "./routes/dashboardRoutes";
import PageNotFound from "./screens/pageNotFound/pageNotFound";

function Router(): JSX.Element {
    return (
        <Routes>
            <Route path={routes.dashboard.path} element={<DashboardRoutes />} />
            <Route path={routes.auth.path} element={<AuthRoutes />} />
            <Route
                path={routes.common.children.notFound.path}
                element={<PageNotFound />}
            />
        </Routes>
    );
}

export default Router;
