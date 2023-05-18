import { useEffect, useState } from "react";
import useFirebaseInteractions from "../../../../common/controllers/firebase/useFirebaseInteractions";
import { Interaction } from "../../../../domain/models/interaction";
import { useNavigate } from "react-router-dom";

function useHistory() {
    const { getAllInteractions } = useFirebaseInteractions();
    const [interactions, setInteractions] = useState<Interaction[]>([]);

    // Hooks
    const navigate = useNavigate();

    // Methods
    async function onGetAllInteractions() {
        try {
            const interactions = await getAllInteractions();
            setInteractions(interactions);
        } catch (error) {
            console.log('error', error);
        }
    }

    function goHome() {
        navigate('home');
    }



    useEffect(() => {
        onGetAllInteractions();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {
        interactions,
        goHome
    };
}

export default useHistory;