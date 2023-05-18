import { collection, doc, getDocs, getFirestore, query, setDoc } from "firebase/firestore";
import { app, auth } from "./firebase";
import { firebaseCollections } from "../../constants/firebase";
import { Character } from "../../../domain/entities/character";
import { Interactions } from './types';
import { Interaction } from "../../../domain/models/interaction";


function useFirebaseInteractions() {
    const db = getFirestore(app);
    const interactionsRef = collection(db, firebaseCollections.INTERACTIONS);
    const currentUser = auth.currentUser?.uid;

    // Methods
    async function handleInteractionCharacter(character: Character, interaction: Interactions, callback?: () => void) {
        const id = `${ currentUser }-${ character.data.mal_id }`;
        try {
            await setDoc(doc(interactionsRef, id), {
                ...character,
                interaction,
            });
            callback && callback();
        } catch (error) {
            console.log('error', error);
        }
    }

    async function getAllInteractions(): Promise<Array<Interaction>> {
        try {
            const q = query(collection(db, firebaseCollections.INTERACTIONS));
            const querySnapshot = await getDocs(q);
            const interactions = querySnapshot.docs.map(doc => doc.data());
            return interactions as Interaction[];
        } catch (error) {
            return [];
        }
    }

    return {
        handleInteractionCharacter,
        getAllInteractions
    };
}

export default useFirebaseInteractions;