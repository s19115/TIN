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
    const previousData=req.body;
    let dataModel;
    if (errors === undefined)
        errors = [];
    dataRepository.getDataModel().then(dataM => {
        dataModel = dataM;
        return dataRepository.getDataById(dataId);
    }).then(data => {
        for(let dataEntry in previousData){
            if(Object.prototype.hasOwnProperty.call(previousData,dataEntry))
                data[dataEntry]=previousData[dataEntry];
        }
        res.render('edit', {
            dataName: dataRepository.getDataName(),
            data: data,
            dataModel: dataModel,
            validationErrors: errors,
        })
    })
}
exports.showForm = (dataRepository, req, res, next, errors) => {
    let previousData=req.body;
    if (errors === undefined)
        errors = [];
    dataRepository.getDataModel().then(dataModel => {
        res.render('form', {
            dataName: dataRepository.getDataName(),
            dataModel: dataModel,
            validationErrors: errors,
            previousData: previousData
        })
    })

}
exports.updateData = (dataRepository, req, res, next) => {
    let dataId = req.params.dataId;
    let data = {...req.body};
    dataRepository.updateData(dataId, data).then(result => {

        res.redirect('/' + dataRepository.getDataName());
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

