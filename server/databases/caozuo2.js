const {sequelize,Sequelize} = require('./init')

const Caozuo2 = sequelize.define('Caozuo2', {
  // 使用articleId与 article表连接起来
  thumbUp:{
    type:Sequelize.BOOLEAN,
    defaultValue:false
  },
  star:{
    type:Sequelize.BOOLEAN,
    defaultValue:false
  },
})

module.exports = Caozuo2