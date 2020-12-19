<template>
  <div id="app">
    <router-link to="/login"></router-link>
    <router-link to="/user"></router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import "./assets/css/base.css"

</style>
