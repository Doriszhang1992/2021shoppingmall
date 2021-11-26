import axios from 'axios'

export function request (config){
  const instance =axios.create({
    baseURL:'http://152.136.185.210:7878/api/hy66',
    timeout:5000
  })
//axios 拦截器
//请求拦截器
instance.interceptors.request.use(config=>{
  console.log(config)
  //1.比如config中的一些信息不符合某种要求
  //2.每次发送网络请求时，都希望显示一个请求图标
  //3.某些网络请求比如登陆，必须携带一些特殊信息（token)
  return config//一定要返回，不然内部拿不到数据了
},
err=>{
  console.log(err)
}
)
//响应式拦截器
instance.interceptors.response.use(res=>{
  console.log(res)
  return res.data
},err=>{
  console.log(err)
}
)

//3.发送真正的网络请求
  return instance(config)
}


