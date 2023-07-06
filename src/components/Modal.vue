<script setup>
</script>
<template>
  <div class="backdrop" @click.self="$emit('close')">
    <div class="modal">
        <slot name="header">
            <h1>Default header</h1>
        </slot>
        <slot name="content">
            <p>Default Title</p>
        </slot>
        <slot name="actions">
            <button @click="$emit('close')">Cancel</button>
            <button @click="$emit('close')">Ok</button>
        </slot>
    </div>
  </div>
</template>

<style scoped>
.backdrop {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #dddddd90;
  display: flex;
  transition: opacity 0.3s ease;
}
.modal {
  min-width: 300px;
  margin: auto;
  padding: 20px 30px;
  background-color: #fff;
  color: #222;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

</style>
