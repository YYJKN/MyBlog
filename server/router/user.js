const express = require('express')
const router = express.Router()

const user = require('./api/userApi')

router.post('/register',user.register)

router.post('/login', user.login)

router.post('/query', user.query)

router.get('/queryOne', user.queryOne)

router.post('/setAuth', user.setAuth)


module.exports = router