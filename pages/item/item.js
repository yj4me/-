const douban = require('../../lib/douban.js');
// pages/item/item.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loading:true,
    book:{},
    // 是否折叠
    is_ellipsis:true,
    author_e:true

  },
  // 在wxml中绑定事件后，通过data-hi="参数"的方式传递
  expand(who) {
    // console.log(who.currentTarget.dataset.hi);
    var tag = who.currentTarget.dataset.hi;
   
  //  内容简介
    if (tag === 'is_ellipsis'){
       var value = !this.data.is_ellipsis;
       this.setData({ is_ellipsis: value})
    } 
    // 作者简介
    else if (tag === 'author_e'){
      var value = !this.data.author_e;
      this.setData({ author_e: value })
    }
   
   
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options.id);
    douban.findOne(options.id)
      .then(d => {
        this.setData({ book: d, loading: false})
      })
      .catch(e => {
        this.setData({ book: {}, loading: false })
        console.error(e)
      })
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