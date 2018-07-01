new Vue({
  el: '#app',
  data: {
    name: '',
    age: ''
  },
  methods: {
    // 旧的方法
    showAge: function() {
      this.age = this.$refs.age.value;
    }
  }
})