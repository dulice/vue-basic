<script setup>
import { onMounted, ref } from 'vue';

    const props = defineProps(["score"])
    const display = ref("");
    onMounted(() => {
        const { score } = props
        if(score.value < 200) {
            return display.value = "Excellent"
        } else if (score.value < 400) {
            return display.value = "Perfect"
        } else if (score.value < 600) {
            return display.value = "Good"
        } else {
            return display.value = "OOps slow hand 😂"
        }
    })
</script>
<template>
    <h3>Reaction time : {{ score }} ms</h3>
    <p>{{ display }}</p>
</template>