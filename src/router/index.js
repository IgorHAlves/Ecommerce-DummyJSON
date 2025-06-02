import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductCategoryView from '../views/ProductCategoryView.vue'
import ProductDetailView from '../views/ProductDetailView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/category/:url',
      name: 'ProductCategoryView',
      component: ProductCategoryView,
    },
    {
      path: '/product/:id',
      name: 'product-detail',
      component: ProductDetailView,
    }

    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },
  ],
})

export default router
