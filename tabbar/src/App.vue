<template>
  <div id="app">
    <main-tab-bar/>
    <router-view></router-view>
  </div>
</template>

<script>
  import MainTabBar from './components/mainTabbar/MainTabBar.vue'
  export default {
    name: 'App',
    components: { 
      MainTabBar 
      }
  }
</script>

<style>
  @import "./assets/css/style.css"
  
</style>
