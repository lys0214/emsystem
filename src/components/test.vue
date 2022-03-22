<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: LiYansheng
 * @Date: 2022-03-13 16:13:10
 * @LastEditors: CoderXZ
 * @LastEditTime: 2022-03-21 22:01:03
-->
<template>
  <div>
    router测试
    <el-empty></el-empty>
    添加一个分支
    {{tags}}
    Scroll down to see the bottom-right button.
    
    <el-backtop target=".page-component__scroll .el-scrollbar__wrap"></el-backtop>
  </div>
</template>

<script>
import {getTags} from "@/api/tags";
export default {
  name: "test",
  data() {
    return {
      tags:[]
    };
  },
  created(){
    this.getdata()
  },
  methods: {
    getdata(){
      getTags().then((result) => {
        this.tags=result.data.data
      }).catch((err) => {
        console.log(err)
      });
    }
  },
};
</script>

<style></style>
