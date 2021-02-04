<template>
  <div class="container">
    <h1>Pokedex</h1>
    <Card
      v-for="pokemon in pokemons"
      :key="pokemon.name"
      :name="pokemon.name"
    />
  </div>
</template>

<script>
import pokemonApi from "./services/api";
import Card from "./components/Card";

export default {
  name: "App",
  components: {
    Card,
  },
  data: function() {
    return {
      pokemons: [],
    };
  },
  beforeMount() {
    pokemonApi
      .getPokemons()
      .then((pokemons) => (this.pokemons = pokemons.results));
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
}

#app {
  height: 100vh;
  width: 100%;
  background: linear-gradient(to right, rgb(197, 230, 236), rgb(239, 187, 230));
  margin: 0;
  font-family: rubik;
}

.container {
  padding: 20px;
}
</style>
