<template>
<scroll-view scroll-y class="scrollPage">
  <view class="UCenter-bg">
    <image src="../../static/logo.png" class="png" mode="widthFix"></image>
    <view class="text-xl">签名板
    </view>
    <view class="margin-top-sm">
      <text>By:小楼昨夜</text>
    </view>
    <image src="https://raw.githubusercontent.com/weilanwl/ColorUI/master/demo/images/wave.gif" mode="scaleToFill" class="gif-wave"></image>
  </view>
  <view class="padding bg-white shadow-warp">
	<view class="padding flex flex-direction">
		<button class="cu-btn bg-gradual-green margin-tb-sm lg" @click="nav('../board/board')">开始手写</button>
	</view>
  </view>
  <view class="cu-list menu card-menu margin-top-xl margin-bottom-xl shadow-lg radius">
    <view class="cu-item arrow" @click="modalShow = true">
      <view class="content"  >
        <text class="cuIcon-creativefill text-grey"></text>
        <text class="text-grey">免费设计签名</text>
      </view>
    </view>
		<!-- #ifdef MP-WEIXIN -->
	<view class="cu-item arrow" @click="nav('../coupons/coupons')">
	  <view class="content" hover-class="none" >
	    <text class="cuIcon-presentfill text-grey"></text>
	    <text class="text-grey">免费领外卖券
		</text>
	  </view>
	  <view class="bg-red text-xs" style="border-radius: 20upx;padding:5upx;">今日大额红包还剩{{remaining}}个</view>
	</view>
	<view class="cu-item arrow" @click="navmin('wx8fab88eb5f654b0a')">
	  <view class="content" hover-class="none" >
	    <text class="cuIcon-picfill text-grey"></text>
	    <text class="text-grey">文案头像壁纸背景图戳</text>
	  </view>
	</view>
	<!-- #endif -->
<!--    <view class="cu-item arrow">
      <navigator class="content"  hover-class="none">
        <text class="cuIcon-questionfill text-grey"></text>
        <text class="text-grey">关于使用方法</text>
      </navigator>
    </view> -->
  </view>
  <view class="cu-tabbar-height"></view>
  <view class="cu-modal" :class="modalShow?'show':''">
  	<view class="cu-dialog">
  		<view class="cu-bar bg-white justify-end">
  			<view class="content">生成签名</view>
  			<view class="action" @tap="modalShow = false">
  				<text class="cuIcon-close text-red"></text>
  			</view>
  		</view>
  		<view class="padding-sm bg-white">
  			<view class="cu-form-group">
  				<view class="title">签名名称</view>
  				<input placeholder="请输入2-5名字" v-model="name" :maxlength='5' name="input"></input>
  			</view>
			<view class="cu-form-group">
				<view class="title">选择类型</view>
				<picker @change="PickerChange" :value="index" :range="picker" range-key="name">
					<view class="picker">
						{{picker[index].name}}
					</view>
				</picker>
			</view>
  		</view>
  		<view class="cu-bar bg-white justify-end">
  			<view class="action">
  				<button class="cu-btn line-green text-green" @tap="modalShow = false">取消</button>
  				<button class="cu-btn bg-green margin-left" @tap="generate">确定</button>
  
  			</view>
  		</view>
  	</view>
  </view>
</scroll-view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				modalShow:false,
				picker:[{
					name:'一笔艺术签',
					code:901
				},{
					name:'一笔商务签',
					code:905
				}],
				index:0,
				name:'',
				remaining:Math.floor(Math.random()*100)
			}
		},
		onLoad() {
			
		},
		onShareAppMessage(){
			return {
				title:'手写签名板!可以自动生成你的签名',
				path:'/pages/index/index',
				imageUrl:'../../static/logo.png'
			}
		},
		methods: {
			nav(url){
				uni.navigateTo({
					url:url
				})
			},
			navmin(id){
				wx.navigateToMiniProgram({
					appId:id,
					path:'pages/index/index'
				})
			},
			PickerChange(e){
				this.index = e.detail.value
			},
			generate(){
				if(this.name === ''){
					uni.showToast({
						title:'请输入名称',
						icon:'none'
					})
					return
				}
				uni.showLoading({
					title:'正在生成'
				})
				uni.request({
					url:'https://wx.xuebage.cn/app/index.php?i=2&t=0&v=1.0.2&from=wxapp&c=entry&a=wxapp&do=generate&m=yj_yishuzi&sign=12934b72d0402f473abf834702a634d5&val='+ this.name +'&font=' + this.picker[this.index].code,
					method:'POST',
					success:res=>{
						console.log(res)
						uni.hideLoading()
						try{
							uni.navigateTo({
								url:'../wordArt/wordArt?img=' + res.data.data
							})
						}catch(e){
							//TODO handle the exception
							uni.showToast({
								title:'系统繁忙 请稍后再试!' + res,
								icon:'none'
							})
						}
					},
					fail:err=>{
						console.log(err)
						uni.showToast({
							title:'系统繁忙 请稍后再试!',
							icon:'none'
						})
					}
				})
			}
		}
	}
</script>

<style>
.UCenter-bg {
  background-image: url(https://image.weilanwl.com/color2.0/index.jpg);
  background-size: cover;
  height: 550rpx;
  display: flex;
  justify-content: center;
  padding-top: 40rpx;
  overflow: hidden;
  position: relative;
  flex-direction: column;
  align-items: center;
  color: #fff;
  font-weight: 300;
  text-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
}

.UCenter-bg text {
  opacity: 0.8;
}

.UCenter-bg image {
  width: 200rpx;
  height: 200rpx;
}

.UCenter-bg .gif-wave{
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  z-index: 99;
  mix-blend-mode: screen;  
  height: 100rpx;   
}

map,.mapBox{
  left: 0;
  z-index: 99;
  mix-blend-mode: screen;  
  height: 100rpx;   
}

map,.mapBox{
  width: 750rpx;
  height: 300rpx;
}
</style>
