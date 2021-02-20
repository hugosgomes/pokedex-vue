<template>
  <router-link
    :to="{ name: 'pokemon', params: { id, name, type, urlImage, currentPage } }"
  >
    <article :class="'card ' + type">
      <h1>{{ id }}. {{ name }}</h1>
      <p>{{ typesString }}</p>
      <img class="pokemon-image" :src="urlImage" :alt="name" />
    </article>
  </router-link>
</template>

<script>
import pokemonApi from "../../services/api";

export default {
  name: "Card",
  props: {
    url: String,
    currentPage: String,
  },
  data: function() {
    return {
      id: 0,
      name: "",
      type: "",
      typesString: "",
      urlImage: "",
      pokemon: null,
    };
  },
  beforeMount() {
    pokemonApi.getPokemon(this.url).then((pokemon) => {
      const { id, name, types } = pokemon;
      this.id = id;
      this.name = this.capitalize(name);
      this.type = this.getType(types);
      this.typesString = this.getTypesString(types);
      this.urlImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
      this.pokemon = pokemon;
    });
  },
  methods: {
    capitalize(name) {
      return name.replace(/\b\w/g, (l) => l.toUpperCase());
    },
    getTypesString(typesNames) {
      return this.capitalize(
        typesNames.map((types) => types.type.name).join(" | ")
      );
    },
    getType(typesNames) {
      return typesNames[0].type.name;
    },
  },
};
</script>

<style scoped>
@import "./Card.css";
</style>
