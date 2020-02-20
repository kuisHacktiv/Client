import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allSoals: [],
    baseUrl: "http://localhost:3000",

  },
  mutations: {
    setAllSoal(state, soals) {
      state.allSoals = soals
    }
  },
  actions: {
    getSoals(context) {
      axios({
        method: "GET",
        url: `${this.state.baseUrl}/soals`
      })
        .then(({ data }) => {
          console.log(data, "<< ini soal")
          context.commit("setAllSoal", data)
        })
        .catch(err => {
          console.log(err.response)
        })
    }
  },
  modules: {
  }
})
