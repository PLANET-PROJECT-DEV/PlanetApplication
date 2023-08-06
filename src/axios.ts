import router from "@/router";
import axios from "axios";
const request =axios.create({
  baseURL:"https://www.fastmock.site/",
    timeout:1000
});
request.interceptors.request.use(
    config=>{
      if (localStorage.getItem('USER')) {
        config.headers.Authorization = localStorage.getItem('USER');
        console.log('已添加')
      }
      return config;
    },
    error=>Promise.reject(error)
);
request.interceptors.response.use(
    response => {
      if (response.data.errno === 999) {
        router.replace('/login');
        console.log("token过期");
      }
      return response;
    },
    error => {
      return Promise.reject(error);
    }
);
export default request;