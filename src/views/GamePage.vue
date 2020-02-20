<template>
  <div>
    <div class="row">
      <div class="col-3">
        <h1 v-text="jumlahSoal"></h1>
      </div>
    </div>
    <div class="row">
      {{ randomSoal }}
      <div class="col-10">
        <h1>{{ randomSoal.soal }}</h1>
      </div>
      <h1 class="col-2" v-text="score"></h1>
    </div>
    <div class="row">
      <div class="col-6">
        <div class="btn btn-primary" v-on:click="cekJawab(true)">True</div>
      </div>
      <div class="col-6">
        <div class="btn btn-danger" v-on:click="cekJawab(false)">False</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'gamePage',
  data() {
    return {
      currentSoal: [],
      randomIndexnya: null,
      score: 0,
      jumlahSoal: 0
    }
  },
  methods: {
    getSoals() {
      this.$store.dispatch('getSoals')
    },
    randomIndex() {
      let indexRandom = Math.floor(Math.random() * this.allSoal.length)
      this.randomIndexnya = indexRandom
    },
    cekJawab(jawaban) {
      console.log(this.randomSoal, '<<')
      console.log(
        jawaban,
        '<< ini jawaban user',
        this.randomSoal.jawab,
        '<< ini jawaban asli'
      )
      if (jawaban == this.randomSoal.jawab) {
        console.log('masuk benar')
        this.score += 1
      } else if (jawaban !== this.randomSoal.jawab) {
        console.log('masuk salah')
        this.score -= 1
      }
      this.randomIndex()
    }
  },
  mounted() {
    this.getSoals()
    this.randomIndex()
  },
  computed: {
    allSoal() {
      return this.$store.state.allSoals
    },
    randomSoal() {
      let i = this.randomIndexnya
      return this.allSoal[i]
    },
    jumlahSoalnya() {
      return this.jumlahSoal
    }
  },
  watch: {
    randomSoal(oldVal, newVal) {
      if (oldVal !== newVal) {
        this.jumlahSoal += 1
      }
    },
    jumlahSoalnya() {
      if (this.jumlahSoalnya > 10) {
        this.$router.push('/winlose')
      }
    }
  }
}
</script>

<style></style>
