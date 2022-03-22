const {sequelize,Sequelize} = require('./init')

const User = sequelize.define('user', {
  // 使用articleId与 article表连接起来
  email:Sequelize.STRING,
  avatar: Sequelize.STRING,
  username:Sequelize.STRING,
  password: Sequelize.STRING

})

module.exports = User