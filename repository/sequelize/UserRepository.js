const Commons = require("../../repository/sequelize/CommonRepositoryFunctions");
const User = require("../../model/sequelize/User");


const fieldsToHide = [];

exports.getDataModel = () => {
    return Commons.getDataModel(User, fieldsToHide)
}
exports.getData = () => {
    return User.findAll();
};
exports.getDataName = () => {
    return User.name;
}

exports.getDataById = (bossId) => {
    return User.findByPk(bossId);
};

exports.getDataByLogin = (login) => {
    return User.findOne({
        where: {login: login}
    });
}

exports.createData = (newUserData) => {
    return User.create({
        login: newUserData.login,
        password: newUserData.password,
        privileges: newUserData.privileges
    });
};

exports.updateData = (userId, userData) => {
    return User.update(userData, {where: {_id: Number(userId)}});
};

exports.deleteData = (userId) => {
    return User.destroy({
        where: {_id: userId}
    });

}