const WeaponRepository = require('../repository/sequelize/WeaponRepository');

exports.getWeapons = (req, res, next) => {
    WeaponRepository.getData()
        .then(weapons => {
            res.status(200).json(weapons);
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getWeaponById = (req, res, next) => {
    const weaponId = req.params.weapon_id;
    WeaponRepository.getDataById(weaponId)
        .then(weapon=> {
            if(!weapon) {
                res.status(404).json({
                    message: 'Weapon with id: '+weaponId+' not found'
                })
            } else {
                res.status(200).json(weapon);
            }
        });
};

exports.createWeapon = (req, res, next) => {
    WeaponRepository.createData(req.body)
        .then(newObj => {
            res.status(201).json(newObj);
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};

exports.updateWeapon = (req, res, next) => {
    const weaponId = req.params.weapon_id;
    WeaponRepository.updateData(weaponId, req.body)
        .then(result => {
            res.status(200).json({message: 'Weapon updated!', weapon: result});
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });

};

exports.deleteWeapon = (req, res, next) => {
    const weaponId = req.params.weapon_id;
    WeaponRepository.deleteData(weaponId)
        .then(result => {
            res.status(200).json({message: 'Removed weapon', weapon: result});
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};