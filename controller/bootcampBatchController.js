const bootcampBatchDao = require('../dao/bootcampBacthDao');
const response = require('../response/res');
const logger = require('../looger/winston');

exports.List = function (req, res) {
    bootcampBatchDao.getAll(function (err, result) {
        if (err) {
            logger.error("error while select " + err);
            response.err(err, res);
        } else {
            response.ok(result, res);
        }
    });
}