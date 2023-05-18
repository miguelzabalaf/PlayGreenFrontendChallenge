import React from "react";
import useFirebaseAuth from "../../../common/controllers/firebase/useFirebaseAuth";

function Logout(): JSX.Element {
    const { handleLogOut } = useFirebaseAuth();
    async function logout() {
        await handleLogOut();
    }
    logout().then();
    return <></>;
}

export default Logout;
