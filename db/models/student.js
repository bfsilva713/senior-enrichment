const Sequelize = require('sequelize');
const db = require('../index.js');
const Campus = require('./campus')

let Student = db.define('student', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true,
    }
  }
}, {
  scopes: {
    populated: () => ({
      include: [{
        model: Campus
      }]
    })
  }
}
)

module.exports = Student;
