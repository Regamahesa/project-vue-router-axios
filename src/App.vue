<template>
  <div id="app">
    <div class="ini">
      <h1>Ini Adalah Data Transportasi</h1>
    </div>
   <div class="sidebar">
     <Navbar />
   </div>
     <router-view />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #46244C;
  
}
.ini {
  text-align: center;
  background-color: black;
  color: white;
}
 
.sidebar{
  display: flex;
} 
</style>
