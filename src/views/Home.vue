<template>
  <div class="home d-flex flex-column">
    <Background class="background-sendiri" />
    <b-card
      class="text-center mx-auto shadow-lg bg-dewe"
      style="width: 40%; margin-top:10%;"
    >
      <h2
        class="animated tada font-weight-bold text-white"
        style="font-family: 'Arvo', serif; font-size:5rem;"
      >
        Hacktiv Kuis
      </h2>
    </b-card>
    <b-card
      class="d-flex align-content-center align-items-center align-middle animated rubberBand"
      style="width: 30%; margin: 2% auto;"
    >
      <div class="animated fadeIn delay-1s">
        <h2 class="text-center font-weight-bold">Let's Get Started!</h2>
        <b-form class="flex-column" @submit.prevent="startGame">
          <b-form-group class="mt-3" description="Insert your name here">
            <b-form-input
              type="text"
              v-model="name"
              required
              placeholder="Name"
            ></b-form-input>
          </b-form-group>
          <div class="d-flex justify-content-center">
            <b-btn
              type="submit"
              class="btn-dewe font-weight-bold"
              variant="primary"
              >Start Now!</b-btn
            >
          </div>
        </b-form>
      </div>
    </b-card>
  </div>
</template>

<script>
import Background from '../components/Background'
export default {
  name: 'Home',
  components: {
    Background
  },
  data() {
    return {
      name: null
    }
  },
  methods: {
    startGame() {
      localStorage.setItem('name', this.name)
      this.$router.push('/game')
    }
  }
}
</script>

<style scoped>
.background-sendiri {
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: -10;
}
.bg-dewe {
  background-color: rgba(158, 68, 68, 0.568) !important;
  border-radius: 5rem !important;
}
.btn-dewe {
  transition: 0.7s;
}
.btn-dewe:hover {
  padding: 1.1rem;
  font-size: 1.1rem;
  font-weight: bold;
}
.title {
  width: 30%;
  margin-top: 10%;
  padding: 0;
}
</style>
