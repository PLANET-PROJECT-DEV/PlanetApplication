import request from "@/axios";
export const login=(data:any)=>{
    return request({
        method:'post',
        url:'/mock/3f07f810e78e1cb284d7adaf70eb5861/user/loginWithPassword',
        data,
    })
}

export const register=(data:any)=>{
    return request({
        method: 'POST',
        url: '/user/login',
        data,
    })
}
export const sendcode=(data:any)=>{
    return request({
        method: 'POST',
        url: '/user/code',
        data,
    })
}