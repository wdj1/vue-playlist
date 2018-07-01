new Vue({
  el: '#app',
  data: {
    a: 0,
    b: 0,
    age: 20
  },
  /*methods: {
    // 点击任一按钮，都会触发所有methods中的方法，耗费性能
    addToA: function() {
      console.log('add To A');
      return this.a + this.age;
    },
    addToB: function() {
      console.log('add To B');
      return this.b + this.age;
    }
  },*/

  // 点击任一按钮，只会触发相对应的function，在实际项目中，需要耗费大量性能时，使用computed
  // html中{{}}里直接写方法名即可，后面不要加括号, 如{{ addToA }}
  computed: {
    addToA: function() {
      console.log('add To A');
      return this.a + this.age;
    },
    addToB: function() {
      console.log('add To B');
      return this.b + this.age;
    }
  }
});