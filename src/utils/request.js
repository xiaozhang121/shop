/*
  封装一个通用的接口调用模块
*/
// export default () => {
//   // return的函数本质上就是Vue插件
//   return (Vue) => {
//     Vue.prototype.request = () => {
//       // 这里实现调用接口的动作
//       console.log('request')
//     }
//   }
// }

// 采用官方规范的方式开发插件
export default {
  install: (Vue, options) => {
    Vue.prototype.$request = async ({path}) => {
      // 实现发送请求
      // uni-app对部分小程序原生API进行了封装，可以支持Promise
      const [error, res] = await uni.request({
        url: options.baseURL + path
      })
      // 返回异步接口的结果
      return res.data
    }
  }
}


