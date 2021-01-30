const DropRepository =require('../../repository/sequelize/DropRepository');
const UniversalController=require('./universalController');

exports.showDropList = (req, res, next) => {
    UniversalController.showList(DropRepository,req,res,next);
}
exports.showDropForm = (req, res, next) => {
    UniversalController.showForm(DropRepository,req,res,next);
}
exports.showDropDetails = (req, res, next) => {
    req.params["dataId"]=req.params.dropId;
    UniversalController.showDetails(DropRepository,req,res,next);
}
exports.showDropEdit=(req,res,next)=>{
    req.params["dataId"]=req.params.dropId;
    UniversalController.showEdit(DropRepository,req,res,next);
}
exports.updateDrop=(req,res,next)=>{
    req.params["dataId"]=req.params.dropId;
    UniversalController.updateData(DropRepository,req,res,next);
}
exports.deleteDrop=(req,res,next)=>{
    req.params["dataId"]=req.params.dropId;
    UniversalController.deleteData(DropRepository,req,res,next);
}
exports.createDrop=(req,res,next)=>{
    UniversalController.createData(DropRepository,req,res,next);
}