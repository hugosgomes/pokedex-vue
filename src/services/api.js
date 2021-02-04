import axios from "axios";

const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});

const pokemonApi = {
  getPokemons: async () => {
    const response = await api.get(`/pokemon/`);
    const { data } = response;
    return data;
  },
  getPokemon: async (url) => {
    const response = await api.get(url);
    const { data } = response;
    return data;
  },
};

export default pokemonApi;
