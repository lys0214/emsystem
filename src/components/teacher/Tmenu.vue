<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: LiYansheng
 * @Date: 2022-03-22 15:36:39
 * @LastEditors: CoderXZ
 * @LastEditTime: 2022-03-22 15:37:42
-->
<template>
  <el-menu
    :default-active="activeIndex"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    @select="handleSelect"
  >
    <el-menu-item index="1">基本信息</el-menu-item>
    <!-- <el-submenu index="2">
            <template slot="title">我的工作台</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-submenu> -->
    <el-menu-item index="4">我的班级</el-menu-item>
    <el-menu-item index="3">就业意向</el-menu-item>
    <el-menu-item index="5">就业分析</el-menu-item>
    <el-menu-item index="6">就业推荐</el-menu-item>
    <el-menu-item index="7">其他</el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: "Tmenu",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style></style>