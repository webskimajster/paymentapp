<script setup>
import { useUserStore } from '../stores/userStore'
const user = useUserStore()
</script>

<template>
  <pre class="text-left">{{ user.userData }}</pre>
  <RouterLink to="/payment" class="text-gray-400 text-left col-span-2 mt-10 block"
    >&larr; Previous step</RouterLink
  >
</template>
