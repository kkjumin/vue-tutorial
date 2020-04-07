<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/sub01">Sub01</router-link> |
      <router-link to="/sub02">Sub02</router-link> |
      <router-link to="/sub03">Sub03</router-link> -->
      <a href="javascript:;" @click="onLocationClick('Home')">Home</a> |
      <a href="javascript:;" @click="onLocationClick('Sub01')">Sub01</a> |
      <a href="javascript:;" @click="onLocationClick('Sub02')">Sub02</a> |
      <a href="javascript:;" @click="onLocationClick('Sub03')">Sub03</a>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  methods: {
    onLocationClick(name) {
      this.$router.push({ name, params: { test: 'test' } }).catch(() => {});
    }
  }
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#nav a:active {
  color: #42b983;
  font-size: 120%;
  transition: 0.1s;
}
</style>
