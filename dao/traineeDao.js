const { trainee } = require("../db/connection");
const logger = require("../logger/winston");

exports.getAll = function getAll(callback) {
    trainee.findAll()
        .then((results) => {
            return callback(null, results);
        })
        .catch((error) => {
            logger.error(error);
            return callback(error);
        })
}

exports.getById = function getById(id, callback) {
    trainee.findById(id)
        .then((result) => {
            return callback(null, result);
        })
        .catch((error) => {
            logger.error(error);
            return callback(error);
        })
}

exports.insert = function insert(data, callback) {
    trainee.create(data)
        .then((result) => {
            return callback(null, result);
        })
        .catch((error) => {
            logger.error(error);
            return callback(error);
        })
}

exports.update = function update(id, data, callback) {
    trainee.update(data, {
        where: { traineeId: data.traineeId },
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
    trainee.destroy({
        where: { traineeId: id }
    })
        .then((result) => {
            return callback(null, id);
        })
        .catch((error) => {
            logger.error(error);
            return callback(error);
        })
}