const douban = require('../../lib/douban.js');
// pages/splash/splash.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: true,
    autoplay: false,
    books: [],
    loading: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // params:type,jsonp,page,count
    douban.find('book_nonfiction','jsonp2', 1, 4)
      .then(d => this.setData({ books: d.subject_collection_items, loading: false }))
      .catch(e => {
        console.error(e)
        this.setData({ books: [], loading: false })
      })
  },
  // 自定义的按钮点击事件
  start() {
    // TODO: 访问历史的问题
    wx.switchTab({ url: '../home/home' })
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