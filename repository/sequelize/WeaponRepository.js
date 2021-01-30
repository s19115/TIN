const Boss = require("../../model/sequelize/Boss");
const Weapon = require("../../model/sequelize/Weapon");
const Drop = require("../../model/sequelize/Drop");
const Commons = require("../../repository/sequelize/CommonRepositoryFunctions");


const fieldsToHide = ["_id"];

exports.getDataModel = () => {
    return Commons.getDataModel(Weapon, fieldsToHide);
}
exports.getData = () => {
    return Weapon.findAll();
};
exports.getDataName = () => {
    return Weapon.name;
}

exports.getDataById = (weaponId) => {
    return Weapon.findByPk(weaponId,
        {
            include: [{
                model: Drop,
                as: 'Drops',
                include: [{
                    model: Boss,
                    as: 'Boss'
                }]
            }]
        });
};

exports.createData = (newWeaponData) => {
    return Weapon.create({
        name: newWeaponData.name,
        damageType: newWeaponData.damageType,
        damageValue: newWeaponData.damageValue
    });
};

exports.updateData = (weaponId, weaponData) => {
    return Weapon.update(weaponData, {where: {_id: Number(weaponId)}});
};

exports.deleteData = (weaponId) => {
    return Weapon.destroy({
        where: {_id: weaponId}
    });

}