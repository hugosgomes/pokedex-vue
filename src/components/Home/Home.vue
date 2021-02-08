<template>
  <div class="container">
    <h1>Pokedex</h1>
    <section>
      <Card
        v-for="pokemon in pokemons"
        :key="pokemon.name"
        :url="pokemon.url"
      />
    </section>
  </div>
</template>

<script>
import pokemonApi from "../../services/api";
import Card from "../../components/Card/Card";

export default {
  name: "Home",
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
.container {
  padding: 20px;
}

.container section {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 17px;
}

.container h1 {
  text-align: center;
  margin-bottom: 20px;
}
</style>
