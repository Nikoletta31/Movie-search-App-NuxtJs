<template>
<div>
 <NavBar/>
 <div class="movie-container">
<MovieList :myList="myList"/>
  </div>        
 </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue"
import MovieList from "@/components/MovieList.vue"

export default {
name:"movie-list", 
components:{
    NavBar, 
    MovieList
}, 
    computed: {
        myList(){
      return this.$store.state.myList;
    }
  },
}
</script>

<style>
body{
 background-color:rgb(17, 17, 17);
}
.movie-container{
margin:50px;
 color:rgb(248, 248, 248);
}

.app-container{
 
  height:150vh;
 
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