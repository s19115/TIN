const WeaponRepository = require('../repository/sequelize/WeaponRepository');
const UniversalController=require('../controllers/universalController')


exports.showWeaponList = (req, res, next) => {
    UniversalController.showList(WeaponRepository,req,res,next);
}
exports.showWeaponForm = (req, res, next) => {
    UniversalController.showForm(WeaponRepository,req,res,next);
}
exports.showWeaponDetails = (req, res, next) => {
    req.params["dataId"]=req.params.weaponId;
    UniversalController.showDetails(WeaponRepository,req,res,next);
}
exports.showWeaponEdit=(req,res,next)=>{
    req.params["dataId"]=req.params.weaponId;
    UniversalController.showEdit(WeaponRepository,req,res,next);
}
exports.updateWeapon=(req,res,next)=>{
    req.params["dataId"]=req.params.weaponId;
    UniversalController.updateData(WeaponRepository,req,res,next);
}
exports.deleteWeapon=(req,res,next)=>{
    req.params["dataId"]=req.params.weaponId;
    UniversalController.deleteData(WeaponRepository,req,res,next);
}
exports.createWeapon=(req,res,next)=>{
    UniversalController.createData(WeaponRepository,req,res,next);
}
