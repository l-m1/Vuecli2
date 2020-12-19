<template>
    <div>
        <h2>我的</h2>
        <p>内容，呵呵呵呵呵呵</p>
    </div>
</template>
<script>
export default {
    name: 'Profile',
    created() {
        console.log("created");
        document.title = '我的'
    }
}
</script>
<style scoped>

</style>