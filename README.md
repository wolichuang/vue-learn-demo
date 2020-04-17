# vue 开发豆瓣

## 为什么

1. 熟悉 webpack 配置
2. 熟悉 less
3. 组件之间的传值


## 过程

1. 基础 package.json => cnpm install
2. webpack.config.js
3. 搭建 vue 环境
3. 分离 共用组件
4. vue 模板语法
5. 电影-页面
6. 图书-页面
7. 广播-页面
8. 小组-页面

## 辅助

1. less 基础语法
2. sublime text 支持 less 
3. https://github.com/danro/LESS-sublime
4. 豆瓣接口 
头条：https://api.douban.com/v2/movie/in_theaters?apikey=0b2bdeda43b5688921839c8ecb20399b&city=%E5%8C%97%E4%BA%AC&start=0&count=100&client=&udid=

电影： http://api.douban.com/v2/movie/subject/26004132?apikey=0b2bdeda43b5688921839c8ecb20399b

正在热映 ：https://api.douban.com/v2/movie/in_theaters 

即将上映 ：https://api.douban.com/v2/movie/coming_soon 

TOP 250 ：https://api.douban.com/v2/movie/top250

电影详情 ：https://api.douban.com/v2/movie/subject/:id  

图书详情： https://api.douban.com/v2/book/26948733?apikey=0b2bdeda43b5688921839c8ecb20399b
## 基础 package.json

```js
"scripts": {
    "dev": "cross-env NODE_ENV=development webpack-dev-server --open --inline --hot",
    "build": "cross-env NODE_ENV=production webpack --progress --hide-modules"
  },
```
## webpack.config.js

1. 配置 webpack 打包规则
2. 配置输入 main.js
3. 输出 dist/build.js
4. rules [css  less sass 图片 js] 规则
5. alias 别名处理
6. 配置 devServer
7. webpack 配置 跨域

```js
var webpack = require('webpack');
var path = require('path');
var env = process.env.NODE_ENV;

module.exports = {
    entry: './src/main.js',
    output: {
       path: path.resolve(__dirname, './dist'),
       publicPath: '/dist/',
       filename: 'build.js'
    },
    module: {
        rules: [{
            test: '/\.vue$/',
            loader: 'vue-loader',
            options: {

            }
        }, {
            test: '/\.js$/',
            loader: 'babel-loader',
            exclude: '/node_modules/'
        }, {
            test: '/\.css$/',
            loader: 'style-loader!css-loader',
        }, { #41
          test: /\.(eot|svg|ttf|woff|woff2)$/,
          loader: 'file-loader'
        },{
            test: '/\.(png|jpg|gif)$/',
            loader: 'file-loader',
            options: {
                name: '[name].[ext]?[hash]'
            }
        }]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.common.js'
        }
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true,
        proxy: {
            '/api': {
                target: "http://api.douban.com/v2/",
                pathRewrite: {'^/api': ''},
                changeOrigin: true,
                secure: false
            }
        }
    },
    devtool: '#eval-source-map'
}
```

### webpack 配置 跨域

1. 需要使用本地开发插件：webpack-dev-server。
2. webpack-dev-server使用的是http-proxy-middleware来实现跨域代理的。

2.1 '/api'
捕获API的标志，如果API中有这个字符串，那么就开始匹配代理，
比如API请求/api/users, 会被代理到请求 http://www.baidu.com/api/users 。

2.2 target
代理的API地址，就是需要跨域的API地址。
地址可以是域名,如：http://www.baidu.com
也可以是IP地址：http://127.0.0.1:3000
如果是域名需要额外添加一个参数changeOrigin: true，否则会代理失败。

2.3 pathRewrite
路径重写，也就是说会修改最终请求的API路径。
比如访问的API路径：/api/users,
设置pathRewrite: {'^/api' : ''},后，
最终代理访问的路径：http://www.baidu.com/users，
这个参数的目的是给代理命名后，在访问时把命名删除掉。

2.4 changeOrigin
这个参数可以让target参数是域名。

2.5 secure
secure: false,不检查安全问题。
设置后，可以接受运行在 HTTPS 上，可以使用无效证书的后端服务器

## 搭建 vue 环境

1. 定义 main.js
2. 定义 router.config.js
3. 定义 App.vue
4. index.html 中引入 build/dist.js
5. 使用 element-ui, 手动引入的时候 webpack.config.js 中需要添加 字体打包 loaders#41

```js
import Vue from 'vue'
import VueRouter from 'vue-router' // 路由
import axios from 'axios'; // http
import App from './App.vue' // 组件
import routerConfig from './router.config.js' // 路由配置

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

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
```

```js
import Movie from './views/movie/Movie.vue'
export default {
    mode: 'history',//切换路径模式，变成history模式
    scrollBehavior: () => ({y: 0}),// 滚动条滚动的行为，不加这个默认就会记忆原来滚动条的位置
    routes: [
        {path: '/', component: Movie}
    ]
}
```

```vue
<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
export default {

  name: 'App',

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
</style>
```

```html
处理 豆瓣 防盗链
<meta name="referrer" content="never">


<div id="app"></div>
<script src="./dist/build.js"></script>
```

小结：动态环境搭建完毕，运行 npm run dev 启动服务。加载 Movie.vue 组件。说明成功。

## 分离 共用组件

1. 创建 Header.vue
2. 创建 Footer.vue
3. 引入到 App.vue 中
4. 引入共用样式, 一般在 App.vue 中，引用自有的共用样式
5. 制作登录框功能, 通过变量控制显示和隐藏
6. transition 组件 和 animate.css 结合实现动画

```
<NavHeader></NavHeader>

....
import NavHeader from './views/common/Header.vue'

...
components: { NavHeader, NavFooter}


<transition
                enter-active-class="animated fadeInLeft"
                leave-active-class="animated fadeOutRight">
</transition>
```

## vue 模板语法

1. :to 是变量
2. {{ }} 是变量值
3. ref="moveItem" 相当于 dom 的 id
4. <router-link :to="'/moive/subject/' + item.id"></router-link>

```html

// 循环
<ul>
    <li v-for="(item, index) in items" :key="index">
        <router-link :to="item.path" :style="{color: item.color}">{{item.title}}</router-link>
    </li>
</ul>
```

小结： 共用组件部分添加完成，实现了路径的切换组件

## less 

1. 层级关系 用> 
```css
.section-movie {
  padding-top: 0.83rem;
  >
  header {
    position: relative;
    padding: 0 1.1rem;
    >
    h2 {

    }
    >
    span {
      font-size: 0.9rem;
    }
  }
}
```

## 电影-页面

1. 父子组件传值, 在父组件中定义值，在子组件中 props 值
2. axios 请求接口
3. 引入 评分组件
4. better-scroll 滚动


### axios 请求接口

```js
 _this.$http.get(ajaxUrl, {
     params: {
      apikey: _this.apikey
    }
}).then((res)=> {
    console.log(res.data);
    this.data = res.data
    this.datai = res.data.images.medium
    this.star = res.data.rating.average
}, (err)=> {
    console.log(err)
})
```

### better-scroll 滚动
```js

import BScroll from 'better-scroll'

// 使用better-scroll实现左右滑动
initScroll() {
    this.moveScroll = new BScroll(this.$refs.moveItem, {
        scrollX: true,
        eventPassthrough: 'vertical',
        click: true
    })
}

this.$nextTick(() => {
    this.initScroll()
})

```


## 广播-页面

1. 评论列表，静态资源文件
2. 组件间传参数

```
<VBanner :slogan1='slogan[0]' :slogan2='slogan[1]'></VBanner>

data () {
    return {
        slogan: ['打开App, 回复广播', ''],
        data: []
    }
}

// 子组件
export default{
    name: 'top_banner',
    props: ['slogan1', 'slogan2']
}
```

## 图书-页面

1. 轮播图组件-element-ui
2. 分类挑选
