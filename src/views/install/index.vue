<template>
  <div>
    业务首页
    <img src="../../assets/img/banner@2x.png"/>
  </div>
</template>

<script>
// import WeixinShare from '@/utils/wechat'
import api from '@/api'

export default {
  data () {
    return {}
  },
  created () {
    api.getCityList.get()
      .then(res => {
        console.log(res)
      })
  }
//  route: {
//    data () {
//      console.log(2)
//      // 微信分享
//      WeixinShare({
//        title: '民生权益日，家电清洗免费送~',
//        content: '每月新增达标客户免费兑换权益哦~',
//        url: location.origin + location.pathname,
//        image_url: location.origin + location.pathname
//      })
//    }
//  }
}
</script>

<style>

</style>
