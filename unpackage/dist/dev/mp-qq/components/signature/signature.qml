<view class="wrapper"><view class="cu-custom bg-gray" style="{{'height:'+(CustomBar+'px')+';'}}"><view class="flex align-center justify-between margin-top-xs padding-left" style="{{'position:absolute;'+('width:'+(Custom.left+'px')+';')+('top:'+(Custom.top+'px')+';')}}"><view class="flex align-center"><view data-event-opts="{{[['tap',[['navBack']]]]}}" class="cuIcon-back text-gray" style="font-size:40rpx;" bindtap="__e"></view><view data-event-opts="{{[['tap',[['e0',['$event']]]]]}}" class="margin-left-sm" bindtap="__e"><image style="width:40rpx;height:40rpx;position:relative;" src="../../static/brush.png"></image><view hidden="{{!(showIndex===0)}}" style="border-bottom:4rpx solid #007AFF;"></view></view><view data-event-opts="{{[['tap',[['e1',['$event']]]]]}}" class="margin-left-sm" bindtap="__e"><image style="width:40rpx;height:40rpx;position:relative;" src="../../static/text.png"></image><view hidden="{{!(showIndex===1)}}" style="border-bottom:4rpx solid #007AFF;"></view></view></view><view><view hidden="{{!(showIndex===0)}}" class="flex"><block qq:for="{{colorList}}" qq:for-item="item" qq:for-index="index" qq:key="id"><view class="{{['color-li margin-left-sm',(penColorIndex==index)?'li-color':'']}}" style="{{'background-color:'+(item.value)+';'}}" data-index="{{index}}" data-event-opts="{{[['tap',[['changeColor',['$event']]]]]}}" bindtap="__e"></view></block></view><view hidden="{{!(showIndex===1)}}" class="flex"><block qq:for="{{lineWidthList}}" qq:for-item="item" qq:for-index="index" qq:key="id"><view class="{{['color-li margin-left-sm',(lineWidthIndex==index)?'li-color':'']}}" style="{{'background-color:'+(item.value)+';'}}" data-index="{{index}}" data-event-opts="{{[['tap',[['changeLineWidth',['$event']]]]]}}" bindtap="__e"><text class="text-xs text-gray flex justify-center align-center">{{item.name}}</text></view></block></view></view><view class="margin-right"><image class="margin-right-lg" style="width:40rpx;height:40rpx;" src="../../static/Rubber.png" data-event-opts="{{[['tap',[['retDraw',['$event']]]]]}}" bindtap="__e"></image><image style="width:45rpx;height:45rpx;" src="../../static/download.png" data-event-opts="{{[['tap',[['subCanvas',['$event']]]]]}}" bindtap="__e"></image></view></view></view><view class="hand-center"><canvas class="hand-writing" disable-scroll="{{true}}" canvas-id="__signature__canvas" data-event-opts="{{[['touchstart',[['uploadScaleStart',['$event']]]],['touchmove',[['uploadScaleMove',['$event']]]],['touchend',[['uploadScaleEnd',['$event']]]]]}}" bindtouchstart="__e" bindtouchmove="__e" bindtouchend="__e"></canvas></view></view>