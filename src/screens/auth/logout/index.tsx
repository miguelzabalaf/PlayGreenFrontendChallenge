import React from "react";
import Loading from "../../../common/components/loading";

// Lazy Screen
const Logout = React.lazy(() => import("./logout"));

function Screen() {
    return (
        <React.Suspense fallback={<Loading />}>
            <Logout />
        </React.Suspense>
    );
}

export default Screen;
