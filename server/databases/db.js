const { sequelize, Sequelize } = require('./init')
const Article = require('./article')
const Caozuo = require('./caozuo')
const Comment = require('./comment')
const User = require('./user')
const Caozuo2 = require('./caozuo2')

Caozuo.belongsTo(Article)

Comment.belongsTo(Article)

Caozuo2.belongsTo(User)
Caozuo2.belongsTo(Article)
Caozuo2.belongsTo(Comment)

User.sync().then(() => {
  console.log('User表模型同步成功');
})


Article.sync()
.then(res => {
  console.log("Article表模型同步成功");
})
.catch(err => {
  console.log('Article表', err);
})


Caozuo.sync()
  .then(res => {
    console.log("Caozuo表模型同步成功");
  })
  .catch(err => {
    console.log('Caozuo表', err);
  })

Comment.sync()
  .then(() => {
    console.log('Commnet表模型同步成功');
  })

  Caozuo2.sync()
  .then(res => {
    console.log("Caozuo2表模型同步成功");
  })
  .catch(err => {
    console.log('Caozuo2表', err);
  })
