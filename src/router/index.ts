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
      path: '/modals',
      name: 'modals',
      component: () => import('../views/ModalsView.vue')
    },
    {
      path: '/stickyGallery',
      name: 'stickyGallery',
      component: () => import('../views/StickyGalleryView.vue')
    }
  ]
})

export default router
