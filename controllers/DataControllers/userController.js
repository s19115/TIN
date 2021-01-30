const UserRepository = require('../../repository/sequelize/UserRepository');
const UniversalController=require('./universalController');


exports.showUserList = (req, res, next) => {
    UniversalController.showList(UserRepository,req,res,next);
}
exports.showUserForm = (req, res, next) => {
    UniversalController.showForm(UserRepository,req,res,next);
}
exports.showUserDetails = (req, res, next) => {
    req.params["dataId"]=req.params.UserId;
    UniversalController.showDetails(UserRepository,req,res,next);
}
exports.showUserEdit=(req,res,next)=>{
    req.params["dataId"]=req.params.UserId;
    UniversalController.showEdit(UserRepository,req,res,next);
}
exports.updateUser=(req,res,next)=>{
    req.params["dataId"]=req.params.UserId;
    UniversalController.updateData(UserRepository,req,res,next);
}
exports.deleteUser=(req,res,next)=>{
    req.params["dataId"]=req.params.UserId;
    UniversalController.deleteData(UserRepository,req,res,next);
}
exports.createUser=(req,res,next)=>{
    UniversalController.createData(UserRepository,req,res,next);
}