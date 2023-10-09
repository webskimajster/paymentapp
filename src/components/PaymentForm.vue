<script setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '../stores/userStore'
import InputText from '../components/InputText.vue'
import VisaIcon from '../components/icons/VisaIcon.vue'
import MasterCardIcon from '../components/icons/MasterCardIcon.vue'

const user = useUserStore()
const router = useRouter()
const showError = ref(false)
const isCompleted = ref(false)

const completePayment = () => {
  const isValidated = simpleValidation()
  if (isValidated) {
    isCompleted.value = true
    router.push('/summary')
    console.log(user.userData)
  }
}

const simpleValidation = () => {
  const fieldsToValidate = ['creditCardNumber', 'securityCode', 'expirationDate']

  let isValidated = true
  showError.value = false

  fieldsToValidate.forEach((fieldKey) => {
    if (!user[fieldKey] || (user[fieldKey] && user[fieldKey].trim() === '')) {
      showError.value = true
      isValidated = false
    }
  })

  return isValidated
}

const identifyCreditCard = computed(() => {
  if (!user.creditCardNumber) return 'Unknown'

  const cardNumber = user.creditCardNumber.replace(/\D/g, '')

  if (/^4/.test(cardNumber)) {
    return 'visa'
  } else if (/^5/.test(cardNumber)) {
    return 'mastercard'
  } else {
    return 'Unknown'
  }
})
</script>
<template>
  <form class="grid grid-cols-2 gap-3">
    <span class="relative">
      <InputText
        v-model="user.creditCardNumber"
        mask="0000-0000-0000-0000"
        label="Credit Card Number"
        class="col-span-2"
      />
      <span class="absolute right-4 h-8 top-1/2 -translate-y-1/2">
        <VisaIcon v-if="identifyCreditCard === 'visa'"></VisaIcon>
        <MasterCardIcon v-if="identifyCreditCard === 'mastercard'"></MasterCardIcon>
      </span>
    </span>
    <InputText
      v-model="user.securityCode"
      type="password"
      mask="000"
      label="Security Code"
      class="col-span-2 md:col-span-1"
    />
    <InputText
      v-model="user.expirationDate"
      label="Expiration Date"
      mask="00/00"
      class="col-span-2 md:col-span-1"
    />

    <span v-if="showError" class="col-span-2 text-red-500">All fields need to be filled</span>

    <button
      type="button"
      class="col-span-2 border-b-2 border-lime-600 p-4 font-semibold uppercase rounded-sm text-white bg-lime-400 hover:bg-lime-500 transition-all"
      @click="completePayment"
    >
      Complete Payment
    </button>
    <RouterLink to="/" class="text-gray-400 text-center col-span-2"
      >&larr; Previous step</RouterLink
    >
  </form>
</template>
