const Boss = require("../../model/sequelize/Boss");
const Weapon = require("../../model/sequelize/Weapon");
const Drop = require("../../model/sequelize/Drop");
const Commons = require("../../repository/sequelize/CommonRepositoryFunctions");


const fieldsToHide = ["_id"];

exports.getDataModel = () => {
    return Commons.getDataModel(Boss, fieldsToHide)
}
exports.getData = () => {
    return Boss.findAll();
};
exports.getDataName = () => {
    return Boss.name;
}

exports.getDataById = (bossId) => {
    return Boss.findByPk(bossId,
        {
            include: [{
                model: Drop,
                as: 'Drops',
                include: [{
                    model: Weapon,
                    as: 'Weapon'
                }]
            }]
        });
};

exports.createData = (newBossData) => {
    return Boss.create({
        name: newBossData.name,
        location: newBossData.location,
        hp: newBossData.hp
    });
};

exports.updateData = (bossId, bossData) => {
    return Boss.update(bossData, {where: {_id: Number(bossId)}});
};

exports.deleteData = (bossId) => {
    return Boss.destroy({
        where: {_id: bossId}
    });

}