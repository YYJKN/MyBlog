const express = require('express')

const router = express.Router()

router.use('/article',require('./article'))
router.use('/img',require('./img'))
router.use('/user',require('./user'))
router.use('/comment',require('./comment'))
router.use('/log',require('./log'))
module.exports = router