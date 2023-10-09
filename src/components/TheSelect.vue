<template>
  <div class="relative">
    <select
      :value="modelValue"
      @input="updateValue"
      class="bg-white rounded-sm border-b-2 border-gray-200 p-2.5 pl-2 pt-7 w-full text-gray-600 text-left"
      :class="{ var_filled: modelValue }"
    >
      <option v-for="(c, code) in options" :value="code" :key="code">{{ c.name }}</option>
    </select>
    <label
      class="absolute inset-0 h-full flex items-center px-4 text-gray-950 pointer-events-none"
      v-if="label"
      >{{ label }}</label
    >
  </div>
</template>

<script setup>
defineProps({
  modelValue: String,
  label: {
    type: String,
    required: false
  },
  options: {
    type: Object
  },
  mask: {
    type: [String, Boolean],
    default: false
  }
})

const emit = defineEmits(['update:modelValue'])

const updateValue = (event) => {
  emit('update:modelValue', event.target.value)
}
</script>

<style>
label {
  transform-origin: 0;
  transition: transform 0.3s;
}
select:focus + label,
select.var_filled + label {
  transform: scale(0.8) translate(-3px, -16px);
}
</style>
