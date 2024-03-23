// import './assets/main.css'
import './assets/style.css'
import { vueTyperNext } from "vue-typer-next";
import "vue-typer-next/dist/style.css";

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vueTyperNext)

app.mount('#app')
