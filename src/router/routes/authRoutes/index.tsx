import { Route, Routes } from "react-router-dom";

// Routes
import { authRoutes } from "./routes";

// Layouts
import AuthLayout from "../../../layouts/auth";

function AuthRoutes(): JSX.Element {
    return (
        <AuthLayout>
            <Routes>
                {authRoutes.map((routeProps) => (
                    <Route {...routeProps} />
                ))}
            </Routes>
        </AuthLayout>
    );
}

export default AuthRoutes;
