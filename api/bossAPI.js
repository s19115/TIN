const BossRepository = require('../repository/sequelize/BossRepository');

exports.getBosses = (req, res, next) => {
    BossRepository.getData()
        .then(bosses => {
            res.status(200).json(bosses);
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getBossById = (req, res, next) => {
    const bossId = req.params.boss_id;
    BossRepository.getDataById(bossId)
        .then(boss=> {
            if(!boss) {
                res.status(404).json({
                    message: 'Boss with id: '+bossId+' not found'
                })
            } else {
                res.status(200).json(boss);
            }
        });
};

exports.createBoss = (req, res, next) => {
    BossRepository.createData(req.body)
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

exports.updateBoss = (req, res, next) => {
    const bossId = req.params.boss_id;
    BossRepository.updateData(bossId, req.body)
        .then(result => {
            res.status(200).json({message: 'Boss updated!', boss: result});
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });

};

exports.deleteBoss = (req, res, next) => {
    const bossId = req.params.boss_id;
    BossRepository.deleteData(bossId)
        .then(result => {
            res.status(200).json({message: 'Removed boss', boss: result});
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};