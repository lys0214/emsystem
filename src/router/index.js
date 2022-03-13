/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: LiYansheng
 * @Date: 2022-03-13 15:55:03
 * @LastEditors: CoderXZ
 * @LastEditTime: 2022-03-13 16:17:56
 */
import Vue from "vue";
import Router from "vue-router";
import test from '@/components/test'

Vue.use(Router)

const router=new Router({
    // mode:'history',//默认是Hash 模式,地址后有一个“#”符号,这里可以根据实际需要定义使用不同的模式
    routes:[
        {
            //这里写路由配置
            path:'/test',
            component:test
        },
        
    ]
})

export default router