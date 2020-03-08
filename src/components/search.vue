<template>
  <view class="search" :class='{focused: isFocused}'>
    <!-- 搜索栏标签 -->
    <view class="input-box">
      <input type="text" @focus='goSearch'/>
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
    }
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
  &.focused {
    .input-box {
      background-color: #eee;
    }
  }
}

</style>