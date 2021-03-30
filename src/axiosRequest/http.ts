import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { Message, Loading } from 'element-ui'

//设置请求超时
axios.defaults.timeout = 1000000; 
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

//请求拦截
axios.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        return config;
    },
    (err: any) => {
        Promise.reject(err)
    }
)

//响应拦截
axios.interceptors.response.use(
    (response: AxiosResponse) => {
        return response;
    }
)

//post请求
function axiosPost(option: any){
    //加载loading
    let opt = {
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
    }
    const loading = Loading.service(opt);
    axios.post(option.url, option.param)
    .then((res:any) => {
        loading.close();
        option.success(res.data)
    })
    .catch((err: any) => {
        loading.close();
        option.error(err);
    })
}

export {
    axiosPost
}