import { Route, Routes } from "react-router-dom";

// Layouts
import DashboardLayout from "../../../layouts/dashboard";

// Routes
import { dashboardRoutes } from "./routes";

function DashboardRoutes(): JSX.Element {
    return (
        <DashboardLayout>
            <Routes>
                {dashboardRoutes.map((routeProps) => (
                    <Route {...routeProps} />
                ))}
            </Routes>
        </DashboardLayout>
    );
}

export default DashboardRoutes;
