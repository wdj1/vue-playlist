//实例化Vue对象
new Vue({
  el: '#vue-app',
  data: {
    name: 'Eric Wu',
    job: 'front-end developer',
    link: 'https://cn.vuejs.org',
    linkTag: '<a href="https://cn.vuejs.org">Vue.js</a>'
  },
  methods: {
    greet: function(time) {
      return 'Good ' + time + ', ' + this.name + '!';
    }
  }
});

/*
 *  el: element 需要获取的元素，一定是html中的根容器元素
 *  data: 用于数据的存储
 *  methods: 用于存储方法
 *  v-bind/v-html: 给属性绑定对应的值
 */
