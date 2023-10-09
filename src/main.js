import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { IMaskDirective } from 'vue-imask'

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.directive('imask', IMaskDirective)

app.use(createPinia())
app.use(router)

app.mount('#app')
