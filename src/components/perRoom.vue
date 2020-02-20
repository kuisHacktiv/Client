<template>
  <div class="col-3">
    <b-card :title="detailroom.roomname" sub-title="Card subtitle">
      <div class="btn btn-primary" @click="joinRoom">Join Room</div>

      <b-card-text>A second paragraph of text in the card.</b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "perroom",
  props: ["detailroom"],
  methods: {
    joinRoom() {
      //   let roomname = detailroom.name
      //   console.log(this.detailroom, "<<<<< ini det");

      let objJR = {
        roomname: this.detailroom.roomname,
        userId: localStorage.getItem("userId")
      };
      //   console.log(objJR.roomname, "<<<<< ");
      let roomnamenya = this.detailroom.roomname;
      this.$socket.emit("createRoom", roomnamenya);
      this.$store.dispatch("joinRoom", objJR);
    }
  }
};
</script>

<style>
</style>