const bcrypt = require('bcryptjs');
const createError = require('http-errors');
const salt = bcrypt.genSaltSync(8);

exports.hashPassword = (passPlain) => {
    const passHashed = bcrypt.hashSync(passPlain, salt);
    return passHashed;
}

exports.comparePasswords = (passPlain, passHash) => {
    const res = bcrypt.compareSync(passPlain, passHash);
    return res;
}

exports.permitLoggedUser = (req, res, next) => {
    const loggedUser = req.session.loggedUser;
    if (loggedUser) {
        next();
    } else {
        next(createError(403));
    }
}

exports.permitPrivilegedUser = (req, res, next) => {
    const loggedUser = req.session.loggedUser;
    if (!loggedUser) next(createError(403));
    else if (loggedUser.privileges) {
        next();
    } else {
        next(createError(403));
    }
}
exports.permitOwnerUser = (req, res, next) => {
    const userId = req.params["userId"];
    const loggedUser = req.session.loggedUser;
    if (loggedUser) {
        // noinspection EqualityComparisonWithCoercionJS
        if (userId == loggedUser._id || loggedUser.privileges) next();
        else next(createError(403));
    } else
        next(createError(403));
}

