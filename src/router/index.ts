import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import auth from '@/firebase/auth'
import SettingsView from '../views/SettingsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/settings',
      name: 'settings',
      component: SettingsView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/:chatId',
      name: 'chat',
      props: true,
      component: HomeView
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  const publicPages = ['/login', '/register']
  const authRequired = !publicPages.includes(to.path)

  // Wait for firebase auth to init before getting current user
  await auth.authStateReady()
  const user = auth.currentUser

  if (authRequired) {
    if (user) {
      next()
    } else {
      next('/login')
    }
  } else {
    if (user) {
      next('/')
    } else {
      next()
    }
  }
})

export default router
