<script setup>
import TheHeader from './TheHeader.vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const breadcrumbs = [
  {
    route: 'details',
    step: 1,
    title: 'Personal information'
  },
  {
    route: 'payment',
    step: 2,
    title: 'Payments details'
  },
  {
    route: 'summary',
    step: 3,
    title: 'Summary'
  }
]

const route = useRoute()
const currentStep = computed(() => {
  const breadcrumb = breadcrumbs.find((item) => item.route === route.name)
  return breadcrumb ? breadcrumb.step : null
})

const currentTitle = computed(() => {
  const breadcrumb = breadcrumbs.find((item) => item.route === route.name)
  return breadcrumb ? breadcrumb.title : null
})
</script>
<template>
  <section class="flex items-center -ml-[32px]">
    <span
      class="rounded-full bg-black text-white w-5 h-5 text-center leading-5 mr-2.5 text-sm font-semibold"
      >{{ currentStep }}</span
    >
    <TheHeader v-if="currentTitle" :title="currentTitle" />
  </section>
</template>
