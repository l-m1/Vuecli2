import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/Home'
/* import About from '../components/About'
import My from '../components/My' */
import User from '../components/User'
/* import Profile from '../components/Profile'
import Info from '../components/Info' */

const About = () => import('../components/About')
const My = () => import('../components/My')
const Profile = () => import('../components/Profile')
const Info = () => import('../components/Info')

//创建VueRouter组件
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home,
        meta: {
            title: '首页'
        },
        children: [
            {
                path: '',
                redirect: 'profile'
            },
            {
                path: 'profile',
                component: Profile
            },
            {
                path: 'info',
                component: Info
            }
        ]
    },
    {
        path: '/about',
        component: About,
        meta: {
            title: '关于'
        },
        beforeEnter: (to,from,next) => {
            console.log("----");
        }
    },
    {
        path: '/my',
        component: My,
        meta: {
            title: '我的'
        }
    },
    {
        path: '/user',
        component: User,
        meta: {
            title: '用户'
        }
    }
]
//创建router对象
const router = new VueRouter({
    routes,
    /* 设置使用xml5的history模式修改url */
    mode: 'history',
    linkActiveClass: 'active'
})

//全局导航守卫
router.beforeEach((to,from,next) => {
    /* 输出to看到首页中没有title，其它页面均有 */
    /* console.log(to); 
    document.title = to.meta.title; */
    /* 使用matched取出第一个path */
    document.title = to.matched[0].meta.title;
    next()
})

//导出router对象
export default router