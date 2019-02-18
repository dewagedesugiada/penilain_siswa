const bootcampBatch = require('../db/connection');
const logger = require('../looger/winston');

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