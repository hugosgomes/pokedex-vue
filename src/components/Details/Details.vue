<template>
  <div :class="`container ${$route.params.type}`">
    <button class="btn-back" @click="back">
      <i class="fas fa-arrow-left"></i>
    </button>
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
  methods: {
    back() {
      history.back();
    },
  },
};
</script>

<style scoped>
.container {
  height: 100vh;
  width: 100%;
}

h1 {
  text-align: center;
}

p {
  text-align: center;
  font-size: 20px;
  font-weight: bold;
}

.img {
  width: 600px;
  height: 600px;
  margin: auto;
}

img {
  height: 600px;
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

@media screen and (max-width: 600px) {
  .img {
    width: 100%;
  }
  img {
    width: 100%;
    height: auto;
  }
}

.btn-back {
  padding: 10px 0 0 10px;
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
  background: #f12711;
  background: -webkit-linear-gradient(to right, #f5af19, #f12711);
  background: linear-gradient(to right, #f5af19, #f12711);
}
.container.electric {
  background: #fceabb;
  background: -webkit-linear-gradient(to right, #fceabb, #f8b500);
  background: linear-gradient(to right, #fceabb, #f8b500);
}
.container.water,
.container.ice {
  background: #1c92d2;
  background: -webkit-linear-gradient(to right, #1c92d2, #f2fcfe);
  background: linear-gradient(to right, #1c92d2, #f2fcfe);
}
.container.ground {
  background: #ffeeee;
  background: -webkit-linear-gradient(to right, #ffeeee, #ddefbb);
  background: linear-gradient(to right, #ffeeee, #ddefbb);
}
.container.rock {
  background: #8e9eab;
  background: -webkit-linear-gradient(to right, #8e9eab, #eef2f3);
  background: linear-gradient(to right, #8e9eab, #eef2f3);
}
.container.fairy {
  background: #9d50bb;
  background: -webkit-linear-gradient(to right, #9d50bb, #6e48aa);
  background: linear-gradient(to right, #9d50bb, #6e48aa);
}
.container.poison {
  background: #52c234;
  background: -webkit-linear-gradient(to right, #52c234, #061700);
  background: linear-gradient(to right, #52c234, #061700);
}
.container.bug {
  background: #d1913c;
  background: -webkit-linear-gradient(to right, #d1913c, #ffd194);
  background: linear-gradient(to right, #d1913c, #ffd194);
}
.container.dragon {
  background: #a8c0ff;
  background: -webkit-linear-gradient(to right, #a8c0ff, #3f2b96);
  background: linear-gradient(to right, #a8c0ff, #3f2b96);
}
.container.psychic {
  background: #ffe000;
  background: -webkit-linear-gradient(to right, #ffe000, #799f0c);
  background: linear-gradient(to right, #ffe000, #799f0c);
}
.container.flying,
.container.normal {
  background: #ece9e6;
  background: -webkit-linear-gradient(to right, #ece9e6, #ffffff);
  background: linear-gradient(to right, #ece9e6, #ffffff);
}
.container.fighting {
  background: #ada996;
  background: -webkit-linear-gradient(
    to right,
    #ada996,
    #f2f2f2,
    #dbdbdb,
    #eaeaea
  );
  background: linear-gradient(to right, #ada996, #f2f2f2, #dbdbdb, #eaeaea);
}
</style>
