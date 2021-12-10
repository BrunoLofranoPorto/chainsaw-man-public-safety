import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Team from '../views/Team.vue'
import Tips from '../views/Tips.vue'
import Claim from '../views/Claim.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/team',
    name: 'Team',
    component: Team
  },
  {
    path: '/tips',
    name: 'Tips',
    component: Tips
  },
  {
    path: '/claim',
    name: 'Claim',
    component: Claim
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
