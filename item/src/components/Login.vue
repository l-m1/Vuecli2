<template>
    <div>
        <form>
            <table>
                <tr>
                    <td>用户名：</td>
                    <td><input type="text"></td>
                </tr>
                <tr>
                    <td>密码</td>
                    <td><input type="password"></td>
                </tr>
                <tr>
                    <td>验证码：</td>
                    <td><input type="text"></td>
                </tr>
                <tr>
                    <td align="center"><input type="submit" value="登录"></td>
                    <td align="center"><input type="reset" value="取消"></td>
                </tr>
            </table>
        </form>
    </div>
</template>
<script>
export default {
    name: 'Login'
}
</script>
<style scoped>

</style>