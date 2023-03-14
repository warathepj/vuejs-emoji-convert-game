import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// import Vue from 'vue'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

import './assets/main.css'

// Vue.use(VueSweetalert2)

// createApp(App).mount('#app').use(VueSweetalert2)
// createApp(App).mount('#app')

const app = createApp(App)

app.use(router)
app.use(VueSweetalert2);

app.mount('#app');
