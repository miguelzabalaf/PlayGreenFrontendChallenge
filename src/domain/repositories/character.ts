import { Character } from "../entities/character";

export interface CharacterRepository {
    getRandomCharacter(): Promise<Character>;
}