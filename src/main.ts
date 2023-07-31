import { createApp } from 'vue'
import { Quasar, Dialog, Notify } from 'quasar'
// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'
import './style.css'
import App from './App.vue'
import router from "./router";

createApp(App).use(Quasar, {
  plugins: {
    Dialog,
    Notify
  }, // import Quasar plugins and add here
}).use(router)
.mount('#app')