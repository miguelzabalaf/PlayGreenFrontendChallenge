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

function Router(): JSX.Element {
    const { locationByAuth, theme: themeSelected } = useRouter();
    return (
        <ThemeProvider
            theme={{ ...theme[themeSelected], theme: themeSelected }}
        >
            <Routes location={locationByAuth}>
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
