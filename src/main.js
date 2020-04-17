import Vue from 'vue'
import App from './App.vue' // 组件
import axios from 'axios'; // http

import VueRouter from 'vue-router' // 路由
import routerConfig from './router.config.js' // 路由配置

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

//动画库
import './assets/css/animate.min.css';
import './assets/less/style.less' // 样式


Vue.use(VueRouter);
Vue.use(ElementUI);

//将axios挂载在Vue实例原型上
Vue.prototype.$http = axios;

// 创建路由
const router = new VueRouter(routerConfig); // 创建路由对象，挂载

new Vue({
	el: '#app',
	router,
	render: h => h(App)
})