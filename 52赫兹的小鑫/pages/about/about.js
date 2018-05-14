// pages/about/about.js
Page({

  data: {
    version:"1.01.0515",
    count:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },
  details: function () {
    var number=this.data.count;
    number++;
    this.setData({
        count:number
    })
    if(number<5){
      var left=5-number;
      wx.showToast({
        title: '再点击头像'+left+'次进入日志',
        icon: 'none',
        duration:300
         
      })
    }
    if(number==5){
      wx.navigateTo({
        url: '../updatainfo/updatainfo',
       
      })
    }
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})