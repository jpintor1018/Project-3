import Sequelize from 'sequelize';
import UserModel from './models/customers';

const sequelize = new Sequelize('Customers', 'root', 'password', {
  host: 'Project3_db',
  dialect: 'mysql',
});

const User = UserModel(sequelize, Sequelize);

sequelize.sync().then(() => {
  // eslint-disable-next-line no-console
  console.log('Users db and user table have been created');
});

module.exports = User;
