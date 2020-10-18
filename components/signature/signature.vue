<template>
<view class="wrapper">
	<view class="hand-left">
		<view class="left-bus">
			<view v-for="(item,index) in colorList" @click="changeColor" :data-index="index" :key="item.id" class="color-li" :class="{'li-color':penColorIndex == index}" :style="{backgroundColor: item.value}"></view>
		</view>
		<view class="center-text">email:xlzy905@outlook.com</view>
		<view class="right-bus">
		<button @click="retDraw" class="cu-btn bg-red">清除</button>
<!-- 		<button @click="preview" class="cu-btn">预览</button> -->
		<button @click="subCanvas" class="cu-btn bg-green">保存</button>
		</view>
	</view>
	<view class="hand-center">
		<canvas class="hand-writing" disable-scroll="true" @touchstart="uploadScaleStart" @touchmove="uploadScaleMove" @touchend="uploadScaleEnd" canvas-id="handWriting">
		</canvas>
	</view>
</view>
</template>

<script>
	import SignaturePad from '../../utils/signature_pad.js'
	let signaturePad = {};
	let pix = 7;
	// let penColor = 'red';
	// let lineWidth = 0.6;
	export default {
		data() {
			return {
				penColor: '#e54d42',
				penColorIndex:1,
				lineWidth: 0.7,
				isEmpty: true,
				colorList:[{
					id:1,
					name:'墨黑',
					value:'#333333'
				},{
					id:2,
					name:'嫣红',
					value:'#e54d42'
				},{
					id:3,
					name:'天蓝',
					value:'#0081ff',
				}
				]
			}
		},
		mounted() {
        var ctx = uni.createCanvasContext('handWriting',this);
        const data = {
            devicePixelRatio: pix,
        };
        signaturePad = new SignaturePad(ctx, data);
		},
		methods: {
			changeColor(e){
				this.penColor = this.colorList[e.currentTarget.dataset.index].value
				this.penColorIndex = e.currentTarget.dataset.index
			},
		uploadScaleStart(e) {
		    const item = {
		        penColor: this.penColor,
		        lineWidth: this.lineWidth
		    };
		    signaturePad._handleTouchStart(e, item);
		},
		uploadScaleMove(e) {
		    signaturePad._handleTouchMove(e);
		},
		uploadScaleEnd: function(e) {
		    signaturePad._handleTouchEnd(e);
		    this.isEmpty = signaturePad.isEmpty();
		},
		retDraw: function() {
		    signaturePad.clear();
		    this.isEmpty = signaturePad.isEmpty();
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
		if (this.isEmpty) {
		    return false
		}
		const img = await this.onConfirm()
		this.$emit('getImg',img)	
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
			    canvasId: 'handWriting',
			    success: function(res) {
					self.modalShow = false
					self.hiddenLoading = false
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
    display: flex;
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
	margin-right: 10px;
}

.hand-left {
    height: 100vh;
    width: 110rpx;
	display: flex;
	flex-direction:column;
	justify-content: space-between;
}


.color-li{
	height:50rpx;
	width: 50rpx;
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
