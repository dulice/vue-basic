<script setup>
import { onMounted, onUpdated, ref } from 'vue';

    const showBlock = ref(false);
    const reactTime = ref(0);
    const time = ref();
    const props = defineProps({
        delay: Number
    })
    const emit = defineEmits(['end'])
    const showBlockDelay = onMounted(() => {
        let { delay } = props;
        setTimeout(() => {
            showBlock.value = true;
        }, delay);
    })
    const startCountTime = onUpdated(() => {
        time.value = setInterval(() => {
            reactTime.value += 10;
        }, 10);
    })

    const stopCountTime = () => {
        clearInterval(time.value);
        emit('end', reactTime)
    }
</script>
<template>
  <div @click="stopCountTime" v-if="showBlock" class="block" >
        Click Me
    </div>
</template>

<style>
 .block {
    width: 400px;
    border-radius: 20px;
    background:  #0faf87;;
    color: white;
    text-align: center;
    padding: 100px 0;
    margin: 40px auto;
  }
</style>