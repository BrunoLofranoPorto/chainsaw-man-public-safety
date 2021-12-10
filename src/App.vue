<template>
  <div id="nav">
    <router-link class="navbar" to="/">Home</router-link> |
    <router-link class="navbar" to="/team">Team</router-link> |
    <router-link class="navbar" to="/tips">Submit Tips</router-link> |
    <router-link class="navbar" to="/claim">Claim Bounty</router-link>
  </div>
  <router-view/>
  <Footer />
</template>

<script>
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Footer
  }
}
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
  background-color: slategray;
  color: white;
}

#nav a {
  font-weight: bold;
  color: white;
}

#nav a.router-link-exact-active {
  color: black;
}

.navbar {
  margin: 0 50px;
}


</style>
