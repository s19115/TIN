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
    let dataToPlaceHolder;
    if(data.dateTo==="") dataToPlaceHolder=null;
    else dataToPlaceHolder=data.dateTo;
    return Drop.create({
        dropChance: data.dropChance,
        minDifficulty: data.minDifficulty,
        minSizeOfGroup: data.minSizeOfGroup,
        boss_id: data.boss_id,
        weapon_id: data.weapon_id,
        dateFrom: data.dateFrom.toString(),
        dateTo: dataToPlaceHolder
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