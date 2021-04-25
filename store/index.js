
import axios from "axios";
import { BIconMusicNoteList } from "bootstrap-vue";

export const state = () => ({
    info:[], 
    myList:[]
  })
  

  export const actions = {
    getMovies({ commit }, result) {
      axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=4403c544&s=' + result)
      .then(response => {
      commit('SET_USERS', response.data.Search)
      })
      }, 

      addToList({commit}, inf){
        commit('ADD_LIST', inf)
      },
  }

  export const mutations = {
    SET_USERS(state, info) {
      state.info = info
      }, 

    ADD_LIST(state, inf) {
      state.myList.push(inf)
        }     
  }

  export const getters = {

  }