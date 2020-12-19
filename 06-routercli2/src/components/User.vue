<template>
    <div>
        <h2>用户</h2>
        <p>我是用户内容，滴滴滴滴</p>
        <h2>{{$route.query}}</h2>
        <h2>{{$route.query.name}}</h2>
        <h2>{{$route.query.age}}</h2>
        <h2>{{$route.query.height}}</h2>
        <!-- <p>{{$route.params.userid}}</p> -->
    </div>
</template>
<script>
export default {
    name: 'User'/* ,
    computed: {
        userId() {
            return this.$route.params.userid 
        }
    } */
}
</script>i
<style>

</style>