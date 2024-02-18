import axios from 'axios';

const Request = axios.create({
    timeout: 20000,  //请求超时时间
});
//请求拦截器
Request.interceptors.request.use(
    config => {
        //请求前的操作
        return config;
    },
    error => {
        //请求错误的操作
        return Promise.reject(error);
    }
);
//响应拦截器
Request.interceptors.response.use(
    response => response.data,
    error => {
        //响应错误的操作，比如401
        return Promise.reject(error);
    }
);


let Req=(url,method,data)=>{
    let configUrl = 'https://wiiline.azurewebsites.net/api/'
    return  new Promise((resolve, reject) => {
        Request({
            url:  `${configUrl}${url}`,
            method:method,
            data: data || {} ,
        }).then((res) => {
            //请求成功操作
            resolve(res)
        }).catch((err) => {
            console.log('err',err)
            // alert(err.response.data.error.message)
            // //请求失败操作
            // if(err.response.data.error.message=='您无权访问该接口'){
            //     window.open(`http://coding.ebur.cn/Account/Login`, '_self');
            // }
            reject(err)
        });
    })

}


export default Req
