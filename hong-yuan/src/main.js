import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { Button, Cell, CellGroup } from 'vant'
import 'vant/lib/index.css';

const app = createApp(App)

app.use(router)

app.use(Button)
app.use(Cell)
app.use(CellGroup)

app.mount('#app')
