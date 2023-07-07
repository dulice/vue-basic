<script setup>
import { ref, watchEffect } from "vue";

const jobs = ref([]);
watchEffect(async () => {
  const url = "http://localhost:3000/jobs";
  jobs.value = await (await fetch(url)).json();
});
</script>
<template>
  <div v-if="jobs.length">
    <div v-for="job in jobs" class="card">
      <router-link :to="{ name: 'JobDetail', params: { id: job.id } }">
        <h2>{{ job.title }}</h2>
      </router-link>
    </div>
  </div>
  <div v-else>
    <h2>Loading...</h2>
  </div>
</template>
<style>
.card {
  padding: 20px;
  background-color: #333;
  margin-bottom: 10px;
  border-radius: 3px;
  width: max-content;
}
</style>
