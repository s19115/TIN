const BossRepository = require('../repository/sequelize/BossRepository');
const UniversalController=require('../controllers/universalController')


exports.showBossList = (req, res, next) => {
    UniversalController.showList(BossRepository,req,res,next);
}
// exports.showBossList = (req, res, next) => {
//     res.render('pages/boss-list', {});
// }
exports.showBossForm = (req, res, next) => {
    res.render('pages/boss-form', {});
}
exports.showBossDetails = (req, res, next) => {
    req.params["dataId"]=req.params.bossId;
    UniversalController.showDetails(BossRepository,req,res,next);
}