const BossRepository = require('../repository/sequelize/BossRepository');


exports.showBossList = (req, res, next) => {

    let columnNames=BossRepository.getColumnNames();
    BossRepository.getBosses().then(bosses => {
        res.render('list', {
            bosses: bosses,
            navLocation: 'boss',
            columnNames: columnNames,
            url: 'boss'
        })
    })
}
// exports.showBossList = (req, res, next) => {
//     res.render('pages/boss-list', {});
// }
exports.showBossForm = (req, res, next) => {
    res.render('pages/boss-form', {});
}
exports.showBossDetails = (req, res, next) => {
    res.render('pages/boss-details', {});
}