<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: LiYansheng
 * @Date: 2022-03-21 15:56:05
 * @LastEditors: CoderXZ
 * @LastEditTime: 2022-03-24 20:48:14
-->
<template>
  <el-container>
    <el-header>
        <Header></Header>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <div>
          <Smenu v-if="true"></Smenu>
        </div>
        <div>
          <Tmenu v-if="false"></Tmenu>
        </div>
        <div>
          <Amenu v-if="false"></Amenu>
        </div>

      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
    <el-footer>
      <Footer></Footer>
    </el-footer>
  </el-container>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Smenu from "@/components/student/Smenu";
import Tmenu from "@/components/teacher/Tmenu";
import Amenu from "@/components/admin/Amenu";
export default {
  name: "Home",
  components: {
    Header,
    Footer,
    Smenu,
    Tmenu,
    Amenu,
  },
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

<style>
.el-header {
  margin-top: 0;
  width: 100%;
  background-color: rgb(102, 155, 187);
}
* {
  margin: 0;
  padding: 0;
}
.el-footer {
  background-color: rgb(102, 155, 187);
}
</style>
