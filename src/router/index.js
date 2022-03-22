/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: LiYansheng
 * @Date: 2022-03-13 15:55:03
 * @LastEditors: CoderXZ
 * @LastEditTime: 2022-03-22 21:08:26
 */
import Vue from "vue";
import Router from "vue-router";
import test from '@/components/test'
import Login from '@/view/Login'
import Home from '@/view/Home'
import Sother from '@/components/student/Sother'

Vue.use(Router)

const router=new Router({
    // mode:'history',//默认是Hash 模式,地址后有一个“#”符号,这里可以根据实际需要定义使用不同的模式
    routes:[
        {
            //这里写路由配置
            path:'/test',
            component:test
        },
        {
            //这里写路由配置
            path:'/login',
            component:Login
        },
        {
            //这里写路由配置
            path:'/home',
            component:Home,
            children:[
                {
                    path:'/other',
                    component:Sother
                }
            ]
        },
        
    ]
})

export default router