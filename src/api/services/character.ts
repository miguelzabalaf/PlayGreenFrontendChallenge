import axios, { AxiosResponse } from 'axios';
import { trackPromise } from 'react-promise-tracker';

// Endpoints
import { endpoints } from '../constants/endpoints';

// Entities
import { Character } from '../../domain/entities/character';

export function getRandomCharacterService(): Promise<AxiosResponse<Character>> {
    const request = axios.get(endpoints.character.getRandomCharacter);
    return trackPromise(request);
}