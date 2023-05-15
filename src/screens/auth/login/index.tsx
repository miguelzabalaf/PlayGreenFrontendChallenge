import React from "react";
import Loading from "../../../components/loading";

// Lazy Screen
const Login = React.lazy(() => import("./login"));

function Screen() {
    return (
        <React.Suspense fallback={<Loading />}>
            <Login />
        </React.Suspense>
    );
}

export default Screen;
