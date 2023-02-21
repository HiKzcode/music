import axios from 'axios'

export function request(config){
   //1.创建axios实例
   const instance=axios.create({
     baseURL:'http://123.207.32.32:8082',
     timeout:5000
   })
   //拦截器
   instance.interceptors.request.use(config=>{
    return config
   },err=>{
     console.log(err);
   })
   
   //发送网络请求
   return instance(config) //调用可以直接.then 
}