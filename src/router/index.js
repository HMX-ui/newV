import { createRouter, createWebHistory } from 'vue-router'
import Home from '../view/home.vue'
import About from '../view/about.vue'
import NotFound from '../view/notFound.vue'
import End from '../view/end.vue'

const routes = [
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/notFound',
        name: 'NotFound',
        component: NotFound
    },
    {
        path: '/end',
        name: 'end',
        component: End
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router