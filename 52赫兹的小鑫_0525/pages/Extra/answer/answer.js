const AV=require('../../../utils/av-weapp-min.js');

Page({
  //这里面的temp和inputvalue是有对应关系的,小弟不才,只能做到这里了.欢迎大佬来修改
  data:{
    url:'',
    remarkcount: 1,
    Event: [],
    inputValue: '...',
    doubt: null,
    answer: [],
    temp: null,
    isinputsuccess: false,
    pageid:0
  },
  onLoad:function(option){
    var that=this;
   //console.log("跳转参数"+option.id);
   this.setData({pageid:option.id})

   var that=this;
    new AV.Query('doubtAndAnswer')
      .ascending('ID')
      .find()
      .then(data => this.setData({ Event: data }))
      .catch(console.error)
  },

  onReady: function () {

    var that=this;
    setTimeout(function () {
      var _this = that;
      //console.log(_this.data.Event);
      console.log("跳转参数[2]" + _this.data.pageid);
      var temp = _this.data.Event[_this.data.pageid-1];
      console.log(temp);//文件已经真的获取到了
      var Url = temp.id;
      _this.setData({ url: Url })

      setTimeout(function () {
        var str = _this.data.url + '';
        new AV.Query('doubtAndAnswer')
          .get(str)
          .then(event => _this.setData({ answer: event.attributes.remark }))
          .catch(console.error);
      }, 500)
    }, 500)
  },
  remarkpro:function(){
    var that=this;
   if(that.data.remarkcount>0){
    //  console.log(that.data.url);
     var doubtAndAnswer = AV.Object.createWithoutData('doubtAndAnswer', that.data.url);
     doubtAndAnswer.addUnique('remark', that.data.temp);
     doubtAndAnswer.save();
      that.setData({
        inputValue:that.data.temp,
        remarkcount:0
        })
   }else{
     wx.showToast({
       title: '你好,只能在一次评论一次哦!',
       icon:'none'
     })
   }
   that.setData({isinputsuccess:true})
  },

  bindKeyInput: function (e) {
    var that=this;
    this.setData({
      temp:e.detail.value
    })
    if(this.data.isinputsuccess){
      that.setData({isinputsuccess:false})
      return ''
    }
  },
})