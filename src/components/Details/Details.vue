<template>
  <div :class="`container ${$route.params.type}`">
    <h1>Details do Pokemon {{ $route.params.id }}</h1>
    <p>Tipo: {{ $route.params.type }}</p>
  </div>
</template>

<script>
export default {
  name: "Details",
  mounted() {
    console.log(this.$route);
  },
};
</script>

<style scoped>
.container {
  height: 100vh;
  width: 100%;
}

.container.grass {
  background: #a1ffce;
  background: -webkit-linear-gradient(to right, #faffd1, #a1ffce);
  background: linear-gradient(to right, #faffd1, #a1ffce);
}
.container.steel {
  background: #abbaab;
  background: -webkit-linear-gradient(to left, #f4f4f4, #abbaab);
  background: linear-gradient(to left, #f4f4f4, #abbaab);
}
.container.fire {
  background: #a1ffce;
  background: -webkit-linear-gradient(to right, #faffd1, #a1ffce);
  background: linear-gradient(to right, #faffd1, #a1ffce);
}
.container.electric {
  background: #a1ffce;
  background: -webkit-linear-gradient(to right, #faffd1, #a1ffce);
  background: linear-gradient(to right, #faffd1, #a1ffce);
}
.container.water,
.container.ice {
  background: #a1ffce;
  background: -webkit-linear-gradient(to right, #faffd1, #a1ffce);
  background: linear-gradient(to right, #faffd1, #a1ffce);
}
.container.ground {
  background: #a1ffce;
  background: -webkit-linear-gradient(to right, #faffd1, #a1ffce);
  background: linear-gradient(to right, #faffd1, #a1ffce);
}
.container.rock {
  background: #a1ffce;
  background: -webkit-linear-gradient(to right, #faffd1, #a1ffce);
  background: linear-gradient(to right, #faffd1, #a1ffce);
}
.container.fairy {
  background: #a1ffce;
  background: -webkit-linear-gradient(to right, #faffd1, #a1ffce);
  background: linear-gradient(to right, #faffd1, #a1ffce);
}
.container.poison {
  background: #a1ffce;
  background: -webkit-linear-gradient(to right, #faffd1, #a1ffce);
  background: linear-gradient(to right, #faffd1, #a1ffce);
}
.container.bug {
  background: #a1ffce;
  background: -webkit-linear-gradient(to right, #faffd1, #a1ffce);
  background: linear-gradient(to right, #faffd1, #a1ffce);
}
.container.dragon {
  background: #a1ffce;
  background: -webkit-linear-gradient(to right, #faffd1, #a1ffce);
  background: linear-gradient(to right, #faffd1, #a1ffce);
}
.container.psychic {
  background: #a1ffce;
  background: -webkit-linear-gradient(to right, #faffd1, #a1ffce);
  background: linear-gradient(to right, #faffd1, #a1ffce);
}
.container.flying {
  background: #a1ffce;
  background: -webkit-linear-gradient(to right, #faffd1, #a1ffce);
  background: linear-gradient(to right, #faffd1, #a1ffce);
}
.container.fighting {
  background: #a1ffce;
  background: -webkit-linear-gradient(to right, #faffd1, #a1ffce);
  background: linear-gradient(to right, #faffd1, #a1ffce);
}
.container.normal {
  background: #a1ffce;
  background: -webkit-linear-gradient(to right, #faffd1, #a1ffce);
  background: linear-gradient(to right, #faffd1, #a1ffce);
}
</style>
