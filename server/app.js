const express = require('express')
const morgan = require('morgan')

// 连接数据库
require('./databases/db')
const Log = require('./databases/log')

const app  = express()

app.use(require('cors')())
app.use(express.json())


async function logFunction(tokens, req, res) {
  await Log.create({
    method:tokens.method(req, res),
    referer:req.headers.referer,
    url:tokens.url(req, res),
    status:tokens.status(req, res),
    responseTime:tokens['response-time'](req, res)
  })
  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    '-',
    tokens['response-time'](req, res), 'ms'
  ].join(' ')
}

app.use(morgan(logFunction))

// 配置路由
app.use(require('./router/router'))

//配置静态文件
app.use(express.static(__dirname + '/uploads'))
app.use(express.static(__dirname + '/avatars'))

app.listen(4000,()=> {
  console.log('server 已经在 4000 端口启动');
})
