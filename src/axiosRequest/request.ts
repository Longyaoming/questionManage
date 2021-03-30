import { axiosPost } from './http'
// let baseUrl = "";
// let url = baseUrl;

function $http(url: String,param: any){
    return new Promise((resolve:any,reject:any) => {
        axiosPost({
            url: url,
            param,
            success(data: any){
                resolve(data)
            },
            error(err: any){
                reject(err)
            }
        })
    })
}

export {
    $http
}