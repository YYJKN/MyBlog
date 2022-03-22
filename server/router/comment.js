const express = require('express')
const router = express.Router()

const comment = require('./api/commentApi')

router.post('/create', comment.createComment)

router.get('/comments', comment.viewComment)

// 创建二级评论
router.post('/create2', comment.createComment2)


// 获得二级评论
router.get('/comments2', comment.viewComment2)

// 点赞
router.get('/thumbUp',comment.thumbUp)

module.exports = router