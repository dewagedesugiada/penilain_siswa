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

exports.getDataById = function (req, res) {
    bootcampBatchDao.getById(req.params['id'], function (err, result) {
        if (err) {
            logger.error("error while select by id " + err);
            response.error(err, res);
        } else {
            response.ok(result, res);
        }
    })
}

exports.insertData = function (req, res) {
    bootcampBatchDao.insert(req.body, function (err, result) {
        if (err) {
            logger.error("error while insert data " + err);
            response.error(err, res);
        } else {
            response.ok(result.affectedRows + " data inserted ", res);
        }
    })
}