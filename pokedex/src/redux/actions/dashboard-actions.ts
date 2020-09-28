import { ActionType } from "../types";
import {
  LOAD_DASHBOARD_FAILURE,
  LOAD_DASHBOARD_SUCCESS
} from "../action_types";
import { PokemonService } from "../../services/PokemonService";

export function loadDashboard(pokemonService: PokemonService) {
  return (dispatch: (action: ActionType) => any) => {
    return pokemonService
      .getPokemons()
      .then(response =>
        dispatch({
          type: LOAD_DASHBOARD_SUCCESS,
          payload: response.data
        })
      )
      .catch(error =>
        dispatch({
          type: LOAD_DASHBOARD_FAILURE,
          payload: error
        })
      );
  };
}
