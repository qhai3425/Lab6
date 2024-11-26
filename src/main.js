import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App)
  .use(router)  // Sử dụng router trong ứng dụng
  .mount('#app')
