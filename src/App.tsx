import { BrowserRouter } from "react-router-dom";
import Router from "./router";
import useInterceptor from "./api/config/interceptor";

function App() {
    useInterceptor();
    return (
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    );
}

export default App;
