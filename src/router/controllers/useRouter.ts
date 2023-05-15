import { useEffect, useMemo } from "react";
import useFirebaseAuth from "../../common/controllers/firebase/useFirebaseAuth";
import { useNavigate } from "react-router-dom";

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

    useEffect(() => {
        if (userIsSignedIn) {
            navigate(dashboardMainRoute);
        } else {
            navigate(authMainRoute);
        }
    }, [userIsSignedIn, navigate]);

    return {
        locationByAuth
    };
}

export default useRouter;