<template>
    <div>
        <ul >
    <li class="movie-list" v-for="inf in info" :key="inf.index">
        <div class="movie-card">
      <img class="poster" :src="inf.Poster">
      <div class="additional">
          <div class="icons"> 
              <b-icon :icon="changeIcon()" class="mr-1 thumb-icon" @click="addMovie(inf, iconChange)"></b-icon>
             <b-icon icon="hand-thumbs-up" class="mr-1 thumb-icon" ></b-icon>
             <b-icon icon="hand-thumbs-down" class="mr-1 thumb-icon"></b-icon>
          </div>
         
          <p class="title-movie">{{inf.Title}}</p>
          </div>
        </div>
      </li>
  </ul>
    </div>
</template>

<script>
export default {
    name:"Movies", 
    props:["info", "myList"], 
    data(){
return{
    iconPlus: "plus", 
    iconCheck: "check2", 
    iconChange: false 
}
    },

    methods:{
changeIcon(){
if(this.iconChange === false){
    return "plus"
}
else {
    return "check"
}
},

    addMovie(inf){
 this.$store.dispatch('addToList', inf); 




        }
    }
    
}
</script>

<style >
@import "@/assets/scss/movie-card.scss";
</style>