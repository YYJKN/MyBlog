const {sequelize,Sequelize} = require('./init')

const Article = sequelize.define('article', {
  name: Sequelize.STRING,
  introduction: Sequelize.STRING,
  tag: Sequelize.STRING,
  markdown: Sequelize.TEXT,
  cover: Sequelize.STRING
})

module.exports = Article