Vue.component("greeting",{
  template:`
  <p>
    {{name}}: 今天星期五，图书馆闭馆！
    <button v-on:click="changName">change</button>
  </p>
  `,
  data: function() {
    return {
      name: "管理员"
    }
  },
  methods: {
    changName: function() {
      this.name = "可别忘了"
    }
  }
})

new Vue({
  el: "#app-one"
});

new Vue({
  el: "#app-two"
});