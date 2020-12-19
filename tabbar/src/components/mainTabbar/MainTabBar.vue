<template>
    <tab-bar>
      <tab-bar-item path="/home" activeColor="red">
        <img slot="item-icon" src="../../assets/img/tabbar/index2.png" alt="">
        <img slot="item-icon-active" src="../../assets/img/tabbar/index.png" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="catery" activeColor="red">
        <img slot="item-icon" src="../../assets/img/tabbar/catery2.png" alt="">
        <img slot="item-icon-active" src="../../assets/img/tabbar/catery.png" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="red">
        <img slot="item-icon" src="../../assets/img/tabbar/shoppingcart.png" alt="">
        <img slot="item-icon-active" src="../../assets/img/tabbar/cart.png" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="red">
        <img slot="item-icon" src="../../assets/img/tabbar/me.png" alt="">
        <img slot="item-icon-active" src="../../assets/img/tabbar/my.png" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>
<script>
  import TabBar from '../tabbar/TabBar.vue'
  import TabBarItem from '../tabbar/TabBarItem.vue'

  export default {
    name: 'MainTabBar',
    components: { 
      TabBar,
      TabBarItem 
      }
  }
</script>
<style scoped>

</style>