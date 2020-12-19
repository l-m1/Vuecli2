import VueRouter from 'vue-router'
import Vue from 'vue'


import Home from '../components/Home'
import About from '../components/About'

//通过Vue.use(安装插件)
Vue.use(VueRouter)


const routes = [
    //创建路由组件
    {
        path: '/home',
        component: Home
    },
    {
        path: '/about',
        component: About
    }
]
//创建VueRouter对象
const router = new VueRouter({
    //配置路由和组件之间的关系
    routes
})

//将router对象传入vue实例中
export default router