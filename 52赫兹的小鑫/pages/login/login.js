// login/login.js
const AV = require('../../utils/av-weapp-min.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {
      name: null,
      usernumber: null,
      firstwill: null,
      secondwill: null,
      qq:null,
      phone:null
    }
  },
  formReset:function(){
    console.log(1);
  },
  formSubmit: function (e) {
    console.log(e);
    var TestObject = AV.Object.extend('TestObject');
    var testObject = new TestObject();
    testObject.save({
      name: e.detail.value.name,
      numner:e.detail.value.number,
      firstwill:e.detail.value.firstwill,
      secondwill:e.detail.value.secondwill,
      qq:e.detail.value.qq,
      phone:e.detail.value.phone
    })
    wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 1500
    })
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