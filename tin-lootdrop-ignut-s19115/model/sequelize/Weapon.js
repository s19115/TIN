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
    damageType: {
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
    damageValue: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: {
                msg: "Pole jest wymagane"
            },
            moreThenMin(val) {
                if (val <= 0)
                    throw new Error('Wartość hp musi być większa niż 0');
            },
            lessThenMax(val) {
                if (val > 1000)
                    throw new Error('Wartość hp nie może przekraczać 1000')
            }
        }

    }
});

module.exports = Weapon;