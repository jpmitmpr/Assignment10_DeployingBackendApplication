// models/index.js
const { Sequelize } = require('sequelize');
const path = require('path');
require('dotenv').config();

const dbName = process.env.DB_NAME || 'tasks.db';
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname, '..', dbName),
  logging: false,
});

const User = require('./user')(sequelize);
const Task = require('./task')(sequelize);

User.hasMany(Task, { foreignKey: 'userId' });
Task.belongsTo(User, { foreignKey: 'userId' });

module.exports = { sequelize, User, Task };
