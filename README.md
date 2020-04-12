# vue-mock-demo

## Mock

```
1. npm install mockjs axios

2、在我们的vue项目中创建一个mock 的目录

3、在mock的文件夹下创建index.js文件，这里就是我们注册所有mock服务的地方,index.js的内容如下:
// 首先引入Mock
const Mock = require('mockjs');

// 设置拦截ajax请求的相应时间
Mock.setup({
  timeout: '200-600'
});

let configArray = [];

// 使用webpack的require.context()遍历所有mock文件
const files = require.context('.', true, /\.js$/);
files.keys().forEach((key) => {
  if (key === './index.js') return;
  configArray = configArray.concat(files(key).default);
});

// 注册所有的mock服务
configArray.forEach((item) => {
  for (let [path, target] of Object.entries(item)) {
    let protocol = path.split('|');
    Mock.mock(new RegExp('^' + protocol[1]), protocol[0], target);
  }
});

4、服务注册好之后，在main.js中引入
import axios from 'axios'
import mock from "../mock/index";
Vue.use(mock)
Vue.prototype.$http = axios

5. 在mock文件夹下随便创建一个文件userList.js
const userList = [{
  id: 1,
  professionId: '230000',
  job: '教师'
}, {
  id: 2,
  professionId: '240000',
  job: '医生'
}, {
  id: 3,
  professionId: '250000',
  job: '公务员'
}]

export default {
  'get|/api/query/user': option => {
    return {
      status: 200,
      message: 'success',
      data: userList
    }
  }
}

6. 在 src 下创建 api/user.js
import axios from 'axios'
export function userApi (params) {
  return axios.get('/api/query/user', params)
}

7. 新建 vue 页面
import { userApi } from '../api/user'
userApi({ name: 'wxh', age: '35' }).then(res => {
  const result = res.data
  if (result.status === 200) {
  	vm.usersList = result.data
  } else {
  	console.log(result.message)
  }
  }).catch((err) => {
  console.log(err)
})
```


