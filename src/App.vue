<script setup>
// import Home  from './views/home.vue'
import NavBar from './views/NavBar.vue'
import Footer from './components/Footer.vue';
import East from './views/East.vue'
import West from './views/West.vue'
import North from './views/North.vue'
import South from './views/South.vue'
import Kigali from './views/Kigali.vue'
</script>
<template>
  <NavBar/>
  <!-- <home/> -->
  <RouterView/>
  <Footer/>
       
</template>
