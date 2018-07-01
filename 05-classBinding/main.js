new Vue({
  el: '#app',
  data: {
    changeColor1: false,
    changeColor: false,
    changeLength: false
  },
  computed: {
    bindClasses: function() {
      return {
        changeColor: this.changeColor,
        changeLength: this.changeLength
      }
    }
  }
});