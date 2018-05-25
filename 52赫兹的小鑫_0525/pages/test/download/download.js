const AV=require('../../../utils/av-weapp-min.js');
// pages/test/download/download.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    details:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onReady: function () {
    var that = this;
    new AV.Query('_File')
      .descending('createdAt')
      .find()
      .then(details => this.setData({ details }))
      .catch(console.error);
      setTimeout(function(){
            console.log(that.data.details);
      },1000)
  }
})