<template>
  <div class="app-container">
    <NavBar @searchNew="searchMovie"/>

<div class="movies-container">
<Movies :info="info" :myList="myList"/>
</div>

  </div>
</template>

<script>

import Movies from "@/components/MovieCard.vue";
import NavBar from "@/components/NavBar.vue";
import { mapState, mapActions, mapMutations } from 'vuex';
export default {

  components: {
Movies, 
NavBar
  },
  computed: {
    info(){
      return this.$store.state.info;
    }, 
      myList(){
      return this.$store.state.myList;
    }, 
  },

  methods: {
  async searchMovie(result){
 await this.$store.dispatch("getMovies", result);
    }
 
    
  }
}
</script>

<style >

body{
 background-color:rgb(17, 17, 17);
}
.movies-container{
margin:50px;
}

.app-container{
 
  height:150vh;
  color:rgb(248, 248, 248);
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
