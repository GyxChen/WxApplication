// pages/updatainfo/updatainfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count:0,
    imageurl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527020603393&di=df29c9f60e06ffe7d1f829fae299959b&imgtype=0&src=http%3A%2F%2Fi2.hdslb.com%2Fbfs%2Farchive%2F30bf44b71554d0e39fcb0e0444ed9c7a6d317a99.jpg',
    text:[
      {
        version:'0.1.0512',
        detail:'第一个版本(测试版),仅仅含有有主页和注册'
      },{
        version:'0.1.0513',
        detail:'第二个版本(测试版),针对第一个版本的小修小补'
      },{
        version:'1.0.0514',
        detail:'第一个大版本更新(正式版),添加了更多页面,修改了BUG,多添加了两项表单信息'
      },{
        version:'1.01.0515',
        detail:'该版本更新了一个欢迎页面,添加日志查看功能,美化了科协全部页面中的背景音乐'
      },{
        version:'1.01.0516',
        detail:'该版本新添加了注册表检查功能,美化了报名页,人性化了欢迎页'
      },{
        version:"1.02.0518",
        detail:'该版本更新了一个地图导航;和管理员页面(多次点击狗狗图像进入)'
      },{
        version:'2.00.0520',
        detail:'版本迎来重大更新(源码已上传),首页的swiper更新成动态的页面了(使用我的另外一款应用,可以实时改变页面的显示内容),搭建了更加有效的服务器,而不仅仅保存表单数据,当所有页面更新成动态后,将发布3.0版本,并会将源码上传至github,届时期待'
      },{
        version:'2.01.0523(未公布)',
        detail:'版本更新,首页加入了侧滑栏,并且提供了上滑加载功能,动态页面暂时不做更新,直到完善了策划栏为止,关于侧滑栏的代码来自网络,但最后通过自己的修改才得以使用'
      },{
        version:'(目前版本)2.02.0524',
        detail:'加入策划栏,目前问与答正在施工中,大家可以再问与答专区尝鲜,并且可以直接留言给我了!!!!'
      },{
        version:'2.03.0525',
        detail:'啊啊啊啊!!!!问与答终于施工完毕了,欢迎大家踊跃发言哦(源码已经上传)'
      }
    ]
  },

  tap:function(){
    var thatcount=this.data.count;
    thatcount++;
    this.setData({count:thatcount})
    if(thatcount>=5){
      wx.navigateTo({
        url: '../admin/admin',
      })
    }
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