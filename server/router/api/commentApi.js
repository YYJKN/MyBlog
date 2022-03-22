const express = require('express')
const router = express.Router()

const Comment = require('../../databases/comment')
const User = require('../../databases/user')

exports.createComment = async (req, res) => {
  
  const data = await User.findOne({ where: { email: req.body.from_user } })
  const obj = {
    articleId: req.body.articleId,
    parent: req.body.parent,
    type: req.body.type,
    from_user: data.id,
    content: req.body.content
  }
  await Comment.create(obj)
  res.send({ message: "发表评论成功" })
}


exports.viewComment = async (req, res) => {
  let id = req.query.id
  let data
  if (id) {
    data = await Comment.findAll({ where: { parent: 0, type: 'article', articleId: id } })
  } else {
    data = await Comment.findAll({ where: { parent: 0, type: 'comment' } })
  }

  let list = []
  for (let i = 0; i < data.length; i++) {
    let item = data[i]
    let data2 = await User.findOne({ where: { id: item.from_user } })
    let child = await Comment.findAll({where:{parent:item.id}})
    item.dataValues.avatar = data2.avatar
    item.dataValues.username = data2.username
    item.dataValues.childNum = child.length
    list.push(item.dataValues)
  }
  res.send({ list })
}

exports.createComment2 = async (req, res) => {
  let data = await User.findOne({ where: { email: req.body.from_user } })
  let data2 = await User.findOne({ where: { username: req.body.to_user } })
  let obj = {
    parent: req.body.parent,
    type: 'comment',
    from_user: data.id,
    to_user: data2.id,
    content: req.body.content
  }

  await Comment.create(obj)
  res.send({ message: "评论成功" })

}

exports.viewComment2 = async (req, res) => {
  let parent = req.query.parent

  const data = await Comment.findAll({ where: { parent } })
  let list = []
  for (let i = 0; i < data.length; i++) {
    let item = data[i]
    let data2 = await User.findOne({ where: { id: item.from_user } })
    let data3 = await User.findOne({ where: { id: item.to_user } })
    item.dataValues.avatar = data2.avatar
    item.dataValues.username = data2.username
    item.dataValues.toUsername = data3.username
    list.push(item.dataValues)
  }
  res.send({ list })
}

exports.thumbUp = async (req,res) => {
  const id = req.query.id
  const data = await Comment.findOne({where:{id}})
  let thumbUp = ++data.thumbUp
  await Comment.update({thumbUp},{where:{id}})
  res.send({message:"点赞成功"})
}

