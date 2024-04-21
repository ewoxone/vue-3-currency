import { createRouter, createWebHistory } from 'vue-router'
import TaskerView from '../views/TaskerView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'tasker',
      component: TaskerView
    },
    {
      path: '/converter',
      name: 'converter',
      component: () => import('../views/ConverterView.vue')
    },
    {
      path: '/modals',
      name: 'modals',
      component: () => import('../views/ModalsView.vue')
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('../views/TestView.vue')
    },
  ]
})

export default router
