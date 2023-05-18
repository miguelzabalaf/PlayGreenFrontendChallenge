import React from "react";
import Loading from "../../../common/components/loading";

// Lazy Screen
const Home = React.lazy(() => import("./home"));

function Screen() {
    return (
        <React.Suspense fallback={<Loading />}>
            <Home />
        </React.Suspense>
    );
}

export default Screen;
