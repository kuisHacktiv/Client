<template>
  <div style="font-family: 'Arvo', serif;">
    <div class="home d-flex flex-column">
      <Background class="background-sendiri"></Background>
      <b-card
        class="d-flex align-content-center align-items-center align-middle animated rubberBand mx-auto"
        style="width: 30%; margin-top: 2%;"
      >
        <div class="animated fadeIn delay-1s">
          <h2 class="text-center font-weight-bold">Create new room</h2>
          <b-form class="flex-column" @submit.prevent="createRoom">
            <b-form-group class="mt-3" description="Insert your room here">
              <b-form-input type="text" v-model="roomname" required placeholder="Room Name"></b-form-input>
            </b-form-group>
            <div class="d-flex justify-content-center">
              <b-btn type="submit" class="btn-gerak font-weight-bold" variant="primary">Create Room</b-btn>
            </div>
          </b-form>
        </div>
      </b-card>
      <b-card class="mx-auto my-4" style="width:30%;">
        <h2 class="font-weight-bold text-center">Room List :</h2>
      </b-card>
      <b-card class="container mb-5 overflow-auto" style="height: 50vh;">
        <div class="row">
          <div class="col-4 my-3" v-for="(oneRoom, i) in semuaRoom" :key="i">
            <perRoom :detailroom="oneRoom"></perRoom>
          </div>
        </div>
      </b-card>
    </div>
  </div>
</template>

<script>
import Background from "../components/Background";
import perRoom from "../components/perRoom";
export default {
  name: "rooms",
  components: {
    Background,
    perRoom
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
        roomname: this.roomname,
        name: localStorage.getItem("name")
      };
      this.$store.dispatch("createRoom", objCR);
    },
    getAllRoom() {
      this.$store.dispatch("getAllRooms");
    }
  },
  mounted() {
    this.getAllRoom();
    this.$socket.on("fetchRoomUlang", () => {
      console.log("masuk emitanny");
      this.getAllRoom();
    });
  },
  computed: {
    semuaRoom() {
      return this.$store.state.allRooms;
    }
  }
  // watch: {
  //   semuaRoom(oldVal, newVal) {
  //     if (oldVal == newVal) {
  //       this.getAllRoom();
  //     }
  //   }
  // }
};
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
  font-size: 1.2rem;
  border-radius: 50%;
}
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
