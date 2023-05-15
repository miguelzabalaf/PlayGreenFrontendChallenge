import { Character } from "../../domain/entities/character";
import { CharacterRepository } from "../../domain/repositories/character";

// Services
import { getRandomCharacterService } from "../services/character";

export function characterRepositoryImplement(): CharacterRepository {
    return {
        getRandomCharacter(): Promise<Character> {
            return new Promise(async (resolve, reject) => {
                try {
                    const resp = await getRandomCharacterService();
                    resolve(resp.data);
                } catch (error) {
                    reject(error);
                }
            });
        },
    };
}