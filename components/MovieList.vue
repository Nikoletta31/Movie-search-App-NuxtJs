<template>
    <div>
        <div v-if="myList.length > 0">
        <ul >
    <li class="movie-list" v-for="list in myList" :key="list.id">
        <div class="movie-card">
      <img class="poster" :src="list.Poster">
      <div class="additional">
          <div class="icons"> 
             <b-icon icon="hand-thumbs-up" class="mr-1 thumb-icon" ></b-icon>
             <b-icon icon="hand-thumbs-down" class="mr-1 thumb-icon"></b-icon>
          </div>
          <p class="title-movie">{{list.Title}}</p>
          </div>
        </div>
      </li>
  </ul>
</div>
<div v-else><h1>Your list is empty</h1></div>
    </div>
</template>

<script>
export default {
    name:"Movies", 
    props:["myList"], 
    data(){
        return{

        }
    },

    
}
</script>

<style >
@import "@/assets/scss/movie-card.scss";
</style>