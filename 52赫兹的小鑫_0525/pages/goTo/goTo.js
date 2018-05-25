// map/map.js
Page({
  data: {
    markers: [{
      iconPath: "/resources/others.png",
      id: 0,
      latitude: 32.33816 - 0.0063 ,//shagnxia
      longitude: 119.403471 - 0.00550,//zhen zuoyi
      width: 50,
      height: 50
    }
    ],
    scale:16,
    selflongitude: 32.331918,
    selflatitude: 119.398035
  },
  getCenterLocation: function () {
    var that=this;
    this.mapCtx.getCenterLocation({
      success: function (res) {
        that.setData({
          'points[1].longitude': res.longitude,
          'points[1].latitude': res.longitude
        })
        wx.showToast({
          title: '成功',
          icon: 'success',
          duration: 2000
        })
        console.log(res);
      }
    })
  },
  onReady: function (e) {
    
    // 使用 wx.createMapContext 获取 map 上下文
    this.mapCtx = wx.createMapContext('myMap');
  },
  cstall:function(){
    wx.navigateTo({
      url: '../castall/castall',
    })
  },
  moveToLocation: function () {
    var that=this;
    this.mapCtx.moveToLocation()
    this.mapCtx.getCenterLocation({
      success: function (res) {
        that.setData({
          'points[1].longitude': res.longitude,
          'points[1].latitude': res.longitude
        })
        console.log(res);
        wx.showToast({
          title: '成功',
          icon: 'success',
          duration: 2000
        })
      }
    })
  },
  translateMarker: function () {
    this.mapCtx.translateMarker({
      markerId: 0,
      autoRotate: true,
      duration: 1000,
      destination: {
        latitude: 32.331918,
        longitude: 119.398035,
      },
      animationEnd() {
        console.log('animation end')
      }
    })
  }
})