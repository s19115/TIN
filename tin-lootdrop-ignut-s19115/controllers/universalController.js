exports.showList = (dataRepository, req, res, next) => {
    let dataModel;
    dataRepository.getDataModel().then(dataM => {
        dataModel = dataM;
        return dataRepository.getData();
    })
        .then(data => {
            res.render('list', {
                dataName: dataRepository.getDataName(),
                data: data,
                dataModel: dataModel
            })
        })
}
exports.showDetails = (dataRepository, req, res, next) => {
    const dataId = req.params.dataId;
    let dataModel;
    dataRepository.getDataModel().then(dataM => {
        dataModel = dataM;
        return dataRepository.getDataById(dataId);
    }).then(data => {
        res.render('details', {
            dataName: dataRepository.getDataName(),
            data: data,
            dataModel: dataModel

        })
    })
}
exports.showEdit = (dataRepository, req, res, next, errors) => {
    const dataId = req.params.dataId;
    let dataModel;
    if (errors === undefined)
        errors = [];
    dataRepository.getDataModel().then(dataM => {
        dataModel = dataM;
        return dataRepository.getDataById(dataId);
    }).then(data => {
        res.render('edit', {
            dataName: dataRepository.getDataName(),
            data: data,
            dataModel: dataModel,
            validationErrors: errors
        })
    })
}
exports.showForm = (dataRepository, req, res, next, errors) => {
    let dataModel;
    if (errors === undefined)
        errors = [];
    dataRepository.getDataModel().then(dataM => {
        dataModel = dataM;
        res.render('form', {
            dataName: dataRepository.getDataName(),
            dataModel: dataModel,
            validationErrors: errors
        })
    })

}
exports.updateData = (dataRepository, req, res, next) => {
    let dataId = req.params.dataId;
    let data = {...req.body};
    dataRepository.updateData(dataId, data).then(result => {

        res.redirect('/' + dataRepository.getDataName() + '/details/' + dataId);
    }).catch(err => {
        this.showEdit(dataRepository, req, res, next, err.errors);
    })
}
exports.createData = (dataRepository, req, res, next) => {
    dataRepository.createData(req.body).then(result => {
        res.redirect('/' + dataRepository.getDataName());
    }).catch(err => {
        this.showForm(dataRepository, req, res, next, err.errors);
    })
}
exports.deleteData = (dataRepository, req, res, next) => {
    dataRepository.deleteData(req.params["dataId"]).then(result => {
        res.redirect('/' + dataRepository.getDataName());
    })
}

