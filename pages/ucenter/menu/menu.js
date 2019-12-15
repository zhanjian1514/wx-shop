var util = require('../../../utils/util.js');
var api = require('../../../config/api.js');


Page({

  /**
   * 页面的初始数据
   */
  data: {
    manuList:[],
    titleList:[],
    scrollLeft:180,
  },

  getMenuData: function () {
    const that = this;
    util.request(api.GetMenuList, {}).then(function (res) {
      if (res.errno === 0) {
        const data = res.data.result;
        let titleList = [];
        let itemList = [];
        data.forEach((item)=>{
          if (titleList.indexOf(item.typeName) === -1){
            titleList.push(item.typeName);
          }
        });
        titleList.forEach((item)=>{
          const dataItem = {};
          const objArr = [];
          data.forEach((item2)=>{
            if (item2.typeName === item){
              objArr.push(item2);
            }
          })
          dataItem['key'] = item;
          dataItem['value'] = objArr;
          itemList.push(dataItem);
        });
        that.setData({
          manuList: itemList,
          titleList,
        });
        console.log('11111',that.data.manuList);
        // that.setData({
        //   brand: res.data.result
        // });
      }
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // constle.log('111111',lodash.isEqual(1,1));
    this.getMenuData();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})