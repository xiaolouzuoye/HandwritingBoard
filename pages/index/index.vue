<template>
<signature @getImg="saveImg"></signature>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
			saveImg(img){
				console.log("img",img)
				uni.saveImageToPhotosAlbum({
					filePath:img,
					success:res=> {
						console.log(res)
						uni.showToast({
							title:'保存成功!图片格式为透明PNG!',
							icon:'none',
							duration:3000
						})
					}
				})
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
