import { combineReducers } from "redux";
import PokemonReducer from "./pokemon-reducer";

export const rootReducer = combineReducers({
  pokemon: PokemonReducer
});

export type RootState = ReturnType<typeof rootReducer>;
