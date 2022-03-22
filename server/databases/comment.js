const {sequelize,Sequelize} = require('./init')

const Comment = sequelize.define('comment', {
  // 使用articleId与 article表连接起来
  parent:Sequelize.INTEGER,
  type:Sequelize.STRING,
  thumbUp:{
    type:Sequelize.INTEGER,
    defaultValue:0
  },
  from_user: Sequelize.INTEGER,
  to_user: Sequelize.INTEGER,
  content:Sequelize.STRING,
})

module.exports = Comment