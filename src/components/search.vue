<template>
  <view class="search" :class='{focused: isFocused}'>
    <!-- 搜索栏标签 -->
    <view class="input-box">
      <input type="text" @focus='goSearch'/>
      <text class='cancel' @click='handleCancel'>取消</text>
    </view>
    <!-- 搜索的结果 -->
    <view class="content"></view>
  </view>
</template>
<script>
export default {
  data () {
    return {
      isFocused: false
    }
  },
  methods: {
    goSearch () {
      console.log('hello')
      // 当输入框获取焦点时，在父元素添加一个类名 focused
      this.isFocused = true
    },
    handleCancel () {
      // 取消动作：恢复原始状态
      this.isFocused = false
    }
  }
}
</script>
<style lang="less">
.search {
  .input-box {
    background-color: #FF2D4A;
    padding: 20rpx 16rpx;
    display: flex;
    position: relative;
    input {
      background-color: #fff;
      padding-left: 55rpx;
      flex: 1;
    }
    .cancel {
      display: none;
    }

    &::before {
      content: '';
      display: none;
      width: 32rpx;
      height: 32rpx;
      position: absolute;
      top: 50%;
      transform: translate(15rpx, -50%);
      background-image: url('http://static.botue.com/ugo/images/icon_search%402x.png');
      background-size: 32rpx;
    }

    &::after {
      content: '搜索';
      position: absolute;
      left: 50%;
      top: 50%;
      padding-left: 40rpx;
      transform: translate(-50%, -50%);
      font-size: 24rpx;
      color: #ccc;
      background-image: url('http://static.botue.com/ugo/images/icon_search%402x.png');
      background-size: 32rpx;
      background-repeat: no-repeat;
    }

  }
  &.focused {
    .input-box {
      background-color: #eee;
      &::after {
        display: none;
      }
      &::before {
        display: block;
      }
    }
    .cancel {
      display: block;
      width: 100rpx;
      height: 50rpx;
      line-height: 50rpx;
      text-align: center;
      font-size: 30rpx;
    }
  }
}

</style>