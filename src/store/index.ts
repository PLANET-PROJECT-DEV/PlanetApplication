import { createStore } from 'vuex'
import {getItem,setItem} from "@/utils/storage";

const TOKEN_KEY="USER"
const store=createStore({
  state:{
    user:getItem('TOKEN_KEY')
  },
  mutations:{
    setUser(state,data){
      state.user=data;
      window.localStorage.setItem(TOKEN_KEY,JSON.stringify(state.user));
    }
  }
});
export default store;
