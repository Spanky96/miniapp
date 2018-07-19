<template>
  <div class="container">

    <div class="userinfo" @click="bindViewTap">
      <open-data class="userinfo-avatar" type="userAvatarUrl" @click="bindViewTap"></open-data>
      <open-data class="userinfo-nickname" type="userGender" lang="zh_CN"></open-data>
      <open-data type="userNickName"></open-data>
    </div>

    <div>
      <button @click="clickHandle($event)" class="weui-btn" type="primary">按钮</button>
    </div>

    <div class="usermotto">
      <div class="user-motto">
        <card :text="motto"></card>
      </div>
    </div>

    <form class="form-container">
      <input type="text" class="form-control" v-model="motto" placeholder="v-model" />
      <input type="text" class="form-control" v-model.lazy="motto" placeholder="v-model.lazy" />
    </form>
    <a href="/pages/counter/main" class="counter">去往Vuex示例页面</a>
    <a href="/pages/login/main" class="counter">去往登录页面</a>
  </div>
</template>

<script>
import card from '@/components/card';
import Toast from 'mp-weui/packages/toast';
export default {
  data () {
    return {
      motto: 'Hello World',
      userInfo: {},
      aa: '点击'
    };
  },

  components: {
    card
  },

  methods: {
    bindViewTap () {
      const url = '../logs/main';
      wx.navigateTo({
        url
      });
    },
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: (res) => {
          console.log(res.code);
        }
      });
    },
    clickHandle (ev) {
      console.log('Clicked', ev);
      Toast('提示信息', 1500);
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo();
  }
};
</script>

<style lang="scss" scoped>
  .userinfo {
    display: flex;
    flex-direction: column;
    align-items: center;
    .userinfo-avatar {
      width: 128rpx;
      height: 128rpx;
      margin: 20rpx;
      border-radius: 50%;
    }
    .userinfo-nickname {
      color: #aaa;
    }
  }

  .usermotto {
    margin-top: 50px;
  }

  .form-control {
    display: block;
    padding: 0 12px;
    margin-bottom: 5px;
    border: 1px solid #ccc;
  }

  .counter {
    display: inline-block;
    margin: 10px auto;
    padding: 5px 10px;
    color: blue;
    border: 1px solid blue;
  }

</style>
