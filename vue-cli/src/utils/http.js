import axios from 'axios'
import qs from 'qs'
let baseUrl = 'http://47.98.163.21/'
// axios 配置 changeRecommend
// axios.defaults.timeout = 5000;
// axios.defaults.baseURL = 'https://api.github.com';
// http response 拦截器
axios.interceptors.request.use(
  config => {
    // config.data = JSON.stringify(config.data)
    config.headers = {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
    return config
  }
)
function checkStatus (response) {
  // loading
  // 如果http状态码正常，则直接返回数据
  if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
    // console.log(response.data)
    return response.data
    // 如果不需要除了data之外的数据，可以直接 return response.data
  }
  // 异常状态下，把错误信息返回去
  return {
    status: -404,
    msg: '网络异常'
  }
}

// function checkCode (res) {
//   // 如果code异常(这里已经包括网络错误，服务器错误，后端抛出的错误)，可以弹出一个错误提示，告诉用户
//   if (res.status === -404) {
//     alert(res.msg)
//   }
//   if (res.data && (!res.data.success)) {
//     // console.log(res.data.error_msg)
//   }
//   return res
// }

export default {
  post (url, data, fn) {
    return axios({
      method: 'post',
      baseURL: baseUrl,
      url,
      data: qs.stringify(data),
      timeout: 10000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        // 'Content-Type': 'application/x-www-form-urlencoded',
        'api-version': '1.0',
        'ServerDesc': 'H5'
      }
    }).then(
      (response) => {
        // console.log(response)
        return fn(checkStatus(response))
      }
    )
  },
  Newget (url, params, fn) {
    return axios({
      method: 'get',
      baseURL: baseUrl,
      url,
      params, // get 请求时带的参数
      timeout: 10000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        // 'Content-Type': 'application/x-www-form-urlencoded',
        'api-version': '1.0',
        'ServerDesc': 'H5'
      }
    }).then(
      (response) => {
        return fn(checkStatus(response))
      }
    )
    // .then(
    //   (res) => {
    //     if (res.isBizSuccess == true) {
    //       console.log(8888888)
    //       return res
    //     }
    //   }
    // )
  },
  get (url, params) {
    return axios({
      method: 'get',
      baseURL: baseUrl,
      url,
      params, // get 请求时带的参数
      timeout: 10000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        // 'Content-Type': 'application/x-www-form-urlencoded',
        'api-version': '1.0',
        'ServerDesc': 'H5'
      }
    }).then(
      (response) => {
        // console.log(response)
        return response
      }
    ).then(
      (res) => {
        return res
      }
    )
  }
}
