const Mock = require('mockjs')

// 设置拦截ajax请求的相应时间
Mock.setup({
  timeout: '200-600'
})

// http://127.0.0.1:8080/api/query/user
let configArray = []

// 遍历 所有 mock 文件
const files = require.context('.', true, /\.js$/)
files.keys().forEach((item) => {
  if (item === './index.js') return
  configArray = configArray.concat(files(item).default)
})

// 注册所有 mock 服务
configArray.forEach((item) => {
  for (const [path, target] of Object.entries(item)) {
    const protocol = path.split('|')
    Mock.mock(new RegExp('^' + protocol[1]), protocol[0], target)
  }
})
