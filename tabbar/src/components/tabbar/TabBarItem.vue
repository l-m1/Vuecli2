<template>
    <div class="tab-bar-item" @click="itemClick">
      <div class="tab-bar-item">
        <div v-if="!isActive"><slot name="item-icon"></slot></div>
        <div v-else><slot name="item-icon-active"></slot></div>
        <!-- <div :class="{active: isActive}"><slot name="item-text"></slot></div> -->
        <!-- 动态决定颜色 -->
        <div :style="activeStyle"><slot name="item-text"></slot></div>
      </div>
    </div>
</template>
<script>
export default {
    name: 'TabBarItem',
    props: {
      path: String,
      activeColor: {
        type: String,
        default: 'blue'
      }
    },
    data() {
      return {
        //isActive: true
      }
    },
    computed: {
      isActive() {
        //拿到处于活跃路由的path
        // /home -> item1(/home) = true
        // /home -> item1(/home) = true
        // /home -> item1(/home) = true
        // /home -> item1(/home) = true
        //动态决定isActive的布尔值
        return this.$route.path.indexOf(this.path) !== -1
      },
      /* 动态改变颜色 */
      activeStyle() {
        return this.isActive ? {color: this.activeColor} : {}
      }
    },
    methods: {
      itemClick() {
        this.$router.push(this.path)
      }
    }
}
</script>
<style scoped>
  .tab-bar-item{
    /* 将文字均等分 */
    flex: 1;
    /* 水平分布 */
    text-align: center;
    font-size: 14px;
    height: 49px;
    font-size: 14px;
  }
  .tab-bar-item img {
      width: 24px;
      height: 24px;
      margin-top: 2px;
      vertical-align: middle;
  }
  /* .active{
    color: green;
  } */
</style>