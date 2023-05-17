import { useLocation, useNavigate } from "react-router-dom";
import { themeSelectors } from "../../redux/selectors/theme";
import { useSelector } from "react-redux";
import { auth } from "../../common/controllers/firebase/useFirebase";
import { onAuthStateChanged } from "firebase/auth";

function useRouter() {

    // constants
    const dashboardMainRoute = '/dashboard/home';
    const authMainRoute = '/auth/login';

    // Hooks
    const navigate = useNavigate();
    const { pathname } = useLocation();

    // Selectors
    const { getThemeSelector } = themeSelectors();
    const { theme } = useSelector(getThemeSelector());

    onAuthStateChanged(auth, (user) => {
        if (user) {
            if (!pathname.includes('dashboard')) {
                navigate(dashboardMainRoute);
            }
        } else {
            navigate(authMainRoute);
        }
    });

    return {
        theme,
    };
}

export default useRouter;