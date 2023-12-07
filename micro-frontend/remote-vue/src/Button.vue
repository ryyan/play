<script setup>
import { ref } from "vue";
const count = ref(0);
</script>

<template>
  <button @click="count++">Remote-Vue: {{ count }}</button>
</template>
