<template>
  <div>
    <div class="logo">
      <img src="/static/img/logo.png">
    </div>
    <div class="weui-cells weui-cells_form">
      <div class="weui-cell">
        <div class="weui-cell__hd"><label class="weui-label">Username</label></div>
        <div class="weui-cell__bd">
          <input type="text" class="weui-cells__title" v-model="username"/>
        </div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__hd"><label class="weui-label">Password</label></div>
        <div class="weui-cell__bd">
          <input type="password" class="weui-cells__title" v-model="password"/>
        </div>
      </div>
    </div>
    <button class="login-btn" type="primary" @click="login">Log in</button>

    <mp-footer text="Copyright © 2008-2016 spanky.top" fixed="true" :links="links"></mp-footer>
  </div>
</template>

<script>
import MpFooter from 'mp-weui/packages/footer';
import Toast from 'mp-weui/packages/toast';

export default {
  components: {
    MpFooter, Toast
  },

  data () {
    const links = [{text: 'spanky.top'}];
    let username = this.username;
    let password = this.password;
    return {
      links, username, password
    };
  },

  methods: {
    login () {
      Toast.loading('On the landing...');
      var body = {
        name: this.username,
        pass: this.password
      };
      let res = this.$post('user/login?_format=json', body);
      res.then(function (data) {
        console.log(data);
        Toast.close();
        if (data.message) {
          Toast(data.message, 1500);
        } else if (data.current_user) {
          wx.setStorageSync('login', data);
          wx.navigateTo({url: '/pages/index/main'});
        }
      });
    }
  },

  created () {
    if (wx.getStorageSync('login')) {
      console.log(123);
      // wx.navigateTo({url: '/pages/index/main'});
    }
  }
};
</script>

<style lang="scss" scoped>
.logo {
  text-align: center;
  img {
    width: 80%;
    height:280px;
    border-radius:50%;
  }
}

button.login-btn {
  width: 80%;
  margin-top: 15px;
}

</style>
