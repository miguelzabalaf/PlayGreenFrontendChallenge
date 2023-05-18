import { useCallback, useEffect, useMemo, useState } from "react";
import { characterRepositoryImplement } from "../../../../api/repositoryImplement/charcter";
import { characterUseCases } from "../../../../domain/useCases/character";
import { Character } from "../../../../domain/entities/character";
import useFirebaseInteractions from "../../../../common/controllers/firebase/useFirebaseInteractions";
import { Interactions } from "../../../../common/controllers/firebase/types";

function useHome() {
    const { handleInteractionCharacter } = useFirebaseInteractions();
    const { getRandomCharacter } = characterUseCases(characterRepositoryImplement());
    const [character, setCharacter] = useState<Character | null>(null);
    const [hasInteraction, setHasInteraction] = useState(false);

    const onGetRandomCharacter = useCallback(async () => {
        setCharacter(null);
        try {
            const randomCharacter = await getRandomCharacter();
            setCharacter(randomCharacter);
            setHasInteraction(false);
        } catch (error) {
        }
    }, [getRandomCharacter]);


    const handleLoveCharacter = useCallback(() => {
        if (character) {
            setHasInteraction(true);
            handleInteractionCharacter(character, Interactions.LOVE, onGetRandomCharacter);
        }
    }, [character, handleInteractionCharacter, onGetRandomCharacter]);

    const handleHateCharacter = useCallback(() => {
        if (character) {
            setHasInteraction(true);
            handleInteractionCharacter(character, Interactions.HATE, onGetRandomCharacter);
        }
    }, [character, handleInteractionCharacter, onGetRandomCharacter]);

    const characterName = useMemo(() => character?.data.name ?? '', [character]);

    const characterImageUrl = useMemo(() => character?.data.images.jpg.image_url ?? '', [character]);

    const disabledOptions = useMemo(() => !character, [character]);

    const disabledImage = useMemo(() => hasInteraction, [hasInteraction]);

    useEffect(() => {
        onGetRandomCharacter();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {
        onGetRandomCharacter,
        characterName,
        characterImageUrl,
        handleLoveCharacter,
        handleHateCharacter,
        disabledOptions,
        disabledImage
    };
}

export default useHome;