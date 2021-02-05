const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const User = sequelize.define('User', {
    _id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    login: {
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

        },
        unique: {
            args: true,
            msg: 'Login juz jest zajety'
        }
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    privileges: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }

});

module.exports = User;