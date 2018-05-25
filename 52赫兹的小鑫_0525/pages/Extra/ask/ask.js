const AV = require('../../../utils/av-weapp-min.js');
Page({
  data:{
    count:0,
    content:'',
    url:''
  },
  formSubmit:function(e){
    console.log(e.detail.value.name);
    var _this=this;
    // this.setData({content:e.detail.value})
    var DoubtAndAnswer =new AV.Object.extend('doubtAndAnswer');
    var doubt = new DoubtAndAnswer();
    doubt.set('ID',_this.data.count);
    doubt.set('doubt',e.detail.value.name);
    doubt.save().then(function (doubt) {
      _this.setData({url:doubt.id}) 
    }, function (error) {
      console.error('Failed to create new object, with error message: ' + error.message);
    });
  },
  formReset:function(){
    console.log(this.data.url);
  },
  onLoad:function(option){
    this.setData({count:option.id})
  },
  return:function(){
    wx.redirectTo({
      url: '../doubt/doubt',
    })
  }
})