import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import UsersView from '@/views/UsersView.vue'
import UserView from '@/views/UserView.vue'
import NewUserView from '@/views/RegisterView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/users',
    name: 'users',
    component: UsersView
  },
  {
    path: '/users/:id',
    name: 'user',
    component: UserView
  },
  {
    path: '/users/new',
    name: 'new-user',
    component: NewUserView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
