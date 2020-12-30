const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Drop = sequelize.define('Drop', {
    _id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    dropChance: {
        type: Sequelize.DECIMAL(4, 3),
        allowNull: false
    },
    dateFrom: {
        type: Sequelize.DATE,
        allowNull: false
    },
    dateTo: {
        type: Sequelize.DATE,
        allowNull: true
    },
    minDifficulty:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    minSizeOfGroup:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    boss_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    weapon_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = Drop;