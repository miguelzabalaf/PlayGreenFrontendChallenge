import { useLocation, useNavigate } from "react-router-dom";
import { themeSelectors } from "../../redux/selectors/theme";
import { useSelector } from "react-redux";
import { auth } from '../../common/controllers/firebase/firebase';
import { onAuthStateChanged } from "firebase/auth";

function useRouter() {

    // constants
    const dashboardMainRoute = '/dashboard/home';

    // Hooks
    const navigate = useNavigate();
    const { pathname } = useLocation();

    // Selectors
    const { getThemeSelector } = themeSelectors();
    const { theme } = useSelector(getThemeSelector());

    onAuthStateChanged(auth, (user) => {
        if (user !== null) {
            if (!pathname.includes('dashboard')) {
                navigate(dashboardMainRoute);
            } return;
        }
    });


    return {
        theme,
    };
}

export default useRouter;