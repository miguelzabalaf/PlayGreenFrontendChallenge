import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { themeSelectors } from "../../redux/selectors/theme";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import useFirebase from "../../common/controllers/firebase/useFirebase";

function useRouter() {

    // Controllers
    const { auth } = useFirebase();

    // constants
    const dashboardMainRoute = '/dashboard/home';
    const authMainRoute = '/auth/login';
    const locationByAuth = auth.currentUser ? dashboardMainRoute : authMainRoute;


    useMemo(() => {
        return auth.currentUser ? dashboardMainRoute : authMainRoute;
    }, [auth]);

    // Hooks
    const navigate = useNavigate();
    const [userIsSignedId, setuserIsSignedId] = useState(false);

    // Selectors
    const { getThemeSelector } = themeSelectors();
    const { theme } = useSelector(getThemeSelector());

    useEffect(() => {
        if (userIsSignedId) {
            navigate(dashboardMainRoute);
        } else {
            navigate(authMainRoute);
        }
    }, [userIsSignedId, navigate]);

    onAuthStateChanged(auth, (user) => {
        setuserIsSignedId(user ? true : false);
    });

    return {
        locationByAuth,
        theme,
    };
}

export default useRouter;