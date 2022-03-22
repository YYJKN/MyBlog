const {sequelize,Sequelize} = require('./init')

const Caozuo = sequelize.define('caozuo', {
  views: {
    type:Sequelize.INTEGER,
    defaultValue:0
  },
  comments: {
    type:Sequelize.INTEGER,
    defaultValue:0
  },
  stars: {
    type:Sequelize.INTEGER,
    defaultValue:0
  },
  thumbUps: {
    type:Sequelize.INTEGER,
    defaultValue:0
  }
})




module.exports = Caozuo