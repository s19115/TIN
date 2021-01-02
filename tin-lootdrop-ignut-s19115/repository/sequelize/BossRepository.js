const Boss = require("../../model/sequelize/Boss");
const Weapon = require("../../model/sequelize/Weapon");
const Drop = require("../../model/sequelize/Drop");

const fieldsToFilterOut = ["createdAt", "updatedAt"];
const fieldsToBeHide = ["_id"];

exports.getDataModel = () => {
    let output = {};
    let dataField = Boss.rawAttributes;
    for (let field of Object.keys(dataField)) {
        if (Object.prototype.hasOwnProperty.call(dataField, field)) {
            if (!fieldsToFilterOut.includes(field)) {
                let fullField = dataField[field];
                console.log(fullField["type"]);
                console.log(fullField);
                output[field] = {};
                output[field]["name"] = fullField["field"];
                output[field]["type"] = fullField["type"];
                output[field]["allowNull"] = fullField["allowNull"];
                output[field]["hidden"] = fieldsToBeHide.includes(field);

            }
        }
    }
    let associations = Boss.associations;
    console.log();
    output["associations"] = [];
    for (let assoc of Object.keys(associations)) {
        if (Object.prototype.hasOwnProperty.call(associations, assoc)) {
            let fullAssoc = associations[assoc];
            output["associations"][output["associations"].length] = fullAssoc["as"];
            output["associations"]["hidden"] = true;
        }
    }
    let xyz = Object.getOwnPropertyNames(output);
    let texs = output[xyz[0]];
    for (let column of Object.getOwnPropertyNames(output)) {
        if (!output[column]["hidden"]) {
            console.log(output[column]["name"]);
        }}
        return output;
    }
// exports.getColumns = () => {
//     let insideNames = ["createdAt", "updatedAt","_id"];
//     let insideProperties = ["autoIncrement", "primaryKey", "_modelAttribute"]
//     let raw = Boss.rawAttributes;
//     let objectRaw = JSON.parse(JSON.stringify(Boss.rawAttributes));
//     let output = Object.keys(objectRaw).filter(key => !insideNames.includes(key)).reduce((obj, key) => {
//         obj[key] = objectRaw[key];
//         return obj;
//     }, {});
//
//     for(let k in output){
//         let raw2=output[k];
//         output[k]=Object.keys(raw2)
//             .filter(key => !insideProperties.includes(key))
//             .reduce((obj, key) => {
//                 obj[key] = raw2[key];
//                 return obj;
//             }, {});
//         output[k]["type"]=raw[k]["type"];
//     }
//     let rawAssocs=Boss.associations;
//     // let assocs=JSON.parse(JSON.stringify(rawAssocs));
//     // for(let assoc in Boss.associations){
//     //     if(Object.prototype.hasOwnProperty.call(Boss.associations,assoc)){
//     //         output["associations"][i]=assoc
//     //     }
//     // }
//     return output;
// };
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