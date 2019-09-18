import axios from 'axios'
import qs from 'qs'

//响应时间
axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = '';

//post传参序列化（添加请求拦截器）
axios.interceptors.request.use((config)=>{
  //发送请求前
  if(config.method === 'post'){
    config.data = qs.stringfy(config.data);
  }
  return config;
},error => {
  console.log('Wrong params');
  return Promise.reject(error);
});

//返回状态判断（添加响应拦截器）
axios.interceptors.response.use((res)=>{
  //操作响应数据
  if(!res.data.success){
    return Promise.resolve(res);
  }
  return res;
},error => {
  console.log('network anomaly');
  return Promise.reject(error);
});

export function doPost(url,param) {
  return new Promise((resolve, reject)=>{
    axios.post(url,param).then(response=>{
      resolve(response)
    },err=>{
      reject(err)
    }).catch((error) => {
      reject(error)
    })
  })
}

export function doGet(url,param) {
  return new Promise((resolve, reject)=>{
    axios.get(url, {params: param}).then(response => {
      resolve(response)
    },error => {
      reject(error)
    }).catch((error)=>{
      reject(error)
    })
  })
}

export default {
  doPost,
  doGet
}

