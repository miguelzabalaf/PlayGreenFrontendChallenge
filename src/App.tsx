import { BrowserRouter } from "react-router-dom";
import Router from "./router";
import useInterceptor from "./api/config/interceptor";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import useStoreConfig from "./redux/controllers/useStoreConfig";

function App() {
    const { store, persistor } = useStoreConfig();
    useInterceptor();
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <BrowserRouter>
                    <Router />
                </BrowserRouter>
            </PersistGate>
        </Provider>
    );
}

export default App;
