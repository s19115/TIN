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
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole jest wymagane"
            },
            len: {
                args: [2, 60],
                msg: "Pole powinno zawierać od 2 do 60 znaków"
            },
        }
    },
    location: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole jest wymagane"
            },
            len: {
                args: [2, 60],
                msg: "Pole powinno zawierać od 2 do 60 znaków"
            },
        }
    },
    hp: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: false,
        validate: {
            notEmpty: {
                msg: "Pole jest wymagane"
            },
            moreThenMin(val) {
                if (val < 0)
                    throw new Error('Wartość hp musi być większa niż 0');
            },
            lessThenMax(val) {
                if (val > 10000)
                    throw new Error('Wartość hp nie może przekraczać 10000')
            }

        }
    }
});

module.exports = Boss;