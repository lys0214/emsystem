/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: LiYansheng
 * @Date: 2022-03-13 20:47:12
 * @LastEditors: CoderXZ
 * @LastEditTime: 2022-03-13 21:34:06
 */

import axios from "axios"

const service=axios.create({
    baseURL:"http://localhost:8888",
    timeout:10000,
    /* headers:{
        "content-type": "application/json"
    } */
})

export default service