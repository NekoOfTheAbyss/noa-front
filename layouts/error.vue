<template>
  <div class="p-4 text-white">

    <div v-if="randshit <= 0.1">
      <center>
        <h2>Pikachu is surprised.</h2><br>
        <img src="/pika.gif"
             class="w-48 object-cover">
      </center>
    </div>

    <div v-if="randshit > 0.4 && randshit < 0.7">
      <center>
        <h2>Nothing to see here. Just a totally unrelated Kuroneko.</h2><br>
        <img src="/kuroneko.gif"
             class="w-48 object-cover">
      </center>
    </div>

    <div v-if="randshit > 0.1 && randshit < 0.3">
      <center>
        <h2>Wiz is surprised at the unexpected visit.</h2><br>
        <img src="/wiz.gif"
             class="w-48 object-cover">
      </center>
    </div>

    <div v-if="randshit <= 0.4 && randshit >= 0.3">
      <center>
        <h2>Nothing except a vibin anime girl.</h2><br>
        <img src="/rockin.gif"
             class="w-48 object-cover">
      </center>
    </div>

    <div v-if="randshit >= 0.7 && randshit < 0.9">
      <center>
        <h2>Yato is excited.</h2><br>
        <img src="/yato.gif"
             class="w-48 object-cover">
      </center>
    </div>

    <div v-if="randshit >= 0.9">
      <center>
        <h2>Mugi is laughing at the idiot on screen.</h2><br>
        <img src="/moogi.gif"
             class="w-48 object-cover">
      </center>
    </div>

    <div class="text-white text-opacity-100 transition duration-500 ease-in-out font-semibold text-center animate-pulse md:text-opacity-0 hover:text-opacity-100">
      Nyevew gonnya give you up <br />
      Nyevew gonnya wet you down <br />
      Nyevew gonnya wun awound and desewt you <br />
      Nyevew gonnya make you cwy <br />
      Nyevew gonnya say goodbye <br />
      Nyevew gonnya teww a wie and huwt you <br />
      <br />

    </div>
  </div>

</template>

<script>
const randshit = Math.random()
export default {
  props: ['error'],
  data() {
    return {
      randshit,
    }
  },
}
</script>