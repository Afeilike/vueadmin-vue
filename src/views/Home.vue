<template>

  <el-container>

<!--    侧边导航栏-->
    <el-aside width="200px">
    <SideMenu></SideMenu>
    </el-aside>
    <el-container>
      <el-header>   <!--顶部导航栏-->
        <strong>Vue 管理系统</strong>
        <div class="header-avatar">
          <el-avatar size="medium" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>

          <el-dropdown>
            <span class="el-dropdown-link">
              Admin<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人中心</el-dropdown-item>
              <el-dropdown-item>退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>

          <el-link href="https://github.com/Afeilike/vueadmin-vue" target="_blank" >github</el-link>
          <el-link href="https://www.bilibili.com/" target="_blank" >B站</el-link>
        </div>
      </el-header>
      <el-main>
        <div style="margin: 0 15px;">
          <router-view></router-view>   <!--渲染出路由-->   <!-- 子路由-->
        </div>
      </el-main>
    </el-container>

  </el-container>

</template>

<script>
import SideMenu from "./inc/SideMenu.vue";    //几个组件组成的Home
export default {
  name: "Home",
  components:{
    SideMenu
  },
  data(){

  }
}
</script>

<style scoped>
.el-container{
  padding: 0;
  margin: 0;
  height: 100%;
}

.header-avatar{
  float: right;
  width: 210px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.el-dropdown-link {
  cursor: pointer;   //鼠标光标变成手
color: #409EFF;
}
</style>
