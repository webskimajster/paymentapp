<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/userStore'
import InputText from '@/components/InputText.vue'
import { countries } from 'countries-list'
import TheSelect from './TheSelect.vue'

const user = useUserStore()
const router = useRouter()
const showError = ref(false)

const goToPayment = () => {
  const isValidated = simpleValidation()
  if (isValidated) router.push('/payment')
}

const simpleValidation = () => {
  const fieldsToValidate = [
    'firstName',
    'lastName',
    'email',
    'country',
    'postalCode',
    'phoneNumber'
  ]

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
</script>
<template>
  <form class="grid grid-cols-2 gap-3">
    <InputText v-model="user.firstName" label="First Name" class="col-span-2 md:col-span-1" />
    <InputText v-model="user.lastName" label="Last Name" class="col-span-2 md:col-span-1" />
    <InputText v-model="user.email" label="Email" type="email" class="col-span-2" />
    <TheSelect
      v-model="user.country"
      :options="countries"
      label="Country"
      class="col-span-2 md:col-span-1"
    ></TheSelect>
    <InputText
      v-model="user.postalCode"
      label="Postal Code"
      type="text"
      class="col-span-2 md:col-span-1"
      mask="00000"
    />
    <InputText
      v-model="user.phoneNumber"
      label="Phone Number"
      type="text"
      class="col-span-2"
      mask="(000) 000-00-00"
    />
    <span v-if="showError" class="text-red-500">All fields need to be filled</span>
    <button
      type="button"
      class="col-span-2 border-b-2 border-lime-600 p-4 font-semibold uppercase rounded-sm text-white bg-lime-400 hover:bg-lime-500 transition-all"
      @click="goToPayment"
    >
      Next
    </button>
  </form>
</template>
