<script setup>
import TheHeader from './TheHeader.vue'
const basket = [
  {
    title: 'Apple Watch Sport',
    value: 580
  },
  {
    title: 'Modern Buckle',
    value: 380
  }
]
const currencySymbol = '$'
const taxRate = 0
const summary = basket.reduce((total, item) => total + item.value, 0)
const taxes = summary * taxRate
const totalWithTaxes = summary + taxes
</script>

<template>
  <section class="p-1 rounded bg-white">
    <div class="border border-gray-220 border-dashed px-2.5 py-4">
      <TheHeader title="Your order" />
      <ul class="mt-5 pb-6 border-b border-dashed border-gray-200">
        <li v-for="(item, n) in basket" :key="n" class="mt-4 flex justify-between">
          <span>{{ item.title }}</span>
          <span>{{ currencySymbol }}{{ item.value }}</span>
        </li>
      </ul>
      <ul class="mt-5 pb-6 border-b border-dashed border-gray-200">
        <li class="mt-4 flex justify-between">
          <span>Total purchases</span>
          <span>{{ currencySymbol }}{{ summary }}</span>
        </li>
        <li class="mt-4 flex justify-between">
          <span>Total taxes</span>
          <span>{{ currencySymbol }}{{ taxes }}</span>
        </li>
      </ul>
      <ul class="mt-5 pb-4">
        <li class="mt-4 flex justify-between font-semibold">
          <span>Total</span>
          <span class="text-xl">{{ currencySymbol }}{{ totalWithTaxes }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>
