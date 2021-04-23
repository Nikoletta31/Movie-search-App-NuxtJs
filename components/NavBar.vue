<template>
<div>
   <b-navbar toggleable="lg" type="dark" class="ml-5 mr-5">
    
    <b-navbar-brand href="#"><img src="@/assets/netflix.png"></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item class="nav-links" href="#">Home</b-nav-item>
       <b-nav-item class="nav-links" href="#">TV Shows</b-nav-item>
       <b-nav-item class="nav-links" href="#">Movies</b-nav-item>
       <b-nav-item class="nav-links" href="#">Most popular</b-nav-item>
       <b-nav-item class="nav-links" href="#">My List</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
          
        <b-nav-form @submit.prevent>
          <b-icon icon="search" @click="showSearch" class="mr-3 search-icon"></b-icon>
          <transition name="fade">
            
          <input v-if="openSearch" v-model="result" @keydown="search"/>
   
          </transition>
        </b-nav-form>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>


  </div>
</template>

<script>
export default {
name:"NavBar", 
data(){
    return{
        openSearch:false,
        result: ""
    }
}, 
methods: {
    showSearch(){
        this.openSearch = true;
    },
    async search(){
        
        console.log(this.result)
    this.$emit('searchNew', this.result); 

    }, 
    noLoad(event){
        event.preventDefault()
    }
}
}
</script>

<style>
@import "@/assets/scss/navbar.scss";
</style>