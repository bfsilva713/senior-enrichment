const Sequelize = require('sequelize');
const db = require('../index.js');

let Campus = db.define('campus', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  image: {
    type: Sequelize.STRING,
    defaultValue: 'default-uni.png'
  }
});

module.exports = Campus;
