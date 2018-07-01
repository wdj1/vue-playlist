new Vue({
  el: '#app',
  data: {
    success: false,
    error: false,
    loginType: 'username'
  },
  methods: {
    toggleLoginType: function() {
      return this.loginType = this.loginType === 'username'? 'email': 'username';
    }
  }
});