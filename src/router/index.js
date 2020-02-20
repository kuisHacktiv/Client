import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import GamePage from '../views/GamePage'
import WinLoser from '../views/winLose'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/game',
    name: 'Game',
    component: GamePage
  },
  {
    path: '/winlose',
    name: 'winlose',
    component: WinLoser
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
