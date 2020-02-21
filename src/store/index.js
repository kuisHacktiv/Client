import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allSoals: [],
    baseUrl: 'http://localhost:3000',
    userScore: null,
    dummy: '',
    allRooms: [],
    winner: null,
    userList: []
  },
  mutations: {
    setAllSoal(state, soals) {
      state.allSoals = soals
    },
    dummy(state, dummy) {
      state.dummy = dummy
    },
    setAllRooms(state, data) {
      state.allRooms = data
    },
    setwinner(state, winner) {
      state.winner = winner
    },
    SAVE_ROOMS_USERS(state, data) {
      state.userList = data
    }
  },
  actions: {
    getSoals(context) {
      axios({
        method: 'GET',
        url: `${this.state.baseUrl}/soals`
      })
        .then(({ data }) => {
          context.commit('setAllSoal', data)
        })
        .catch((err) => {
          console.log(err.response)
        })
    },
    createRoom(context, objCR) {
      let { userId, roomname, name } = objCR
      return axios({
        method: 'POST',
        data: {
          name,
          userId,
          roomname
        },
        url: `${this.state.baseUrl}/rooms`
      })
        .then(({ data }) => {
          // console.log(data)
          // context.commit("dummy", "dummy")
          // router.push("/rooms")
          context.dispatch('getAllRooms')
        })
        .catch((err) => {
          console.log(err, '<<<<<')
          // console.log(err.response)
        })
    },
    getAllRooms(context) {
      axios({
        method: 'GET',
        url: `${this.state.baseUrl}/rooms`
      })
        .then(({ data }) => {
          // console.log(data, "<<")
          context.commit('setAllRooms', data)
        })
        .catch((err) => {
          console.log(err.response)
        })
    },
    createUser(context, username) {
      axios({
        method: 'POST',
        url: `${this.state.baseUrl}/users`,
        data: {
          name: username
        }
      }).then(({ data }) => {
        console.log(data)
        router.push('/rooms')
        localStorage.setItem('userId', data.id)
        context.commit('dummy', 'dummy')
      })
    },
    joinRoom(context, objCR) {
      let { roomname, userId } = objCR
      axios({
        method: 'POST',
        url: `${this.state.baseUrl}/join`,
        data: {
          roomname,
          userId
        }
      })
        .then(({ data }) => {
          console.log(data, '<< ni dari join')
          context.commit('dummy', 'dummy')
          router.push(`/${data.name}/lobby`)
          context.dispatch('GET_ROOMS_USERS', objCR.roomname)
        })
        .catch((err) => {
          console.log(err.response)
        })
    },
    GET_ROOMS_USERS({ commit }, roomname) {
      console.log(roomname)
      axios({
        method: 'GET',
        url: `${this.state.baseUrl}/rooms/${roomname}/users`
      })
        .then(({ data }) => {
          console.log(data)
          commit('SAVE_ROOMS_USERS', data)
        })
        .catch((err) => {
          console.log(err.response)
        })
    }
  },
  modules: {}
})
