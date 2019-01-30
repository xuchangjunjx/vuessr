/* route.js */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default function createRouter() {
    let router = new VueRouter({
        // 要记得增加mode属性，因为#后面的内容不会发送至服务器，服务器不知道请求的是哪一个路由
        mode: 'history',
        routes: [
            {
                alias: '/',
                path: '/home',
                component: require('./routes/Home.vue'),
                meta:{
                    title:'home',
                    metas:{'keywords':'home-content','author':'xubowen'}

                }
            },
            {
                path: '/animal',
                component: require('./routes/Animal.vue'),
                meta:{
                    title:'animal',
                    metas:{'keywords':'keywords-content'}
                }
            },
            {
                path: '/people',
                component: require('./routes/Person.vue'),
                meta:{
                    title:'people',
                    metas:{'keywords':'keywords-content'}

                }
            }
        ]
    })

    return router;
}