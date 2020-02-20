<template>
  <div>
    <Background class="background-sendiri"/>
    <BoxPlayer style="z-index:1;"/>
  </div>

</template>

<script>
import Background from '@/components/Background.vue'
import BoxPlayer from '@/components/BoxPlayer.vue';

export default {
  name: 'Lobby',
  components: {
    BoxPlayer,
    Background
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