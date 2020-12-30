const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Boss = sequelize.define('Boss', {
    _id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    location: {
        type: Sequelize.STRING,
        allowNull: false
    },
    hp: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: false
    }
});

module.exports = Boss;