<template>
  <b-card class="text-center">
    <h4 class="border-bottom pb-2">{{ detailroom.roomname }}</h4>
    <div v-if="jumlahMember < 4" class="btn btn-primary my-2" @click="joinRoom">Join Room</div>
    <b-button v-else disabled>Join Room</b-button>
  </b-card>
</template>

<script>
import axios from "axios";
export default {
  name: "perroom",
  props: ["detailroom"],
  data() {
    return {
      detail: null,
      jumlahMember: null
    };
  },
  methods: {
    joinRoom() {
      let objJR = {
        roomname: this.detailroom.roomname,
        userId: localStorage.getItem("userId")
      };
      let roomnamenya = this.detailroom.roomname;
      this.$socket.emit("joinRoom", roomnamenya);
      this.$store.dispatch("joinRoom", objJR);
    },
    getRoomDetail() {
      // console.log(this.detailroom, "<<");
      let nameRoom = this.detailroom.roomname;
      axios({
        method: "GET",
        url: `${this.$baseUrl}/roomDetail/${nameRoom}`
      })
        .then(({ data }) => {
          // console.log(data, "<<< ini room detail");
          this.detail = data;
          this.jumlahMember = data.length;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this.getRoomDetail();
  },
  mounted() {}
};
</script>

<style></style>
