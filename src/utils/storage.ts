//存储数据
export const setItem=(key:any,value:any)=>{
    if(typeof value==='object'){
        JSON.stringify(value);
    }
    window.localStorage.setItem(key,value);
}
//获取数据
export  const getItem=(key:any)=>{
    return window.localStorage.getItem(key);

}
//删除数据
export const removeItem=(key:any)=>{
    window.localStorage.removeItem(key);
}