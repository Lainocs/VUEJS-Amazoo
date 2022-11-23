import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000'

const app = createApp(App)
app.use(router)
app.config.globalProperties.$axios = axios
app.config.globalProperties.$user = JSON.parse(localStorage.getItem('user')) ?? null
app.mount('#app')
