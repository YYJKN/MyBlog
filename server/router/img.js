const express = require('express')
const multer = require('multer')
const fs = require('fs')
const path = require('path')
var upload = multer({dest: 'uploads/'})

const router = express.Router()

const User = require('../databases/user')

// 图片上传
router.post('/upload', upload.single('file'), async (req, res) => {
  res.send({"file": req.file})
})

// 图片删除
router.delete('/delete', async (req, res) => {
  let name = req.query.name.split('/')
  name = name[name.length - 1]
  fs.unlink('uploads/' + name, err => {
    if (err) {
      res.send({"msg": "数据库图片删除失败"})
    }
    res.send({'msg':'图片删除成功'})
  })
})

router.get('/avatarLists',async (req,res)=> {
  fs.readdir('./avatars',(err,files)=> {
    res.send({"list":files})
  })
})

router.post('/updateAvatar',async (req,res)=> {
  const {email,avatarVal} = req.body
  fs.readdir('./avatars',async (err,files)=> {
    await User.update({avatar:files[avatarVal]},{where:{email}})
    let user = await User.findOne({where:{email}})

    res.send({message:'更改头像成功',avatar:user.avatar})
  })
})

module.exports = router