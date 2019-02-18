const { bootcampBatch } = require('../db/connection');
const logger = require('../logger/winston');

exports.getById = function getById(id, callback) {
    bootcampBatch.findById(id)
        .then((result) => {
            return callback(null, result);
        })
        .catch((error) => {
            logger.error(error);
            return callback(error);
        });
}

exports.getAll = function getAll(callback) {
    bootcampBatch.findAll()
        .then((results) => {
            return callback(null, results);
        })
        .catch((error) => {
            logger.error(error);
            return callback(error);
        })
}

exports.insert = function insert(data, callback) {
    bootcampBatch.create(data)
        .then((result) => {
            return callback(null, result);
        })
        .catch((error) => {
            logger.error(error);
            return callback(error);
        })
}

exports.update = function update(id, data, callback) {
    bootcampBatch.update(data, {
        where: { batchId: data.batchId },
        returning: true,
        plain: true
    })
        .then((result) => {
            logger.info('update succes : ');
            logger.info(result);
            return callback(null, data);
        })
        .catch((error) => {
            logger.error(error);
            return callback(error);
        })
}

exports.del = function del(id, callback) {
    bootcampBatch.destroy({
        where: { batchId: id }
    })
        .then((result) => {
            logger.info('delete success  :');
            logger.info(result);
            return callback(null, id);
        })
        .catch((error) => {
            logger.error(error);
            return callback(error);
        })
}