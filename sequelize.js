const Sequelize = require('sequelize');
const UserModel = require('./models/user');

const sequelize = new Sequelize('Project3_db', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});

const User = UserModel(sequelize, Sequelize);

sequelize.sync().then(() => {
  // eslint-disable-next-line no-console
  console.log('Users db and user table have been created');
});

module.exports = User;
