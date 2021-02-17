<template>
  <div :class="`container ${$route.params.type}`">
    <router-link
      :to="{ name: 'home', params: { currentPage: $route.params.currentPage } }"
    >
      <button class="btn-back">
        <i class="fas fa-arrow-left"></i>
      </button>
    </router-link>
    <h1>{{ $route.params.name }}</h1>
    <div class="img">
      <img :src="$route.params.urlImage" alt="" srcset="" />
    </div>
    <p>Tipo: {{ $route.params.type }}</p>
  </div>
</template>

<script>
export default {
  name: "Details",
  data: () => {
    return {
      id: 0,
      type: "",
    };
  },
};
</script>

<style scoped>
@import "./Details.css";
</style>
