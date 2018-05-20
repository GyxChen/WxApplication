//index.js
//获取应用实例
const AV = require('../../utils/av-weapp-min.js');
Page({
  data: {
    indicatorDots: true,
    // 'http://www.tdxy.com.cn/uploadfile/2017/0421/20170421041518399.jpg',
    // 'http://www.tdxy.com.cn/uploadfile/2017/0421/20170421041031259.jpg',
    // 'http://www.tdxy.com.cn/uploadfile/2017/0421/20170421050052732.jpg'
    imgUrls: [],
    contentItem: ['http://p8cz5iv1n.bkt.clouddn.com/%E8%AE%A1%E7%AE%97%E6%9C%BA%E9%83%A8.jpg', 'http://p8cz5iv1n.bkt.clouddn.com/%E5%8A%9E%E5%85%AC%E4%B8%AD%E5%BF%83.jpg', 'http://p8cz5iv1n.bkt.clouddn.com/%E7%94%B5%E5%AD%90%E9%83%A83.jpg', 'http://p8cz5iv1n.bkt.clouddn.com/%E5%95%86%E5%8A%A1%E9%83%A8.jpg'],
    contentItem:[{
      id:0,
      picture:'http://p8cz5iv1n.bkt.clouddn.com/%E8%AE%A1%E7%AE%97%E6%9C%BA%E9%83%A8.jpg',
      text:'计算机部'},{
        id:1,
        picture:'http://p8cz5iv1n.bkt.clouddn.com/%E5%8A%9E%E5%85%AC%E4%B8%AD%E5%BF%83.jpg',
        text:'办公中心'
      },{
        id:2,
        picture:'http://p8cz5iv1n.bkt.clouddn.com/%E7%94%B5%E5%AD%90%E9%83%A83.jpg',
        text:'电子部'
      },{
        id:3,
        picture:'http://p8cz5iv1n.bkt.clouddn.com/%E5%95%86%E5%8A%A1%E9%83%A8.jpg',
        text:'商务部'
      },{
        id:4,
        picture:'http://p8cz5iv1n.bkt.clouddn.com/%E8%AE%A1%E7%AE%97%E6%9C%BA%E9%83%A82.jpg',
        text:'网络部'
      },{
        id:5,
        picture:'http://img.zcool.cn/community/014ffa5a124e89a80121985c12fb26.jpg@1280w_1l_2o_100sh.jpg',
        text:'立即前往科协!'
      }
      ],
    bigimg: [{
      picture:'http://www.tdxy.com.cn/uploadfile/2017/0421/20170421041622605.jpg',
      commets:'通达学院坐落于江苏扬州,这座文化古都,而扬州,人们最熟知的就是那句"烟花三月下扬州"了。',
      title:'校园风光'
      },{ 
        picture: 'http://www.tdxy.com.cn/uploadfile/2017/0421/20170421042734674.jpg', 
        commets: '图书馆称得上是校园的灵魂了,通达为学子们提供了一个藏书丰富,设施齐全的图书馆。', 
      title: '图书馆' 
      },{ 
        picture: 'http://www.tdxy.com.cn/uploadfile/2017/0421/20170421045451779.jpg', 
        commets: '通达的教室提倡无手机课堂,这样,通达学子便可以获得一个良好的学习氛围。', 
      title: '教室' 
      },{ 
        picture: 'http://www.tdxy.com.cn/uploadfile/2017/0421/20170421043224126.jpg', 
        commets: '作为一个理工科见长的学院,通达的实验室设施齐全。', 
      title: '实验室' 
      }],
    interval: 5000,
    duration: 500,
    autoplay: true
  },
  readArticle: function (e) {
    var $data = e.currentTarget.dataset; 
    console.log($data.id);
    if($data.id==5){
      wx.navigateTo({
        url: '../goTo/goTo'
      })
    }
  },


onReady:function(){
  var that = this;
  new AV.Query('Icon')
    .get('5b0168909f54543b31b3263b')
    .then(datas => this.setData({ imgUrls: datas.attributes.urls }))
    .catch(console.error);
},
  musicOn:function(){
    wx.playBackgroundAudio({
      dataUrl: 'http://p8cz5iv1n.bkt.clouddn.com/%E9%BA%BB%E6%9E%9D%E5%87%86%20-%20hope.mp3',
    })
  }
})
