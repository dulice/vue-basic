<script setup>
import { ref } from "vue";
import Block from "../components/timer/Block.vue";
import Results from "../components/timer/Results.vue";

const isPlaying = ref(false);
const isFinised = ref(false);
const score = ref(0);
const delay = ref(1000);
function startGame() {
  isFinised.value = false;
  delay.value = delay.value + Math.random() * 5000;
  isPlaying.value = true;
}
function EndGame(time) {
  isPlaying.value = false;
  score.value = time;
  isFinised.value = true;
  delay.value = 1000;
}
</script>
<template>
  <div class="center">
    <h2>How much fast you can beat?</h2>
    <button @click="startGame" :disabled="isPlaying">Play</button>
    <Block v-if="isPlaying" :delay="delay" @end="EndGame" />
    <Results v-if="isFinised" :score="score" />
  </div>
</template>

<style scoped>
.center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>
