<template>
  <div class="w-100 container">
    <Background class="background-sendiri" />
    <b-card style="margin-top:5%;">
      <b-form>
        <h1
          class="text-center"
          style="font-family: 'Arvo', serif;"
          v-if="show"
        >{{ randomSoal.soal }}</h1>
        <div class="text-center d-flex justify-content-center" v-if="!show">
          <b-spinner variant="primary" type="grow"></b-spinner>
        </div>
        <div class="d-flex justify-content-around mt-5">
          <div>
            <b-btn class="btn btn-primary btn-gerak" v-on:click="cekJawab(true)">True</b-btn>
          </div>
          <div>
            <b-btn class="btn btn-danger btn-gerak" v-on:click="cekJawab(false)">False</b-btn>
          </div>
        </div>
      </b-form>
    </b-card>

    <div class="d-flex justify-content-center mt-5">
      <div class="row w-100 d-flex justify-content-around">
        <b-card tag="article" class="col-2 mb-2 mx-1 w-100">
          <h6 class="border-bottom text-center">Username</h6>
          <h6 class="mt-3 text-center">{{ score }}</h6>
        </b-card>

        <b-card tag="article" class="col-2 mb-2 mx-1 w-100">
          <h6 class="border-bottom text-center">Username</h6>
          <h6 class="mt-3 text-center">{{ score }}</h6>
        </b-card>
        <b-card tag="article" class="col-2 mb-2 mx-1 w-100">
          <h6 class="border-bottom text-center">Username</h6>
          <h6 class="mt-3 text-center">{{ score }}</h6>
        </b-card>

        <b-card tag="article" class="col-2 mb-2 mx-1 w-100">
          <h6 class="border-bottom text-center">Username</h6>
          <h6 class="mt-3 text-center">{{ score }}</h6>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import Background from "../components/Background";
export default {
  name: "gamePage",
  components: {
    Background
  },
  data() {
    return {
      currentSoal: [],
      randomIndexnya: null,
      score: 0,
      jumlahSoal: 0,
      show: true
    };
  },
  methods: {
    getSoals() {
      this.$store.dispatch("getSoals");
    },
    randomIndex() {
      let indexRandom = Math.floor(Math.random() * this.allSoal.length);
      this.randomIndexnya = indexRandom;
      this.$socket.emit("randomIndex", indexRandom);
    },
    cekJawab(jawaban) {
      // console.log(this.randomSoal, "<<");
      // console.log(
      //   jawaban,
      //   "<< ini jawaban user",
      //   this.randomSoal.jawab,
      //   "<< ini jawaban asli"
      // );
      if (jawaban == this.randomSoal.jawab) {
        this.show = false;
        // console.log("masuk benar");
        this.score += 1;
      } else if (jawaban !== this.randomSoal.jawab) {
        this.show = false;
        // console.log("masuk salah");
        // this.score -= 1;
      }
      this.show = true;
      this.randomIndex();
    }
  },
  mounted() {
    this.getSoals();
    this.randomIndex();
    let room = this.$route.params.name;
    this.$socket.on("gameover", menang => {
      this.$router.push(`/winlose`);
      this.$store.commit("setwinner", menang);
      this.$store.state.userScore = this.score;
    });
    this.$socket.on("changeIndex", index => {
      console.log("masuk  mounted");
      this.randomIndexnya = index;
    });
  },
  computed: {
    allSoal() {
      return this.$store.state.allSoals;
    },
    randomSoal() {
      let i = this.randomIndexnya;
      return this.allSoal[i];
    },
    jumlahSoalnya() {
      return this.jumlahSoal;
    }
  },
  watch: {
    randomSoal(oldVal, newVal) {
      if (oldVal !== newVal) {
        this.jumlahSoal += 1;
      }
    },
    jumlahSoalnya() {
      if (this.score == 5) {
        let objMng = {
          winner: localStorage.getItem("name"),
          roomname: this.$route.params.name
        };
        this.$socket.emit("adayangmenang", objMng);
        this.$router.push(`/winlose`);
        // emit biar menang
        //  terus store score nya
        this.$store.state.userScore = this.score;
      }
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

.score {
  border-radius: 50%;
  display: inline-block;
}
</style>
