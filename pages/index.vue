<template>
  <div class="app-container">
    <NavBar @searchNew="searchMovie"/>

<div class="movies-container">
<Movies :info="info"/>
</div>

  </div>
</template>

<script>
import axios from "axios"; 
import Movies from "@/components/MovieCard.vue"
import NavBar from "@/components/NavBar.vue"

export default {
  data(){
    return{
      info: {}, 
    }
 
  },
  components: {
Movies, 
NavBar
  },
  computed: {
    person(){
      return this.$store.state.movies.person;
    }
  },
  methods: {
  async  searchMovie(result){
        console.log("hello");
  await axios
      .get(`http://www.omdbapi.com/?i=tt3896198&apikey=4403c544&s=${result}`)
      .then(response => (this.info = response.data.Search));
    }
 
    
  }
}
</script>

<style >

.movies-container{
margin:50px;
}

.app-container{
  background-color:rgb(17, 17, 17);
  height:200vh;
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
