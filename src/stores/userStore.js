import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const firstName = ref()
  const lastName = ref()
  const email = ref()
  const country = ref()
  const postalCode = ref()
  const phoneNumber = ref()
  const creditCardNumber = ref()
  const securityCode = ref()
  const expirationDate = ref()

  const userData = computed(() => {
    return `First Name: ${firstName.value}
Last Name: ${lastName.value}
Email: ${email.value}
Country: ${country.value}
Postal Code: ${postalCode.value}
Phone Number: ${phoneNumber.value}
Credit Card Number: ${creditCardNumber.value}
Security Code: ${securityCode.value}
Expiration Date: ${expirationDate.value}
`
  })

  return {
    firstName,
    lastName,
    email,
    country,
    postalCode,
    phoneNumber,
    creditCardNumber,
    securityCode,
    expirationDate,
    userData
  }
})
