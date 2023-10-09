<template>
  <div class="relative">
    <input
      :type="type"
      :value="modelValue"
      @input="updateValue"
      class="bg-white rounded-sm border-b-2 border-gray-200 p-2.5 pt-7 w-full text-gray-600"
      :class="{ var_filled: modelValue }"
      v-imask="mask"
    />
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
  type: {
    default: 'text',
    validator(value) {
      // The value must match one of these strings
      return ['text', 'email', 'password'].includes(value)
    }
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
input:focus + label,
input.var_filled + label {
  transform: scale(0.8) translate(-3px, -16px);
}
</style>
