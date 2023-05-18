import { Character } from "../entities/character";
import { Interactions } from '../../common/controllers/firebase/types';

export interface Interaction extends Character {
    interaction: Interactions;
}