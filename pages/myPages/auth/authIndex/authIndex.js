// pages/myPages/auth/authIndex/authIndex.js
wx.cloud.init();
Page({
  data: {
    //判断小程序的API，回调，参数，组件等是否在当前版本可用。
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onLoad: function () {
    this.getOpenid();
    var that = this;
    // 查看是否授权
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: function (res) {
              //从数据库获取用户信息
              //这里我使用queryUsreInfo函授获取信息，你要换成你的，或者不用
              //that.queryUsreInfo();
              //用户已经授权过
              wx.switchTab({
                url: '/pages/user/card/card'
              })
            }
          });
        }
      }
    })
  },

  getOpenid() {
    let that = this;
    wx.cloud.callFunction({
      name: 'getOpenId',
      complete: res => {
        console.log('云函数获取到的openid: ', res.result.openId)
        var openid = res.result.openId;
      }
    })
  },

  test:function(){
    // wx.requestSubscribeMessage({
    //   tmplIds: ['6L6nNIol4mojlPn3JH_Dvqdi7I51Y0k1WyK2U8SsCXY'],
    //   success(res) { console.log('测试',res);}
    // })
    wx.cloud.callFunction({
      name: 'getUserInfo',
      complete: res => {
        console.log('消息发送成功: ',res)
      }
    })
  },
  bindGetUserInfo: function (e) {
    if (e.detail.userInfo) {
      //用户按了允许授权按钮
      var that = this;
      //授权成功后，跳转进入小程序首页
      wx.switchTab({
        url: '/pages/index/index'
      })
    } else {
      //用户按了拒绝按钮
      wx.showModal({
        title: '警告',
        content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入!',
        showCancel: false,
        confirmText: '返回授权',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击了“返回授权”')
          }
        }
      })
    }
  },
})