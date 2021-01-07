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
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole jest wymagane"
            },
            moreThenMin(val) {
                if (val <= 0)
                    throw new Error('Wartość szansy musi być większa niż 0');
            },
            lessThenMax(val) {
                if (val > 100)
                    throw new Error('Wartość szansy nie może przekraczać 100')
            }
        }
    },
    dateFrom: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    dateTo: {
        type: Sequelize.DATEONLY,
        allowNull: true,
        validate: {
            isAfterBeginingDate(val) {
                const dateFrom = new Date(this.dateFrom);
                const dateTo = new Date(val);
                if (dateTo < dateFrom && dateTo != null) throw new Error("Data końca nie może być wcześniejsza niż data początku!");
            }
        }
    },
    minDifficulty: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole jest wymagane"
            },
            moreThenMin(val) {
                if (val <= 0)
                    throw new Error('Wartość trudności musi być większa niż 0');
            },
            lessThenMax(val) {
                if (val > 10)
                    throw new Error('Wartość trudności nie może przekraczać 10')
            }
        }
    },
    minSizeOfGroup: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole jest wymagane"
            },
            moreThenMin(val) {
                if (val < 1)
                    throw new Error('Minimalna wielkość grupy musi być większa niż 0');
            },
            lessThenMax(val) {
                if (val > 100)
                    throw new Error('maksymalna wielkość grupy nie może przekraczać 100')
            }
        }
    },
    boss_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    weapon_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }
});

module.exports = Drop;