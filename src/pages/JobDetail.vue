<script setup>
import { ref, watchEffect } from 'vue';

    const props = defineProps(['id']);
    const jobDetail = ref(null);
    watchEffect(async() => {
        const url = `http://localhost:3000/jobs/${props.id}`
        const res = await fetch(url);
        jobDetail.value = await res.json();
    });
</script>
<template>
    <div v-if="jobDetail">
        <h2>{{ jobDetail.title }}</h2>
        <p>{{ jobDetail.details }}</p>
    </div>
    <div v-else>
        <h2>Loading...</h2>
    </div>
</template>