const trainerDao = require('../dao/trainerDao');
const response = require('../response/res');
const logger = require('../logger/winston');

exports.List = function (req, res) {
    trainerDao.getAll(function (err, result) {
        if (err) {
            logger.error('error while select' + err);
            response.err(err, res);
        } else {
            response.ok(result, res);
        }
    });
}

exports.getDataById = function (req, res) {
    trainerDao.getById(req.params['id'], function (err, result) {
        if (err) {
            logger.error('error while select by id' + err);
            response.err(err, res);
        } else {
            response.ok(result, res);
        }
    });
}

exports.insertData = function (req, res) {
    trainerDao.insert(req.body, function (err, result) {
        if (err) {
            logger.error('error while insert' + err);
            response.err(err, res);
        } else {
            console.log(result.affectedRows);
            response.ok(result, res);
        }
    });
}

exports.updateData = function (req, res) {
    const body = req.body;
    trainerDao.getById(body.trainerId, function (err, data) {
        if (err) {
            logger.error('error while select by id' + err);
            response.err(err, res);
        } else if (data == null) {
            response.datanotfound("data not found ", res);
        } else {
            trainerDao.update(body.trainerId, body, function (error, result) {
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
    trainerDao.del(req.params['id'], function (err, result) {
        if (err) {
            logger.error('error while delete' + err);
            response.err(err, res);
        } else {
            response.ok("data with id " + result + " has been deleted successfully ", res);
        }
    })
}