const douban = require('../../lib/douban.js');
// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    subtitle:'',
    page: 1,
    size: 20,
    type: '',
    loading: true,
    hasMore: true,
  },
  loadMore() {
    if (!this.data.hasMore) return
    // 先将hasMore设置为false
    this.data.hasMore = false;
    this.setData({ subtitle: '加载中...', loading: true })
    douban.find(this.data.type, 'jsonp1', this.data.page++, this.data.size)
      .then(d => {
        if (d.subject_collection_items.length) {
          
          this.setData({ subtitle: this.data.title, books: this.data.books.concat(d.subject_collection_items), hasMore: true, loading: false })
        } else {
          this.setData({ subtitle: this.data.title, hasMore: false, loading: false })
        }

      
      })
      .catch(e => {
        console.error(e)
        this.setData({ books: [], loading: false })
      })
   
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.type = options.type || this.data.type
    this.data.title = options.title || this.data.title
    // console.log(options);
    douban.find(this.data.type, 'jsonp1', this.data.page++, this.data.size)
      .then(d =>{
        if (d.subject_collection_items.length === this.data.size) {
          this.setData({ subtitle: this.data.title, books: d.subject_collection_items, loading: false })
        } else {
          this.setData({ subtitle: this.data.title, hasMore: false, loading: false })
        }

      })
      .catch(e => {
        console.error(e)
        this.setData({ books: [], loading: false })
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