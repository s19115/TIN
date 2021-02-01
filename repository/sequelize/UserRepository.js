const Commons = require("../../repository/sequelize/CommonRepositoryFunctions");
const User = require("../../model/sequelize/User");
const authUtil = require('../../util/authUtils');


const fieldsToHide = ["_id"];
const fieldsToHideValue = ["password"];
const fieldsToGrant = ["privileges"];

exports.getDataModel = () => {
    return Commons.getDataModel(User, fieldsToHide, [], [], fieldsToHideValue, fieldsToGrant);
}
exports.getData = () => {
    return User.findAll();
};
exports.getDataName = () => {
    return User.name;
}

exports.getDataById = (userId) => {
    return User.findByPk(userId);
};

exports.getDataByLogin = (login) => {
    return User.findOne({
        where: {login: login}
    });
}

exports.createData = (newUserData) => {
    return User.create({
        login: newUserData.login,
        password: authUtil.hashPassword(newUserData.password),
        privileges: newUserData.privileges
    });
};

exports.updateData = (userId, userData) => {
    // noinspection EqualityComparisonWithCoercionJS
    if (userData.password == "") {
        userData.password = User.findOne({where: {_id: Number(userId)}}).password;
    } else
        userData.password = authUtil.hashPassword(userData.password);
    return User.update(userData, {where: {_id: Number(userId)}});

};

exports.deleteData = (userId) => {
    return User.destroy({
        where: {_id: userId}
    });

}