const AV = require('../../../utils/av-weapp-min.js');


Page({
  data: {
    doubticon:'http://p8qebi3rc.bkt.clouddn.com/doubt.png',
    answericon:'http://p8qebi3rc.bkt.clouddn.com/console.png',
    doubturl:'',
    // DoubtAndAnswer: [],
    detail_all:[],
    doubts:0
  },
  NavigateToAnswer:function(event){
      wx.navigateTo({
        url: '../answer/answer?id='+event.currentTarget.dataset.id,
        success: function(res) {},
        fail: function(res) {},
        complete: function(res) {},
      })
  },
 onReady:function(){
   var _this=this;
   new AV.Query('doubtAndAnswer')
     .ascending('ID')
     .find()
     .then(data => this.setData({detail_all:data }))
     .catch(console.error);
     setTimeout(function(){
        _this.setData({doubts:_this.data.detail_all.length+1})
     },300)
 },
 ask:function(){
   wx.redirectTo({
     url: '../ask/ask?id='+this.data.doubts,
   })
 }
})