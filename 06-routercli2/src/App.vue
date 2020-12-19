<template>
  <div id="app">
    <!-- 通过router-link进行路由跳转 -->
    <router-link to="/home" tag="button">首页</router-link>
    <router-link to="/about" replace>关于</router-link>
    <router-link to="/my" replace>我的</router-link>
    <!-- <router-link v-bind:to="'/user/' + userid">用户</router-link> -->
    <router-link :to="{path: '/user',query: {name: 'lisa',age: 18,height: 1.88}}">用户</router-link>
    <router-view></router-view>

    <!-- 通过代码进行路由跳转 -->
    <!-- <button @click="homeclick">首页</button>
    <button @click="aboutclick">关于</button>
    <button @click="myclick">我的</button>
    <router-view></router-view> -->
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userid: 'lisa'
    }
  }
  /* ,
  methods: {
    homeclick() {
      this.$router.push('./home')
    },
    aboutclick() {
      this.$router.push('./about')
    },
    myclick() {
      this.$router.push('./my')
    }
  } */
}
</script>

<style>
/* 在Fn+F12查看element的class，设置点击时状态 */
/* .router-link-exact-active{
  color: red;
} */
</style>
