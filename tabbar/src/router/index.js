import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home.vue')
const Catery = () => import('../views/catery/Catery.vue')
const Cart = () => import('../views/cart/Cart.vue')
const Proofile = () => import('../views/profile/Profile.vue')

Vue.use(VueRouter)

const routes = [
    {
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/catery',
        component: Catery
    },
    {
        path: '/cart',
        component: Cart
    },
    {
        path: '/profile',
        component: Proofile
    } 
]
const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router