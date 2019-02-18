const studyPeriodDao = require('../dao/studyPeriodDao');
const response = require('../response/res');
const logger = require('../logger/winston');

exports.List = function (req, res) {
    studyPeriodDao.getAll(function (err, result) {
        if (err) {
            logger.error('error while select' + err);
            response.err(err, res);
        } else {
            response.ok(result.res);
        }
    })
}

exports.getDataById = function (req, res) {
    studyPeriodDao.getById(req.params['id'], function (err, result) {
        if (err) {
            logger.error('error while select by id' + err);
            response.err(err, res);
        } else {
            response.ok(result.res);
        }
    })
}