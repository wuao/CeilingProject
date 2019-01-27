# CeilingProject
一个漂亮的React-native 的吸顶效果
置顶的原理
就是在将其在滚动的过程中在滚动到超过你所需要置顶的高度的时候 就将其设置为position: 'absolute',
比如 我的顶部布局有160 那么就是说我在滚动了到160之后 才会开始触发置顶操作  小于这个操作的滚动回调的高度 我们不会触发  这样我们会解决一部分的滚动事件回调的抖动操作在满足已经置顶的操作的之前  我们还需要分清楚触发滚动的方向  我们通过y轴的距离来判断  大于顶部的布局的时候 那么就是往上滑动 那么就是触发置顶操作
在触发之后 我们需要通过一个变量来记录 我们的是否已经置顶了 来避免触发重复置顶 这样会产生抖动效果 我们只需要随便给一个变量默认-1
触发之后 我们 设置为0  然后在触发还原操作之后 我们在将其重置为-1  就行了
如果说我们整个布局是大ScrollView的 包裹head 然后body 是一个列表那么 我推荐将ScrollView的 触发效果屏蔽掉 2个会产生冲突
这样的操作 最要就通FlatList本身的置顶操作来做 然后将其通过数据 布局来做 不同的item 渲染不同的view
     
     这个demo 在下载完成之后 你可以运行npm install 或者yarn 之后
     在执行下react-native link  会依赖一个react-native-gestrue-handler 在android端开as 的时候会看到
     
     
     
  ios 效果 
  
![](https://www.moretime.vip/upload/2019/01/ios.gif)
   android 效果 
   
![](https://www.moretime.vip/upload/2019/01/android.gif)

 android APk 下载
 ![](https://www.moretime.vip/upload/2019/01/app-release.apk)

 
   
