const Sequelize = require('sequelize');

const Drop = require('../../model/sequelize/Drop');
const Boss = require('../../model/sequelize/Boss');
const Weapon = require('../../model/sequelize/Weapon');

exports.getDrops = () => {
    return Drop.findAll({include: [
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


exports.getDropById = (DropId) => {
    return Drop.findByPk(DropId, {include: [
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

exports.createDrop = (data) => {
    console.log(JSON.stringify(data));

    return Drop.create({
        boss_id: data.boss_id,
        weapon_id: data.weapon_id,
        dropChance: data.dropChance,
        dateFrom: data.dateFrom,
        dateTo: data.dateTo,
        minSizeOfGroup: data.minSizeOfGroup,
        minDifficulty: data.minDifficulty,

    });
};

exports.updateDrop = (DropId, data) => {
    return Drop.update(data, {where: {_id: DropId }});
}

exports.deleteDrop = (DropId) => {
    return Drop.destroy({
        where: { _id: DropId }
    });
}

exports.deleteManyDrops = (DropIds) => {
    return Drop.find({ _id: { [Sequelize.Op.in]: DropIds }})
}