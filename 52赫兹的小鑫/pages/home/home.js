Page({
  data: {
    imageurl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526299469691&di=dcf79908f720bac47099639a268b9acd&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F15%2F41%2F05%2F36e58PICfmM_1024.png',
    animationData: {}
  },
  onShow: function () {
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
    })

    this.animation = animation

    this.setData({
      animationData: animation.export()
    })

    setTimeout(function () {
      animation.scale(3,3).step()
      animation.scale(2,2).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 500)

    

    },
    nav: function () {
      wx.switchTab({
        url: '../index/index'
      })
  }
  
})

// rotateAndScale: function () {
//   // 旋转同时放大
//   this.animation.scale(2, 2).step()
//   this.setData({
//     animationData: this.animation.export()
//   })
// },
// rotateThenScale: function () {
//   // 先旋转后放大
//   this.animation.rotate(45).step()
//   this.animation.scale(2, 2).step()
//   this.setData({
//     animationData: this.animation.export()
//   })
// },
// rotateAndScaleThenTranslate: function () {
//   // 先旋转同时放大，然后平移
//   this.animation.rotate(45).scale(2, 2).step()
//   this.animation.translate(100, 100).step({ duration: 1000 })
//   this.setData({
//     animationData: this.animation.export()
//   })
// }