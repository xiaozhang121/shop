<template>
	<view class="container">
		<!-- 搜索栏 -->
		<view class="search">
			<!-- 搜索栏标签 -->
			<view class="input-box">
				<input type="text" />
			</view>
			<!-- 搜索的结果 -->
			<view class="content"></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Nihao'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
.search .input-box {
	background-color: #FF2D4A;
	padding: 20rpx 16rpx;
}
.search .input-box input {
	background-color: #fff;
}
</style>
