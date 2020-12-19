<template>
  <div id="tab-bar">
      <slot></slot>
    </div>
</template> 
<script>
export default {
  name: 'TabBar'
} 
</script>

<style>
  #tab-bar{
    /* 使文字水平 */
    display: flex;
    background-color: #f6f6f6;
    /* 把文字放在下方 */
    position: fixed;
    left: 0%;
    right: 0%;
    bottom: 0;

    /* 添加阴影 属性: x值 y值 模糊程度 颜色*/
    box-shadow: 0px -1px 1px rgba(100,100,100,0.1);
  }
  
</style>
