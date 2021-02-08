<template>
  <Home />
</template>

<script>
import Home from "./components/Home/Home";

export default {
  name: "App",
  components: {
    Home,
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
  background: linear-gradient(to right, rgb(197, 230, 236), rgb(239, 187, 230));
  margin: 0;
  font-family: rubik;
}
</style>
