<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: LiYansheng
 * @Date: 2022-03-22 15:53:56
 * @LastEditors: CoderXZ
 * @LastEditTime: 2022-03-22 16:21:10
-->
<template>
  <el-menu
    :default-active="activeIndex"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    @select="handleSelect"
  >
    <el-menu-item index="1">数据总览</el-menu-item>
    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-success"></i>
        <span>权限管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="2-1">菜单控制</el-menu-item>
        <el-menu-item index="2-2">角色控制</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="3">
      <template slot="title">
        <i class="el-icon-success"></i>
        <span>高校管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="3-1">高校</el-menu-item>
        <el-menu-item index="3-2">学院</el-menu-item>
        <el-menu-item index="3-3">专业</el-menu-item>
        <el-menu-item index="3-4">班级</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="4">
      <template slot="title">
        <i class="el-icon-success"></i>
        <span>用户管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="4-1">管理员</el-menu-item>
        <el-menu-item index="4-2">教师</el-menu-item>
        <el-menu-item index="4-3">学生</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-menu-item index="5">招聘管理</el-menu-item>
    <el-menu-item index="6">系统日志</el-menu-item>
    <el-menu-item index="7">其他</el-menu-item>
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
