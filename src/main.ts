import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { VueQueryPlugin } from '@tanstack/vue-query'
import { createPinia } from 'pinia'

const pinia = createPinia()

const app = createApp(App)
app.use(VueQueryPlugin)
app.use(pinia)
app.use(router)
app.mount('#app')
