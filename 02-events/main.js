new Vue({
  el: '#app',
  data: {
    age: 20,
    x: 0,
    y: 0
  },
  methods: {
    add: function(add) {
      this.age += add;
    },
    subtract: function(subtract) {
      this.age -= subtract;
    },
    updateXY: function(event) {
      // console.log(event);
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    alert: function() {
      alert('未成年人不可进入！');
    }
  }
});