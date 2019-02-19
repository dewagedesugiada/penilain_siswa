const { bootcampPeriod, bootcampBatch, studyPeriod } = require("../db/connection");
const logger = require("../logger/winston");

exports.getAll = function getAll(whereClause, callback) {
    studyPeriod.findAll({
        where: whereClause,
        include: bootcampBatch
    })
        .then((results) => {
            return callback(null, results);
        })
        .catch((error) => {
            logger.error(error);
            return callback(error);
        })
}

exports.getById = function getById(id, callback) {
    studyPeriod.findById(id)
        .then((result) => {
            return callback(null, result);
        })
        .catch((error) => {
            logger.error(error);
            return callback(error);
        })
}

exports.insert = function insert(data, callback) {
    let traine = data;
    if (traine.bootcamp_batch == null && traine.batchId == null) {
        res.json('customer null');
    } else {
        if (traine.batchId == null) {
            traine.batchId = traine.bootcamp_batch.batchId;
        }
    }

    if (traine.bootcamp_batch == null && traine.weekId == null) {
        res.json('customer null');
    } else {
        if (traine.weekId == null) {
            traine.weekId = traine.bootcamp_batch.weekId;
        }
    }

    studyPeriod.create(traine)
        .then((traine) => {
            return callback(null, traine);
        })
        .catch((error) => {
            logger.error(error);
            return callback(error);
        })
}

exports.update = function update(id, data, callback) {
    studyPeriod.update(data, {
        where: { studyPeriodId: data.studyPeriodId },
        returning: true,
        plain: true
    })
        .then((result) => {
            logger.info(result);
            return callback(null, data);
        })
        .catch((error) => {
            logger.error(error);
            return callback(error);
        })
}

exports.del = function del(id, callback) {
    studyPeriod.destroy({
        where: { studyPeriodId: id }
    })
        .then((result) => {
            return callback(null, id);
        })
        .catch((error) => {
            logger.error(error);
            return callback(error);
        })
}