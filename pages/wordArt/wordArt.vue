<template>
	<view>
		<cu-custom bgColor="bg-gradual-green" :modalShow.sync="modalShow" isBack="true"><block slot="content">艺术签名</block></cu-custom>
		<image :src="img" style="width: 750upx;height: 580upx;"></image>
		<view class="flex justify-center text-center padding-top padding-bottom">
			<button class="cu-btn line-orange  margin-tb-sm lg button-hover" style="width: 40%;" open-type="share">分享</button>
			<button class="cu-btn bg-green margin-tb-sm lg button-hover margin-left" style="width: 40%;"  @click="saveImgoPhotos()">保存</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				img:''
			}
		},
		onLoad(parmas) {
			this.img = parmas.img
		},
		onShareAppMessage(){
			return {
				title:'快来看看你的艺术名字有多好看吧!',
				path:'/pages/index/index',
				imageUrl:this.img
			}
		},
		methods: {
			saveImgoPhotos(){
				uni.getImageInfo({
					src:this.img,
					success:res=>{
						uni.saveImageToPhotosAlbum({
							filePath:res.path,
							success:(msg)=>{
								uni.showToast({
									icon:'none',
									title:'保存成功!' + msg.errMsg
								})
							}
						})
					},
					fail:err=>{
						console.log("下载图片失败",err)
					}
				})
			},
		}
	}
</script>

<style>

</style>
