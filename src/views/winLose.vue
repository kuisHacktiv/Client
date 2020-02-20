<template>
  <div class="flex-column">
    <Background class="background-sendiri" />
    <!-- Kalo scorenya >= 10 -->
    <!-- NOICE -->
    <div class="mt-5" v-if="score >= 10">
      <b-card
        class="d-flex justify-content-center mx-auto animated bounceInDown"
        style="width: 50%;"
      >
        <video
          class="d-flex mx-auto align-items-center"
          src="../assets/noice.mp4"
          loop
          autoplay
          controls
        ></video>
      </b-card>
      <b-card
        class="mx-auto mt-5 animated tada fast delay-1s"
        style="width: 50%; font-family: 'Arvo', serif; font-size:5rem;"
      >
        <h2 class="text-center animated fadeIn delay-1s">
          Yeeey! You Are The Winner
        </h2>
      </b-card>
      <div class="d-flex justify-content-center mt-5">
        <b-btn
          variant="warning"
          class="font-weight-bold btn-gerak animated fadeIn delay-1s"
          @click="toLobby"
          >Another Round!</b-btn
        >
      </div>
    </div>
    <!-- Kalo scorenya kurang 10 -->
    <!-- Think Guy -->
    <div class="mt-5" v-else>
      <b-card
        class="d-flex justify-content-center mx-auto animated bounceInDown"
        style="width: 50%;"
      >
        <img
          class="d-flex mx-auto align-items-center"
          src="https://media.giphy.com/media/d3mlE7uhX8KFgEmY/giphy.gif"
        />
      </b-card>
      <b-card
        class="mx-auto mt-5 animated tada fast delay-1s"
        style="width: 50%; font-family: 'Arvo', serif; font-size:5rem;"
      >
        <h2 class="text-center animated fadeIn delay-1s">Too bad, you lose!</h2>
      </b-card>
      <div class="d-flex justify-content-center mt-5">
        <b-btn
          variant="warning"
          class="font-weight-bold btn-gerak animated fadeIn delay-1s"
          @click="toLobby"
          >Try Again</b-btn
        >
      </div>
    </div>
  </div>
</template>

<script>
import Background from '../components/Background'
export default {
  name: 'winlose',
  components: {
    Background
  },
  computed: {
    score() {
      return this.$store.state.userScore
    }
  },
  methods: {
    toLobby() {
      this.$store.state.userScore = null
      this.$router.push('/lobby')
    }
  }
}
</script>

<style scoped>
.btn-gerak {
  transition: 0.7s;
  padding-right: 1vw;
  padding-left: 1vw;
  font-size: 1rem;
}

.btn-gerak:hover {
  padding: 1rem;
  font-weight: bold;
  font-size: 1.5rem;
  border-radius: 50%;
}
.background-sendiri {
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: -10;
}
</style>
