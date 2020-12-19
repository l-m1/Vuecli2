import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../components/Home')
const Profile = () => import('../components/Profile')

const Films = () => import('../components/Films')
const News = () => import('../components/News')

//安装组件
Vue.use(VueRouter)

const routes = [
    {
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home,
        children: [
            {
                path: '',
                redirect: 'news'
            },
            {
                path: 'news',
                component: News
            },
            {
                path: 'films',
                component: Films
            }
        ]
    },
    {
        path: '/profile',
        component: Profile
    }
]
//创建router组件对象
const router = new VueRouter({
    routes,
    mode: 'history',
    linkActiveClass: 'active'
})

//导出router对象
export default router