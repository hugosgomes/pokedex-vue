<template>
  <article :class="'card ' + type">
    <h1>{{ id }}. {{ name }}</h1>
    <p>{{ typesString }}</p>
    <img class="pokemon-image" :src="urlImage" :alt="name" />
  </article>
</template>

<script>
import pokemonApi from "../../services/api";

export default {
  name: "Card",
  props: {
    url: String,
  },
  data: function() {
    return {
      id: 0,
      name: "",
      type: "",
      typesString: "",
      urlImage: "",
    };
  },
  beforeMount() {
    pokemonApi.getPokemon(this.url).then((pokemon) => {
      const { id, name, types } = pokemon;
      this.id = id;
      this.name = this.capitalize(name);
      this.type = this.getType(types);
      this.typesString = this.getTypesString(types);
      this.urlImage = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
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
.card {
  width: 230px;
  height: 245px;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 10px 10px 13px -7px #000000;
}

.card:hover {
  cursor: pointer;
}

.card:hover .pokemon-image {
  transform: scale(1.1);
}

.card p,
.card h1 {
  text-align: center;
}

.card h1 {
  height: 5px;
}

.card p {
  margin-bottom: 10px;
}

.pokemon-image {
  height: 150px;
  display: block;
  margin: auto;
  transition: transform 0.3s;
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
