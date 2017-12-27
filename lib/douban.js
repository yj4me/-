// 封装网络请求
const API_URL = 'https://m.douban.com/rexxar/api/v2/subject_collection/'
// const Promise = require('./bluebird')
function fetchApi(type, params) {
  return new Promise((resolve, reject) => {
    wx.request({
      // url的写法
      url: `${API_URL}${type}/items`,
      data: Object.assign({}, params),
      header: { 'Content-Type': 'json' },
      success: resolve,
      fail: reject
    })
  })
}

function getOne(id){
  return new Promise((resolve, reject) => {
    wx.request({
      // url的写法
      // https://api.douban.com/v2/
      url: `https://api.douban.com/v2/book/${id}`,
      data: Object.assign({}),
      header: { 'Content-Type': 'json' },
      success: resolve,
      fail: reject
    })
  })
}

module.exports = {
  find(type, callback = 'jsonp2', page = 1, count = 20, search = '') {
    // ?os=android&callback=jsonp2&start=0&count=8&loc_id=0&_=0
    const params = { os: "android", callback: callback, start: (page - 1) * count, count: count,loc_id:0, _:0 };
    return fetchApi(type, search ? Object.assign(params, { q: search }) : params)
      .then(res => {
        
        var result = res.data;
        // 处理数据
        var newResult = result.substr(8, result.length - 10);
        // console.log("打印数据＝" + newResult);
      
        return JSON.parse(newResult);
         
        
      })
  },
  findOne(id) {
    // /v2/book/:id
    return getOne(id).then(res =>{
      // console.log(res.data);
      return res.data;
    })
  }
}