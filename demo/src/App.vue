<template>
  <div id="app">
    <!-- 通过router-link进行跳转路由 -->
    <router-link to="/home">首页</router-link>
    <router-link to="/profile">我的</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
