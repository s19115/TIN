const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Weapon = sequelize.define('Weapon', {
    _id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    damageType: {
        type: Sequelize.STRING,
        allowNull: false
    },
    damageValue: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = Weapon;