const Sequelize = require('sequelize')
const sequelize = new Sequelize('bisheweb','root','root',{
  dialect: 'mysql',
  logging: false,
})

sequelize
  .authenticate()
  .then(res => {
    console.log("mysql is connection");
  })
  .catch(err => {
    console.log("mysql connection is error", err);
  })

module.exports = {sequelize, Sequelize}