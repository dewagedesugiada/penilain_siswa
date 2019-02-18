const studyMaterialDao = require('../dao/studyMaterialDao');
const response = require('../response/res');
const logger = require('../logger/winston');

exports.List = function (req, res) {
    studyMaterialDao.getAll(function (err, result) {
        if (err) {
            logger.error('error while select' + err);
            response.err(err, res);
        } else {
            response.ok(result, res);
        }
    });
}

exports.getDataById = function (req, res) {
    studyMaterialDao.getById(req.params['id'], function (err, result) {
        if (err) {
            logger.error('error while select by id' + err);
            response.err(err, res);
        } else {
            response.ok(result, res);
        }
    });
}

exports.insertData = function (req, res) {
    studyMaterialDao.insert(req.body, function (err, result) {
        if (err) {
            logger.error('error while insert' + err);
            response.err(err, res);
        } else {
            response.ok(result, res);
        }
    });
}

exports.updateData = function (req, res) {
    const body = req.body;
    studyMaterialDao.getById(body.materialId, function (err, data) {
        if (err) {
            logger.error('error while select by id' + err);
            response.err(err, res);
        } else if (data == null) {
            response.datanotfound("data not found ", res);
        } else {
            studyMaterialDao.update(body.materialId, body, function (error, result) {
                if (err) {
                    logger.error('error while update' + err);
                    response.err(err, res);
                } else {
                    response.ok(result, res);
                }
            });
        }
    });
}

exports.deleteData = function (req, res) {
    studyMaterialDao.del(req.params['id'], function (err, result) {
        if (err) {
            logger.error('error while delete' + err);
            response.err(err, res);
        } else {
            response.ok("data with id " + result + " has been deleted successfully ", res);
        }
    })
}