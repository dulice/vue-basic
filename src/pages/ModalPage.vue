<script setup>
import { ref } from "vue";
import Modal from "../components/Modal.vue";

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
      <Modal @close="showModal2 = false" :title="propTitle" />
    </div>
  </Teleport>
  <button @click="toggleModal">Show Signup Modal</button>
  <button @click="showModal2 = !showModal2">Show Default Modal</button>
</template>
