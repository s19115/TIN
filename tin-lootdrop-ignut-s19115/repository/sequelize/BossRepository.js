const Boss = require("../../model/sequelize/Boss");
const Weapon = require("../../model/sequelize/Weapon");
const Drop = require("../../model/sequelize/Drop");


exports.getColumnNames = () => {
    let insideNames = ["createdAt", "updatedAt"];
    let insideProperties = ["autoIncrement", "primaryKey", "_modelAttribute"]
    let raw = Boss.rawAttributes;
    let objectRaw = JSON.parse(JSON.stringify(Boss.rawAttributes));
    let output = Object.keys(objectRaw).filter(key => !insideNames.includes(key)).reduce((obj, key) => {
        obj[key] = objectRaw[key];
        return obj;
    }, {});

    for(let k in output){
        let raw2=output[k];
        output[k]=Object.keys(raw2)
            .filter(key => !insideProperties.includes(key))
            .reduce((obj, key) => {
                obj[key] = raw2[key];
                return obj;
            }, {});
        output[k]["type"]=raw[k]["type"];
    }
    return output;
};
exports.getBosses = () => {
    return Boss.findAll();
};

exports.getBossById = (bossId) => {
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

exports.createBoss = (newBossData) => {
    return Boss.create({
        name: newBossData.name,
        location: newBossData.location,
        hp: newBossData.hp
    });
};

exports.updateBoss = (bossId, bossData) => {
    const name = bossData.name;
    const location = bossData.location;
    const hp = bossData.hp;
    return Boss.update(bossData, {where: {_id: Number(bossId)}});
};

exports.deleteBoss = (bossId) => {
    return Boss.destroy({
        where: {_id: bossId}
    });

}