// login/login.js
const AV = require('../../utils/av-weapp-min.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    errorimage: ['','','','','',''],
    errorurl: "http://p8qebi3rc.bkt.clouddn.com/error.png"
  },
  formReset:function(){
    this.setData({
      errorimage:''
    })
  },
  formSubmit: function (e) {
    console.log(e);
    var TestObject = AV.Object.extend('TestObject');
    var testObject = new TestObject();
    
    var that=e.detail.value;
    
    if(that.name.length>=2&&that.number.length==8&&that.firstwill&&that.secondwill&&that.qq.length>6&&that.phone.length==11){
      console.log("数据有用");
      testObject.save({
        name: e.detail.value.name,
        numner: e.detail.value.number,
        firstwill: e.detail.value.firstwill,
        secondwill: e.detail.value.secondwill,
        qq: e.detail.value.qq,
        phone: e.detail.value.phone
      })
      wx.showToast({
        title: '成功',
        icon: 'success',
        duration: 1500
      })
      this.setData({
        errorimage: ''
      })
    }else{
      wx.showToast({
        title: '请认真填写数据,重置后再次提交',
        icon:"none",
        duration: 1500
      })
      if (that.name.length < 2){
        this.setData({"errorimage[0]" : this.data.errorurl})
      }
      if (that.number.length != 8){
        this.setData({ "errorimage[1]": this.data.errorurl })
      }
      if (!that.firstwill){
        this.setData({ "errorimage[2]": this.data.errorurl })
      }
      if(!that.secondwill){
        this.setData({ "errorimage[3]": this.data.errorurl })
      }
      if (that.qq.length <= 6){
        this.setData({ "errorimage[4]": this.data.errorurl })
      }
      if (that.phone.length != 11) {
        this.setData({ "errorimage[5]": this.data.errorurl })
      }
    }
    
  }
    
})
// var TestObject = AV.Object.extend('TestObject');
// var testObject = new TestObject();
// testObject.save({
//   words: 'Hello World!'
// }).then(function (object) {
//   alert('LeanCloud Rocks!');
// })

//之前的文稿
// wx.reportAnalytics('my_login', {
//   mylogin_name: e.detail.value.name,
//   mylogin_number: e.detail.value.number,
//   mylogin_firstwill: e.detail.value.firstwill,
//   mylogin_secondwill: e.detail.value.secondwill,
// });