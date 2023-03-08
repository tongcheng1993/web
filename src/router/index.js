// import Vue from 'vue'
// import VueRouter from 'vue-router'
// import NProgress from 'nprogress'
// import 'nprogress/nprogress.css'
import store from '../store/index.js'
import {getMenu} from '../api/userApi'
import {createRouterTree} from '../util/treeUtil'

Vue.use(VueRouter)

const routes = [
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
        path: '/lost404',
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


function filterAsyncRouter(asyncRouterMap) {
    asyncRouterMap.filter(route => {
        if (route.component) {
            const str = route.component
            route.component = resolve => require(['@/views' + str + '.vue'], resolve)
        } else {
            route.component = resolve => require(['@/views/layout/blank.vue'], resolve)
        }
        if (route.children && route.children.length) {
            route.children = filterAsyncRouter(route.children)
        }
        return true
    })
    return asyncRouterMap
}

function getBoolean(toPath, menuNoToken) {
    let menuFlag = false
    for (let i = 0; i < menuNoToken.length; i++) {
        let menuVo = menuNoToken[i]

        if (toPath === menuVo.path) {
            menuFlag = true
            break
        }
        if (menuVo.children && menuVo.children.length) {
            let temp = getBoolean(toPath, menuVo.children)
            if (temp) {
                menuFlag = true
                break
            }
        }
    }
    return menuFlag;
}

router.beforeEach((to, from, next) => {
    NProgress.start();
    //先判断路由

    // 有token代表已经登录
    if (store.state.token) {
        // 有token，有menu
        if (store.state.menu.length > 0) {
            next()
        } else {
            getMenu({}).then((res) => {
                let parent = {
                    id: '0',
                    path: '/',
                    name: 'container',
                    component: '/layout/container',
                    redirect: '/dashboard',
                    children: []
                }
                console.log(res)
                parent = createRouterTree(res, parent)
                let menu = []
                menu.push(parent)
                let aa = filterAsyncRouter(menu)
                aa.push({
                    path: '/*',
                    name: 'lostError',
                    component: () => import('@/views/lost404/lost404.vue')
                })
                router.addRoutes(aa)
                store.commit("set_menu", parent.children)
                next({...to, replace: true})
            })
        }
    } else {
        if (store.state.menu.length > 0) {
            // 没有token 但是有游客路由
            // 游客的所有路由
            let menuNoToken = []
            // 后端给与的游客路由
            menuNoToken = store.state.menu
            // 前端本身给予的路由
            for (let i = 0; i < routes.length; i++) {
                let oneMenu = routes[i]
                menuNoToken.push(oneMenu)
            }
            menuNoToken.push({
                path: '/'
            })
            // 游客请求路由是否是允许的路由 游客只允许进入显示路由 不让查看隐藏路由
            let menuFlag = false
            menuFlag = getBoolean(to.path, menuNoToken);
            // 判断是否可以允许进入
            if (menuFlag) {
                next()
            } else {
                store.state.toPath = to.path
                next({
                    path: '/login',
                    params: {}
                });
            }
        } else {
            // 没有token 没有路由  获取游客路由
            getMenu({}).then((res) => {
                let parent = {
                    id: '0',
                    path: '/',
                    name: 'container',
                    component: '/layout/container',
                    redirect: '/dashboard',
                    children: []
                }
                parent = createRouterTree(res, parent)
                let menu = []
                menu.push(parent)
                let aa = filterAsyncRouter(menu)
                router.addRoutes(aa)
                store.commit("set_menu", parent.children)
                next({...to, replace: true})
            })
        }
    }
});

router.afterEach((to, from) => {
    NProgress.done();
});


export default router
