const fieldsToFilterOut = ["createdAt", "updatedAt"];
const Drop = require('../../model/sequelize/Drop');
const Boss = require('../../model/sequelize/Boss');
const Weapon = require('../../model/sequelize/Weapon');
const repoMap={Boss: Boss, Drops: Drop, Weapon: Weapon};

exports.getDataModel = async (Repository, fieldsToHide, fieldsToJoinOn, fieldToShowOnJoin) => {
    let output = {};
    let dataField = Repository.rawAttributes;
    for (let field of Object.keys(dataField)) {
        if (Object.prototype.hasOwnProperty.call(dataField, field)) {
            if (!fieldsToFilterOut.includes(field)) {
                let fullField = dataField[field];
                output[field] = {};
                output[field]["name"] = fullField["field"];
                output[field]["type"] = fullField["type"];
                output[field]["allowNull"] = fullField["allowNull"];
                if (typeof fieldsToHide !== 'undefined')
                    output[field]["hidden"] = fieldsToHide.includes(field);
                if (typeof fieldsToJoinOn !== 'undefined')
                    output[field]["joinedOn"] = fieldsToJoinOn.includes(field);

            }
        }
    }
    let associations = Repository.associations;
    output["associations"] = [];
    for (let assoc of Object.keys(associations)) {
        if (Object.prototype.hasOwnProperty.call(associations, assoc)) {
            let fullAssoc = associations[assoc];
            output["associations"][output["associations"].length] = fullAssoc["as"];
            output["associations"]["joinOn"] = fieldsToJoinOn;
            output["associations"]["hidden"] = true;
            let namesArray = [];
            let data = await repoMap[assoc].findAll();
            data.forEach(entry => {
                try {
                    let pair={};
                    pair["_id"]=entry.dataValues._id;
                    pair[fieldToShowOnJoin]=entry.dataValues[fieldToShowOnJoin];
                    namesArray.push(pair);
                } catch (e) {

                }
            });
            output.associations[assoc] = namesArray;
        }
    }
    if(output.associations.length===0) delete output["associations"];
    return output;

}

exports.getData = (Repository) => {
    return Repository.findAll();
};

exports.getDataName = (dataRepository) => {
    return dataRepository.name;
}

exports.getDataById = (dataRepository, dataId) => {
    return null;
}
exports.createData = (dataRepository, dataId, data) => {
    return dataRepository.update(data, {where: {_id: Number(dataId)}});
}
exports.deleteData = (dataRepository, dataId) => {
    return dataRepository.destroy({where: {_id: dataId}});
}