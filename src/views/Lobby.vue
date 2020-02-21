<template>
  <div>
    <Background class="background-sendiri" />
    <BoxPlayer style="z-index:1;" />
  </div>
</template>

<script>
import Background from '@/components/Background.vue'
import BoxPlayer from '@/components/BoxPlayer.vue'

export default {
  name: 'Lobby',
  components: {
    BoxPlayer,
    Background
  },
  created() {
    this.$store.dispatch('GET_ROOMS_USERS', this.$route.params.name)
  },
  mounted() {
    this.$socket.on('joined', (roomname) => {
      console.log(roomname, 'nama room')
      this.$store.dispatch('GET_ROOMS_USERS', this.$route.params.name)
    })
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
</style>
