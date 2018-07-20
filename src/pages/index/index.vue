<template>
  <div class="body-container grey-body">
    <div class="top-banner">
      <card text="BBS" ></card>
      <picker mode="selector" v-if="array.length > 1" range-key="value" :range="array" :value="index" @change="optionChanged">
        <button type="default">{{value}}</button>
      </picker>
      <button v-if="array.length == 1" @click="toLogin()" type="default">Log in</button>
    </div>
  </div>
</template>

<script>
import card from '@/components/card';
import MpPicker from 'mp-weui/packages/picker';
export default {
  data () {
    var index = 0;
    var value = '1';
    var array = [{value: 'Log in', id: 4}];
    return {
      value, array, index
    };
  },

  components: {
    card, MpPicker
  },

  methods: {
    toLogin: function () {
      wx.navigateTo({url: '/pages/login/main'});
    },

    optionChanged: function (e) {
      this.index = e.target.value;
      console.log(this.index);
      console.log(this.array.find(i => i.id === this.index));
      // this.value = this.array.find(i => i.id === this.index).value;
      switch (this.index) {
        case 0: console.log(1); break;
        case 1: console.log(2); break;
        case 2: console.log(3); break;
        case 3: console.log(4); break;
      }
    }
  },

  onLoad () {
    var user = wx.getStorageSync('login')['current_user'];
    this.array = user ? [
      {value: user.name, id: 0},
      {value: 'I like', id: 1},
      {value: 'My collection', id: 2},
      {value: 'Log out', id: 3}] : [{value: 'Log in', id: 4}];
  }
};
</script>

<style lang="scss" scoped>
  .grey-body {
    background-color:#D2D6DE;
    >div {
      background-color: #FFFFFF;
    }
  }

  .body-container {
    height:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    position:absolute;
    right:0;
    left:0;
    .top-banner {
      width: 90%;
      margin-top: 10px;
      display: flex;
    }
  }
</style>
