<template>
<view class="wrapper">
	<view class="cu-custom bg-gray " :style="[{height:CustomBar + 'px'}]">
		<view class="flex align-center justify-between margin-top-xs padding-left" style="position: absolute;" :style="[{width:Custom.left + 'px'},{top:Custom.top + 'px'}]">
			<view class="flex align-center">
				<view class="cuIcon-back text-gray" style="font-size: 40upx;" @click="navBack()">
					
				</view>
				<view class="margin-left-sm" @click="showIndex = 0">
					<image src='../../static/brush.png' style="width: 40upx;height: 40upx;position: relative;" >
					</image>
					<view v-show="showIndex === 0"  style="border-bottom: 4rpx solid #007AFF;"></view>
				</view>
				<view class="margin-left-sm" @click="showIndex = 1">
					<image src='../../static/text.png' style="width: 40upx;height: 40upx;position: relative;" >
					</image>
					<view v-show="showIndex === 1" style="border-bottom: 4rpx solid #007AFF;"></view>
				</view>
			</view>
			<view>
				<view class="flex" v-show="showIndex === 0">
					<view v-for="(item,index) in colorList" @click="changeColor" :data-index="index" :key="item.id" class="color-li margin-left-sm" :class="{'li-color':penColorIndex == index}" :style="{backgroundColor: item.value}"></view>
				</view>
				<view class="flex" v-show="showIndex === 1">
					<view v-for="(item,index) in lineWidthList" @click="changeLineWidth" :data-index="index" :key="item.id" class="color-li margin-left-sm" :class="{'li-color':lineWidthIndex == index}" :style="{backgroundColor: item.value}">
						<text class="text-xs text-gray flex justify-center align-center">{{item.name}}</text>
					</view>
				</view>
			</view>
			<view class="margin-right">
				<image src='../../static/Rubber.png' class="margin-right-lg" style="width: 40upx;height: 40upx;" @click="retDraw"></image>
				<image src='../../static/download.png' style="width: 45upx;height: 45upx;" @click="subCanvas"></image>
			</view>
		</view>
	</view>
<!-- 	<view class="hand-left">
		<view class="left-bus">
			<view v-for="(item,index) in colorList" @click="changeColor" :data-index="index" :key="item.id" class="color-li" :class="{'li-color':penColorIndex == index}" :style="{backgroundColor: item.value}"></view>
		</view>
		<view class="center-text">email:xlzy905@outlook.com</view>
		<view class="right-bus">
		<button @click="retDraw" class="cu-btn bg-red">清除</button>
		<button @click="preview" class="cu-btn">预览</button>
		<button @click="subCanvas" class="cu-btn bg-green">保存</button>
		</view>
	</view> -->
	<view class="hand-center">
<!-- 		<canvas class="hand-writing" disable-scroll="true" @touchstart="uploadScaleStart" @touchmove="uploadScaleMove" @touchend="uploadScaleEnd" canvas-id="handWriting"> -->
				<canvas
					class="hand-writing"
					disable-scroll
					@touchstart="uploadScaleStart"
					@touchmove="uploadScaleMove"
					@touchend="uploadScaleEnd"
					canvas-id="__signature__canvas"
				></canvas>
	</view>
</view>
</template>

<script>
	import Handwriting from '../../utils/signature.js'
	const CANVAS_ID = '__signature__canvas';
	export default {
		data() {
			return {
				penColor: '#333333', // 画笔颜色
				penColorIndex:0, 
				lineWidthIndex:1,
				lineWidth: 75, // 笔画粗细
				showIndex:0,
				isEmpty: true,
				CustomBar: this.CustomBar,
				StatusBar: this.StatusBar,
				Custom:this.Custom,
				path:'',
				colorList:[{
					id:1,
					name:'墨黑',
					value:'#333333'
				},
				{
					id:2,
					name:'草灰',
					value:'#8799a3',
				},{
					id:3,
					name:'嫣红',
					value:'#e54d42'
				}
				],
				lineWidthList:[{
					id:1,
					name:'小',
					value:50
				},
				{
					id:2,
					name:'中',
					value:75,
				},{
					id:3,
					name:'大',
					value:100
				}
				]
			}
		},
		mounted() {
				this.sign().then(path => {
						// console.log(path);
						this.path = path
					})
					.catch(e => {
						console.log('取消签名', e);
					});
		},
		methods: {
			sign() {
				return new Promise((resolve, reject) => {
					this.resolve = resolve;
					this.reject = reject;
					this.$nextTick(() => {
						let query = uni.createSelectorQuery().in(this);
						let ctx = uni.createCanvasContext(CANVAS_ID, this);
						this.handwriting = new Handwriting({
							lineColor: this.penColor,
							slideValue: this.lineWidth, // 0, 25, 50, 75, 100
							canvasName: CANVAS_ID,
							ctx: ctx
						});
						console.log(this.handwriting)
						// query.select('.handCenter')
						// 	.boundingClientRect(rect => {
						// 		this.handwriting.setSize(rect);
						// 	})
						// 	.exec();
					});
				});
			},
			changeColor(e){
				this.penColor = this.colorList[e.currentTarget.dataset.index].value
				this.penColorIndex = e.currentTarget.dataset.index
				this.handwriting.lineColor = this.colorList[e.currentTarget.dataset.index].value
			},
			changeLineWidth(e){
				this.lineWidth = this.lineWidthList[e.currentTarget.dataset.index].value
				this.lineWidthIndex = e.currentTarget.dataset.index
				this.handwriting.slideValue = this.lineWidthList[e.currentTarget.dataset.index].value
				this.handwriting.init()
				console.log(this.handwriting)
			},
			uploadScaleStart(event) {
				this.handwriting.uploadScaleStart(event);
			},
			uploadScaleMove(event) {
				this.handwriting.uploadScaleMove(event);
			},
			uploadScaleEnd(event) {
				this.handwriting.uploadScaleEnd(event);
			},
			retDraw: function() {
				console.log('1')
				this.handwriting.clear();
			},
			getSysInfo: function() {
				var that = this
				uni.getSystemInfo({
				success: function(res) {
					pix = res.pixelRatio
					that.width = res.windowWidth * pix
					that.height = res.windowHeight * pix
				}
			})
    },
	//保存图片
  subCanvas: async function() {
		// if (this.isEmpty) {
		//     return false
		// }
		const img = await this.onConfirm()
		this.$emit('getImg',img)	
    },
	navBack(){
		uni.navigateBack({
			
		})
	},
	//预览
 async preview(){
		if (this.isEmpty) {
		    return false
		}
		const img = await this.onConfirm()
		console.log("预览",img)
		uni.previewImage({
			current:0,
			urls:[img]
		})
	},
	//输入canvas图像
    onConfirm: function() {
        const self = this;
		return new Promise((resolve, reject)=>{
			uni.canvasToTempFilePath({
			    canvasId: CANVAS_ID,
			    success: function(res) {
					resolve(res.tempFilePath)
			    },
			    fail: function(res) {
			        console.log(res)
			    },
			    complete: function(res) {
			        console.log(res)
			    }
			},this)
		})

    }, //模态框保存签名操作
		}
	}
</script>

<style>
.wrapper {
    width: 100%;
    height: 100vh;
    overflow: hidden;
/*    display: flex; */
    align-content: center;
    flex-direction: row;
    justify-content: center;
    font-size: 28rpx;
}

.hand-writing {
    background: #fff;
    width: 100%;
    height: 100vh;
}

.hand-center {
    border: 1rpx dashed #e9e9e9;
    flex: 1;
    overflow: hidden;
    box-sizing: border-box;
}

.hand-left {
    height: 100vh;
    width: 110rpx;
	display: flex;
	flex-direction:column;
	justify-content: space-between;
}


.color-li{
	height:35rpx;
	width: 35rpx;
	border-radius: 50%;
}
.center-text{
	transform: rotate(90deg);
	font-size: 22rpx;
	color:#aaaaaa;
	display: flex;
	flex-direction:column;
	align-items: center;
}
.left-bus {
	display: flex;
	flex-direction:column;
	justify-content:space-around;
	align-items: center;
	height:300rpx;
	padding:20rpx 0;
}
.right-bus {
	display: flex;
	flex-direction:column;
	align-items: center;
/* 	height:490rpx; */
	height:300rpx;
	padding:20rpx 0;
	justify-content:space-around;
}
.cu-btn {
	position: relative;
	border: 0rpx;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
	padding: 0 30rpx;
	font-size: 28rpx;
	height: 64rpx;
	width: 130rpx;
	line-height: 1;
	text-align: center;
	text-decoration: none;
	overflow: visible;
	margin-left: initial;
    transform: rotate(90deg);
	margin-right: initial;
}
.bg-red{
	background-color: #e54d42;
	color: #ffffff;
}
.bg-green{
	background-color: #39b54a;
	color: #ffffff;
}
.li-color{
	border: 2px double #f37b1d;
}

</style>
