//wx-drawer
const AV = require('../../utils/av-weapp-min.js');
const MENU_WIDTH_SCALE =0.5;
const FAST_SPEED_SECOND = 300;
const FAST_SPEED_DISTANCE = 5;
const FAST_SPEED_EFF_Y = 50;
var app = getApp()
Page({

  data: {
    indicatorDots: true,
    // 'http://www.tdxy.com.cn/uploadfile/2017/0421/20170421041518399.jpg',
    // 'http://www.tdxy.com.cn/uploadfile/2017/0421/20170421041031259.jpg',
    // 'http://www.tdxy.com.cn/uploadfile/2017/0421/20170421050052732.jpg'
    imgUrls: [],
    contentItem: ['http://p8cz5iv1n.bkt.clouddn.com/%E8%AE%A1%E7%AE%97%E6%9C%BA%E9%83%A8.jpg', 'http://p8cz5iv1n.bkt.clouddn.com/%E5%8A%9E%E5%85%AC%E4%B8%AD%E5%BF%83.jpg', 'http://p8cz5iv1n.bkt.clouddn.com/%E7%94%B5%E5%AD%90%E9%83%A83.jpg', 'http://p8cz5iv1n.bkt.clouddn.com/%E5%95%86%E5%8A%A1%E9%83%A8.jpg'],
    contentItem: [{
      id: 0,
      picture: 'http://p8cz5iv1n.bkt.clouddn.com/%E8%AE%A1%E7%AE%97%E6%9C%BA%E9%83%A8.jpg',
      text: '计算机部'
    }, {
      id: 1,
      picture: 'http://p8cz5iv1n.bkt.clouddn.com/%E5%8A%9E%E5%85%AC%E4%B8%AD%E5%BF%83.jpg',
      text: '办公中心'
    }, {
      id: 2,
      picture: 'http://p8cz5iv1n.bkt.clouddn.com/%E7%94%B5%E5%AD%90%E9%83%A83.jpg',
      text: '电子部'
    }, {
      id: 3,
      picture: 'http://p8cz5iv1n.bkt.clouddn.com/%E5%95%86%E5%8A%A1%E9%83%A8.jpg',
      text: '商务部'
    }, {
      id: 4,
      picture: 'http://p8cz5iv1n.bkt.clouddn.com/%E8%AE%A1%E7%AE%97%E6%9C%BA%E9%83%A82.jpg',
      text: '网络部'
    }, {
      id: 5,
      picture: 'http://img.zcool.cn/community/014ffa5a124e89a80121985c12fb26.jpg@1280w_1l_2o_100sh.jpg',
      text: '立即前往科协!'
    }
    ],
    bigimg: [{
      picture: 'http://www.tdxy.com.cn/uploadfile/2017/0421/20170421041622605.jpg',
      commets: '通达学院坐落于江苏扬州,这座文化古都,而扬州,人们最熟知的就是那句"烟花三月下扬州"了。',
      title: '校园风光'
    }, {
      picture: 'http://www.tdxy.com.cn/uploadfile/2017/0421/20170421042734674.jpg',
      commets: '图书馆称得上是校园的灵魂了,通达为学子们提供了一个藏书丰富,设施齐全的图书馆。',
      title: '图书馆'
    }, {
      picture: 'http://www.tdxy.com.cn/uploadfile/2017/0421/20170421045451779.jpg',
      commets: '通达的教室提倡无手机课堂,这样,通达学子便可以获得一个良好的学习氛围。',
      title: '教室'
    }, {
      picture: 'http://www.tdxy.com.cn/uploadfile/2017/0421/20170421043224126.jpg',
      commets: '作为一个理工科见长的学院,通达的实验室设施齐全。',
      title: '实验室'
    }],
    lefticon: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527023677119&di=2ebb1c6785fa64af83810a88a7b1e6d1&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F0b46f21fbe096b63b6d56a9209338744eaf8ac27.jpg',
    interval: 2000,
    duration: 500,
    autoplay: true,
    ui: {
      windowWidth: 0,
      menuWidth: 0,
      offsetLeft: 0,
      tStart: true
    }
  },
  onLoad() {
    try {
      let res = wx.getSystemInfoSync()
      this.windowWidth = res.windowWidth;
      this.data.ui.menuWidth = this.windowWidth * MENU_WIDTH_SCALE;
      this.data.ui.offsetLeft = 0;
      this.data.ui.windowWidth = res.windowWidth;
      this.setData({ ui: this.data.ui })
    } catch (e) {
    }
  },
  handlerStart(e) {
    let { clientX, clientY } = e.touches[0];
    this.tapStartX = clientX;
    this.tapStartY = clientY;
    this.tapStartTime = e.timeStamp;
    this.startX = clientX;
    this.data.ui.tStart = true;
    this.setData({ ui: this.data.ui })
  },
  handlerMove(e) {
    let { clientX } = e.touches[0];
    let { ui } = this.data;
    let offsetX = this.startX - clientX;
    this.startX = clientX;
    ui.offsetLeft -= offsetX;
    if (ui.offsetLeft <= 0) {
      ui.offsetLeft = 0;
    } else if (ui.offsetLeft >= ui.menuWidth) {
      ui.offsetLeft = ui.menuWidth;
    }
    this.setData({ ui: ui })
  },
  handlerCancel(e) {
    // console.log(e);
  },
  handlerEnd(e) {
    this.data.ui.tStart = false;
    this.setData({ ui: this.data.ui })
    let { ui } = this.data;
    let { clientX, clientY } = e.changedTouches[0];
    let endTime = e.timeStamp;
    //快速滑动
    if (endTime - this.tapStartTime <= FAST_SPEED_SECOND) {
      //向左
      if (this.tapStartX - clientX > FAST_SPEED_DISTANCE) {
        ui.offsetLeft = 0;
      } else if (this.tapStartX - clientX < -FAST_SPEED_DISTANCE && Math.abs(this.tapStartY - clientY) < FAST_SPEED_EFF_Y) {
        ui.offsetLeft = ui.menuWidth;
      } else {
        if (ui.offsetLeft >= ui.menuWidth / 2) {
          ui.offsetLeft = ui.menuWidth;
        } else {
          ui.offsetLeft = 0;
        }
      }
    } else {
      if (ui.offsetLeft >= ui.menuWidth / 2) {
        ui.offsetLeft = ui.menuWidth;
      } else {
        ui.offsetLeft = 0;
      }
    }
    this.setData({ ui: ui })
  },
  handlerPageTap(e) {
    let { ui } = this.data;
    if (ui.offsetLeft != 0) {
      ui.offsetLeft = 0;
      this.setData({ ui: ui })
    }
  },
  handlerAvatarTap(e) {
    let { ui } = this.data;
    if (ui.offsetLeft == 0) {
      ui.offsetLeft = ui.menuWidth;
      this.setData({ ui: ui })
    }
  },







  // page/one/index.js


  readArticle: function (e) {
    var $data = e.currentTarget.dataset;
    console.log($data.id);
    if ($data.id == 5) {
      wx.navigateTo({
        url: '../goTo/goTo'
      })
    }
  },



  onReady: function () {
    var that = this;
    new AV.Query('Icon')
      .get('5b0168909f54543b31b3263b')
      .then(datas => this.setData({ imgUrls: datas.attributes.urls }))
      .catch(console.error);
  },
  musicOn: function () {
    wx.playBackgroundAudio({
      dataUrl: 'http://p8cz5iv1n.bkt.clouddn.com/%E9%BA%BB%E6%9E%9D%E5%87%86%20-%20hope.mp3',
    })
  },





})
