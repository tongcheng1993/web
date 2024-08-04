// import Vue from 'vue'
// import VueRouter from 'vue-router'
// import NProgress from 'nprogress'
// import 'nprogress/nprogress.css'
import store from '../store/index.js'

Vue.use(VueRouter)

const routes = [
    {
        path: '/search',
        name: 'search',
        component: () => import('@/views/dashboard/dashboard.vue'),
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/login.vue'),
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('@/views/login/register.vue'),
    },
    {
        path: '/forgetPassWord',
        name: 'forgetPassWord',
        component: () => import('@/views/login/forgetPassWord.vue'),
    },
    {
        path: '/',
        name: 'container',
        redirect: '/dashboard',
        component: () => import('@/views/layout/container.vue'),
        children: [
            
            {
                path: 'dashboard',
                name: 'dashboard',
                component: () => import('@/views/dashboard/dashboard.vue'),
            },
            {
                path: 'user',
                name: 'user',
                component: () => import('@/views/layout/blank.vue'),
                children: [
                    {
                        path: 'userAccount',
                        name: 'userAccount',
                        component: () => import('@/views/user/userAccount.vue'),
                    },
                ]
            },
           
            {
                path: 'game',
                name: 'game',
                component: () => import('@/views/game/gameList.vue'),
            },
            {
                path: 'friend',
                name: 'friend',
                component: () => import('@/views/friend/myFriend.vue'),
            },
            {
                path: 'book',
                name: 'book',
                component: () => import('@/views/book/myBookShelf.vue'),
            },
            {
                path: 'book/bookDetail',
                name: 'book/bookDetail',
                component: () => import('@/views/book/bookDetail.vue'),
            },
            {
                path: 'book/bookSectionDetail',
                name: 'book/bookSectionDetail',
                component: () => import('@/views/book/bookSectionDetail.vue'),
            },
        ]

    },
    {
        path: '/*',
        name: 'lost404',
        component: () => import('@/views/lost404/lost404.vue')
    }
]


// 页面刷新时，重新赋值token
if (sessionStorage.getItem('token')) {
    store.commit('set_token', sessionStorage.getItem('token'))
}


const router = new VueRouter({
    routes
})


const whiteList = ['/search', '/login', '/register', '/forgetPassWord'];

router.beforeEach((to, from, next) => {
    NProgress.start();
    //先判断路由
    // 有token代表已经登录
    if (store.state.token) {
        next()
    } else {
        if (whiteList.indexOf(to.path) !== -1) {
            next()
        } else {
            next({
                path: '/search',
                params: {}
            });
        }

    }
});

router.afterEach((to, from) => {
    NProgress.done();
});


export default router
