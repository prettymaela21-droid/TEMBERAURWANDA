import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/home.vue'
import About from '../views/About.vue'
import Destination from '../views/destination.vue'
import Contact from '../views/contact.vue'
import East from '../views/east.vue'
import West from '../views/west.vue'
import North from '../views/north.vue'
import South from '../views/south.vue'
import Kigali from '../views/Kigali.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/About',
    name: 'About',
    component: About
  },
  
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },

  {
    path: '/East',
    name: 'East',
    component: East
  },
  {
    path: '/West',
    name: 'West',
    component: West
  },
  {
    path: '/North',
    name: 'North',
    component: North
  },
  {
    path: '/South',
    name: 'South',
    component: South
  },
  {
    path: '/kigali',
    name: 'kigali',
    component: Kigali
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router