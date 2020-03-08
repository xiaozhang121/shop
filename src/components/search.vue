<template>
  <view class="search">
    <!-- 搜索栏标签 -->
    <view class="input-box">
      <input type="text" />
    </view>
    <!-- 搜索的结果 -->
    <view class="content"></view>
  </view>
</template>
<script>
export default {
  data () {
    return {}
  }
}
</script>
<style lang="less">
.search {
  .input-box {
    background-color: #FF2D4A;
    padding: 20rpx 16rpx;
    input {
      background-color: #fff;
    }
  }
}
</style>