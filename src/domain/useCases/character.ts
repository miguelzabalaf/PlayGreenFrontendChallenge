import { CharacterRepository } from "../repositories/character";

export function characterUseCases(respository: CharacterRepository) {
    return {
        async getRandomCharacter() {
            return await respository.getRandomCharacter();
        }
    };

}