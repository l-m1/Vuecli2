<template>
    <div>
        <h2>我是首页</h2>
        <p>我是首页的内容，哈哈哈哈哈</p>
        <router-link to="/home/profile">档案</router-link>
        <router-link to="/home/info">信息</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'Home'
}
</script>

<style>

</style>