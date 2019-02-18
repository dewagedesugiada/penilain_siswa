const { studyPeriod } = require('../db/connection');
const logger = require('../logger/winston');

exports.getAll = function getAll(callback) {
    studyPeriod.findAll()
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
    studyPeriod.create(data)
        .then((result) => {
            return callback(null, result);
        })
        .catch((error) => {
            logger.error(error);
            return callback(error);
        })
}

exports.update = function update(id, data, callback) {
    studyPeriod.update(data, {
        where: { weekId: data.weekId },
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
        where: { weekId: id }
    })
        .then((result) => {
            return callback(null, id);
        })
        .catch((error) => {
            logger.error(error);
            return callback(error);
        })
}
