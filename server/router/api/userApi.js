const express = require('express')
const router = express.Router()

const User = require('../../databases/user')

const bcrypt = require('bcryptjs')
const gravatar = require('gravatar')
const jwt = require('jsonwebtoken')
const fs = require('fs')

exports.register = async (req, res) => {
  let { email, username, password } = req.body

  const data = await User.findOne({ where: { email } })
  if (data) {
    return res.status(200).send({ message: "邮箱已经存在，请重新输入" })
  }
  password = bcrypt.hashSync(password, 5)
  // let avatar = gravatar.url(email, { s: '200', r: 'pg' });
  fs.readdir('./avatars',async (err, files) => {
    let avatar = files[Math.floor(Math.random() * files.length)]
    await User.create({ email, avatar, username, password })
    res.send({ message: "注册成功" })
  })

}

exports.login = async (req, res) => {
  let { email, password } = req.body
  const data = await User.findOne({ where: { email } })
  if (!data) {
    return res.status(450).send({ message: "用户不存在，请注册" })
  }
  if (!bcrypt.compareSync(password, data.password)) {
    return res.status(450).send({ message: "密码错误" })
  }
  const payload = { email }
  const token = jwt.sign(payload, 'gyse')

  res.send({ message: "登录成功", token, userInfo: { email, avatar: data.avatar, username: data.username } })
}
