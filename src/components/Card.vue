<template>
  <article :class="'card ' + type">{{ name }}</article>
</template>

<script>
import pokemonApi from "../services/api";

export default {
  name: "Card",
  props: {
    name: String,
    url: String,
  },
  data: function() {
    return {
      type: "",
    };
  },
  beforeMount() {
    pokemonApi
      .getPokemon(this.url)
      .then((pokemon) => (this.type = pokemon.types[0].type.name));
  },
};
</script>

<style scoped>
.card {
  width: 230px;
  height: 245px;
}

.steel {
  background-color: #f4f4f4;
}

.fire {
  background-color: #fddfdf;
}

.grass {
  background-color: #defde0;
}

.electric {
  background-color: #fcf7de;
}

.water,
.ice {
  background-color: #def3fd;
}

.ground {
  background-color: #f4e7da;
}

.rock {
  background-color: #d5d5d4;
}

.fairy {
  background-color: #fceaff;
}

.poison {
  background-color: #98d7a5;
}

.bug {
  background-color: #f8d5a3;
}

.dragon {
  background-color: #97b3e6;
}

.psychic {
  background-color: #eaeda1;
}

.flying {
  background-color: #f5f5f5;
}

.fighting {
  background-color: #e6e0d4;
}

.normal {
  background-color: #f5f5f5;
}
</style>
