const BossRepository = require('../repository/sequelize/BossRepository');
const UniversalController=require('../controllers/universalController');


exports.showBossList = (req, res, next) => {
    UniversalController.showList(BossRepository,req,res,next);
}
exports.showBossForm = (req, res, next) => {
    UniversalController.showForm(BossRepository,req,res,next);
}
exports.showBossDetails = (req, res, next) => {
    req.params["dataId"]=req.params.bossId;
    UniversalController.showDetails(BossRepository,req,res,next);
}
exports.showBossEdit=(req,res,next)=>{
    req.params["dataId"]=req.params.bossId;
    UniversalController.showEdit(BossRepository,req,res,next);
}
exports.updateBoss=(req,res,next)=>{
    req.params["dataId"]=req.params.bossId;
    UniversalController.updateData(BossRepository,req,res,next);
}
exports.deleteBoss=(req,res,next)=>{
    req.params["dataId"]=req.params.bossId;
    UniversalController.deleteData(BossRepository,req,res,next);
}
exports.createBoss=(req,res,next)=>{
    UniversalController.createData(BossRepository,req,res,next);
}