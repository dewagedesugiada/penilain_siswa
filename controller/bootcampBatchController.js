const bootcampBatchDao = require('../dao/bootcampBacthDao');
const response = require('../response/res');
const logger = require('../logger/winston');

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
            response.err(err, res);
        } else {
            response.ok(result, res);
        }
    });
}

exports.insertData = function (req, res) {
    bootcampBatchDao.insert(req.body, function (err, result) {
        if (err) {
            logger.error("error while insert data " + err);
            response.err(err, res);
        } else {
            response.ok(result.affectedRows + " data inserted ", res);
        }
    });
}

exports.updateData = function (req, res) {
    const body = req.body;
    bootcampBatchDao.getById(body.batchId, function (err, data) {
        if (err) {
            logger.error("error while select by id" + err);
            response.err(err, res);
        } else if (data == null) {
            response.datanotfound('data not found', res);
        } else {
            bootcampBatchDao.update(body.batchId, body, function (error, result) {
                if (error) {
                    logger.error('update failed ' + error);
                    response.err(error, res);
                } else {

                    response.ok(result, res);
                }
            });
        }
    });
}

exports.deleteData = function (req, res) {
    bootcampBatchDao.del(req.params['id'], function (err, result) {
        if (err) {
            logger.error('delete failed ' + err);
            response.err(err, res);
        } else {
            response.ok("delete success...", res);
        }
    })
}