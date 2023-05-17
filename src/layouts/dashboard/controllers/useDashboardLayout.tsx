import { useNavigate } from "react-router-dom";
import Icon from "../../../common/components/icons";
import useFirebaseAuth from "../../../common/controllers/firebase/useFirebaseAuth";
import { routes } from "../../../router/constants";

function useDashboardLayout() {
    const { handleLogOut } = useFirebaseAuth();
    const navigate = useNavigate();
    const bottomTabsOptions = [
        {
            id: "0",
            icon: <Icon.Home />,
            to: routes.dashboard.children.home.path,
            onClick: async () => {},
        },
        {
            id: "1",
            icon: <Icon.History />,
            to: routes.dashboard.children.history.path,
            onClick: async () => {},
        },
        {
            id: "2",
            icon: <Icon.Logout />,
            to: "/auth/login",
            onClick: async () => {
                await handleLogOut(() => navigate("/auth/login"));
            },
        },
    ];

    return {
        bottomTabsOptions,
    };
}

export default useDashboardLayout;
