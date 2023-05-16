import React from "react";
import Loading from "../../../common/components/loading";

// Lazy Screen
const History = React.lazy(() => import("./history"));

function Screen() {
    return (
        <React.Suspense fallback={<Loading />}>
            <History />
        </React.Suspense>
    );
}

export default Screen;
