const AV = require('../../utils/av-weapp-min.js');
Page({
  onPullDownRefresh: function () {
    wx.stopPullDownRefresh()
    wx.showToast({
      title: '加载成功',
      icon:"none"
    })
  },
  data: {
    dataform:[]
  },
  onReady: function () {
    var that=this;
    new AV.Query('TestObject')
      .descending('createdAt')
      .find()
      .then(dataform => this.setData({ dataform }))
      .catch(console.error);
      setTimeout(function(){
        console.log(that.data.dataform);
      },1000)
  },
})