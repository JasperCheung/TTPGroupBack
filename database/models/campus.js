const Sequelize = require('sequelize');
const db = require('../db');

const Campus = db.define("campus", {

  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true
  },

  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  numStudents: {
    type: Sequelize.STRING,
    allowNull: false
  },
  image: {
    type: Sequelize.STRING,
    defaultValue: "https://www.voicesofyouth.org/sites/default/files/images/2019-03/school.jpg"
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false
  },


});

module.exports = Campus;
