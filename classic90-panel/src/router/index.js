import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/auth',
      children: [
        {
          path: '',
          name: 'auth',
          component: () => import('@/views/auth/AuthPage.vue')
        },
        {
          path: 'login',
          name: 'login',
          component: () => import('@/views/auth/LoginPage.vue')
        },
        {
          path: 'forget-password',
          name: 'forgetPassword',
          component: () => import('@/views/auth/ForgetPasswordPage.vue')
        },
        {
          path: 'verification',
          name: 'verification',
          component: () => import('@/views/auth/VerificationPage.vue')
        },
        {
          path: 'reset-password',
          name: 'resetPassword',
          component: () => import('@/views/auth/ResetPasswordPage.vue')
        }
      ]
    },
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/DashboardPage.vue')
    },
    {
      path: '/product/:id?',
      children: [
        {
          path: '/create-product',
          name: 'productCreate',
          component: () => import('@/views/product/ProductCreatePage.vue')
        }
      ]
    },
    {
      path: '/settings',
      children: [
        {
          path: '',
          name: 'settings',
          component: () => import('@/views/SettingPage.vue')
        },
        {
          path: 'colors',
          name: 'colorPage',
          component: () => import('@/views/colors/ColorPage.vue')
        },
        {
          path: 'size',
          name: 'sizePage',
          component: () => import('@/views/size/SizePage.vue')
        }
      ]
    }
  ]
})

export default router
