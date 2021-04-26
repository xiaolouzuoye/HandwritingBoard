<template>
	<view class="container">
		<cu-custom bgColor="bg-gradual-green" :modalShow.sync="modalShow" isBack="true"><block slot="content">券生活</block></cu-custom>
<!-- 		<view class="flex justify-between align-center" style="background-color: rgba(255,220,127,255);height: 300rpx;width: 100%;">
			<image style="height: 250rpx;width: 250rpx;" src="../../static/btn-share-min.png"></image>
			<image style="height: 200rpx;width: 200rpx;" src="../../static/top-text-min.png"></image>
			<image style="height: 250rpx;width: 250rpx;" src="../../static/btn-notify-min.png"></image>
		</view> -->
		<v-tabs v-model="current" :tabs="tabs" @change="changeTab" class="tab"></v-tabs>
		<view class="coupon" ref="coupon">
			<view class="item" v-for="(v, i) in couponList" @click="toCoupon(i)" :key="i">
				<view class="top">
					<view class="left">
						<view class="content">
							<image :src="v.icon" class="icon" mode="widthFix" />
							<view class="name">{{ v.name }}</view>
						</view>
						<view class="text" v-if="v.type == 1">天天可领</view>
						<view class="text" v-else-if="v.type == 2">限时秒杀</view>
					</view>
					<view class="right">免费领取</view>
				</view>
				<view class="bottom"><image :src="v.bannerPic" mode="widthFix" /></view>
			</view>
		</view>
	</view>
</template>

<script>
	const db = uniCloud.database()
	export default {
		data() {
			return {
				current: 0,
				tabs: [],
				couponList: [],
				coupons: [],
				openid: '',
				allCoupon:{},
				isHome:false,
				loadModal:false
			}
		},
		onLoad(){
			
			this.getCurrentPages()
			this.getHome()
		},
		onShareAppMessage(){
			return {
				title:'送你几张外卖券',
				path:'/pages/coupons/coupons',
				imageUrl:'../../static/meituan.png'
			}
		},
		methods: {
			getTabs(){
				return new Promise((resolve,reject)=>{
					let collection = db.collection("coupons-tab")
					collection.orderBy('tabId asc')
					.get()
					.then(res=>{
						console.log(res)
						for(const v of res.result.data){
							this.allCoupon[v.tabId] = []
						}
						this.tabs = res.result.data
						resolve()
					})
					.catch(err=>{
						console.log('err',err)
					})
				})
			},
			getList(){
				return new Promise((resolve,reject)=>{
					console.log("ddd")
					let collection = db.collection("coupons-list")
					collection.orderBy('sort asc').get()
					.then(res=>{
						console.log(res)
						
						for(const v of res.result.data){
							this.allCoupon[v.tabId].push(v)
						}
						this.allCoupon[0] = res.result.data
						this.couponList = res.result.data
						this.loadModal = false
						resolve()
					})
					.catch(err=>{
						console.log('err',err)
					})
				})
			},
			async getHome(){
				uni.showLoading({
					title:'加载中'
				})
				await this.getTabs()
				this.getList()
				uni.hideLoading()
			},
			changeTab(index) {
				console.log('当前选中的项：' + index);
				this.couponList = this.allCoupon[index]
				
				//#ifdef H5
				this.$nextTick(() => {
					this.$refs.coupon.scrollTop= 0;
				})
				//#endif
				setTimeout(() => {
					uni.hideLoading()
				}, 500)
			},
			toCoupon(i){
				console.log(this.couponList[i])
				//h5
				//#ifdef H5
				window.location.href = this.couponList[i].url
				//#endif
				//微信小程序
				//#ifdef MP-WEIXIN
				if(this.couponList[i].minapp){
					wx.navigateToMiniProgram({
					  appId: this.couponList[i].minapp.appid,
					  path: this.couponList[i].minapp.path,
					  success:(res)=> {
						// 打开成功
						this.addele(10)
					  }
					})
				}
				//#endif
			},
			getCurrentPages(){
				const page = getCurrentPages()
				if(page.length == 1){
					this.isHome = true
				}
			},
			// 增加电力值
			addele(number){
					if(uni.getStorageSync("isadd") === true){
						return
					}else{
						let user = uni.getStorageSync("user")
						user.userInfo.electricity = user.userInfo.electricity + number
						uni.setStorageSync("user",user)
						uni.setStorageSync("isadd",true)
						uni.showToast({
							title:'领取成功,电力值+' + number +'!',
							icon:'none'
						})
					}

			}
		}
	}
</script>

<style lang="scss">
page {
	background-color: #f8f8f8;
}
.container {
	font-size: 14px;
	line-height: 24px;
	position: relative;
	.tab {
		// position: fixed;
		// top: var(--window-top);
		// left: 0;
		// z-index: 9999;
	}
	.coupon {
		// padding-top: 200rpx;
		padding-bottom: 10rpx;
		.item {
			background-color: #ffffff;
			margin: 30rpx;
			border-radius: 10rpx;
			padding: 0 30rpx 30rpx 30rpx;
			.top {
				height: 116rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				.left {
					height: 116rpx;
					width: 400rpx;
					display: flex;
					align-items: center;
					justify-content: space-between;
					.content {
						width: 100%;
					}
					.icon {
						display: inline-block;
						vertical-align: bottom;
						width: 52rpx;
						height: auto;
					}
					.name {
						text-align: left;
						display: inline-block;
						vertical-align: bottom;
						font-size: 34rpx;
						color: #000;
						line-height: 50rpx;
						font-weight: bold;
						margin-left: 15rpx;
					}
					.text {
						width: 150rpx;
						height: 38rpx;
						line-height: 38rpx;
						text-align: center;
						font-size: 24rpx;
						color: #61300e;
						background: linear-gradient(90deg, #f9db8d, #f8d98a);
						border-radius: 6rpx;
					}
				}

				.right {
					width: 170rpx;
					height: 60rpx;
					border-radius: 30rpx;
					background: linear-gradient(90deg, #ec6f43, #ea4a36);
					color: #fff;
					font-size: 28rpx;
					line-height: 60rpx;
					text-align: center;
				}
			}

			.bottom {
				height: auto;
				width: 100%;
				image {
					display: block;
					width: 100%;
					height: auto;
				}
			}
		}
	}
}
</style>

