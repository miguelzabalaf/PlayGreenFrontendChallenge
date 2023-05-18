import { Route, Routes } from "react-router-dom";

// Constants
import { routes } from "./constants";

// Routes
import AuthRoutes from "./routes/authRoutes";
import DashboardRoutes from "./routes/dashboardRoutes";
import PageNotFound from "./screens/pageNotFound/pageNotFound";

// Controllers
import useRouter from "./controllers/useRouter";
import { ThemeProvider } from "styled-components";
import theme from "../common/theme";
import Redirect from "./components/redirect";

function Router(): JSX.Element {
    const { theme: mode } = useRouter();
    return (
        <ThemeProvider theme={{ ...theme[mode], mode }}>
            <Routes>
                <Route
                    path={"/"}
                    element={
                        <Redirect to={routes.auth.children.login.fullPath} />
                    }
                />
                <Route
                    path={routes.dashboard.path}
                    element={<DashboardRoutes />}
                />
                <Route path={routes.auth.path} element={<AuthRoutes />} />
                <Route
                    path={routes.common.children.notFound.path}
                    element={<PageNotFound />}
                />
            </Routes>
        </ThemeProvider>
    );
}

export default Router;
