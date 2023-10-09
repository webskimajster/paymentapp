<script setup>
defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<template>
  <h1 class="uppercase font-semibold">{{ title }}</h1>
</template>
