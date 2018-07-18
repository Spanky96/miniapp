<template>
  <button class="weui-btn" :type="type" :disabled="disabled" :plain="plain">{{btnMsg}}</button>
</template>

<script>
export default {
  name: 'mpvue-button',
  props: {
    type: {
      type: String,
      default: 'primary'
    },
    btnMsg: {
      type: String,
      default: '按钮'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    plain: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style>
</style>