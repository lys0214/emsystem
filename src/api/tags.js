/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: LiYansheng
 * @Date: 2022-03-13 20:49:14
 * @LastEditors: CoderXZ
 * @LastEditTime: 2022-03-13 21:42:31
 */

import service from '../request/index'

export function getTags(){
    return service({
        method:'get',
        url:'/tags',
    })
}
