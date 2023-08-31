import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vant/lib/index.css';
import Vant from 'vant'
import axios from './axios'
import 'amfe-flexible'

const app = createApp(App)
app.use(store)
app.use(router)
app.use(Vant)
app.mount('#app')
app.config.globalProperties.$axios = axios
