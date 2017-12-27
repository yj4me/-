const douban = require('../../lib/douban.js');
// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    movies: [],
    loading: true,
    // 发现好书
    finds:[
      {
        id:'10519369',
        name: "万物生光辉"
      },
      {
        id: '4826530',
        name: "我亲爱的甜橙树"
      },
      {
        id: '25762009',
        name: "教父"
      },
      {
        id: '6789605',
        name: "树上的男爵"
      },
      {
        id: '25976544',
        name: "故事"
      },
      {
        id: '2215160',
        name: "神秘岛（全三册）"
      },
      {
        id: '7064370',
        name: "罗马人的故事2"
      }
    ],
    colorArr: ["#40a851", "#ca3547", "#fdab3e", "#fc4359", "#2b86e5","#000", "#40a851"]
    
  },
  randomColor(arr){
    return Math.floor(Math.random()*arr.length);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    douban.find('book_fiction','jsonp1', 1, 5)
      .then(d => this.setData({ books: d.subject_collection_items, loading: false}))
      .catch(e => {
        console.error(e)
        this.setData({ books: [], loading: false })
      })
  },
  // 定义方法（获取数组中的随机元素）
  randomColor: function (arr) {
    console.log(arr[Math.floor(Math.random() * arr.length)]);
    return arr[Math.floor(Math.random() * arr.length)];
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