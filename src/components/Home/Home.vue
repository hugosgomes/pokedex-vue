<template>
  <div class="container">
    <h1>Pokedex</h1>
    <div class="pages">
      <button @click="previusPage" :disabled="page === 1">
        <i class="fas fa-step-backward"></i>
      </button>
      <h3>Page {{ page }}</h3>
      <button @click="nextPage" :disabled="page === 38">
        <i class="fas fa-step-forward"></i>
      </button>
    </div>
    <section>
      <Card
        v-for="pokemon in pokemons"
        :key="pokemon.name"
        :url="pokemon.url"
        :currentPage="page"
      />
    </section>
    <div class="pages-bottom">
      <button @click="previusPage" :disabled="page === 1">
        <i class="fas fa-step-backward"></i>
      </button>
      <h3>Page {{ page }}</h3>
      <button @click="nextPage" :disabled="page === 38">
        <i class="fas fa-step-forward"></i>
      </button>
    </div>
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
  data: () => {
    return {
      pokemons: [],
      page: 0,
    };
  },
  beforeMount() {
    this.verifyCurrentPage();
    this.setPage(this.page);
  },
  methods: {
    setOffset(page) {
      return (page - 1) * 30;
    },
    nextPage() {
      this.setPage(++this.page);
    },
    previusPage() {
      this.setPage(--this.page);
    },
    setPage(page) {
      const offset = this.setOffset(page);
      this.pokemons = [];
      pokemonApi
        .getPokemons(offset)
        .then((pokemons) => (this.pokemons = pokemons.results));
    },
    verifyCurrentPage() {
      this.page = this.$route.params.currentPage ?? 1;
    },
  },
};
</script>

<style scoped>
.container {
  background: linear-gradient(to right, rgb(197, 230, 236), rgb(239, 187, 230));
  padding: 20px;
  height: 100%;
}

.container section {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 17px;
  min-height: 100vh;
}

.pages,
.pages-bottom {
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 20px;
}

.pages {
  margin-bottom: 20px;
}

.pages-bottom {
  margin-top: 20px;
}

.container h1 {
  text-align: center;
  margin-bottom: 20px;
}

button {
  background: transparent;
  border: none;
  font-size: 30px;
}

button:hover {
  cursor: pointer;
  color: orangered;
}

button:disabled:hover {
  cursor: auto;
  color: #1010104d;
}
</style>
