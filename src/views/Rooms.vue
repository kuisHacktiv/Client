<template>
  <div>
    <div class="home d-flex flex-column">
      <Background class="background-sendiri"></Background>
      <b-card
        class="d-flex align-content-center align-items-center align-middle animated rubberBand"
        style="width: 30%; margin: 2% auto;"
      >
        <div class="animated fadeIn delay-1s">
          <h2 class="text-center font-weight-bold">Create new room</h2>
          <b-form class="flex-column" @submit.prevent="createRoom">
            <b-form-group class="mt-3" description="Insert your room here">
              <b-form-input type="text" v-model="roomname" required placeholder="Room Name"></b-form-input>
            </b-form-group>
            <div class="d-flex justify-content-center">
              <b-btn type="submit" class="btn-dewe font-weight-bold" variant="primary">Create Room</b-btn>
            </div>
          </b-form>
        </div>
      </b-card>
    </div>
  </div>
</template>

<script>
import Background from "../components/Background";
export default {
  name: "rooms",
  components: {
    Background
  },
  data() {
    return {
      roomname: ""
    };
  },
  methods: {
    createRoom() {
      let roomname = this.roomname;
      this.$socket.emit("createRoom", roomname);
      let objCR = {
        userId: localStorage.getItem("userId"),
        roomname: this.roomname
      };
      this.$store.dispatch("createRoom", objCR);
    }
  }
};
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