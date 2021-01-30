const DropRepository = require('../repository/sequelize/DropRepository');

exports.getDrops = (req, res, next) => {
    DropRepository.getData()
        .then(dropes => {
            res.status(200).json(dropes);
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getDropById = (req, res, next) => {
    const dropId = req.params.drop_id;
    DropRepository.getDataById(dropId)
        .then(drop=> {
            if(!drop) {
                res.status(404).json({
                    message: 'Drop with id: '+dropId+' not found'
                })
            } else {
                res.status(200).json(drop);
            }
        });
};

exports.createDrop = (req, res, next) => {
    DropRepository.createData(req.body)
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

exports.updateDrop = (req, res, next) => {
    const dropId = req.params.drop_id;
    DropRepository.updateData(dropId, req.body)
        .then(result => {
            res.status(200).json({message: 'Drop updated!', drop: result});
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });

};

exports.deleteDrop = (req, res, next) => {
    const dropId = req.params.drop_id;
    DropRepository.deleteData(dropId)
        .then(result => {
            res.status(200).json({message: 'Removed drop', drop: result});
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};