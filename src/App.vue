<script setup>
// import Home  from './views/home.vue'
import NavBar from './views/NavBar.vue'
import Footer from './components/Footer.vue';
import East from './views/east.vue'
import West from './views/west.vue'
import North from './views/north.vue'
import South from './views/south.vue'
import Kigali from './views/kigali.vue'
</script>
<template>
  <NavBar/>
  <!-- <home/> -->
  <RouterView/>
  <Footer/>
       
</template>
