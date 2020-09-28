import { AxiosResponse } from "axios";
import ApiService from "./apiService";
import { Pokemon } from "../models/Pokemon";

export class PokemonService extends ApiService {
  constructor() {
    super("http://127.0.0.1:8001/api");
  }

  async getPokemons(): Promise<AxiosResponse<Pokemon>> {
    return this.get<Pokemon>(
      `/pokemons`
    );
  }
}
