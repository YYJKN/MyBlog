const express = require('express')

// 连接数据库
require('./databases/db')

const app  = express()

app.use(require('cors')())
app.use(express.json())

// 配置路由
app.use(require('./router/router'))

//配置静态文件
app.use(express.static(__dirname + '/uploads'))
app.use(express.static(__dirname + '/avatars'))

app.listen(4000,()=> {
  console.log('server 已经在 4000 端口启动');
})
