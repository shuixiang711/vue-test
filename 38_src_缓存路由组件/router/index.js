//该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";
//引入组件
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'
import Detail from '../pages/Detail.vue'

//创建并暴露一个路由器
export default new VueRouter({
    routes: [
        {
            name: 'guanyu',
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home,
            children: [
                {
                    path: 'news',
                    component: News
                },
                {
                    path: 'message',
                    component: Message,
                    children: [
                        {
                            name: 'xiangqing',
                            path: 'detail/:id/:title',
                            component: Detail,
                            //props的第一种写法:值为对象，该对象中的所有key-value都会以props的形式传给Detail组件
                            // props:{a:1,b:2}
                            //props的第二种写法:值为布尔值,值为真就会吧该路由组件收到的所有params参数，以props的形式传给Detail
                            // props:turn,

                            //props的第三种写法,值为函数
                            /* props($route) {
                                return { id: $route.params.id, title: $route.params.id }
                            } */
                            props({ params: { id, title } }) {
                                return { id: id, title: title,a:2,b:'hello' }
                            }
                        }
                    ]
                }
            ]
        }
    ]
})