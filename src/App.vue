<script setup>
import { ref } from 'vue';

  const title = ref("My First Vue App")
  const showModal = ref(false);
  function toggleModal() {
    showModal.value = !showModal.value;
  }
</script>
<template>
  <h3>{{ title }}</h3>
  <div v-if="showModal" class="backdrop">
    <div class="modal">
      <h1>Sign up for news letter</h1>
      <p>Get update information and promo code</p>
      <button @click="toggleModal">Ok</button>
    </div>
  </div>
  <button @click="toggleModal">Show Modal</button>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
