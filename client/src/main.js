// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import "preline/preline";
const app = createApp(App)
app.use(router)
app.mount('#app')