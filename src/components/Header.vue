<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: LiYansheng
 * @Date: 2022-03-22 13:43:21
 * @LastEditors: CoderXZ
 * @LastEditTime: 2022-03-24 21:23:13
-->
<template>
  
    <el-row>
      <el-col :span="3" :offset="1">
        <!--logo -->
        <el-image :src="logoUrl" :fit="fit" style="height:60px"></el-image>
      </el-col>
      <el-col :span="2" :offset="17">
        <div id="user">
          <el-avatar :src="avartarUrl" />
        </div>
      </el-col>
    </el-row>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      logoUrl: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      avartarUrl: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
    };
  },
};
</script>

<style>
    #user{
        margin-top: 10px;
    }
    .el-image{
      height: 50%;
    }
</style>
