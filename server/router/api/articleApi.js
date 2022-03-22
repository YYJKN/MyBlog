const { UPSERT } = require('sequelize/lib/query-types');
const Article = require('../../databases/article')
const Caozuo = require('../../databases/caozuo')
const Caozuo2 = require('../../databases/caozuo2')
const User = require('../../databases/user')
const Comment = require('../../databases/comment')
const { Sequelize } = require('../../databases/init')
const Op = Sequelize.Op;
//创建文章
exports.create = async (req, res) => {
  const data = await Article.create(req.body)
  await Caozuo.create({ articleId: data.id })
  res.status(200).send({ "msg": "新建文章成功" })
}

//删除文章
exports.delete = async (req, res) => {
  await Article.destroy({ where: { id: req.query.id } })
  res.send({ "msg": "删除成功" })
}

//查看文章列表
exports.viewList = async (req, res) => {
  const data = await Caozuo.findAll({
    include: [{
      model: Article,
      where: { id: Sequelize.col('caozuo.articleId') },
    }],
  })
  res.status(200).send(data)
}

// 搜索文章
exports.queryKeyword = async (req, res) => {
  const {size,page,keyword} = req.body
  console.log(keyword);
  // const data = await Article.findAll({offset: size * (page - 1), limit: size,where: {  markdown: { [Op.like]: `%${keyword}%`}}})
  const data = await Caozuo.findAll({
    include: [{
      model: Article,
      where: {  markdown: { [Op.like]: `%${keyword}%`}}
    }],
    order: [['views', 'DESC']],
    offset: size * (page - 1), limit: size,
  })
  res.send({lists:data,total:data.length})
}

// 查看最近文章
exports.viewRecent = async (req, res) => {
  const data = await Article.findAll({
    order: [['id', 'DESC']],
    limit: 5
  })
  res.status(200).send(data)
}

// 文章排序
exports.sort = async (req, res) => {
  const type = req.query.type
  const data = await Caozuo.findAll({
    include: [{
      model: Article,
      where: { id: Sequelize.col('caozuo.articleId') },
    }],
    order: [['views', 'DESC']]

  })
  res.status(200).send(data)
}

// 编辑文章和查看文章用的是同一个
exports.editAndViewOne = async (req, res) => {
  let id = req.params.id

  const data2 = await Caozuo.findOne({
    include: [{
      model: Article,
      where: { id: Sequelize.col('caozuo.articleId'), id },
    }],
  })
  let views = ++data2.dataValues.views
  await Caozuo.update({ views }, { where: { id } })
  res.status(200).send({ "data": data2.dataValues })
}

// 编辑文章
exports.editRes = async (req, res) => {
  let id = req.params.id
  const data = await Article.update(req.body, { where: { id } })
  res.status(200).send({ "massage": "编辑成功" })
}

// 计算分类的数量
exports.countNum = async (req, res) => {
  const data = await Article.findAll()
  let countNum = {}
  data.forEach((x) => {
    if (countNum[x.tag]) {
      countNum[x.tag]++
    } else {
      countNum[x.tag] = 1
    }
  })
  res.status(200).send(countNum)
}

// 分页查询
exports.getPages = async (req, res) => {
  const { size, page, type, sort } = req.body
  if (type == 'home') {
    const data = await Caozuo.findAll({
      include: [{
        model: Article,
        where: { id: Sequelize.col('caozuo.articleId'), tag: { [Op.notLike]: 'Life' } },
      }],
      order: [[sort.type, 'DESC']],
    })
    const total = data.length
    const list = data.slice(size * (page - 1), size * page)
    res.status(200).send({ lists: list, total: total })
    return
  }
  if (type == 'life') {
    const data = await Caozuo.findAll({
      include: [{
        model: Article,
        where: { id: Sequelize.col('caozuo.articleId'), tag: 'Life' },
      }],
      order: [[sort.type, 'DESC']],
    })
    const total = data.length
    const list = data.slice(size * (page - 1), size * page)
    res.status(200).send({ lists: list, total: total })
    return
  }

  if (type) {
    const data = await Caozuo.findAll({
      include: [{
        model: Article,
        where: { id: Sequelize.col('caozuo.articleId'), tag: type },
      }],
      order: [[sort.type, 'DESC']],
    })
    const total = data.length
    const list = data.slice(size * (page - 1), size * page)
    res.status(200).send({ lists: list, total: total })
  }
}

// 文章点赞、收藏
exports.thumbUpOrStar = async (req, res) => {
  const { type, id, email } = req.body
  const data = await Caozuo.findOne({ where: { articleId: id } })
  const dataUser = await User.findOne({ where: { email } })

  const dataCaozuo2 = await Caozuo2.findOne({ where: { userId: dataUser.id, articleId: id } })

  if (type == "thumbUp") {
    await Caozuo.update({ thumbUps: ++data.thumbUps }, { where: { articleId: id } })
    if (dataCaozuo2) {
      await Caozuo2.update({ thumbUp: true }, { where: { id: dataCaozuo2.id } })
    } else {
      await Caozuo2.create({ articleId: id, userId: dataUser.id, thumbUp: true })

    }
    res.send({ message: "点赞成功", type })
  } else {
    await Caozuo.update({ stars: ++data.stars }, { where: { articleId: id } })
    if (dataCaozuo2) {
      await Caozuo2.update({ star: true }, { where: { id: dataCaozuo2.id } })
    } else {
      await Caozuo2.create({ star: true, articleId: id, userId: dataUser.id })
    }
    res.send({ message: "收藏成功", type })
  }

}

exports.sideBar = async (req, res) => {
  const { email, articleId } = req.body
  const dataUser = await User.findOne({ where: { email } })
  const dataCaozuo2 = await Caozuo2.findOne({ where: { userId: dataUser.id, articleId } })
  const { thumbUp, star } = dataCaozuo2
  res.send({ info: { thumbUp, star } })
}

exports.cancelThumbUpOrStar = async (req, res) => {
  const { type, id, email } = req.body
  const data = await Caozuo.findOne({ where: { articleId: id } })
  const dataUser = await User.findOne({ where: { email } })

  const dataCaozuo2 = await Caozuo2.findOne({ where: { userId: dataUser.id, articleId: id } })

  if (type == "thumbUp") {
    await Caozuo.update({ thumbUps: --data.thumbUps }, { where: { articleId: id } })
    await Caozuo2.update({ thumbUp: false }, { where: { id: dataCaozuo2.id } })
    res.send({ message: "取消点赞成功", type })
  } else {
    await Caozuo.update({ stars: --data.stars }, { where: { articleId: id } })
    await Caozuo2.update({ star: false }, { where: { id: dataCaozuo2.id } })
    res.send({ message: "取消收藏成功", type })
  }
}

