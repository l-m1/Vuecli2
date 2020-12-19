<template>
    <div>
        <h2>首页</h2>
        <p>我是首页的内容，哈哈哈哈哈</p>
        <router-link to="/home/news">新闻</router-link>
        <router-link to="/home/films">电影</router-link>
        <p>{{message}}</p>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    name: 'Home',
    data() {
        return {
            message: 'lisa'
        }
    },
    created() {
        console.log("created");
        document.title = '首页'
    }
}
</script>
<style scoped>

</style>