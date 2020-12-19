//导入router
import Vue from 'vue'
import VueRouter from 'vue-router'


const Login = () => import('../components/Login')
const User = () => import('../components/User')
//创建组件
Vue.use(VueRouter)

const routes = [
    {
        path: '',
        redirect: '/login'
    },
    {
        path: '/login',
        component: Login,
        meta: {
            title: '登录界面'
        }
    },
    {
        path: '/user',
        component: User,
        meta: {
            title: '用户界面'
        }
    }
]
//创建router对象
const router = new VueRouter({
    routes,
    mode: 'history'
})

router.beforeEach((to,from,next) => {
    /* if(to.title !== 'Login' && !isAuthenticated)
    next({
        title:'Login'
    }) */
    document.title = to.matched[0].meta.title;
    next({title: 'User'})
})

//导出组件对象
export default router