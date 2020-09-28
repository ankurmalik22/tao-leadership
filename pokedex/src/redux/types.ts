import { rootReducer } from "./reducers";
import { Pokemon } from '../models/Pokemon';

export type RootState = ReturnType<typeof rootReducer>;

export interface ActionType {
  type: string;
  payload: any;
}

export interface PokemonState {
    pokemon: Pokemon | null;
    isLoaded: boolean;
}