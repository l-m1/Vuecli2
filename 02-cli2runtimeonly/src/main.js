import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  /* //传入普通的三个参数
  render: function(createElement){
    return createElement('h2',{class: 'box'},['我是标题',createElement('button',['按钮'])])
  } */
  //传入组件对象
  render: h => h(App)
})
