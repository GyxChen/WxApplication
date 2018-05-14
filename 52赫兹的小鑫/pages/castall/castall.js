// pages/castall/castall.js
Page({

  /**
   * 页面的初始数据
   */
  onReady: function (e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio')
    this.audioCtx.setSrc('http://p8cz5iv1n.bkt.clouddn.com/%E4%B8%BB%E9%A2%98%E9%9F%B3%E4%B9%90.mp3')
  },
  data: {
    
    pictures:[
      'http://p8cz5iv1n.bkt.clouddn.com/%E7%A7%91%E5%8D%8F%E5%85%A8%E5%91%98.jpg',
      'http://p8cz5iv1n.bkt.clouddn.com/%E8%AE%A1%E7%AE%97%E6%9C%BA%E9%83%A8.jpg',
      'http://p8cz5iv1n.bkt.clouddn.com/%E8%AE%A1%E7%AE%97%E6%9C%BA%E9%83%A82.jpg',
      'http://p8cz5iv1n.bkt.clouddn.com/%E7%94%B5%E5%AD%90%E9%83%A8.jpg',
      'http://p8cz5iv1n.bkt.clouddn.com/%E7%94%B5%E5%AD%90%E9%83%A82.jpg',
      'http://p8cz5iv1n.bkt.clouddn.com/%E7%94%B5%E5%AD%90%E9%83%A83.jpg',
      'http://p8cz5iv1n.bkt.clouddn.com/%E5%95%86%E5%8A%A1%E9%83%A8.jpg',
      'http://p8cz5iv1n.bkt.clouddn.com/%E5%95%86%E5%8A%A1%E9%83%A82.jpg',
      'http://p8cz5iv1n.bkt.clouddn.com/%E5%8A%9E%E5%85%AC%E4%B8%AD%E5%BF%83.jpg'
    ],
    src: ''
  },
  audioPlay: function () {
    this.audioCtx.play()
  },
  audioPause: function () {
    this.audioCtx.pause()
  },
  audio14: function () {
    this.audioCtx.seek(14)
  },
  audioStart: function () {
    this.audioCtx.seek(0)
  }
})

 