//该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";
//引入组件
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'
import Detail from '../pages/Detail.vue'

//创建并暴露一个路由器
const router = new VueRouter({
    routes: [
        {
            name: 'guanyu',
            path: '/about',
            component: About,
            meta: { title: '关于' }
        },
        {
            name: 'zhuye',
            path: '/home',
            component: Home,
            meta: { title: '主页' },
            children: [
                {
                    name: 'xinwen',
                    path: 'news',
                    component: News,
                    meta: { isAuth: true, title: '新闻' }
                },
                {
                    name: 'xiaoxi',
                    path: 'message',
                    component: Message,
                    meta: { isAuth: true, title: '消息' },
                    children: [
                        {
                            name: 'xiangqing',
                            path: 'detail/:id/:title',
                            component: Detail,
                            meta: { isAuth: true, title: '详情' },
                            //props的第一种写法:值为对象，该对象中的所有key-value都会以props的形式传给Detail组件
                            // props:{a:1,b:2}
                            //props的第二种写法:值为布尔值,值为真就会吧该路由组件收到的所有params参数，以props的形式传给Detail
                            // props:turn,

                            //props的第三种写法,值为函数
                            /* props($route) {
                                return { id: $route.params.id, title: $route.params.id }
                            } */
                            props({ params: { id, title } }) {
                                return { id: id, title: title, a: 2, b: 'hello' }
                            }
                        }
                    ]
                }
            ]
        }
    ]
})
//全局前置路由守卫----初始化的时候被调用、每次路由切换之前被调用
router.beforeEach((to, from, next) => {
    // console.log(to, from);
    if (to.meta.isAuth) {//是否需要检查权限
        if (localStorage.getItem('school') === 'atguigu') {
            next()
        } else {
            alert('学校名称不对,无权查看')
        }
    } else {
        next()
    }
})
//全局后置路由守卫----初始化的时候被调用、每次路由切换之后被调用
router.afterEach((to, from) => {
    // console.log(to, from);
    document.title = to.meta.title || '硅谷系统'
})

export default router