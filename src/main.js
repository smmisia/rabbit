

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

//引入初始化样式
import '@/styles/common.scss'
import {getCategory} from '@/apis/testApi'
getCategory().then(res=>{
    console.log(res)
})

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
