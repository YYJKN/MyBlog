const express = require('express')
const router = express.Router()

const article = require('./api/articleApi')


// 新建文章
router.post('/create',article.create)

// 删除文章
router.delete('/delete',article.delete)

// 查看文章列表
router.get('/lists',article.viewList)

// 关键字查询
router.post('/queryKeyword', article.queryKeyword)

// 查看最近文章
router.get('/recent',article.viewRecent)

// 编辑文章和查看文章用的是同一个
router.get('/edit/:id', article.editAndViewOne)

// 编辑文章
router.put('/:id',article.editRes)

// 文章排序
router.get('/sort',article.sort)

// 文章分类计算数量
router.get('/countNum',article.countNum)

// 分页查询
router.post('/getPages',article.getPages)

// 点赞或者收藏
router.post('/thumbUpOrStar',article.thumbUpOrStar)

// 取消点赞或者收藏
router.post('/cancelThumbUpOrStar',article.cancelThumbUpOrStar)

router.post('/sideBar',article.sideBar)

module.exports = router