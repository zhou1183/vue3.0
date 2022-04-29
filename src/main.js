import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store"; 

import Antd from 'ant-design-vue'; //完成 Antd 全局注册 
import 'ant-design-vue/dist/antd.css';//样式文件需要单独引入
import * as Icons from '@ant-design/icons-vue';//导入图标库

const app = createApp(App);

app.use(Antd).use(store).use(router).mount("#app");

const icons = Icons;
for(const i in icons){
    app.component(i,icons[i]);//注册全局组件
}
