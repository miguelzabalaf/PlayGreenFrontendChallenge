import { Route, Routes } from "react-router-dom";

// Constants
import { routes } from "./constants";

// Routes
import AuthRoutes from "./routes/authRoutes";
import DashboardRoutes from "./routes/dashboardRoutes";
import PageNotFound from "./screens/pageNotFound/pageNotFound";

// Controllers
import useRouter from "./controllers/useRouter";

function Router(): JSX.Element {
    const { locationByAuth } = useRouter();
    return (
        <Routes location={locationByAuth}>
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
