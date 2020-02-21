<template>
  <div
    class="container flex-column bglobby py-1 my-3 font-weight-bold"
    style="font-family: 'Arvo', serif;"
  >
    <b-card class="bg-custome mx-auto my-3 animated fadeIn" style="width: 50%;">
      <h2 class="text-center font-weight-bold">Lobby</h2>
    </b-card>
    <div class="container d-flex row mx-auto">
      <!-- card -->
      <b-card
        class="d-flex mx-auto bg-custome col-5 mx-auto my-2 animated zoomInDown"
        v-for="i in users"
        :key="i.id"
      >
        <div class="border-bottom w-100 text-dark">
          <!-- <pre>{{ i }}</pre> -->
          <h5 class="text text-center font-weight-bold">{{ i.User.name }}</h5>
        </div>
        <div class="card-body d-flex">
          <img
            src="/player1.png"
            class="player-img w3-animate-left mx-auto"
            width="100"
            height="100"
          />
        </div>
      </b-card>
      <!-- end card -->
    </div>
    <div class="d-flex justify-content-center mb-3" v-if="users.length == 4">
      <b-button
        @click="startGame"
        class="font-weight-bold btn-gerak animated fadeIn"
        variant="primary"
        >START!</b-button
      >
    </div>

    <b-card class="text-center mx-auto" style="width:30%;" v-else>
      <b-spinner small type="grow"></b-spinner>
      Waiting ...
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'BoxPlayer',
  data() {
    return {}
  },
  methods: {
    startGame() {
      let name = this.$route.params.name
      this.$socket.emit('ayomulai', name)
      this.$router.push(`/game/${name}`)
    }
  },
  created() {
    this.$store.dispatch('GET_ROOMS_USERS', this.$route.params.name)
    console.log(this.$route)
  },
  computed: {
    users() {
      return this.$store.state.userList
    }
  },
  mounted() {
    let name = this.$route.params.name

    this.$socket.on('joined', (roomname) => {
      this.$store.dispatch('GET_ROOMS_USERS', roomname)
    })

    // console.log("masuk mounted lobby");
    this.$socket.on('letsgo', () => {
      this.$router.push(`/game/${name}`)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Concert+One&display=swap');
.bglobby {
  background-color: rgba(255, 255, 255, 0.2);
}
.bg-custome {
  background-color: rgba(255, 255, 255, 0.7);
  transition-delay: 3s;
}
.btn-gerak {
  transition: 0.7s;
  padding-right: 1vw;
  padding-left: 1vw;
  font-size: 1.5rem;
}

.btn-gerak:hover {
  padding: 1rem;
  font-weight: bold;
  font-size: 2.2rem;
  border-radius: 50%;
}
</style>
