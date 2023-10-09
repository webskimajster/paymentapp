import { createRouter, createWebHistory } from 'vue-router'
import DetailsView from '../views/DetailsView.vue'
import PaymentView from '../views/PaymentView.vue'
import SummaryView from '../views/SummaryView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'details',
      component: DetailsView
    },
    {
      path: '/payment',
      name: 'payment',
      component: PaymentView
    },
    {
      path: '/summary',
      name: 'summary',
      component: SummaryView
    }
  ]
})

export default router
