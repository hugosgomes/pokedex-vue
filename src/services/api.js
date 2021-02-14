import axios from "axios";

const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});

const pokemonApi = {
  getPokemons: async (offset) => {
    const response = await api.get(`/pokemon/?limit=30&offset=${offset}`);
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
