<script setup>
import { ref } from 'vue';
import Modal from './components/Modal.vue'
import ReactionTimer from './pages/ReactionTimer.vue';

  const title = ref("My First Vue App");
  const propTitle = ref("Prop Title");
  const showModal = ref(false);
  const showModal2 = ref(false);
  function toggleModal() {
    showModal.value = !showModal.value;
  }
</script>
<template>
  <h3>{{ title }}</h3>
  <Teleport to="#modals">
    <div v-if="showModal">
      <Modal @close="toggleModal">
        <template v-slot:header>
          <h1>Sign up for news letter</h1>
        </template>
        <template v-slot:content>
          <p>Get update information and promo code</p>
        </template>
        <template v-slot:actions>
          <button @click="toggleModal">Ok</button>
        </template>
      </Modal>
    </div>
  
    <div v-if="showModal2">
      <Modal @close="showModal2 = false" :title="propTitle"/>
    </div>
  </Teleport>
  <button @click="toggleModal">Show Signup Modal</button>
  <button @click="showModal2 = !showModal2">Show Default Modal</button>

  <ReactionTimer />
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
