const Sequelize = require('sequelize');

const Drop = require('../../model/sequelize/Drop');
const Boss = require('../../model/sequelize/Boss');
const Weapon = require('../../model/sequelize/Weapon');
const Commons = require("../../repository/sequelize/CommonRepositoryFunctions");

const fieldsToHide = ["_id","weapon_id","boss_id"];
const fieldsToJoinOn = ["boss_id", "weapon_id"];
const fieldToShowOnJoin = "name";
exports.getDataModel = () => {
    return Commons.getDataModel(Drop, fieldsToHide, fieldsToJoinOn, fieldToShowOnJoin);
}
exports.getData = () => {
    return Drop.findAll({
        include: [
            {
                model: Boss,
                as: 'Boss'
            },
            {
                model: Weapon,
                as: 'Weapon'
            }]
    });
};

exports.getDataName = () => {
    return Drop.name;
}

exports.getDataById = (employmentId) => {
    return Drop.findByPk(employmentId, {
        include: [
            {
                model: Boss,
                as: 'Boss'
            },
            {
                model: Weapon,
                as: 'Weapon'
            }]
    });
};

exports.createData = (data) => {
    return Drop.create({
        emp_id: data.emp_id,
        dept_id: data.dept_id,
        salary: data.salary,
        dateFrom: data.dateFrom,
        dateTo: data.dateTo
    });
};

exports.updateData = (dropId, data) => {
    return Drop.update(data, {where: {_id: dropId}});
}

exports.deleteData = (dropId) => {
    return Drop.destroy({
        where: {_id: dropId}
    });
}

exports.deleteManyData = (dropIds) => {
    return Drop.find({_id: {[Sequelize.Op.in]: dropIds}})
}