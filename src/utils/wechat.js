import api from '@/api'

let weixinConfig = (share, data) => {
  // 微信配置
  wx.config({
    // debug: true,
    appId: data.app_id,
    timestamp: data.timestamp,
    nonceStr: data.nonceStr,
    signature: data.sign,
    jsApiList: [
      // 权限列表
    ]
  })
  let info = {
    title: share.title || '领轻松到家超值代金券，金额由你定！',
    desc: share.content || '曾志伟代言，业内最安全专业到家服务！最抵保养优惠重出江湖，新人特享不限额！早约早划算！',
    link: share.url,
    imgUrl: share.image_url || 'http://pic.uyess.com/product/224c14541613ef4485b7e7e1a3ca338a.jpg',
    success: function () {
      // alert('确认分享后执行的回调函数')
    }
  }
  wx.ready(() => {
    // 执行
    wx.onMenuShareTimeline(info)
    wx.onMenuShareAppMessage(info)
  })
}

export default (share, callback) => {
  let params = {
    url: encodeURIComponent(location.href.split('#')[0])
  }

  if (window.isWeixin) {
    api.getWXShare.get(params).then(res => {
      let data = res.data.data
      weixinConfig(share, data)
      callback && callback()
    })
  }
}
