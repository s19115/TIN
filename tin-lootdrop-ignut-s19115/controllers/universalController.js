exports.showList = (dataRepository, req, res, next) => {
    dataRepository.getDataModel();
    dataRepository.getData().then(data => {
        res.render('list', {
            dataName: dataRepository.getDataName(),
            data: data,
            dataModel: dataRepository.getDataModel()
        })
    })
}
exports.showDetails = (dataRepository, req, res, next) => {
    const dataId = req.params.dataId;
    dataRepository.getDataById(dataId).then(data => {
        res.render('details', {
            dataName: dataRepository.getDataName(),
            data: data,
            dataModel: dataRepository.getDataModel()

        })
    })
}


