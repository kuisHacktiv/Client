<template>
<div class="container bglobby " style="margin-top: 20vh">
  <div class="container p-2 d-flex justify-content-center">
    <div class="card text-white bg-custome mb-3 player">
      <div class="card-header">
        <div class="svg-wrapper">
          <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
            <rect class="shape" height="60" width="320" />
          </svg>
          <div class="text">PLAYER 1</div>
        </div>
      </div>
      <div class="card-body">
        <p class="card-text"><img src="/player1.png" class="player-img w3-center w3-animate-left"></p>
      </div>
    </div>
    <div style="padding: 1vw;">
        <p class="card-text"><img src="/vs.png" class="player-img"></p>
    </div>
    <div class="card text-white bg-custome mb-3 player">
      <div class="card-header">
        <div class="svg-wrapper">
          <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
            <rect class="shape" height="60" width="320" />
          </svg>
          <div class="text">PLAYER 1</div>
        </div>
      </div>
      <div class="card-body">
        <p class="card-text"><img src="/player2.png" class="player-img w3-animate-right"></p>
      </div>
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'BoxPlayer',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Concert+One&display=swap');
.bglobby{
  /* background-image: url() */
  background-color: rgba(255, 255, 255, 0.2);
  /* padding-top: 20vh; */
}
.player-img {
  width: 20vw;
}
.player {
  text-align: center;
  width: 30vw;
  margin-left: 1vw;
  margin-top: 1vw;
}
.bg-custome {
  background-color: rgba(255, 255, 255, 0.7);
  transition-delay: 3s;
  
  /* background-color:  rgb(72,40,83) */
}
.card-header {
  color: black;
  font-family: 'Concert One', cursive;
  font-size: 2em
}
/* animated image player */
.w3-animate-left{position:relative;animation:animateleft 4s}@keyframes animateleft{from{left:-300px;opacity:0} to{left:0;opacity:1}}
.w3-animate-right{position:relative;animation:animateright 4s}@keyframes animateright{from{right:-300px;opacity:0} to{right:0;opacity:1}}
/* player name animated */
.svg-wrapper {
  height: 60px;
    margin: 0 auto;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  width: 320px;
}

.shape {
  fill: transparent;
  stroke-dasharray: 140 540;
  stroke-dashoffset: -474;
  stroke-width: 8px;
  stroke: #1928f6;
}

.text {
  color: rgb(0, 0, 0);
  /* font-family: 'Roboto Condensed'; */
  font-family: 'Concert One', cursive;
  font-size: 22px;
  letter-spacing: 8px;
  line-height: 32px;
  position: relative;
  top: -48px;
}

@keyframes draw {
  0% {
    stroke-dasharray: 140 540;
    stroke-dashoffset: -474;
    stroke-width: 8px;
  }
  100% {
    stroke-dasharray: 760;
    stroke-dashoffset: 0;
    stroke-width: 2px;
  }
}

.svg-wrapper:hover .shape {
  -webkit-animation: 0.5s draw linear forwards;
  animation: 0.5s draw linear forwards;
}
</style>
