import { ActionType, PokemonState } from "../types";
import {
  LOAD_DASHBOARD_FAILURE,
  LOAD_DASHBOARD_SUCCESS
} from "../action_types";

const initialState: PokemonState = {
  pokemon: null,
  isLoaded: false
};

export default function PokemonReducer(
  state = initialState,
  action: ActionType
): PokemonState {
  switch (action.type) {
    case LOAD_DASHBOARD_SUCCESS:
      return {
        ...state,
        pokemon: action.payload,
        isLoaded: true
      };
    case LOAD_DASHBOARD_FAILURE:
      return {
        ...state,
        pokemon: null,
        isLoaded: false
      };
    default:
      return state;
  }
}
