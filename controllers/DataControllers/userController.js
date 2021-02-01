const UserRepository = require('../../repository/sequelize/UserRepository');
const UniversalController = require('./universalController');


exports.showUserList = (req, res, next) => {
    UniversalController.showList(UserRepository, req, res, next);
}
exports.showUserForm = (req, res, next) => {
    UniversalController.showForm(UserRepository, req, res, next);
}
exports.showUserDetails = (req, res, next) => {
    req.params["dataId"] = req.params.userId;
    UniversalController.showDetails(UserRepository, req, res, next);
}
exports.showUserEdit = (req, res, next) => {
    req.params["dataId"] = req.params.userId;
    UniversalController.showEdit(UserRepository, req, res, next);
}
exports.updateUser = (req, res, next) => {
    req.params["dataId"] = req.params.userId;
    let dataId = req.params.dataId;
    let data = {...req.body};
    UserRepository.updateData(dataId, data).then(result => {

        // noinspection EqualityComparisonWithCoercionJS
        if (req.session.loggedUser._id == req.params.userId)
            res.redirect('/logout');
        else res.redirect('/');
    }).catch(err => {
        UniversalController.showEdit(UserRepository, req, res, next, err.errors);
    })
}
exports.deleteUser = (req, res, next) => {
    req.params["dataId"] = req.params.userId;
    UserRepository.deleteData(req.params["dataId"]).then(result => {
        // noinspection EqualityComparisonWithCoercionJS
        if (req.session.loggedUser._id == req.params.userId)
            res.redirect('/logout');
        else res.redirect('/');
    })
}
exports.createUser = (req, res, next) => {
    UserRepository.createData(req.body).then(result => {
        res.redirect('/');
    }).catch(err => {
        this.showForm(UserRepository, req, res, next, err.errors);
    })
}