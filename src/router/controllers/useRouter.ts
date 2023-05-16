import { useEffect, useMemo } from "react";
import useFirebaseAuth from "../../common/controllers/firebase/useFirebaseAuth";
import { useNavigate } from "react-router-dom";
import { themeSelectors } from "../../redux/selectors/theme";
import { useSelector } from "react-redux";

function useRouter() {

    // constants
    const dashboardMainRoute = '/dashboard/home';
    const authMainRoute = '/auth/login';

    // Controllers
    const { states } = useFirebaseAuth();
    const { userIsSignedIn } = states;

    const locationByAuth = useMemo(() => {
        return userIsSignedIn ? dashboardMainRoute : authMainRoute;
    }, [userIsSignedIn]);

    // Hooks
    const navigate = useNavigate();

    // Selectors
    const { getThemeSelector } = themeSelectors();
    const { theme } = useSelector(getThemeSelector());

    useEffect(() => {
        if (userIsSignedIn) {
            navigate(dashboardMainRoute);
        } else {
            navigate(authMainRoute);
        }
    }, [userIsSignedIn, navigate]);

    return {
        locationByAuth,
        theme
    };
}

export default useRouter;