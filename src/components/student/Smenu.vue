<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: LiYansheng
 * @Date: 2022-03-22 15:19:10
 * @LastEditors: CoderXZ
 * @LastEditTime: 2022-03-22 21:08:46
-->
<template>
  <el-menu
    :default-active="activeIndex"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    @select="handleSelect"
    router="true"
  >
    <el-menu-item index="1">基本信息</el-menu-item>
    <el-menu-item index="4">个人档案</el-menu-item>
    <el-menu-item index="3">就业意向</el-menu-item>
    <el-menu-item index="5">就业三方</el-menu-item>
    <el-menu-item index="6">就业推荐</el-menu-item>
    <el-menu-item index="/other">其他</el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: "Smenu",
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
