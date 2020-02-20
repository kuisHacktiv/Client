<template>
  <b-card class="text-center">
    <h4 class="border-bottom pb-2">{{ detailroom.roomname }}</h4>
    <div class="btn btn-primary my-2" @click="joinRoom">Join Room</div>
  </b-card>
</template>

<script>
export default {
  name: 'perroom',
  props: ['detailroom'],
  methods: {
    joinRoom() {
      //   let roomname = detailroom.name
      //   console.log(this.detailroom, "<<<<< ini det");

      let objJR = {
        roomname: this.detailroom.roomname,
        userId: localStorage.getItem('userId')
      }
      //   console.log(objJR.roomname, "<<<<< ");
      let roomnamenya = this.detailroom.roomname
      this.$socket.emit('createRoom', roomnamenya)
      this.$store.dispatch('joinRoom', objJR)
    }
  }
}
</script>

<style></style>
